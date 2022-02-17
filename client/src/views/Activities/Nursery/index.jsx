import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BiruwaUtpadan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import AppActions from "../../../actions/app";
import { biruwautpadanHeadings, districtList } from "../../../services/config";
import "./Nursery.scss";

class Nursery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "biruwautpadanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "nursery",
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
    var biruwautpadanList = [];
    if (nextProps !== prevState) {
      biruwautpadanList = nextProps.biruwautpadanDataList.data;
    }

    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }

    return { officeList, biruwautpadanList, loc };
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

    //O - DDL;
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
    this.props.fetchallBiruwautpadan({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "arthik_barsa",
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
          pathname: `/activities/biruwautpadanedit/${item.biruwa_utpadan_id}`,
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
    this.props.deleteBiruwautpadan(item.biruwa_utpadan_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/activities/biruwautpadanadd/new");
  }

  render() {
    const { biruwautpadanList, loc, perPage, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ विरुवा उत्पादन सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "nurserylist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="nursery"
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
              <ReportGenerator id="nursery" />
            </div>
            <BiruwaUtpadan.List
              buttonName="+ विरुवा उत्पादन"
              title="विरुवा उत्पादन सम्बन्धी विवरण"
              pageCount={
                !isNil(biruwautpadanList)
                  ? Math.ceil(biruwautpadanList.total / perPage)
                  : 10
              }
              data={!isNil(biruwautpadanList) ? biruwautpadanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              role={role}
              officeRole={officeRole}
              user={user}
              headings={biruwautpadanHeadings}
              onAdd={() => this.handleAdd()}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "biruwautpadanadd") && (
          <BiruwaUtpadan.Add
            title="+ विरुवा उत्पादन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBiruwautpadan(e)}
          />
        )}
        {equals(loc, "biruwautpadanedit") && (
          <BiruwaUtpadan.Edit
            title="विरुवा उत्पादन सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBiruwautpadan(e, id)}
          />
        )}
      </div>
    );
  }
}

Nursery.propsTypes = {
  biruwautpadanDataList: PropTypes.any,
};

Nursery.defaultProps = {
  biruwautpadanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  biruwautpadanDataList: state.biruwautpadan.allbiruwautpadanData,
});

const mapDispatchToProps = (dispatch) => ({
  //-------------biruwautpadan
  fetchallBiruwautpadan: (payload) =>
    dispatch(BiruwautpadanActions.fetchallbiruwautpadanRequest(payload)),

  addBiruwautpadan: (payload) =>
    dispatch(BiruwautpadanActions.addbiruwautpadanRequest(payload)),

  updateBiruwautpadan: (payload, biruwautpadanId) =>
    dispatch(
      BiruwautpadanActions.updatebiruwautpadanRequest(payload, biruwautpadanId)
    ),

  deleteBiruwautpadan: (biruwautpadanId) =>
    dispatch(BiruwautpadanActions.deletebiruwautpadanRequest(biruwautpadanId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nursery);
