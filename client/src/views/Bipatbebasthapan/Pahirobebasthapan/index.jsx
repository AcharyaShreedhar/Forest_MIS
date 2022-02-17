import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  PahiroBebasthapan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BipatbibaranActions from "../../../actions/bipatbibaran";
import AppActions from "../../../actions/app";
import {
  pahirobebasthapanHeadings,
  districtList,
} from "../../../services/config";

class Pahirobebasthapan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "pahirobebasthapanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "pahirobebasthapan",
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
    var pahirobebasthapanList = [];
    if (nextProps !== prevState) {
      pahirobebasthapanList = nextProps.pahirobebasthapanDataList.data;
    }
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }
    return {
      loc,
      officeList,
      pahirobebasthapanList,
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

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallPahirobebasthapan({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "pahiro_gayeko_miti",
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
          pathname: `/bipatbebasthapan/pahirobebasthapanedit/${item.pahiro_bibaran_id}`,
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

    this.props.deletePahirobebasthapan(item.pahiro_bibaran_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/bipatbebasthapan/pahirobebasthapanadd/new");
  }

  render() {
    const { loc, perPage, pahirobebasthapanList, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ पहिरो व्यवस्थापन सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "pahirobebasthapanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="pahirobebasthapan"
                title="पहिरो गएको मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="pahirobebasthapan" />
            </div>
            <PahiroBebasthapan.List
              buttonName="+ पहिरो व्यवस्थापन"
              title="पहिरो व्यवस्थापन सम्बन्धि विवरण"
              pageCount={
                !isNil(pahirobebasthapanList)
                  ? Math.ceil(pahirobebasthapanList.total / perPage)
                  : 10
              }
              data={
                !isNil(pahirobebasthapanList) ? pahirobebasthapanList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={pahirobebasthapanHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd("pahirobebasthapan")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "pahirobebasthapanadd") && (
          <PahiroBebasthapan.Add
            title="+ पहिरो व्यवस्थापन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addPahirobebasthapan(e)}
          />
        )}
        {equals(loc, "pahirobebasthapanedit") && (
          <PahiroBebasthapan.Edit
            title="पहिरो व्यवस्थापन शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updatePahirobebasthapan(e, id)}
          />
        )}
      </div>
    );
  }
}

Pahirobebasthapan.propsTypes = {
  pahirobeasthapanDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Pahirobebasthapan.defaultProps = {
  pahirobebasthapanDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  pahirobebasthapanDataList: state.bipatbibaran.allpahirobibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallPahirobebasthapan: (payload) =>
    dispatch(BipatbibaranActions.fetchallpahirobibaranRequest(payload)),

  addPahirobebasthapan: (payload) =>
    dispatch(BipatbibaranActions.addpahirobibaranRequest(payload)),

  updatePahirobebasthapan: (payload, pahirobibaranId) =>
    dispatch(
      BipatbibaranActions.updatepahirobibaranRequest(payload, pahirobibaranId)
    ),

  deletePahirobebasthapan: (pahirobibaranId) =>
    dispatch(BipatbibaranActions.deletepahirobibaranRequest(pahirobibaranId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pahirobebasthapan);
