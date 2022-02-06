import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  SawarisadhanBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SampatibibaranActions from "../../../actions/sampatibibaran";
import { sawarisadhanHeadings, districtList } from "../../../services/config";
import { Fragment } from "react";

class Sawarisadhan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "sawarisadhanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "sawarisadhan",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
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

    var sawarisadhanList = [];
    if (nextProps !== prevState) {
      sawarisadhanList = nextProps.sawarisadhanDataList.data;
    }
    return { loc, sawarisadhanList };
  }

  handlePer(e) {
    const { fromDate, toDate, distId, officeId, page } = this.state;
    this.setState({ 
      perPage: e,
      page: page-page,
     });
    this.fetchResults(fromDate, toDate, distId, officeId, page, e);
  }
  handleFromDate(e) {
    const { distId, officeId, perPage, page, toDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: page-page,
    });
    this.fetchResults(e, toDate, distId, officeId, page, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, page, perPage } = this.state;
    this.setState({ 
      toDate: e,
      page: page-page,
     });
    this.fetchResults(fromDate, e, distId, officeId, page, perPage);
  }
  handleDistrict(e) {
    const { fromDate, officeId, page, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: page-page, 
    });
    this.fetchResults(fromDate, toDate, e, officeId, page, perPage);
  }
  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallSawarisadhan({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "vehicle_type",
      page: page,
      perPage,
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
          pathname: `/sampatibibaran/sawarisadhanedit/${item.vehicle_id}`,
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

    this.props.deleteSawarisadhan(item.vehicle_id);
    this.setState({ 
      showDialog: !this.state.showDialog, 
      page: page-page,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/sampatibibaran/sawarisadhanadd/new");
  }
  render() {
    const { loc, perPage, sawarisadhanList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ सवारी साधन सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "sawarisadhanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="vehicle"
                title="प्राप्ति मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="vehicle" />
            </div>
            <SawarisadhanBibaran.List
              buttonName="+ सवारी साधन"
              title="सवारी साधन सम्बन्धी विवरण"
              pageCount={
                !isNil(sawarisadhanList)
                  ? Math.ceil(sawarisadhanList.total / perPage)
                  : 10
              }
              data={!isNil(sawarisadhanList) ? sawarisadhanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={sawarisadhanHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page} 
            />
     
          </Fragment>
        )}
        {equals(loc, "sawarisadhanadd") && (
          <SawarisadhanBibaran.Add
            title="+ सवारी साधन विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSawarisadhan(e)}
          />
        )}
        {equals(loc, "sawarisadhanedit") && (
          <SawarisadhanBibaran.Edit
            title="सवारी साधन सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSawarisadhan(e, id)}
          />
        )}
      </div>
    );
  }
}

Sawarisadhan.propTypes = {
  sawarisadhanDataList: PropTypes.any,
};

Sawarisadhan.defaultProps = {
  sawarisadhanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  sawarisadhanDataList: state.sampatibibaran.allvehiclesData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallSawarisadhan: (payload) =>
    dispatch(SampatibibaranActions.fetchallvehiclesRequest(payload)),
  addSawarisadhan: (payload) =>
    dispatch(SampatibibaranActions.addvehiclesRequest(payload)),

  updateSawarisadhan: (payload, assetId) =>
    dispatch(SampatibibaranActions.updatevehiclesRequest(payload, assetId)),

  deleteSawarisadhan: (assetId) =>
    dispatch(SampatibibaranActions.deletevehiclesRequest(assetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sawarisadhan);
