import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, length, isNil } from "ramda";
import {
  SamudayikbanBibaran,
  DharmikbanBibaran,
  KabuliyatibanBibaran,
  NijibanBibaran,
} from "../../../components";
import BankaprakarActions from "../../../actions/bankaprakar";
import {
  samudayikbanHeadings,
  dharmikbanHeadings,
  kabuliyatibanHeadings,
  nijibanHeadings,
} from "../../../services/config";
import "./Bankaprakar.scss";

class Bankaprakar extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "samudayiklist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var samudayikbanList = [];
    var dharmikbanList = [];
    var kabuliyatibanList = [];
    var nijibanList = [];
    if (nextProps != prevState) {
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

  handlePageChange(data, item) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });
    switch (item) {
      case "samudayikban": {
        this.props.fetchallSamudayikbanbibaran({
          name: "samydayikban_name",
          page: data.selected * perPage,
          perPage,
        });
        break;
      }
      case "dharmikban": {
        this.props.fetchallDharmikbanbibaran({
          name: "dharmikban_name",
          page: data.selected * perPage,
          perPage,
        });
        break;
      }
      case "kabuliyatiban": {
        this.props.fetchallKabuliyatibanbibaran({
          name: "entry_date",
          page: data.selected * perPage,
          perPage,
        });
        break;
      }
      case "nijiban": {
        this.props.fetchallNijibanbibaran({
          name: "swikrit_miti",
          page: data.selected * perPage,
          perPage,
        });
        break;
      }
      default:
        break;
    }
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
            this.props.deleteSamudayikbanbibaran(item.samudayikban_id);
            break;
          }
          case "dharmik": {
            this.props.deleteDharmikbanbibaran(item.dharmikban_id);
            break;
          }
          case "kabuliyati": {
            this.props.deleteKabuliyatibanbibaran(
              item.kabuliyatiban_bibaran_id
            );
            break;
          }
          case "niji": {
            this.props.deleteNijibanbibaran(item.nijiban_bibaran_id);
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
      page,
      samudayikbanList,
      dharmikbanList,
      kabuliyatibanList,
      nijibanList,
    } = this.state;
    console.log("dharmikbanlist", dharmikbanList.list);

    return (
      <div>
        {equals(loc, "samudayikbanlist") && (
          <SamudayikbanBibaran.List
            buttonName="+ सामुदायिक वन"
            title="सामुदायिक वन सम्बन्धी विवरण"
            pageCount={
              !isNil(samudayikbanList)
                ? Math.ceil(samudayikbanList.total / perPage)
                : 10
            }
            data={!isNil(samudayikbanList) ? samudayikbanList.list : []}
            headings={samudayikbanHeadings}
            onAdd={() => this.handleAdd("samudayikban")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "samudayikban")}
          />
        )}
        {equals(loc, "samudayikbanadd") && (
          <SamudayikbanBibaran.Add
            title="+ सामुदायिक वन"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSamudayikbanbibaran(e)}
          />
        )}
        {equals(loc, "samudayikbanedit") && (
          <SamudayikbanBibaran.Edit
            title="सामुदायिक वन पुनः प्रविष्ट"
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSamudayikbanbibaran(e, id)}
          />
        )}
        {equals(loc, "dharmikbanlist") && (
          <DharmikbanBibaran.List
            buttonName="+ धार्मिक बन "
            title="धर्मिक वन सम्बन्धी विवरण"
            pageCount={
              !isNil(dharmikbanList)
                ? Math.ceil(dharmikbanList.total / perPage)
                : 10
            }
            data={!isNil(dharmikbanList) ? dharmikbanList.list : []}
            headings={dharmikbanHeadings}
            onAdd={() => this.handleAdd("dharmikban")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "dharmikban")}
          />
        )}
        {equals(loc, "dharmikbanadd") && (
          <DharmikbanBibaran.Add
            title="+ धार्मिक बन"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addDharmikbanbibaran(e)}
          />
        )}
        {equals(loc, "dharmikbanedit") && (
          <DharmikbanBibaran.Edit
            title="धार्मिक बन पुनः प्रविष्ट"
            history={this.props.history}
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
            onAdd={() => this.handleAdd("kabuliyatiban")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "kabuliyatiban")}
          />
        )}
        {equals(loc, "kabuliyatibanadd") && (
          <KabuliyatibanBibaran.Add
            title="+ कवुलियती वन"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addKabuliyatibanbibaran(e)}
          />
        )}
        {equals(loc, "kabuliyatibanedit") && (
          <KabuliyatibanBibaran.Edit
            title="कवुलियती वन पुनः प्रविष्ट"
            history={this.props.history}
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
            onAdd={() => this.handleAdd("nijiban")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "nijiban")}
          />
        )}
        {equals(loc, "nijibanadd") && (
          <NijibanBibaran.Add
            title="+ निजि वन"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addNijibanbibaran(e)}
          />
        )}
        {equals(loc, "nijibanedit") && (
          <NijibanBibaran.Edit
            title="निजि वन पुनः प्रविष्ट"
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
