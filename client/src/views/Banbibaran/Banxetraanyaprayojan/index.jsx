import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanxetraanyaprayojanBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BanbibaranActions from "../../../actions/banbibaran";
import {
  banxetraanyaprayojanHeadings,
  districtList,
} from "../../../services/config";

class Banxetraanyaprayojan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "banxetraanyaprayojanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "banxetraanyaprayojan",
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePerCallback= this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var banxetraanyaprayojanList = [];
    if (nextProps !== prevState) {
      banxetraanyaprayojanList = nextProps.banxetraanyaprayojanDataList.data;
    }

    return {
      loc,
      banxetraanyaprayojanList,
    };
  }
  handlePer(e){
    this.setState({ page: 0 }, ()=> this.handlePerCallback(e));
  }
  handlePerCallback(e) {
    const { fromDate, toDate, distId, officeId, page } = this.state;
    this.setState({ 
      perPage: e,
     });
    this.fetchResults(fromDate, toDate, distId, officeId, page, e);
  }
  handleFromDate(e) {
    const { distId, officeId, page, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e, 
      page: page-page,
    });
    this.fetchResults(e, toDate, distId, officeId, page, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, page, perPage } = this.state;
    this.setState({ 
      toDate: e, 
      page: page-page,
    });
    this.fetchResults(fromDate, e, distId, officeId, page, perPage);
  }
  handleDistrict(e) {
    const { fromDate, officeId, page, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: page-page, 
    });
    this.fetchResults(fromDate, toDate, e, officeId, page, perPage);
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallBanxetraanyaprayojan({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "arthik_barsa",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { fromDate, toDate, distId, officeId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(
      fromDate,
      toDate,
      distId,
      officeId,
      data.selected * perPage,
      perPage
    );
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item });
    this.setState({ path: path });
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/banbibaran/banxetraanyaprayojanedit/${item.banxetra_anyaprayojan_id}`,
          item,
        });
        break;
      }

      case "delete": {
        this.setState({ showDialog: !this.state.showDialog });
        break;
      }
      default:
        break;
    }
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDelete() {
    const { item, page } = this.state;

    this.props.deleteBanxetraanyaprayojan(item.banxetra_anyaprayojan_id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: page-page, 
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/banbibaran/banxetraanyaprayojanadd/new");
  }
  render() {
    const { loc, perPage, banxetraanyaprayojanList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "banxetraanyaprayojanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banxetraanyaprayojan"
                title="आर्थिक वर्ष"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banxetraanyaprayojan" />
            </div>
            <BanxetraanyaprayojanBibaran.List
              buttonName="+ बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि"
              title="बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि विवरण"
              pageCount={
                !isNil(banxetraanyaprayojanList)
                  ? Math.ceil(banxetraanyaprayojanList.total / perPage)
                  : 10
              }
              data={
                !isNil(banxetraanyaprayojanList)
                  ? banxetraanyaprayojanList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={banxetraanyaprayojanHeadings}
              onAdd={() => this.handleAdd("bbanxetraanyaprayojanan")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page} 
            />
     
          </Fragment>
        )}
        {equals(loc, "banxetraanyaprayojanadd") && (
          <BanxetraanyaprayojanBibaran.Add
            title="+ वनक्षेत्र अन्य प्रयोजन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanxetraanyaprayojan(e)}
          />
        )}
        {equals(loc, "banxetraanyaprayojanedit") && (
          <BanxetraanyaprayojanBibaran.Edit
            title="वनक्षेत्र अन्य प्रयोजन सम्बन्धी विवरण शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanxetraanyaprayojan(e, id)}
          />
        )}
      </div>
    );
  }
}

Banxetraanyaprayojan.propTypes = {
  banxetraanyaprayojanDataList: PropTypes.any,
};

Banxetraanyaprayojan.defaultProps = {
  banxetraanyaprayojanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  banxetraanyaprayojanDataList: state.banbibaran.allbanxetraanyaprayojanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanxetraanyaprayojan: (payload) =>
    dispatch(BanbibaranActions.fetchallbanxetraanyaprayojanRequest(payload)),

  addBanxetraanyaprayojan: (payload) =>
    dispatch(BanbibaranActions.addbanxetraanyaprayojanRequest(payload)),

  updateBanxetraanyaprayojan: (payload, banxetraanyaprayojanId) =>
    dispatch(
      BanbibaranActions.updatebanxetraanyaprayojanRequest(
        payload,
        banxetraanyaprayojanId
      )
    ),

  deleteBanxetraanyaprayojan: (banxetraanyaprayojanId) =>
    dispatch(
      BanbibaranActions.deletebanxetraanyaprayojanRequest(
        banxetraanyaprayojanId
      )
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banxetraanyaprayojan);
