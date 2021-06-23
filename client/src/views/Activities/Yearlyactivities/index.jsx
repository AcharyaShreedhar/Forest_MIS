import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { YearlyActivities } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import { yearlyactivitiesHeadings } from "../../../services/config";

class Yearlyactivities extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "yearlyactivitieslist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var yearlyactivitiesList = [];
    if (nextProps != prevState) {
      yearlyactivitiesList = nextProps.activitiesinfoDataList.data;
    }
    return { loc, yearlyactivitiesList };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallYearlyactivities({
      name: "fiscal_year",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item, path) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/activities/yearlyactivitiesedit/${item.activities_info_id}`,
          item,
        });
        break;
      }
      case "delete": {
        this.props.deleteYearlyactivities(item.activities_info_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/activities/yearlyactivitiesadd/new");
  }
  render() {
    const { loc, perPage, page, yearlyactivitiesList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "yearlyactivitieslist") && (
          <YearlyActivities.List
            buttonName="+ वार्षिक कार्यक्रम"
            title="वार्षिक कार्यक्रम सम्बन्धी विवरण"
            pageCount={
              !isNil(yearlyactivitiesList)
                ? Math.ceil(yearlyactivitiesList.total / perPage)
                : 10
            }
            data={!isNil(yearlyactivitiesList) ? yearlyactivitiesList.list : []}
            user={user}
            headings={yearlyactivitiesHeadings}
            onAdd={() => this.handleAdd()}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "yearlyactivitiesadd") && (
          <YearlyActivities.Add
            title="+ वार्षिक कार्यक्रम प्रविष्ट"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addYearlyactivities(e)}
          />
        )}
        {equals(loc, "yearlyactivitiesedit") && (
          <YearlyActivities.Edit
            title="वार्षिक कार्यक्रम पुनः प्रविष्ट"
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
