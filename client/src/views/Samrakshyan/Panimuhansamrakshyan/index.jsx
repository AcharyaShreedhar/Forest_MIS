import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  PanimuhanSamrakshyan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SamrakshyanActions from "../../../actions/samrakshyan";
import AppActions from "../../../actions/app";
import {
  panimuhansamrakshyanHeadings,
  districtList,
} from "../../../services/config";

class Panimuhansamrakshyan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "panimuhansamrakshyanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "panimuhansamrakshyan",
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleOffice = this.handleOffice.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePerCallback = this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var panimuhansamrakshyanList = [];
    var officeList = [];

    if (nextProps !== prevState) {
      panimuhansamrakshyanList = nextProps.panimuhansamrakshyanDataList.data;
      officeList = nextProps.officeDataList.data;
    }

    return {
      loc,
      officeList,
      panimuhansamrakshyanList,
    };
  }
  handlePer(e) {
    this.setState({ page: 0 }, () => this.handlePerCallback(e));
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
    const { distId, officeId, perPage, fromDate } = this.state;
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
      officeId: "%", // office reset
      page: 0,
    });
    this.fetchResults(fromDate, toDate, e, "%", 0, perPage);

    //O-DDL
    this.fetchOffice(e);
  }
  handleOffice(e) {
    const { fromDate, perPage, toDate, distId } = this.state;
    this.setState({
      officeId: e,
      page: 0,
    });
    this.fetchResults(fromDate, toDate, distId, e, 0, perPage);
  }

  // O-DDL
  fetchOffice(distId) {
    this.props.fetchOfficedropdown({
      distId,
      // name: "value", //"office_name"
    });
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallPanimuhansamrakshyan({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "karyakram_miti",
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
          pathname: `/samrakshyan/panimuhansamrakshyanedit/${item.panimuhansamrakshyan_id}`,
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

    this.props.deletePanimuhansamrakshyan(item.panimuhansamrakshyan_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/samrakshyan/panimuhansamrakshyanadd/new");
  }

  render() {
    const { loc, perPage, panimuhansamrakshyanList, officeList, showDialog } =
      this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ पानीमुहान संरक्षण सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "panimuhansamrakshyanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="panimuhansamrakshyan"
                title="कार्यक्रम मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={true}
              />
              <ReportGenerator id="panimuhansamrakshyan" />
            </div>
            <PanimuhanSamrakshyan.List
              buttonName="+ पानीमुहान संरक्षण"
              title="पानीमुहान संरक्षण सम्बन्धि विवरण"
              pageCount={
                !isNil(panimuhansamrakshyanList)
                  ? Math.ceil(panimuhansamrakshyanList.total / perPage)
                  : 10
              }
              data={
                !isNil(panimuhansamrakshyanList)
                  ? panimuhansamrakshyanList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={panimuhansamrakshyanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("panimuhansamrakshyan")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "panimuhansamrakshyanadd") && (
          <PanimuhanSamrakshyan.Add
            title="+ पानीमुहान संरक्षण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addPanimuhansamrakshyan(e)}
          />
        )}
        {equals(loc, "panimuhansamrakshyanedit") && (
          <PanimuhanSamrakshyan.Edit
            title="पानीमुहान संरक्षण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updatePanimuhansamrakshyan(e, id)}
          />
        )}
      </div>
    );
  }
}

Panimuhansamrakshyan.propsTypes = {
  panimuhansamrakshyanDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Panimuhansamrakshyan.defaultProps = {
  panimuhansamrakshyanDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  panimuhansamrakshyanDataList: state.samrakshyan.allpanimuhansamrakshyanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallPanimuhansamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.fetchallpanimuhansamrakshyanRequest(payload)),

  addPanimuhansamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.addpanimuhansamrakshyanRequest(payload)),

  updatePanimuhansamrakshyan: (payload, panimuhanSamrakshyanId) =>
    dispatch(
      SamrakshyanActions.updatepanimuhansamrakshyanRequest(
        payload,
        panimuhanSamrakshyanId
      )
    ),

  deletePanimuhansamrakshyan: (panimuhanSamrakshyanId) =>
    dispatch(
      SamrakshyanActions.deletepanimuhansamrakshyanRequest(
        panimuhanSamrakshyanId
      )
    ),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panimuhansamrakshyan);
