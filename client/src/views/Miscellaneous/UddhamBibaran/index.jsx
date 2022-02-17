import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  Uddham,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import MiscellaneousActions from "../../../actions/miscellaneous";
import AppActions from "../../../actions/app";
import { uddhamHeadings, districtList } from "../../../services/config";

class UddhamBibaran extends Component {
  constructor(props) {
    super(props);
    const { officeRole, districtId, officeId } = this.props;
    this.state = {
      loc: "uddhamlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${ officeRole < 3 ? "%" : districtId }`,
      officeId: `${ officeRole < 3 ? "%" : officeId }`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "uddham",
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
    var uddhamList = [];
    var officeList = [];

    if (nextProps !== prevState) {
      uddhamList = nextProps.uddhamDataList.data;
      officeList = nextProps.officeDataList.data;
    }

    return {
      loc,
      officeList,
      uddhamList,
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
    this.props.fetchallUddhamBibaran({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "darta_miti",
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
          pathname: `/miscellaneous/uddhambibaranedit/${item.uddham_id}`,
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

    this.props.deleteUddhamBibaran(item.uddham_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/miscellaneous/uddhambibaranadd/new");
  }

  render() {
    const { loc, perPage, uddhamList, officeList, showDialog } = this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ उद्धम सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "uddhamlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                title="आर्थिक वर्ष"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="uddham" />
            </div>
            <Uddham.List
              buttonName="+ उद्धम"
              title="उद्धम सम्बन्धि विवरण"
              pageCount={
                !isNil(uddhamList) ? Math.ceil(uddhamList.total / perPage) : 10
              }
              data={!isNil(uddhamList) ? uddhamList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={uddhamHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd("uddham")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "uddhambibaranadd") && (
          <Uddham.Add
            title="+ उद्धम"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addUddhamBibaran(e)}
          />
        )}
        {equals(loc, "uddhambibaranedit") && (
          <Uddham.Edit
            title="उद्धम सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateUddhamBibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

UddhamBibaran.propsTypes = {
  uddhamDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

UddhamBibaran.defaultProps = {
  uddhamDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  uddhamDataList: state.miscellaneous.alluddhamData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallUddhamBibaran: (payload) =>
    dispatch(MiscellaneousActions.fetchalluddhamRequest(payload)),

  addUddhamBibaran: (payload) =>
    dispatch(MiscellaneousActions.adduddhamRequest(payload)),

  updateUddhamBibaran: (payload, uddhamId) =>
    dispatch(MiscellaneousActions.updateuddhamRequest(payload, uddhamId)),

  deleteUddhamBibaran: (uddhamId) =>
    dispatch(MiscellaneousActions.deleteuddhamRequest(uddhamId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UddhamBibaran);
