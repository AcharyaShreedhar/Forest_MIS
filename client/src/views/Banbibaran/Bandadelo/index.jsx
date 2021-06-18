import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals } from "ramda";
import { BandadeloBibaran } from "../../../components";
import BandadelobibaranActions from "../../../actions/bandadelobibaran";
import { bandadeloHeadings } from "../../../services/config";


class Bandadelo extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "bandadelolist" };
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
          case "bandadelo": {
            this.props.history.push({
              pathname: `/banbibaran/bandadeloedit/${item.lilam_id}`,
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
          case "bandadelo": {
            this.props.deleteBandadelo(item.bandadelo_bibaran_id);
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
      case "bandadelo": {
        this.props.history.push("/banbibaran/bandadeloadd/new");
        break;
      }

      default:
        break;
    }
  }

  render() {
    const bandadelobibaranList = this.props.bandadelobibaranDataList
      ? this.props.bandadelobibaranDataList.data
      : [];

    const { loc } = this.state;
    console.log("location", loc);

    return (
      <div>
        {equals(loc, "bandadelolist") && (
          <BandadeloBibaran.List
            buttonName="+ वनडढेलो"
            title="वनडढेलो सम्बन्धि विवरण"
            data={bandadelobibaranList}
            headings={bandadeloHeadings}
            onAdd={() => this.handleAdd("bandadelo")}
            onSelect={this.handleSelectMenu}
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

  addBandadelo: (payload) =>
    dispatch(BandadelobibaranActions.addbandadelobibaranRequest(payload)),

  updateBandadelo: (payload, bandadeloBibaranId) =>
    dispatch(
      BandadelobibaranActions.updatebandadelobibaranRequest(payload, bandadeloBibaranId)
    ),

  deleteBanpaidawarlilam: (bandadeloBibaranId) =>
    dispatch(BandadelobibaranActions.deletebanpaidawarlilamRequest(bandadeloBibaranId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bandadelo);
