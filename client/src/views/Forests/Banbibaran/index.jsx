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

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        alert("this is edit menu");
        break;
      }
      case "delete": {
        alert("this is delete menu");
        break;
      }
      default:
        break;
    }
  }

  handleAdd(item) {
    switch (item) {
      case "samudayikban": {
        this.props.history.push("/forests/samudayikban/new");
        break;
      }
      case "kabuliyatiban": {
        alert("this is kabuliyatiban");
        break;
      }
      case "dharmikban": {
        alert("this is dharmikban");
        break;
      }
      case "nijiban": {
        alert("this is nijiban");
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
        {equals(loc, "samudayikban") && (
          <SamudayikbanBibaran.Add
            buttonName="+ सामुदायिक वन"
            title="सामुदायिक वन सम्बन्धी विवरण"
            data={samudayikbanList}
            headings={samudayikbanHeadings}
            onAdd={() => this.handleAdd("samudayikban")}
            onSelect={this.handleSelectMenu}
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

export default connect(mapStateToProps, null)(Banbibaran);
