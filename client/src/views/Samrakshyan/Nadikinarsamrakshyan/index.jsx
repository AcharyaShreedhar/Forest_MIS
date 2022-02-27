import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  NadikinarSamrakshyan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SamrakshyanActions from "../../../actions/samrakshyan";
import AppActions from "../../../actions/app";
import {
  nadikinarsamrakshyanHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Nadikinarsamrakshyan extends Component {
  constructor(props) {
    super(props);
    const { officeRole, districtId, officeId } = this.props;
    this.state = {
      loc: "nadikinarsamrakshyanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${ officeRole < 3 ? "%" : districtId }`,
      officeId: `${ officeRole < 3 ? "%" : officeId }`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "nadikinarsamrakshyan",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleOffice = this.handleOffice.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePerCallback = this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var nadikinarsamrakshyanList = [];
    var officeList = [];

    if (nextProps !== prevState) {
      nadikinarsamrakshyanList = nextProps.nadikinarsamrakshyanDataList.data;
      officeList = nextProps.officeDataList.data;
    }
    return { loc, officeList, nadikinarsamrakshyanList };
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
    const { fromDate, perPage, toDate } = this.state;
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
    this.props.fetchallNadikinarsamrakshyan({
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
          pathname: `/samrakshyan/nadikinarsamrakshyanedit/${item.nadikinarsamrakshyan_id}`,
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
    const { item } = this.state;

    this.props.deleteNadikinarsamrakshyan(item.nadikinarsamrakshyan_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/samrakshyan/nadikinarsamrakshyanadd/new");
  }
  render() {
    const { loc, perPage, nadikinarsamrakshyanList, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ नदिकिनार संरक्षण सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "nadikinarsamrakshyanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="nadikinarsamrakshyan"
                title="कार्यक्रम मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="nadikinarsamrakshyan" />
            </div>
            <NadikinarSamrakshyan.List
              buttonName="+ नदिकिनार संरक्षण"
              title="नदिकिनार संरक्षण सम्बन्धी विवरण"
              pageCount={
                !isNil(nadikinarsamrakshyanList)
                  ? Math.ceil(nadikinarsamrakshyanList.total / perPage)
                  : 10
              }
              data={
                !isNil(nadikinarsamrakshyanList)
                  ? nadikinarsamrakshyanList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={nadikinarsamrakshyanHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "nadikinarsamrakshyanadd") && (
          <NadikinarSamrakshyan.Add
            title="+ नदिकिनार संरक्षण विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addNadikinarsamrakshyan(e)}
          />
        )}
        {equals(loc, "nadikinarsamrakshyanedit") && (
          <NadikinarSamrakshyan.Edit
            title="नदिकिनार संरक्षण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateNadikinarsamrakshyan(e, id)}
          />
        )}
      </div>
    );
  }
}

Nadikinarsamrakshyan.propTypes = {
  nadikinarsamrakshyanList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Nadikinarsamrakshyan.defaultProps = {
  nadikinarsamrakshyanList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  nadikinarsamrakshyanDataList: state.samrakshyan.allnadikinarsamrakshyanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallNadikinarsamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.fetchallnadikinarsamrakshyanRequest(payload)),
  addNadikinarsamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.addnadikinarsamrakshyanRequest(payload)),

  updateNadikinarsamrakshyan: (payload, nadikinarSamrakshyanId) =>
    dispatch(
      SamrakshyanActions.updatenadikinarsamrakshyanRequest(
        payload,
        nadikinarSamrakshyanId
      )
    ),

  deleteNadikinarsamrakshyan: (nadikinarSamrakshyanId) =>
    dispatch(
      SamrakshyanActions.deletenadikinarsamrakshyanRequest(
        nadikinarSamrakshyanId
      )
    ),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nadikinarsamrakshyan);
