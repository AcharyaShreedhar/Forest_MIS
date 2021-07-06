import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { RojgarSrijana, Filter, ReportGenerator } from "../../../components";
import MiscellaneousActions from "../../../actions/miscellaneous";
import { rojgarsrijanaHeadings, districtList } from "../../../services/config";

class Rojgarsrijana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "rojgarsrijanalist",
      distId: "%",
      perPage: 10,
      page: 1,
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var rojgarsrijanaList = [];
    if (nextProps !== prevState) {
      rojgarsrijanaList = nextProps.rojgarsrijanaDataList.data;
    }

    return {
      loc,
      rojgarsrijanaList,
    };
  }
  handlePer(e) {
    const {  distId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults( distId, 0, e);
  }
  handleDistrict(e) {
    const { perPage } = this.state;
    this.setState({ distId: e });
    this.fetchResults( e, 0, perPage);
  }

  fetchResults( distId, page, perPage) {
    this.props.fetchallRojgarsrijana({
      distId,
      name: "banka_prakar",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { distId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(

      distId,
      data.selected * perPage,
      perPage
    );
  }

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/miscellaneous/rojgarsrijanaedit/${item.rojgar_srijana_id}`,
          item,
        });

        break;
      }
      case "delete": {
        this.props.deleteRojgarsrijana(item.rojgar_srijana_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/miscellaneous/rojgarsrijanaadd/new");
  }

  render() {
    const { loc, perPage, rojgarsrijanaList } = this.state;
    const { user } = this.props;
   
    return (
      <div>
        {equals(loc, "rojgarsrijanalist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="rojgarsrijana"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
              <ReportGenerator id="rojgarsrijana" />
            </div>
            <RojgarSrijana.List
              buttonName="+ रोजगार सिर्जना"
              title="रोजगार सिर्जना सम्बन्धि विवरण"
              pageCount={
                !isNil(rojgarsrijanaList)
                  ? Math.ceil(rojgarsrijanaList.total / perPage)
                  : 10
              }
              data={
                !isNil(rojgarsrijanaList) ? rojgarsrijanaList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={rojgarsrijanaHeadings}
              user={user}
              onAdd={() => this.handleAdd("rojgarsrijana")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "rojgarsrijanaadd") && (
          <RojgarSrijana.Add
            title="+ रोजगार सिर्जना"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addRojgarsrijana(e)}
          />
        )}
        {equals(loc, "rojgarsrijanaedit") && (
          <RojgarSrijana.Edit
            title="रोजगार सिर्जना पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateRojgarsrijana(e, id)}
          />
        )}
      </div>
    );
  }
}

Rojgarsrijana.propsTypes = {
  rojgarsrijanaDataList: PropTypes.any,
};

Rojgarsrijana.defaultProps = {
  rojgarsrijanaDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  rojgarsrijanaDataList: state.miscellaneous.allrojgarsrijanaData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.fetchallrojgarsrijanaRequest(payload)),

  addRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.addrojgarsrijanaRequest(payload)),

  updateRojgarsrijana: (payload, rojgarsrijanaId) =>
    dispatch(
        MiscellaneousActions.updaterojgarsrijanaRequest(
        payload,
        rojgarsrijanaId
      )
    ),

  deleteRojgarsrijana: (rojgarsrijanaId) =>
    dispatch(
        MiscellaneousActions.deleterojgarsrijanaRequest(rojgarsrijanaId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rojgarsrijana);
