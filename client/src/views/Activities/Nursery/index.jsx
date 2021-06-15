import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals } from "ramda";
import { BiruwaUtpadan } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import { biruwautpadanHeadings } from "../../../services/config";

import "./Nursery.scss";
class Nursery extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "biruwautpadanlist" };
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
          case "biruwautpadan": {
            this.props.history.push({
              pathname: `/activities/biruwautpadanedit/${item.biruwa_utpadan_id}`,
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
          case "biruwautpadan": {
            this.props.deleteBiruwautpadan(item.biruwa_utpadan_id);
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
      case "biruwautpadan": {
        this.props.history.push("/activities/biruwautpadanadd/new");
        break;
      }

      default:
        break;
    }
  }

  render() {
    console.log("Dataa...", this.props.biruwautpadanDataList);
    const biruwautpadanList = this.props.biruwautpadanDataList
      ? this.props.biruwautpadanDataList.data
      : [];

    const { loc } = this.state;
    console.log("location", loc);

    return (
      <div>
        {equals(loc, "nurserylist") && (
          <BiruwaUtpadan.List
            buttonName="+ विरुवा उत्पादन"
            title="विरुवा उत्पादन सम्बन्धी विवरण"
            data={biruwautpadanList}
            headings={biruwautpadanHeadings}
            onAdd={() => this.handleAdd("biruwautpadan")}
            onSelect={this.handleSelectMenu}
          />
        )}
        {equals(loc, "biruwautpadanadd") && (
          <BiruwaUtpadan.Add
            title="+ विरुवा उत्पादन"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBiruwautpadan(e)}
          />
        )}
        {equals(loc, "biruwautpadanedit") && (
          <BiruwaUtpadan.Edit
            title="विरुवा उत्पादन पुनः प्रविष्ट"
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBiruwautpadan(e, id)}
          />
        )}
      </div>
    );
  }
}

Nursery.propsTypes = {
  biruwautpadanDataList: PropTypes.any,
};

Nursery.defaultProps = {
  biruwautpadanDataLit: {},
};

const mapStateToProps = (state) => ({
  biruwautpadanDataList: state.biruwautpadan.allbiruwautpadanData,
});

const mapDispatchToProps = (dispatch) => ({
  //-------------biruwautpadan
  addBiruwautpadan: (payload) =>
    dispatch(BiruwautpadanActions.addbiruwautpadanRequest(payload)),

  updateBiruwautpadan: (payload, biruwautpadanId) =>
    dispatch(
      BiruwautpadanActions.updatebiruwautpadanRequest(payload, biruwautpadanId)
    ),

  deleteBiruwautpadan: (biruwautpadanId) =>
    dispatch(BiruwautpadanActions.deletebiruwautpadanRequest(biruwautpadanId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nursery);
