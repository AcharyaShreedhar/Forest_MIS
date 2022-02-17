import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanyajantuUddarbibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import DwandabebasthapanActions from "../../../actions/dwandabebasthapan";
import AppActions from "../../../actions/app";
import {
  banyajantuuddarHeadings,
  districtList,
} from "../../../services/config";

export class BanyajantuUddar extends Component {
  constructor(props) {
    super(props);
    const { officeRole, districtId, officeId } = this.props;
    this.state = {
      loc: "uddarlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${ officeRole < 3 ? "%" : districtId }`,
      officeId: `${ officeRole < 3 ? "%" : officeId }`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "banyajantuuddar",
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
    var banyajantuuddarList = [];
    if (nextProps !== prevState) {
      banyajantuuddarList = nextProps.banyajantuuddarDataList.data;
    }
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }
    return {
      loc,
      officeList,
      banyajantuuddarList,
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
  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallBanyajantuuddar({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "miti",
      page: page,
      perPage,
    });
  }
  // O-DDL
  fetchOffice(distId) {
    this.props.fetchOfficedropdown({
      distId,
      // name: "value", //"office_name"
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
          pathname: `/dwandabebasthapan/banyajantuuddaredit/${item.banyajantu_uddar_id}`,
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

    this.props.deleteBanyajantuuddar(item.banyajantu_uddar_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/dwandabebasthapan/banyajantuuddaradd/new");
  }
  render() {
    const { loc, perPage, banyajantuuddarList, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वन्यजन्तु उद्दार सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "banyajantuuddarlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banyajantuuddar"
                title="उद्दार मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="banyajantuuddar" />
            </div>
            <BanyajantuUddarbibaran.List
              buttonName="+ वन्यजन्तु उद्दार"
              title="वन्यजन्तु उद्दार सम्बन्धि विवरण"
              pageCount={
                !isNil(banyajantuuddarList)
                  ? Math.ceil(banyajantuuddarList.total / perPage)
                  : 10
              }
              data={!isNil(banyajantuuddarList) ? banyajantuuddarList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={banyajantuuddarHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd("banyajantuuddar")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "banyajantuuddar")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "banyajantuuddaradd") && (
          <BanyajantuUddarbibaran.Add
            title="+ वन्यजन्तु उद्दार"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanyajantuuddar(e)}
          />
        )}
        {equals(loc, "banyajantuuddaredit") && (
          <BanyajantuUddarbibaran.Edit
            title="वन्यजन्तु उद्दार सम्बन्धी विवरण शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanyajantuuddar(e, id)}
          />
        )}
      </div>
    );
  }
}

BanyajantuUddar.propsTypes = {
  banyajantuuddarDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

BanyajantuUddar.defaultProps = {
  banyajantuuddarDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  banyajantuuddarDataList: state.dwandabebasthapan.allbanyajantuuddarData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanyajantuuddar: (payload) =>
    dispatch(DwandabebasthapanActions.fetchallbanyajantuuddarRequest(payload)),
  addBanyajantuuddar: (payload) =>
    dispatch(DwandabebasthapanActions.addbanyajantuuddarRequest(payload)),
  updateBanyajantuuddar: (payload, banyajantuuddarId) =>
    dispatch(
      DwandabebasthapanActions.updatebanyajantuuddarRequest(
        payload,
        banyajantuuddarId
      )
    ),

  deleteBanyajantuuddar: (banyajantuuddarId) =>
    dispatch(
      DwandabebasthapanActions.deletebanyajantuuddarRequest(banyajantuuddarId)
    ),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BanyajantuUddar);
