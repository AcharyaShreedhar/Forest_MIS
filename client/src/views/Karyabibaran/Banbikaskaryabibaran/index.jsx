import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { BanbikasKaryabibaran, Filter, ReportGenerator } from "../../../components";
import KaryabibaranActions from "../../../actions/karyabibaran";
import { banbikaskaryabibaranHeadings, districtList } from "../../../services/config";

class Banbikaskaryabibaran extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "banbikaskaryabibaranlist", distId: "%", perPage: 10, page: 1 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var banbikaskaryabibaranList = [];
    if (nextProps !== prevState) {
      banbikaskaryabibaranList = nextProps.banbikaskaryabibaranDataList.data;
    }
    return { loc, banbikaskaryabibaranList };
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
    this.props.fetchallBanbikaskaryabibaran({
      distId,
      name: "ban_type",
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
          pathname: `/karyabibaran/banbikaskaryabibaranedit/${item.banbikas_karyabibaran_id}`,
          item,
        });
        break;
      }

      case "delete": {
        this.props.deleteBanbikaskaryabibaran(item.banbikas_karyabibaran_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/karyabibaran/banbikaskaryabibaranadd/new");
  }
  render() {
    const { loc, perPage, banbikaskaryabibaranList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "banbikaskaryabibaranlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banbikaskaryabibaran"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
              <ReportGenerator id="banbikaskaryabibaran" />
            </div>
            <BanbikasKaryabibaran.List
              buttonName="+ वनविकास कार्यविवरण"
              title="वनविकास कार्यविवरण सम्बन्धी विवरण"
              pageCount={
                !isNil(banbikaskaryabibaranList)
                  ? Math.ceil(banbikaskaryabibaranList.total / perPage)
                  : 10
              }
              data={!isNil(banbikaskaryabibaranList) ? banbikaskaryabibaranList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              headings={banbikaskaryabibaranHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "banbikaskaryabibaranadd") && (
          <BanbikasKaryabibaran.Add
            title="+ वनविकास कार्यविवरण प्रविष्ट"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanbikaskaryabibaran(e)}
          />
        )}
        {equals(loc, "banbikaskaryabibaranedit") && (
          <BanbikasKaryabibaran.Edit
            title="वनविकास कार्यविवरण पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanbikaskaryabibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

Banbikaskaryabibaran.propTypes = {
  banbikaskaryabibaranDataList: PropTypes.any,
};

Banbikaskaryabibaran.defaultProps = {
  banbikaskaryabibaranDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banbikaskaryabibaranDataList: state.karyabibaran.allbanbikaskaryabibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanbikaskaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.fetchallbanbikaskaryayojanaRequest(payload)),
  addBanbikaskaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.addbanbikaskaryabibaranRequest(payload)),

  updateBanbikaskaryabibaran: (payload, banbikaskaryabibaranId) =>
    dispatch(KaryabibaranActions.updatebanbikaskaryabibaranRequest(payload, banbikaskaryabibaranId)),

  deleteBanbikaskaryabibaran: (banbikaskaryabibaranId) =>
    dispatch(KaryabibaranActions.deletebanbikaskaryabibaranRequest(banbikaskaryabibaranId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banbikaskaryabibaran);
