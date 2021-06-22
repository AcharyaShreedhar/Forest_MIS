import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { SawarisadhanBibaran } from "../../../components";
import SampatibibaranActions from "../../../actions/sampatibibaran";
import { sawarisadhanHeadings } from "../../../services/config";

class Sawarisadhan extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "sawarisadhanlist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var sawarisadhanList = [];
    if (nextProps != prevState) {
      sawarisadhanList = nextProps.sawarisadhanDataList.data;
    }
    return { loc, sawarisadhanList };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallSawarisadhan({
      name: "vehicle_type",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/sampatibibaran/sawarisadhanedit/${item.vehicle_id}`,
          item,
        });
        break;
      }

      case "delete": {
        this.props.deleteSawarisadhan(item.vehicle_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/sampatibibaran/sawarisadhanadd/new");
  }
  render() {
    const { loc, perPage, page, sawarisadhanList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "sawarisadhanlist") && (
          <SawarisadhanBibaran.List
            buttonName="+ सवारी साधन"
            title="सवारी साधन सम्बन्धी विवरण"
            pageCount={
              !isNil(sawarisadhanList)
                ? Math.ceil(sawarisadhanList.total / perPage)
                : 10
            }
            data={!isNil(sawarisadhanList) ? sawarisadhanList.list : []}
            user={user}
            headings={sawarisadhanHeadings}
            onAdd={this.handleAdd}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "sawarisadhanadd") && (
          <SawarisadhanBibaran.Add
            title="+ सवारी साधन प्रविष्ट"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSawarisadhan(e)}
          />
        )}
        {equals(loc, "sawarisadhanedit") && (
          <SawarisadhanBibaran.Edit
            title="सवारी साधन पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSawarisadhan(e, id)}
          />
        )}
      </div>
    );
  }
}

Sawarisadhan.propTypes = {
  sawarisadhanDataList: PropTypes.any,
};

Sawarisadhan.defaultProps = {
  sawarisadhanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  sawarisadhanDataList: state.sampatibibaran.allvehiclesData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallSawarisadhan: (payload) =>
    dispatch(SampatibibaranActions.fetchallvehiclesRequest(payload)),
  addSawarisadhan: (payload) =>
    dispatch(SampatibibaranActions.addvehiclesRequest(payload)),

  updateSawarisadhan: (payload, assetId) =>
    dispatch(SampatibibaranActions.updatevehiclesRequest(payload, assetId)),

  deleteSawarisadhan: (assetId) =>
    dispatch(SampatibibaranActions.deletevehiclesRequest(assetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sawarisadhan);

