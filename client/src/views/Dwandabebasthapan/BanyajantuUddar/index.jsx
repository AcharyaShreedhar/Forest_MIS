import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals } from "ramda";
import { BanyajantuUddarbibaran } from "../../../components";
import DwandabebasthapanActions from "../../../actions/dwandabebasthapan";
import { banyajantuuddarHeadings } from "../../../services/config";

export class BanyajantuUddar extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "uddarlist" };
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
          case "banyajantuuddar": {
            this.props.history.push({
              pathname: `/dwandabebasthapan/banyajantuuddaredit/${item.banyajantu_uddar_id}`,
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
          case "banyajantuuddar": {
            this.props.deleteBanyajantuUddar(item.banyajantu_uddar_id);
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
      case "banyajantuuddar": {
        this.props.history.push("/dwandabebasthapan/banyajantuuddaradd/new");
        break;
      }

      default:
        break;
    }
  }

  render() {
    const banyajantuuddarList = this.props.banyajantuuddarDataList
      ? this.props.banyajantuuddarDataList.data
      : [];

    const { loc } = this.state;
    console.log("location", loc);

      return (
        <div>
          {equals(loc, "banyajantuuddarlist") && (
            <BanyajantuUddarbibaran.List
              buttonName="+ वन्यजन्तु उद्दार"
              title="वन्यजन्तु उद्दार सम्बन्धि विवरण"
              data={banyajantuuddarList}
              headings={banyajantuuddarHeadings}
              onAdd={() => this.handleAdd("banyajantuuddar")}
              onSelect={this.handleSelectMenu}
            />
          )}
          {equals(loc, "banyajantuuddaradd") && (
            <BanyajantuUddarbibaran.Add
              title="+ वन्यजन्तु उद्दार"
              onSelect={this.handleSelectMenu}
              onSubmit={(e) => this.props.addBanyajantuuddar(e)}
            />
          )}
          {equals(loc, "banyajantuuddaredit") && (
            <BanyajantuUddarbibaran.Edit
              title="वन्यजन्तु उद्दार पुनः प्रविष्ट"
              history={this.props.history}
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
    bbanyajantuuddarDataList: {},
  };
  
  const mapStateToProps = (state) => ({
    banyajantuuddarDataList: state.dwandabebasthapan.allbanyajantuuddarData,
  });
  
  const mapDispatchToProps = (dispatch) => ({
  
    addBanyajantuuddar: (payload) =>
      dispatch(DwandabebasthapanActions.addbanyajantuuddarRequest(payload)),
  
    updateBanyajantuuddar: (payload, banyajantuuddarId) =>
      dispatch(
        DwandabebasthapanActions.updatebanyajantuuddarRequest(payload, banyajantuuddarId)
      ),
  
    deleteBanyajantuUddar: (banyajantuuddarId) =>
      dispatch(DwandabebasthapanActions.deletebanyajantuuddarRequest(banyajantuuddarId)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(BanyajantuUddar);
  
    

