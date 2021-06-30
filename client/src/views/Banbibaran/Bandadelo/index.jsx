import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { BandadeloBibaran } from "../../../components";
import BandadelobibaranActions from "../../../actions/bandadelobibaran";
import { bandadeloHeadings } from "../../../services/config";

class Bandadelo extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "bandadelolist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var bandadelobibaranList = [];
    if (nextProps !== prevState) {
      bandadelobibaranList = nextProps.bandadelobibaranDataList.data;
    }

    return {
      loc,
      bandadelobibaranList,
    };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });
    this.props.fetchallBandadelo({
      name: "bandadelo_address",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item, path) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/banbibaran/bandadeloedit/${item.bandadelo_biabaran_id}`,
          item,
        });

        break;
      }
      case "delete": {
        this.props.deleteBandadelo(item.bandadelo_bibaran_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd(item) {
    switch (item) {
      case "bandadelo": {
        this.props.history.push("/banbibaran/bandadeloadd/new");
        break;
      }

      default:
        break;
    }
  }

  render() {
    const { loc, perPage, bandadelobibaranList } = this.state;

    return (
      <div>
        {equals(loc, "bandadelolist") && (
          <BandadeloBibaran.List
            buttonName="+ वनडढेलो"
            title="वनडढेलो सम्बन्धि विवरण"
            pageCount={
              !isNil(bandadelobibaranList)
                ? Math.ceil(bandadelobibaranList.total / perPage)
                : 10
            }
            data={!isNil(bandadelobibaranList) ? bandadelobibaranList.list : []}
            headings={bandadeloHeadings}
            onAdd={() => this.handleAdd("bandadelo")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "bandadeloadd") && (
          <BandadeloBibaran.Add
            title="+ वनडढेलो"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBandadelo(e)}
          />
        )}
        {equals(loc, "bandadeloedit") && (
          <BandadeloBibaran.Edit
            title="वनडढेलो पुनः प्रविष्ट"
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBandadelo(e, id)}
          />
        )}
      </div>
    );
  }
}

Bandadelo.propsTypes = {
  bandadelobibaranDataList: PropTypes.any,
};

Bandadelo.defaultProps = {
  bandadelobibaranDataList: {},
};

const mapStateToProps = (state) => ({
  bandadelobibaranDataList: state.bandadelobibaran.allbandadelobibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBandadelo: (payload) =>
    dispatch(BandadelobibaranActions.fetchallbandadelobibaranRequest(payload)),

  addBandadelo: (payload) =>
    dispatch(BandadelobibaranActions.addbandadelobibaranRequest(payload)),

  updateBandadelo: (payload, bandadelobibaranId) =>
    dispatch(
      BandadelobibaranActions.updatebandadelobibaranRequest(
        payload,
        bandadelobibaranId
      )
    ),

  deleteBandadelo: (bandadelobibaranId) =>
    dispatch(
      BandadelobibaranActions.deletebandadelobibaranRequest(bandadelobibaranId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bandadelo);
