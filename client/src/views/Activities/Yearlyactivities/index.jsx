import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  YearlyActivities,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import {
  yearlyactivitiesHeadings,
  districtList,
} from "../../../services/config";

class Yearlyactivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "yearlyactivitieslist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "yearlyactivities",
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var yearlyactivitiesList = [];
    if (nextProps !== prevState) {
      yearlyactivitiesList = nextProps.activitiesinfoDataList.data;
    }
    return { loc, yearlyactivitiesList };
  }
  handlePer(e) {
    const { fromDate, toDate, distId, page } = this.state;
    this.setState({ 
      perPage: e,
      page: page-page,
    });
    this.fetchResults(fromDate, toDate, distId, page, e);
  }
  handleFromDate(e) {
    const { distId, page, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: page-page,
    });
    this.fetchResults(e, toDate, distId, page, perPage);
  }
  handleToDate(e) {
     const { distId, fromDate,page, perPage } = this.state;
    this.setState({ 
      fromDate: e,
      page: page-page,
    });
    this.fetchResults(fromDate, e, distId, page, perPage);
  }
  handleDistrict(e) {
    const { fromDate, page, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: page-page,
    });
    this.fetchResults(fromDate, toDate, e, page, perPage);
  }
  fetchResults(fromDate, toDate, distId, page, perPage) {
    this.props.fetchallYearlyactivities({
      fromDate,
      toDate,
      distId,
      name: "fiscal_year",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { fromDate, toDate, distId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(
      fromDate,
      toDate,
      distId,
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
          pathname: `/activities/yearlyactivitiesedit/${item.activities_info_id}`,
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

    this.props.deleteYearlyactivities(item.activities_info_id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: page-page, 
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/activities/yearlyactivitiesadd/new");
  }
  render() {
    const { loc, perPage, yearlyactivitiesList, showDialog } = this.state;
    const { user,role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वार्षिक कार्यक्रम सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "yearlyactivitieslist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="yearlyactivities"
                title="आर्थिक वर्ष"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="yearlyactivities" />
            </div>
            <YearlyActivities.List
              buttonName="+ वार्षिक कार्यक्रम"
              title="वार्षिक कार्यक्रम सम्बन्धी विवरण"
              pageCount={
                !isNil(yearlyactivitiesList)
                  ? Math.ceil(yearlyactivitiesList.total / perPage)
                  : 10
              }
              data={
                !isNil(yearlyactivitiesList) ? yearlyactivitiesList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={yearlyactivitiesHeadings}
              onAdd={() => this.handleAdd()}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}

        {equals(loc, "yearlyactivitiesadd") && (
          <YearlyActivities.Add
            title="+ वार्षिक कार्यक्रम विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addYearlyactivities(e)}
          />
        )}
        {equals(loc, "yearlyactivitiesedit") && (
          <YearlyActivities.Edit
            title="वार्षिक कार्यक्रम सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateYearlyactivities(e, id)}
          />
        )}
      </div>
    );
  }
}

Yearlyactivities.propTypes = {
  activitiesinfoDataList: PropTypes.any,
};

Yearlyactivities.defaultProps = {
  activitiesinfoDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role:state.app.user.user_type,
  activitiesinfoDataList: state.biruwautpadan.allactivitiesinfoData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallYearlyactivities: (payload) =>
    dispatch(BiruwautpadanActions.fetchallactivitiesinfoRequest(payload)),
  addYearlyactivities: (payload) =>
    dispatch(BiruwautpadanActions.addactivitiesinfoRequest(payload)),

  updateYearlyactivities: (payload, activitiesinfoId) =>
    dispatch(
      BiruwautpadanActions.updateactivitiesinfoRequest(
        payload,
        activitiesinfoId
      )
    ),

  deleteYearlyactivities: (activitiesinfoId) =>
    dispatch(
      BiruwautpadanActions.deleteactivitiesinfoRequest(activitiesinfoId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Yearlyactivities);
