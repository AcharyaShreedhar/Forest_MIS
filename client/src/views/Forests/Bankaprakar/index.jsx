import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  DharmikbanBibaran,
  Filter,
  KabuliyatibanBibaran,
  NijibanBibaran,
  SamudayikbanBibaran,
  ReportGenerator,
} from "../../../components";
import BankaprakarActions from "../../../actions/bankaprakar";
import {
  samudayikbanHeadings,
  dharmikbanHeadings,
  kabuliyatibanHeadings,
  nijibanHeadings,
  districtList,
} from "../../../services/config";
import "./Bankaprakar.scss";

class Bankaprakar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "samudayiklist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
    };
    this.fetchResults = this.fetchResults.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var samudayikbanList = [];
    var dharmikbanList = [];
    var kabuliyatibanList = [];
    var nijibanList = [];

    if (nextProps !== prevState) {
      samudayikbanList = nextProps.samudayikbanbibaranDataList.data;
      dharmikbanList = nextProps.dharmikbanbibaranDataList.data;
      nijibanList = nextProps.nijibanbibaranDataList.data;
      kabuliyatibanList = nextProps.kabuliyatibanbibaranDataList.data;
    }

    return {
      loc,
      samudayikbanList,
      dharmikbanList,
      nijibanList,
      kabuliyatibanList,
    };
  }

  handlePer(e, item) {
    const { fromDate, toDate, distId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(fromDate, toDate, distId, 0, e, item);
  }
  handleFromDate(e, item) {
    const { distId, perPage, toDate } = this.state;
    this.setState({ fromDate: e });
    this.fetchResults(e, toDate, distId, 0, perPage, item);
  }

  handleToDate(e, item) {
    const { distId, fromDate, perPage } = this.state;
    this.setState({ toDate: e });
    this.fetchResults(fromDate, e, distId, 0, perPage, item);
  }

  handleDistrict(e, item) {
    const { fromDate, perPage, toDate } = this.state;
    this.setState({ distId: e });
    this.fetchResults(fromDate, toDate, e, 0, perPage, item);
  }

  fetchResults(fromDate, toDate, distId, page, perPage, item) {
    switch (item) {
      case "samudayikban": {
        this.props.fetchallSamudayikbanbibaran({
          fromDate,
          toDate,
          distId,
          name: "handover_date",
          page: page,
          perPage,
        });
        break;
      }
      case "dharmikban": {
        this.props.fetchallDharmikbanbibaran({
          fromDate,
          toDate,
          distId,
          name: "handover_date",
          page: page,
          perPage,
        });
        break;
      }
      case "kabuliyatiban": {
        this.props.fetchallKabuliyatibanbibaran({
          name: "entry_date",
          page: page,
          perPage,
        });
        break;
      }
      case "nijiban": {
        this.props.fetchallNijibanbibaran({
          name: "swikrit_miti",
          page: page,
          perPage,
        });
        break;
      }
      default:
        break;
    }
  }

  handlePageChange(data, item) {
    const { fromDate, toDate, distId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(
      fromDate,
      toDate,
      distId,
      data.selected * perPage,
      perPage,
      item
    );
  }

  handleSelectMenu(event, item, path) {
    switch (event) {
      case "edit": {
        switch (path) {
          case "samudayik": {
            this.props.history.push({
              pathname: `/forests/samudayikbanedit/${item.samudayikban_id}`,
              item,
            });
            break;
          }
          case "dharmik": {
            this.props.history.push({
              pathname: `/forests/dharmikbanedit/${item.dharmikban_id}`,
              item,
            });
            break;
          }
          case "kabuliyati": {
            this.props.history.push({
              pathname: `/forests/kabuliyatibanedit/${item.kabuliyatiban_bibaran_id}`,
              item,
            });
            break;
          }
          case "niji": {
            this.props.history.push({
              pathname: `/forests/nijibanedit/${item.nijiban_bibaran_id}`,
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
          case "samudayik": {
            this.props.deleteSamudayikbanbibaran(item.darta_no);
            break;
          }
          case "dharmik": {
            this.props.deleteDharmikbanbibaran(item.darta_no);
            break;
          }
          case "kabuliyati": {
            this.props.deleteKabuliyatibanbibaran(item.darta_no);
            break;
          }
          case "niji": {
            this.props.deleteNijibanbibaran(item.darta_no);
            break;
          }
          default:
            break;
        }
        break;
      }
      default:
        break;
    }
  }

  handleAdd(item) {
    switch (item) {
      case "samudayikban": {
        this.props.history.push("/forests/samudayikbanadd/new");
        break;
      }
      case "kabuliyatiban": {
        this.props.history.push("/forests/kabuliyatibanadd/new");
        break;
      }
      case "dharmikban": {
        this.props.history.push("/forests/dharmikbanadd/new");
        break;
      }
      case "nijiban": {
        this.props.history.push("/forests/nijibanadd/new");
        break;
      }

      default:
        break;
    }
  }
  render() {
    const {
      loc,
      perPage,
      samudayikbanList,
      dharmikbanList,
      kabuliyatibanList,
      nijibanList,
    } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "samudayikbanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="samudayikban"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="samudayikban" />
            </div>
            <SamudayikbanBibaran.List
              buttonName="+ सामुदायिक वन"
              title="सामुदायिक वन सम्बन्धी विवरण"
              pageCount={
                !isNil(samudayikbanList)
                  ? Math.ceil(samudayikbanList.total / perPage)
                  : 10
              }
              data={!isNil(samudayikbanList) ? samudayikbanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={samudayikbanHeadings}
              user={user}
              onAdd={() => this.handleAdd("samudayikban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "samudayikban")}
            />
          </Fragment>
        )}
        {equals(loc, "samudayikbanadd") && (
          <SamudayikbanBibaran.Add
            title="+ सामुदायिक वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSamudayikbanbibaran(e)}
          />
        )}
        {equals(loc, "samudayikbanedit") && (
          <SamudayikbanBibaran.Edit
            title="सामुदायिक वन पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSamudayikbanbibaran(e, id)}
          />
        )}
        {equals(loc, "dharmikbanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="dharmikban"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="dharmikban" />
            </div>
            <DharmikbanBibaran.List
              buttonName="+ धार्मिक बन "
              title="धर्मिक वन सम्बन्धी विवरण"
              pageCount={
                !isNil(dharmikbanList)
                  ? Math.ceil(dharmikbanList.total / perPage)
                  : 10
              }
              data={!isNil(dharmikbanList) ? dharmikbanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={dharmikbanHeadings}
              user={user}
              onAdd={() => this.handleAdd("dharmikban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "dharmikban")}
            />
          </Fragment>
        )}
        {equals(loc, "dharmikbanadd") && (
          <DharmikbanBibaran.Add
            title="+ धार्मिक बन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addDharmikbanbibaran(e)}
          />
        )}
        {equals(loc, "dharmikbanedit") && (
          <DharmikbanBibaran.Edit
            title="धार्मिक बन पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateDharmikbanbibaran(e, id)}
          />
        )}
        {equals(loc, "kabuliyatibanlist") && (
          <KabuliyatibanBibaran.List
            buttonName="+ कवुलियती वन "
            title="कवुलियती वन सम्बन्धी विवरण"
            pageCount={
              !isNil(kabuliyatibanList)
                ? Math.ceil(kabuliyatibanList.total / perPage)
                : 10
            }
            data={!isNil(kabuliyatibanList) ? kabuliyatibanList.list : []}
            headings={kabuliyatibanHeadings}
            user={user}
            onAdd={() => this.handleAdd("kabuliyatiban")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "kabuliyatiban")}
          />
        )}
        {equals(loc, "kabuliyatibanadd") && (
          <KabuliyatibanBibaran.Add
            title="+ कवुलियती वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addKabuliyatibanbibaran(e)}
          />
        )}
        {equals(loc, "kabuliyatibanedit") && (
          <KabuliyatibanBibaran.Edit
            title="कवुलियती वन पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateKabuliyatibanbibaran(e, id)}
          />
        )}
        {equals(loc, "nijibanlist") && (
          <NijibanBibaran.List
            buttonName="+ निजि वन"
            title="निजि वन सम्बन्धी विवरण"
            pageCount={
              !isNil(nijibanList) ? Math.ceil(nijibanList.total / perPage) : 10
            }
            data={!isNil(nijibanList) ? nijibanList.list : []}
            headings={nijibanHeadings}
            user={user}
            onAdd={() => this.handleAdd("nijiban")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "nijiban")}
          />
        )}
        {equals(loc, "nijibanadd") && (
          <NijibanBibaran.Add
            title="+ निजि वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addNijibanbibaran(e)}
          />
        )}
        {equals(loc, "nijibanedit") && (
          <NijibanBibaran.Edit
            title="निजि वन पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateNijibanbibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

Bankaprakar.propTypes = {
  samudayikbanbibaranDataList: PropTypes.any,
  dharmikbanbibaranDataList: PropTypes.any,
  kabuliyatibanbibaranDataList: PropTypes.any,
  nijibanbibaranDataList: PropTypes.any,
};

Bankaprakar.defaultProps = {
  samudayikbanbibaranDataList: {},
  dharmikbanbibaranDataList: {},
  kabuliyatibanbibaranDataList: {},
  nijibanbibaranDataList: {},
};

const mapStateToProps = (state) => ({
  districts: state.app.alldistrictsData,
  user: state.app.user,
  samudayikbanbibaranDataList: state.bankaprakar.allsamudayikbanbibaranData,
  dharmikbanbibaranDataList: state.bankaprakar.alldharmikbanbibaranData,
  kabuliyatibanbibaranDataList: state.bankaprakar.allkabuliyatibanbibaranData,
  nijibanbibaranDataList: state.bankaprakar.allnijibanbibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  //--------------------------Samudayikban
  fetchallSamudayikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallsamudayikbanbibaranRequest(payload)),
  addSamudayikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.addsamudayikbanbibaranRequest(payload)),
  updateSamudayikbanbibaran: (payload, samudayikbanbibaranId) =>
    dispatch(
      BankaprakarActions.updatesamudayikbanbibaranRequest(
        payload,
        samudayikbanbibaranId
      )
    ),

  deleteSamudayikbanbibaran: (samudayikbanbibaranId) =>
    dispatch(
      BankaprakarActions.deletesamudayikbanbibaranRequest(samudayikbanbibaranId)
    ),
  //--------------------------Dharmikban
  fetchallDharmikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchalldharmikbanbibaranRequest(payload)),
  addDharmikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.adddharmikbanbibaranRequest(payload)),
  updateDharmikbanbibaran: (payload, dharmikbanbibaranId) =>
    dispatch(
      BankaprakarActions.updatedharmikbanbibaranRequest(
        payload,
        dharmikbanbibaranId
      )
    ),
  deleteDharmikbanbibaran: (dharmikbanbibaranId) =>
    dispatch(
      BankaprakarActions.deletedharmikbanbibaranRequest(dharmikbanbibaranId)
    ),

  //--------------------------Kabuliyatiban
  fetchallKabuliyatibanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallkabuliyatibanbibaranRequest(payload)),
  addKabuliyatibanbibaran: (payload) =>
    dispatch(BankaprakarActions.addkabuliyatibanbibaranRequest(payload)),
  updateKabuliyatibanbibaran: (payload, kabuliyatibanbibaranId) =>
    dispatch(
      BankaprakarActions.updatekabuliyatibanbibaranRequest(
        payload,
        kabuliyatibanbibaranId
      )
    ),
  deleteKabuliyatibanbibaran: (kabuliyatibanbibaranId) =>
    dispatch(
      BankaprakarActions.deletekabuliyatibanbibaranRequest(
        kabuliyatibanbibaranId
      )
    ),

  //--------------------------Nijiban
  fetchallNijibanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallnijibanbibaranRequest(payload)),
  addNijibanbibaran: (payload) =>
    dispatch(BankaprakarActions.addnijibanbibaranRequest(payload)),
  updateNijibanbibaran: (payload, nijibanbibaranId) =>
    dispatch(
      BankaprakarActions.updatenijibanbibaranRequest(payload, nijibanbibaranId)
    ),
  deleteNijibanbibaran: (nijibanbibaranId) =>
    dispatch(BankaprakarActions.deletenijibanbibaranRequest(nijibanbibaranId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bankaprakar);
