import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals } from "ramda";
import {
  YearlyActivities
  } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import {
  yearlyactivitiesHeadings,
} from "../../../services/config";


class Yearlyactivities extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "yearlyactivitieslist" };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    return { loc };
  }

  handleSelectMenu(event, item, path) {
    switch (event) {
      case "edit": {
        switch (path) {
          case "yearlyactivities": {
            this.props.history.push({
              pathname: `/activities/yearlyactivitiesedit/${item.activities_info_id}`,
              item,
            });
            break;
          }
          default:
            break;
        }
        break;
      }
      case "delete": {
        switch (path) {
          case "yearlyactivities": {
            this.props.deleteYearlyactivities(item.activities_info_id);
            break;
          }
          default:
            break;
        }
      }
      default:
        break;
    }
  }

  handleAdd(item) {
    switch (item) {
      case "yearlyactivities": {
        this.props.history.push("/activities/yearlyactivitiesadd/new");
        break;
      }
      
      default:
        break;
    }
  }
  render() {
    const yearlyactivitiesList = this.props.activitiesinfoDataList.data;
    
    const { loc } = this.state;

    return (
      <div>
        {equals(loc, "yearlyactivitieslist") && (
          <YearlyActivities.List
            buttonName="+ वार्षिक कार्यक्रम"
            title="वार्षिक कार्यक्रम सम्बन्धी विवरण"
            data={yearlyactivitiesList}
            headings={yearlyactivitiesHeadings}
            onAdd={() => this.handleAdd("yearlyactivities")}
            onSelect={this.handleSelectMenu}
          />
        )}
        {equals(loc, "yearlyactivitiesadd") && (
          <YearlyActivities.Add
            title="+ वार्षिक कार्यक्रम प्रविष्ट"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addYearlyactivities(e)}
          />
        )}
        {equals(loc, "yearlyactivitiesedit") && (
          <YearlyActivities.Edit
            title="वार्षिक कार्यक्रम पुनः प्रविष्ट"
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
  activitiesinfoDataList: state.biruwautpadan.allactivitiesinfoData,
  
});

const mapDispatchToProps = (dispatch) => ({
  
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
