import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { GharjaggaBibaran } from "../../../components";
import SampatibibaranActions from "../../../actions/sampatibibaran";
import { gharjaggaHeadings } from "../../../services/config";

class Gharjagga extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "gharjaggalist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var gharjaggaList = [];
    if (nextProps != prevState) {
      gharjaggaList = nextProps.gharjaggaDataList.data;
    }
    return { loc, gharjaggaList };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallGharjagga({
      name: "asset_type",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/sampatibibaran/gharjaggaedit/${item.asset_id}`,
          item,
        });
        break;
      }

      case "delete": {
        this.props.deleteGharjagga(item.asset_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/sampatibibaran/gharjaggaadd/new");
  }
  render() {
    const { loc, perPage, page, gharjaggaList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "gharjaggalist") && (
          <GharjaggaBibaran.List
            buttonName="+ घर जग्गा"
            title="घर जग्गा सम्बन्धी विवरण"
            pageCount={
              !isNil(gharjaggaList)
                ? Math.ceil(gharjaggaList.total / perPage)
                : 10
            }
            data={!isNil(gharjaggaList) ? gharjaggaList.list : []}
            user={user}
            headings={gharjaggaHeadings}
            onAdd={this.handleAdd}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "gharjaggaadd") && (
          <GharjaggaBibaran.Add
            title="+ घर जग्गा प्रविष्ट"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addGharjagga(e)}
          />
        )}
        {equals(loc, "gharjaggaedit") && (
          <GharjaggaBibaran.Edit
            title="घर जग्गा पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateGharjagga(e, id)}
          />
        )}
      </div>
    );
  }
}

Gharjagga.propTypes = {
  gharjaggaDataList: PropTypes.any,
};

Gharjagga.defaultProps = {
  gharjaggaDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  gharjaggaDataList: state.sampatibibaran.allassetsData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallGharjagga: (payload) =>
    dispatch(SampatibibaranActions.fetchallassetsRequest(payload)),
  addGharjagga: (payload) =>
    dispatch(SampatibibaranActions.addassetsRequest(payload)),

  updateGharjagga: (payload, assetId) =>
    dispatch(SampatibibaranActions.updateassetsRequest(payload, assetId)),

  deleteGharjagga: (assetId) =>
    dispatch(SampatibibaranActions.deleteassetsRequest(assetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gharjagga);
