import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanyajantuUddarbibaran,
  Filter,
  ReportGenerator,
} from "../../../components";
import DwandabebasthapanActions from "../../../actions/dwandabebasthapan";
import {
  banyajantuuddarHeadings,
  districtList,
} from "../../../services/config";

export class BanyajantuUddar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "uddarlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 1,
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
    var banyajantuuddarList = [];
    if (nextProps !== prevState) {
      banyajantuuddarList = nextProps.banyajantuuddarDataList.data;

      return {
        loc,
        banyajantuuddarList,
      };
    }
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
    this.props.fetchallBanyajantuuddar({
      fromDate,
      toDate,
      distId,
      name: "miti",
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
          pathname: `/dwandabebasthapan/banyajantuuddaredit/${item.banyajantu_uddar_id}`,
          item,
        });
        break;
      }
      case "delete": {
        this.props.deleteBanyajantuUddar(item.banyajantu_uddar_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/dwandabebasthapan/banyajantuuddaradd/new");
  }
  render() {
    const { loc, perPage, banyajantuuddarList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "banyajantuuddarlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banyajantuuddar"
                title="उद्दार मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banyajantuuddar" />
            </div>
            <BanyajantuUddarbibaran.List
              buttonName="+ वन्यजन्तु उद्दार"
              title="वन्यजन्तु उद्दार सम्बन्धि विवरण"
              pageCount={
                !isNil(banyajantuuddarList)
                  ? Math.ceil(banyajantuuddarList.total / perPage)
                  : 10
              }
              data={!isNil(banyajantuuddarList) ? banyajantuuddarList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={banyajantuuddarHeadings}
              user={user}
              onAdd={() => this.handleAdd("banyajantuuddar")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "banyajantuuddar")}
            />
          </Fragment>
        )}
        {equals(loc, "banyajantuuddaradd") && (
          <BanyajantuUddarbibaran.Add
            title="+ वन्यजन्तु उद्दार"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanyajantuuddar(e)}
          />
        )}
        {equals(loc, "banyajantuuddaredit") && (
          <BanyajantuUddarbibaran.Edit
            title="वन्यजन्तु उद्दार पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanyajantuuddar(e, id)}
          />
        )}
      </div>
    );
  }
}

BanyajantuUddar.propsTypes = {
  banyajantuuddarDataList: PropTypes.any,
};

BanyajantuUddar.defaultProps = {
  banyajantuuddarDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banyajantuuddarDataList: state.dwandabebasthapan.allbanyajantuuddarData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanyajantuuddar: (payload) =>
    dispatch(DwandabebasthapanActions.fetchallbanyajantuuddarRequest(payload)),
  addBanyajantuuddar: (payload) =>
    dispatch(DwandabebasthapanActions.addbanyajantuuddarRequest(payload)),
  updateBanyajantuuddar: (payload, banyajantuuddarId) =>
    dispatch(
      DwandabebasthapanActions.updatebanyajantuuddarRequest(
        payload,
        banyajantuuddarId
      )
    ),

  deleteBanyajantuUddar: (banyajantuuddarId) =>
    dispatch(
      DwandabebasthapanActions.deletebanyajantuuddarRequest(banyajantuuddarId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(BanyajantuUddar);
