import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  AnyaSampatiBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SampatibibaranActions from "../../../actions/sampatibibaran";
import AppActions from "../../../actions/app";
import { anyasampatiHeadings, districtList } from "../../../services/config";
import { Fragment } from "react";

class AnyaSampati extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "anyasampatilist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "anyasampati",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleOffice = this.handleOffice.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var anyasampatiList = [];
    if (nextProps !== prevState) {
      anyasampatiList = nextProps.anyasampatiDataList.data;
    }

    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }
    return { loc, anyasampatiList, officeList };
  }

  handlePer(e) {
    const { fromDate, toDate, distId, officeId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(fromDate, toDate, distId, officeId, 0, e);
  }
  handleFromDate(e) {
    const { distId, officeId, perPage, toDate } = this.state;
    this.setState({ fromDate: e });
    this.fetchResults(e, toDate, distId, officeId, 0, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, perPage } = this.state;
    this.setState({ toDate: e });
    this.fetchResults(fromDate, e, distId, officeId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, perPage, toDate, officeId } = this.state;
    this.setState({ distId: e });    
    this.fetchResults(fromDate, toDate, e, officeId, 0, perPage);

    //O-DDL
    this.fetchOffice(e);
  }
  handleOffice(e) {
    const { fromDate, perPage, toDate, distId } = this.state;
    this.setState({ officeId: e });
    this.fetchResults(fromDate, toDate, distId, e, 0, perPage);
  }
  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallanyasampati({
      fromDate,
      toDate, 
      distId,
      officeId,
      name: "sampati_name",
      page: page,
      perPage,
    });
    this.setState({
      distId: "%",
      officeId: "%",
    })
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
          pathname: `/sampatibibaran/anyasampatiedit/${item.sampati_id}`,
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
    const { item } = this.state;

    this.props.deleteanyasampati(item.sampati_id);
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/sampatibibaran/anyasampatiadd/new");
  }
  render() {
    const { loc, perPage, anyasampatiList, officeList, showDialog } =
      this.state;
    // const { user, role, officesList } = this.props;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ सम्पती सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "anyasampatilist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="sampati"
                title="प्राप्ति मिति"
                districtsList={districtList}
                officesList={officeList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice="true"
              />
              <ReportGenerator id="sampati" />
            </div>
            <AnyaSampatiBibaran.List
              buttonName="+ आन्य सम्पती"
              title="आन्य सम्पती सम्बन्धी विवरण"
              pageCount={
                !isNil(anyasampatiList)
                  ? Math.ceil(anyasampatiList.total / perPage)
                  : 0
              }
              data={!isNil(anyasampatiList) ? anyasampatiList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={anyasampatiHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "anyasampatiadd") && (
          <AnyaSampatiBibaran.Add
            title="+ आन्य सम्पती विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addanyasampati(e)}
          />
        )}
        {equals(loc, "anyasampatiedit") && (
          <AnyaSampatiBibaran.Edit
            title="आन्य सम्पती सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateanyasampati(e, id)}
          />
        )}
      </div>
    );
  }
}

AnyaSampati.propTypes = {
  anyasampatiDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

AnyaSampati.defaultProps = {
  anyasampatiDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  // officesList: state.app.officeList,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  anyasampatiDataList: state.sampatibibaran.allanyasampatiData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallanyasampati: (payload) =>
    dispatch(SampatibibaranActions.fetchallanyasampatiRequest(payload)),
  addanyasampati: (payload) =>
    dispatch(SampatibibaranActions.addanyasampatiRequest(payload)),

  updateanyasampati: (payload, assetId) =>
    dispatch(SampatibibaranActions.updateanyasampatiRequest(payload, assetId)),

  deleteanyasampati: (assetId) =>
    dispatch(SampatibibaranActions.deleteanyasampatiRequest(assetId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnyaSampati);
