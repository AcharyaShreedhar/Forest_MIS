import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanpaidawarOsarpasar,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import {
  banpaidawarosarpasarHeadings,
  districtList,
} from "../../../services/config";

class Osarpasar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "osarpasarlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "osarpasar",
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
    var banpaidawarosarpasarList = [];
    if (nextProps !== prevState) {
      banpaidawarosarpasarList = nextProps.banpaidawarDataList.data;
    }
    return { banpaidawarosarpasarList, loc };
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
    const { distId, officeId, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: 0, 
  });
    this.fetchResults(e, toDate, distId, officeId, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, perPage } = this.state;
    this.setState({ 
      toDate: e,
      page: 0, 
  });
    this.fetchResults(fromDate, e, distId, officeId, perPage);
  }
  handleDistrict(e) {
    const { fromDate, officeId, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: 0, 
  });
    this.fetchResults(fromDate, toDate, e, officeId, perPage);
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallBanpaidawarosarpasar({
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
          pathname: `/banpaidawar/osarpasaredit/${item.paidawar_id}`,
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

    this.props.deleteBanpaidawarosarpasar(item.paidawar_id);
    this.setState({ 
      showDialog: !this.state.showDialog, 
      page: 0,
      perPage: 10,
     });
  }

  handleAdd() {
    this.props.history.push("/banpaidawar/osarpasaradd/new");
  }

  render() {
    const { banpaidawarosarpasarList, loc, perPage, showDialog } = this.state;
    const { user, role, officeRole } = this.props;
    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वनपैदावार ओसारपसार सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "osarpasarlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banpaidawar"
                title="आर्थिक वर्ष"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banpaidawar" />
            </div>
            <BanpaidawarOsarpasar.List
              buttonName="+ वनपैदावार ओसारपसार"
              title="वनपैदावार ओसारपसार सम्बन्धि विवरण"
              pageCount={
                !isNil(banpaidawarosarpasarList)
                  ? Math.ceil(banpaidawarosarpasarList.total / perPage)
                  : 10
              }
              data={
                !isNil(banpaidawarosarpasarList)
                  ? banpaidawarosarpasarList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={banpaidawarosarpasarHeadings}
              onAdd={() => this.handleAdd("banpaidawarosarpasar")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page} 
            />
     
          </Fragment>
        )}
        {equals(loc, "osarpasaradd") && (
          <BanpaidawarOsarpasar.Add
            title="+ वनपैदावार ओसारपसार"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanpaidawarosarpasar(e)}
          />
        )}
        {equals(loc, "osarpasaredit") && (
          <BanpaidawarOsarpasar.Edit
            title="वनपैदावार ओसारपसार सम्बन्धी विवरण शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanpaidawarosarpasar(e, id)}
          />
        )}
      </div>
    );
  }
}

Osarpasar.propsTypes = {
  banpaidawarDataList: PropTypes.any,
};

Osarpasar.defaultProps = {
  banpaidawarDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeRole: state.app.user.office_type,
  banpaidawarDataList: state.banpaidawar.allbanpaidawarData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanpaidawarosarpasar: (payload) =>
    dispatch(BanpaidawarActions.fetchallbanpaidawarRequest(payload)),
  addBanpaidawarosarpasar: (payload) =>
    dispatch(BanpaidawarActions.addbanpaidawarRequest(payload)),

  updateBanpaidawarosarpasar: (payload, paidawarId) =>
    dispatch(BanpaidawarActions.updatebanpaidawarRequest(payload, paidawarId)),

  deleteBanpaidawarosarpasar: (paidawarId) =>
    dispatch(BanpaidawarActions.deletebanpaidawarRequest(paidawarId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Osarpasar);
