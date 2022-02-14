import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  MuddaanusandhanDayari,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import AppActions from "../../../actions/app";
import BanbibaranActions from "../../../actions/banbibaran";
import {
  muddaanusandhandayariHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Muddaanusandhandayari extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "muddaanusandhandayarilist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "muddaanusandhandayari",
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
    var muddaanusandhandayariList = [];
    if (nextProps !== prevState) {
      muddaanusandhandayariList = nextProps.muddaanusandhandayariDataList.data;
    }
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }

    return {
      loc,
      officeList,
      muddaanusandhandayariList,
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
    this.props.fetchallMuddaanusandhandayari({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "jaheri_partibedan_miti",
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
          pathname: `/banbibaran/muddaanusandhandayariedit/${item.mudda_anusandhan_dayari_id}`,
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

    this.props.deleteMuddaanusandhandayari(item.mudda_anusandhan_dayari_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/banbibaran/muddaanusandhandayariadd/new");
  }

  render() {
    const { loc, perPage, muddaanusandhandayariList, officeList, showDialog } =
      this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ मुद्दा अनुसन्धान दायरी सम्बन्धि विवरण  हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "muddaanusandhandayarilist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="muddaanusandhandayaris"
                title="जाहेरी प्रतिवेदन मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={true}
              />
              <ReportGenerator id="muddaanusandhandayaris" />
            </div>
            <MuddaanusandhanDayari.List
              buttonName="+ मुद्दा अनुसन्धान दायरी"
              title="मुद्दा अनुसन्धान दायरी सम्बन्धि विवरण"
              pageCount={
                !isNil(muddaanusandhandayariList)
                  ? Math.ceil(muddaanusandhandayariList.total / perPage)
                  : 10
              }
              data={
                !isNil(muddaanusandhandayariList)
                  ? muddaanusandhandayariList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={muddaanusandhandayariHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("muddaanusandhandayari")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "muddaanusandhandayariadd") && (
          <MuddaanusandhanDayari.Add
            title="+ मुद्दा अनुसन्धान दायरी"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addMuddaanusandhandayari(e)}
          />
        )}
        {equals(loc, "muddaanusandhandayariedit") && (
          <MuddaanusandhanDayari.Edit
            title="मुद्दा अनुसन्धान दायरी सम्बन्धी विवरण शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateMuddaanusandhandayari(e, id)}
          />
        )}
      </div>
    );
  }
}

Muddaanusandhandayari.propsTypes = {
  muddaanusandhandayariDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Muddaanusandhandayari.defaultProps = {
  muddaanusandhandayariDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  muddaanusandhandayariDataList: state.banbibaran.allmuddaanusandhandayariData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallMuddaanusandhandayari: (payload) =>
    dispatch(BanbibaranActions.fetchallmuddaanusandhandayariRequest(payload)),

  addMuddaanusandhandayari: (payload) =>
    dispatch(BanbibaranActions.addmuddaanusandhandayariRequest(payload)),

  updateMuddaanusandhandayari: (payload, muddaanusandhandayariId) =>
    dispatch(
      BanbibaranActions.updatemuddaanusandhandayariRequest(
        payload,
        muddaanusandhandayariId
      )
    ),

  deleteMuddaanusandhandayari: (muddaanusandhandayariId) =>
    dispatch(
      BanbibaranActions.deletemuddaanusandhandayariRequest(
        muddaanusandhandayariId
      )
    ),
  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Muddaanusandhandayari);
