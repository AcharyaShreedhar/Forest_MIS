import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  KarmachariBibaran,
  Filter,
  ReportGenerator,
} from "../../../components";
import KarmacharibibaranActions from "../../../actions/karmacharibibaran";
import {
  karmacharibibaranHeadings,
  districtList,
} from "../../../services/config";

class Karmacharibibaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "karmacharibibaranlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var karmacharibibaranList = [];
    if (nextProps !== prevState) {
      karmacharibibaranList = nextProps.karmacharibibaranDataList.data;
    }
    return { loc, karmacharibibaranList };
  }
  handlePer(e) {
    const { fromDate, toDate, distId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(fromDate, toDate, distId, 0, e);
  }
  handleFromDate(e) {
    const { distId, perPage, toDate } = this.state;
    this.setState({ fromDate: e });
    this.fetchResults(e, toDate, distId, 0, perPage);
  }
  handleToDate(e) {
    const { distId, fromDate, perPage } = this.state;
    this.setState({ toDate: e });
    this.fetchResults(fromDate, e, distId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, perPage, toDate } = this.state;
    this.setState({ distId: e });
    this.fetchResults(fromDate, toDate, e, 0, perPage);
  }

  fetchResults(fromDate, toDate, distId, page, perPage) {
    this.props.fetchallKarmacharibibaran({
      fromDate,
      toDate,
      distId,
      name: "emp_appoint_date",
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
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/karmachari/karmacharibibaranedit/${item.emp_id}`,
          item,
        });
        break;
      }
      case "delete": {
        this.props.deleteKarmacharibibaran(item.emp_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/karmachari/karmacharibibaranadd/new");
  }

  render() {
    const { loc, perPage, karmacharibibaranList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "karmacharibibaranlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="karmacharibibaran"
                title="अपोइन्ट मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="karmacharibibaran" />
            </div>
            <KarmachariBibaran.List
              buttonName="+  कर्मचारी विवरण"
              title="कर्मचारी विवरण सम्बन्धि विवरण"
              pageCount={
                !isNil(karmacharibibaranList)
                  ? Math.ceil(karmacharibibaranList.total / perPage)
                  : 10
              }
              data={
                !isNil(karmacharibibaranList) ? karmacharibibaranList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              headings={karmacharibibaranHeadings}
              onAdd={() => this.handleAdd("karmacharibibaran")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "karmacharibibaranadd") && (
          <KarmachariBibaran.Add
            title="+ कर्मचारी विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addKarmacharibibaran(e)}
          />
        )}
        {equals(loc, "karmacharibibaranedit") && (
          <KarmachariBibaran.Edit
            title="कर्मचारी विवरण पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateKarmacharibibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

Karmacharibibaran.propsTypes = {
  karmacharibibaranDataList: PropTypes.any,
};

Karmacharibibaran.defaultProps = {
  karmacharibibaranDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  karmacharibibaranDataList: state.karmacharibibaran.allemployeesData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallKarmacharibibaran: (payload) =>
    dispatch(KarmacharibibaranActions.fetchallemployeesRequest(payload)),
  addKarmacharibibaran: (payload) =>
    dispatch(KarmacharibibaranActions.addemployeesRequest(payload)),
  updateKarmacharibibaran: (payload, employeeId) =>
    dispatch(
      KarmacharibibaranActions.updateemployeesRequest(payload, employeeId)
    ),
  deleteKarmacharibibaran: (employeeId) =>
    dispatch(KarmacharibibaranActions.deleteemployeesRequest(employeeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Karmacharibibaran);
