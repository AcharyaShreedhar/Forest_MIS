import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { Brixyaropan } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import { brixyaropanHeadings } from "../../../services/config";

class Plantation extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "brixyaropanlist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var brixyaropanList = [];
    if (nextProps !== prevState) {
      brixyaropanList = nextProps.brixyaropanDataList.data;
    }
    return { brixyaropanList, loc };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallBrixyaropan({
      name: "brixyaropan_thegana",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item, path) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/activities/brixyaropanedit/${item.brixyaropan_id}`,
          item,
        });
        break;
      }
    //   case "delete": {
    //     this.props.deleteBrixyaropan(item.brixyaropan_id);
    //     break;
    //   }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/activities/brixyaropanadd/new");
  }

  render() {
    const { brixyaropanList, loc, perPage } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "plantationlist") && (
          <Brixyaropan.List
            buttonName="+ वृक्षरोपण"
            title="वृक्षरोपण सम्बन्धी विवरण"
            pageCount={
              !isNil(brixyaropanList)
                ? Math.ceil(brixyaropanList.total / perPage)
                : 10
            }
            data={!isNil(brixyaropanList) ? brixyaropanList.list : []}
            user={user}
            headings={brixyaropanHeadings}
            onAdd={() => this.handleAdd()}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "brixyaropanadd") && (
          <Brixyaropan.Add
            title="+ वृक्षरोपण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBrixyaropan(e)}
          />
        )}
        {equals(loc, "brixyaropanedit") && (
          <Brixyaropan.Edit
            title="वृक्षरोपण पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBrixyaropan(e, id)}
          />
        )}
      </div>
    );
  }
}

Plantation.propsTypes = {
  brixyaropanDataList: PropTypes.any,
};

Plantation.defaultProps = {
  brixyaropanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  brixyaropanDataList: state.biruwautpadan.allbrixyaropanData,
});

const mapDispatchToProps = (dispatch) => ({
  //-------------biruwautpadan
  fetchallBrixyaropan: (payload) =>
    dispatch(BiruwautpadanActions.fetchallbrixyaropanRequest(payload)),

  
});

export default connect(mapStateToProps, mapDispatchToProps)(Plantation);