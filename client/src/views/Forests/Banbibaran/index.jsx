import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals } from "ramda";
import {
  SamudayikbanBibaran,
  DharmikbanBibaran,
  KabuliyatibanBibaran,
  NijibanBibaran,
} from "../../../components";
import BanbibaranActions from "../../../actions/banbibaran";
import {
  samudayikbanHeadings,
  dharmikbanHeadings,
  kabuliyatibanHeadings,
  nijibanHeadings,
} from "../../../services/config";
import "./Banbibaran.scss";

class Banbibaran extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "samudayiklist" };
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
          case "niji": {
            this.props.history.push({
              pathname: `/forests/nijibanedit/${item.nijiban_id}`,
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
        this.props.deleteSamudayikbanbibaran(item.samudayikban_id);
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
    const samudayikbanList = this.props.samudayikbanbibaranDataList.data;
    const dharmikbanList = this.props.dharmikbanbibaranDataList.data;
    const kabuliyatibanList = this.props.kabuliyatibanbibaranDataList.data;
    const nijibanList = this.props.nijibanbibaranDataList.data;
    const { loc } = this.state;

    return (
      <div>
        {equals(loc, "samudayikbanlist") && (
          <SamudayikbanBibaran.List
            buttonName="+ सामुदायिक वन"
            title="सामुदायिक वन सम्बन्धी विवरण"
            data={samudayikbanList}
            headings={samudayikbanHeadings}
            onAdd={() => this.handleAdd("samudayikban")}
            onSelect={this.handleSelectMenu}
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
            data={dharmikbanList}
            headings={dharmikbanHeadings}
            onAdd={() => this.handleAdd("dharmikban")}
            onSelect={this.handleSelectMenu}
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
            data={kabuliyatibanList}
            headings={kabuliyatibanHeadings}
            onAdd={() => this.handleAdd("kabuliyatiban")}
            onSelect={this.handleSelectMenu}
          />
        )}
        {equals(loc, "kabuliyatibanadd") && (
          <DharmikbanBibaran.Add
            title="+ कवुलियती वन"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addKabuliyatibanbibaran(e)}
          />
        )}
        {equals(loc, "nijibanlist") && (
          <NijibanBibaran.List
            buttonName="+ निजि वन"
            title="निजि वन सम्बन्धी विवरण"
            data={nijibanList}
            headings={nijibanHeadings}
            onAdd={() => this.handleAdd("nijiban")}
            onSelect={this.handleSelectMenu}
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

Banbibaran.propTypes = {
  samudayikbanbibaranDataList: PropTypes.any,
  dharmikbanbibaranDataList: PropTypes.any,
  kabuliyatibanbibaranDataList: PropTypes.any,
  nijibanbibaranDataList: PropTypes.any,
};

Banbibaran.defaultProps = {
  samudayikbanbibaranDataList: {},
  dharmikbanbibaranDataList: {},
  kabuliyatibanbibaranDataList: {},
  nijibanbibaranDataList: {},
};

const mapStateToProps = (state) => ({
  samudayikbanbibaranDataList: state.banbibaran.allsamudayikbanbibaranData,
  dharmikbanbibaranDataList: state.banbibaran.alldharmikbanbibaranData,
  kabuliyatibanbibaranDataList: state.banbibaran.allkabuliyatibanbibaranData,
  nijibanbibaranDataList: state.banbibaran.allnijibanbibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  addSamudayikbanbibaran: (payload) =>
    dispatch(BanbibaranActions.addsamudayikbanbibaranRequest(payload)),
  updateSamudayikbanbibaran: (payload, samudayikbanbibaranId) =>
    dispatch(
      BanbibaranActions.updatesamudayikbanbibaranRequest(
        payload,
        samudayikbanbibaranId
      )
    ),

  deleteSamudayikbanbibaran: (samudayikbanbibaranId) =>
    dispatch(
      BanbibaranActions.deletesamudayikbanbibaranRequest(samudayikbanbibaranId)
    ),

  addDharmikbanbibaran: (payload) =>
    dispatch(BanbibaranActions.adddharmikbanbibaranRequest(payload)),
  updateDharmikbanbibaran: (payload, dharmikbanbibaranId) =>
    dispatch(
      BanbibaranActions.updatedharmikbanbibaranRequest(
        payload,
        dharmikbanbibaranId
      )
    ),

  addKabuliyatibanbibaran: (payload) =>
    dispatch(BanbibaranActions.addkabuliyatibanbibaranRequest(payload)),

  addNijibanbibaran: (payload) =>
    dispatch(BanbibaranActions.addnijibanbibaranRequest(payload)),
  updateNijibibaran: (payload, nijibanbibaranId) =>
    dispatch(
      BanbibaranActions.updatenijibanbibaranRequest(payload, nijibanbibaranId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banbibaran);
