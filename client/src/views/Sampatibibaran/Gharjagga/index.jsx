import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  GharjaggaBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SampatibibaranActions from "../../../actions/sampatibibaran";
import AppActions from "../../../actions/app";
import { gharjaggaHeadings, districtList } from "../../../services/config";

class Gharjagga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "gharjaggalist",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "gharjagga",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOffice = this.handleOffice.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handlePerCallback = this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var gharjaggaList = [];
    if (nextProps !== prevState) {
      gharjaggaList = nextProps.gharjaggaDataList.data;
    }

    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }

    return { loc, gharjaggaList, officeList };
  }

  handlePer(e) {
    this.setState({ page: 0 }, () => this.handlePerCallback(e));
  }

  handlePerCallback(e) {
    const { distId, officeId, page } = this.state;
    this.setState({
      perPage: e,
    });
    this.fetchResults(distId, officeId, page, e);
  }

  handleDistrict(e, item) {
    const { perPage } = this.state;
    this.setState({
      distId: e,
      officeId: "%", // office reset
      page: 0,
    });
    this.fetchResults(e, "%", 0, perPage);

    //O-DDL
    this.fetchOffice(e);
  }
  handleOffice(e) {
    const { perPage, distId } = this.state;
    this.setState({
      officeId: e,
      page: 0,
    });
    this.fetchResults(distId, e, 0, perPage);
  }
  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallGharjagga({
      distId,
      officeId,
      name: "asset_type",
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
    const { distId, officeId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(distId, officeId, data.selected * perPage, perPage);
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item });
    this.setState({ path: path });
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/sampatibibaran/gharjaggaedit/${item.asset_id}`,
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

    this.props.deleteGharjagga(item.asset_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/sampatibibaran/gharjaggaadd/new");
  }
  render() {
    const { loc, perPage, gharjaggaList, officeList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ घर जग्गा सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "gharjaggalist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="gharjagga"
                districtsList={districtList}
                officesList={officeList}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={true}
                yesDate={false}
              />
              <ReportGenerator id="gharjagga" />
            </div>
            <GharjaggaBibaran.List
              buttonName="+ घर जग्गा"
              title="घर जग्गा सम्बन्धी विवरण"
              pageCount={
                !isNil(gharjaggaList)
                  ? Math.ceil(gharjaggaList.total / perPage)
                  : 10
              }
              data={!isNil(gharjaggaList) ? gharjaggaList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={gharjaggaHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "gharjaggaadd") && (
          <GharjaggaBibaran.Add
            title="+ घर जग्गा विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addGharjagga(e)}
          />
        )}
        {equals(loc, "gharjaggaedit") && (
          <GharjaggaBibaran.Edit
            title="घर जग्गा सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateGharjagga(e, id)}
          />
        )}
      </div>
    );
  }
}

Gharjagga.propTypes = {
  gharjaggaDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Gharjagga.defaultProps = {
  gharjaggaDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  gharjaggaDataList: state.sampatibibaran.allassetsData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallGharjagga: (payload) =>
    dispatch(SampatibibaranActions.fetchallassetsRequest(payload)),
  addGharjagga: (payload) =>
    dispatch(SampatibibaranActions.addassetsRequest(payload)),

  updateGharjagga: (payload, assetId) =>
    dispatch(SampatibibaranActions.updateassetsRequest(payload, assetId)),

  deleteGharjagga: (assetId) =>
    dispatch(SampatibibaranActions.deleteassetsRequest(assetId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gharjagga);
