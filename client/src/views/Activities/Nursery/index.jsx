import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { BiruwaUtpadan } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import { biruwautpadanHeadings } from "../../../services/config";

import "./Nursery.scss";
class Nursery extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "biruwautpadanlist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var biruwautpadanList = [];
    if (nextProps !== prevState) {
      biruwautpadanList = nextProps.biruwautpadanDataList.data;
    }
    return { biruwautpadanList, loc };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallBiruwautpadan({
      name: "arthik_barsa",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item, path) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/activities/biruwautpadanedit/${item.biruwa_utpadan_id}`,
          item,
        });
        break;
      }
      case "delete": {
        this.props.deleteBiruwautpadan(item.biruwa_utpadan_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/activities/biruwautpadanadd/new");
  }

  render() {
    const { biruwautpadanList, loc, perPage } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "nurserylist") && (
          <BiruwaUtpadan.List
            buttonName="+ विरुवा उत्पादन"
            title="विरुवा उत्पादन सम्बन्धी विवरण"
            pageCount={
              !isNil(biruwautpadanList)
                ? Math.ceil(biruwautpadanList.total / perPage)
                : 10
            }
            data={!isNil(biruwautpadanList) ? biruwautpadanList.list : []}
            user={user}
            headings={biruwautpadanHeadings}
            onAdd={() => this.handleAdd()}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "biruwautpadanadd") && (
          <BiruwaUtpadan.Add
            title="+ विरुवा उत्पादन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBiruwautpadan(e)}
          />
        )}
        {equals(loc, "biruwautpadanedit") && (
          <BiruwaUtpadan.Edit
            title="विरुवा उत्पादन पुनः प्रविष्ट"
            user={user}
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
  biruwautpadanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  biruwautpadanDataList: state.biruwautpadan.allbiruwautpadanData,
});

const mapDispatchToProps = (dispatch) => ({
  //-------------biruwautpadan
  fetchallBiruwautpadan: (payload) =>
    dispatch(BiruwautpadanActions.fetchallbiruwautpadanRequest(payload)),

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
