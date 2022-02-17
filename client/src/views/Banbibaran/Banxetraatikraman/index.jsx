import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanxetraAtikraman,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import AppActions from "../../../actions/app";
import BanbibaranActions from "../../../actions/banbibaran";
import {
  banxetraatikramanHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Banxetraatikraman extends Component {
  constructor(props) {
    super(props);
    const { officeRole, districtId, officeId } = this.props;
    this.state = {
      loc: "banxetraatikramanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${ officeRole < 3 ? "%" : districtId }`,
      officeId: `${ officeRole < 3 ? "%" : officeId }`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "banxetraatikraman",
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
    var banxetraatikramanList = [];
    if (nextProps !== prevState) {
      banxetraatikramanList = nextProps.banxetraatikramanDataList.data;
    }
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }
    return {
      loc,
      officeList,
      banxetraatikramanList,
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
    const { fromDate, perPage, toDate } = this.state;
    this.setState({
      distId: e,
      officeId: "%", //office reset
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
    this.props.fetchallBanxetraatrikraman({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "atikraman_miti",
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
          pathname: `/banbibaran/banxetraatikramanedit/${item.banxetra_atikraman_id}`,
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

    this.props.deleteBanxetraatikraman(item.banxetra_atikraman_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/banbibaran/banxetraatikramanadd/new");
  }

  render() {
    const { loc, perPage, banxetraatikramanList, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वनक्षेत्र अतिक्रमण सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "banxetraatikramanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banxetraatikraman"
                title="अतिक्रमण मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="banxetraatikraman" />
            </div>
            <BanxetraAtikraman.List
              buttonName="+ वनक्षेत्र अतिक्रमण"
              title="वनक्षेत्र अतिक्रमण सम्बन्धि विवरण"
              pageCount={
                !isNil(banxetraatikramanList)
                  ? Math.ceil(banxetraatikramanList.total / perPage)
                  : 10
              }
              data={
                !isNil(banxetraatikramanList) ? banxetraatikramanList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={banxetraatikramanHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd()}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "banxetraatikramanadd") && (
          <BanxetraAtikraman.Add
            user={user}
            title="+ वनक्षेत्र अतिक्रमण"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanxetraatikraman(e)}
          />
        )}
        {equals(loc, "banxetraatikramanedit") && (
          <BanxetraAtikraman.Edit
            title="वनक्षेत्र अतिक्रमण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanxetraatikraman(e, id)}
          />
        )}
      </div>
    );
  }
}

Banxetraatikraman.propsTypes = {
  banxetraatikramanDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Banxetraatikraman.defaultProps = {
  banxetraatikramanDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  banxetraatikramanDataList: state.banbibaran.allbanxetraatikramanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanxetraatrikraman: (payload) =>
    dispatch(BanbibaranActions.fetchallbanxetraatikramanRequest(payload)),

  addBanxetraatikraman: (payload) =>
    dispatch(BanbibaranActions.addbanxetraatikramanRequest(payload)),

  updateBanxetraatikraman: (payload, banxetraatikramanId) =>
    dispatch(
      BanbibaranActions.updatebanxetraatikramanRequest(
        payload,
        banxetraatikramanId
      )
    ),

  deleteBanxetraatikraman: (banxetraatikramanId) =>
    dispatch(
      BanbibaranActions.deletebanxetraatikramanRequest(banxetraatikramanId)
    ),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banxetraatikraman);
