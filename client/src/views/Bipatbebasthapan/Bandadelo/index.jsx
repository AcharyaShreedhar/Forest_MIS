import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BandadeloBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import AppActions from "../../../actions/app";
import BipatbibaranActions from "../../../actions/bipatbibaran";
import { bandadeloHeadings, districtList } from "../../../services/config";

class Bandadelo extends Component {
  constructor(props) {
    super(props);
    const { officeRole, districtId, officeId } = this.props;
    this.state = {
      loc: "bandadelolist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${ officeRole < 3 ? "%" : districtId }`,
      officeId: `${ officeRole < 3 ? "%" : officeId }`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "bandadelo",
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
    var bandadelobibaranList = [];
    if (nextProps !== prevState) {
      bandadelobibaranList = nextProps.bandadelobibaranDataList.data;
    }
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }
    return {
      loc,
      officeList,
      bandadelobibaranList,
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
    this.props.fetchallBandadelo({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "bandadelo_miti",
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
          pathname: `/bipatbebasthapan/bandadeloedit/${item.bandadelo_bibaran_id}`,
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

    this.props.deleteBandadelo(item.bandadelo_bibaran_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/bipatbebasthapan/bandadeloadd/new");
  }

  render() {
    const { loc, perPage, bandadelobibaranList, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वनडढेलो सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "bandadelolist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="bandadelo"
                title="डढेलो लागेको मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="bandadelo" />
            </div>
            <BandadeloBibaran.List
              buttonName="+ वनडढेलो"
              title="वनडढेलो सम्बन्धि विवरण"
              pageCount={
                !isNil(bandadelobibaranList)
                  ? Math.ceil(bandadelobibaranList.total / perPage)
                  : 10
              }
              data={
                !isNil(bandadelobibaranList) ? bandadelobibaranList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={bandadeloHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd("bandadelo")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "bandadeloadd") && (
          <BandadeloBibaran.Add
            title="+ वनडढेलो"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBandadelo(e)}
          />
        )}
        {equals(loc, "bandadeloedit") && (
          <BandadeloBibaran.Edit
            title="वनडढेलो सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBandadelo(e, id)}
          />
        )}
      </div>
    );
  }
}

Bandadelo.propsTypes = {
  bandadelobibaranDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Bandadelo.defaultProps = {
  bandadelobibaranDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  bandadelobibaranDataList: state.bipatbibaran.allbandadelobibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBandadelo: (payload) =>
    dispatch(BipatbibaranActions.fetchallbandadelobibaranRequest(payload)),

  addBandadelo: (payload) =>
    dispatch(BipatbibaranActions.addbandadelobibaranRequest(payload)),

  updateBandadelo: (payload, bandadelobibaranId) =>
    dispatch(
      BipatbibaranActions.updatebandadelobibaranRequest(
        payload,
        bandadelobibaranId
      )
    ),

  deleteBandadelo: (bandadelobibaranId) =>
    dispatch(
      BipatbibaranActions.deletebandadelobibaranRequest(bandadelobibaranId)
    ),
  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bandadelo);
