import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { GharjaggaBibaran, Filter, ReportGenerator } from "../../../components";
import SampatibibaranActions from "../../../actions/sampatibibaran";
import { gharjaggaHeadings, districtList } from "../../../services/config";

class Gharjagga extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "gharjaggalist", distId: "%", perPage: 10, page: 1 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var gharjaggaList = [];
    if (nextProps !== prevState) {
      gharjaggaList = nextProps.gharjaggaDataList.data;
    }
    return { loc, gharjaggaList };
  }

  handlePer(e) {
    const { distId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(distId, 0, e);
  }
  handleDistrict(e, item) {
    const { perPage } = this.state;
    this.setState({ distId: e });
    this.fetchResults(e, 0, perPage);
  }

  fetchResults(distId, page, perPage) {
    this.props.fetchallGharjagga({
      distId,
      name: "asset_type",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { distId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(distId, data.selected * perPage, perPage);
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
    const { loc, perPage, gharjaggaList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "gharjaggalist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="gharjagga"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
              <ReportGenerator id="gharjagga" />
            </div>
            <GharjaggaBibaran.List
              buttonName="+ घर जग्गा"
              title="घर जग्गा सम्बन्धी विवरण"
              pageCount={
                !isNil(gharjaggaList)
                  ? Math.ceil(gharjaggaList.total / perPage)
                  : 10
              }
              data={!isNil(gharjaggaList) ? gharjaggaList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              headings={gharjaggaHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
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
