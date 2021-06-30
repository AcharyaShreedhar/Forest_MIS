import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { SeedgardenplotsBibaran } from "../../../components";
import BanbibaranActions from "../../../actions/banbibaran";
import { seedgardenplotsHeadings } from "../../../services/config";

class Seedgardenplots extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "seedgardenplotslist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var seedgardenplotsList = [];
    if (nextProps !== prevState) {
      seedgardenplotsList = nextProps.seedgardenplotsDataList.data;
    }
    return { loc, seedgardenplotsList };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallSeedgardenplots({
      name: "established_date",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/banbibaran/seedgardenplotsedit/${item.plot_id}`,
          item,
        });
        break;
      }

      case "delete": {
        this.props.deleteSeedgardenplots(item.plot_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/banbibaran/seedgardenplotsadd/new");
  }
  render() {
    const { loc, perPage, seedgardenplotsList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "seedgardenplotslist") && (
          <SeedgardenplotsBibaran.List
            buttonName="+ बन बीउ बगैच/समबर्धन प्लटहरु"
            title="बन बीउ बगैच/समबर्धन प्लटहरु सम्बन्धी विवरण"
            pageCount={
              !isNil(seedgardenplotsList)
                ? Math.ceil(seedgardenplotsList.total / perPage)
                : 10
            }
            data={!isNil(seedgardenplotsList) ? seedgardenplotsList.list : []}
            user={user}
            headings={seedgardenplotsHeadings}
            onAdd={this.handleAdd}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "seedgardenplotsadd") && (
          <SeedgardenplotsBibaran.Add
            title="+ बन बीउ बगैच/समबर्धन प्लटहरु प्रविष्ट"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSeedgardenplots(e)}
          />
        )}
        {equals(loc, "seedgardenplotsedit") && (
          <SeedgardenplotsBibaran.Edit
            title="बन बीउ बगैच/समबर्धन प्लटहरु पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSeedgardenplots(e, id)}
          />
        )}
      </div>
    );
  }
}

Seedgardenplots.propTypes = {
  seedgardenplotsDataList: PropTypes.any,
};

Seedgardenplots.defaultProps = {
  seedgardenplotsDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  seedgardenplotsDataList: state.banbibaran.allplotbibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallSeedgardenplots: (payload) =>
    dispatch(BanbibaranActions.fetchallplotbibaranRequest(payload)),
  addSeedgardenplots: (payload) =>
    dispatch(BanbibaranActions.addplotbibaranRequest(payload)),

  updateSeedgardenplots: (payload, assetId) =>
    dispatch(BanbibaranActions.updateplotbibaranRequest(payload, assetId)),

  deleteSeedgardenplots: (assetId) =>
    dispatch(BanbibaranActions.deleteplotbibaranRequest(assetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Seedgardenplots);
