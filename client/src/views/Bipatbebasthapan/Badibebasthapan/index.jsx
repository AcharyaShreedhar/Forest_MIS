import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BadiBebasthapan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import AppActions from "../../../actions/app";
import BipatbibaranActions from "../../../actions/bipatbibaran";
import {
  badibebasthapanHeadings,
  districtList,
} from "../../../services/config";

class Badibebasthapan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "badibebasthapanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "badibebasthapan",
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
    var badibebasthapanList = [];
    if (nextProps !== prevState) {
      badibebasthapanList = nextProps.badibebasthapanDataList.data;
    }
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }
    return {
      loc,
      officeList,
      badibebasthapanList,
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
    this.props.fetchallBadibebasthapan({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "badhi_aayeko_miti",
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
          pathname: `/bipatbebasthapan/badibebasthapanedit/${item.badhi_bibaran_id}`,
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

    this.props.deleteBadibebasthapan(item.badhi_bibaran_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/bipatbebasthapan/badibebasthapanadd/new");
  }

  render() {
    const { loc, perPage, badibebasthapanList, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ बाढी व्यवस्थापन सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "badibebasthapanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="badibebasthapan"
                title="बाढी आएको मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={true}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="badibebasthapan" />
            </div>
            <BadiBebasthapan.List
              buttonName="+ बाढी व्यवस्थापन"
              title="बाढी व्यवस्थापन सम्बन्धि विवरण"
              pageCount={
                !isNil(badibebasthapanList)
                  ? Math.ceil(badibebasthapanList.total / perPage)
                  : 10
              }
              data={!isNil(badibebasthapanList) ? badibebasthapanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={badibebasthapanHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd("badibebasthapan")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "badibebasthapanadd") && (
          <BadiBebasthapan.Add
            title="+ बाढी व्यवस्थापन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBadibebasthapan(e)}
          />
        )}
        {equals(loc, "badibebasthapanedit") && (
          <BadiBebasthapan.Edit
            title="बाढी व्यवस्थापन शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBadibebasthapan(e, id)}
          />
        )}
      </div>
    );
  }
}

Badibebasthapan.propsTypes = {
  badibeasthapanDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Badibebasthapan.defaultProps = {
  badibebasthapanDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  badibebasthapanDataList: state.bipatbibaran.allbadhibibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBadibebasthapan: (payload) =>
    dispatch(BipatbibaranActions.fetchallbadhibibaranRequest(payload)),

  addBadibebasthapan: (payload) =>
    dispatch(BipatbibaranActions.addbadhibibaranRequest(payload)),

  updateBadibebasthapan: (payload, badibibaranId) =>
    dispatch(
      BipatbibaranActions.updatebadhibibaranRequest(payload, badibibaranId)
    ),

  deleteBadibebasthapan: (badhibibaranId) =>
    dispatch(BipatbibaranActions.deletebadhibibaranRequest(badhibibaranId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Badibebasthapan);
