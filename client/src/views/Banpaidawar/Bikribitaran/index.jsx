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
import AppActions from "../../../actions/app";
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
    var banpaidawarbikribitaranList = [];
    if (nextProps !== prevState) {
      banpaidawarbikribitaranList =
        nextProps.banpaidawarbikribitaranDataList.data;
    }
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }
    return { banpaidawarbikribitaranList, officeList, loc };
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
    const { fromDate, perPage, toDate } = this.state;
    this.setState({
      distId: e,
      officeId: "%",
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
    const {
      banpaidawarbikribitaranList,
      officeList,
      loc,
      perPage,
      showDialog,
    } = this.state;
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
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={true}
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
  officeDataList: PropTypes.any,
};

Bikribitaran.defaultProps = {
  banpaidawarbikribitaranDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
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
  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bikribitaran);
