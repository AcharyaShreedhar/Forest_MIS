import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanpaidawarBikribitaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import {
  banpaidawarbikribitaranHeadings,
  districtList,
} from "../../../services/config";

class Bikribitaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "bikribitaranlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "bikribitaran",
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
    var banpaidawarbikribitaranList = [];
    if (nextProps !== prevState) {
      banpaidawarbikribitaranList =
        nextProps.banpaidawarbikribitaranDataList.data;
    }
    return { banpaidawarbikribitaranList, loc };
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
    this.fetchResults(e, toDate, distId, officeId, 0, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, perPage } = this.state;
    this.setState({ 
      toDate: e,
      page: 0, 
    });
    this.fetchResults(fromDate, e, distId, officeId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, officeId, perPage, toDate } = this.state;
    this.setState({ 
      distId: e, 
      page: 0,
    });
    this.fetchResults(fromDate, toDate, e, officeId, 0, perPage);
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallBanpaidawarbikribitaran({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "bikri_miti",
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
          pathname: `/banpaidawar/bikribitaranedit/${item.bikribitaran_id}`,
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

    this.props.deleteBanpaidawarbikribitaran(item.bikribitaran_id);
    this.setState({ 
      showDialog: !this.state.showDialog, 
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/banpaidawar/bikribitaranadd/new");
  }

  render() {
    const { banpaidawarbikribitaranList, loc, perPage, showDialog } =
      this.state;
    const { user, role } = this.props;
    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ वनपैदावार बिक्रिवितरण सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "bikribitaranlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banpaidawar"
                title="बिक्रि मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banpaidawarbikribitaran" />
            </div>
            <BanpaidawarBikribitaran.List
              buttonName="+ वनपैदावार बिक्रिवितरण"
              title="वनपैदावार बिक्रिवितरण सम्बन्धि विवरण"
              pageCount={
                !isNil(banpaidawarbikribitaranList)
                  ? Math.ceil(banpaidawarbikribitaranList.total / perPage)
                  : 10
              }
              data={
                !isNil(banpaidawarbikribitaranList)
                  ? banpaidawarbikribitaranList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={banpaidawarbikribitaranHeadings}
              onAdd={() => this.handleAdd("banpaidawarbikribitaran")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page} 
            />
     
          </Fragment>
        )}
        {equals(loc, "bikribitaranadd") && (
          <BanpaidawarBikribitaran.Add
            title="+ वनपैदावार बिक्रिवितरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanpaidawarbikribitaran(e)}
          />
        )}
        {equals(loc, "bikribitaranedit") && (
          <BanpaidawarBikribitaran.Edit
            title="वनपैदावार बिक्रिवितरण सम्बन्धी विवरण शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) =>
              this.props.updateBanpaidawarbikribitaran(e, id)
            }
          />
        )}
      </div>
    );
  }
}

Bikribitaran.propsTypes = {
  banpaidawarbikribitaranDataList: PropTypes.any,
};

Bikribitaran.defaultProps = {
  banpaidawarbikribitaranDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  banpaidawarbikribitaranDataList:
    state.banpaidawar.allbanpaidawarbikribitaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanpaidawarbikribitaran: (payload) =>
    dispatch(
      BanpaidawarActions.fetchallbanpaidawarbikribitaranRequest(payload)
    ),
  addBanpaidawarbikribitaran: (payload) =>
    dispatch(BanpaidawarActions.addbanpaidawarbikribitaranRequest(payload)),

  updateBanpaidawarbikribitaran: (payload, bikribitaranId) =>
    dispatch(
      BanpaidawarActions.updatebanpaidawarbikribitaranRequest(
        payload,
        bikribitaranId
      )
    ),

  deleteBanpaidawarbikribitaran: (bikribitaranId) =>
    dispatch(
      BanpaidawarActions.deletebanpaidawarbikribitaranRequest(bikribitaranId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bikribitaran);
