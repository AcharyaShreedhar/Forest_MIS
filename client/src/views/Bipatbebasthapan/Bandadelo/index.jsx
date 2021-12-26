import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BandadeloBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BipatbibaranActions from "../../../actions/bipatbibaran";
import { bandadeloHeadings, districtList } from "../../../services/config";

class Bandadelo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "bandadelolist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "bandadelo",
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
  handlePer(e) {
    const { fromDate, toDate, distId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(fromDate, toDate, distId, 0, e);
  }
  handleFromDate(e) {
    const { distId, perPage, toDate } = this.state;
    this.setState({ fromDate: e });
    this.fetchResults(e, toDate, distId, 0, perPage);
  }
  handleToDate(e) {
    const { distId, fromDate, perPage } = this.state;
    this.setState({ toDate: e });
    this.fetchResults(fromDate, e, distId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, perPage, toDate } = this.state;
    this.setState({ distId: e });
    this.fetchResults(fromDate, toDate, e, 0, perPage);
  }

  fetchResults(fromDate, toDate, distId, page, perPage) {
    this.props.fetchallBandadelo({
      fromDate,
      toDate,
      distId,
      name: "bandadelo_miti",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { fromDate, toDate, distId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(
      fromDate,
      toDate,
      distId,
      data.selected * perPage,
      perPage
    );
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item });
    this.setState({ path: path });
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/bipatbebasthapan/bandadeloedit/${item.bandadelo_bibaran_id}`,
          item,
        });

        break;
      }
      case "delete": {
        this.setState({ showDialog: !this.state.showDialog });
        break;
      }
      default:
        break;
    }
  }

  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDelete() {
    const { item } = this.state;

    this.props.deleteBandadelo(item.bandadelo_bibaran_id);
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/bipatbebasthapan/bandadeloadd/new");
  }

  render() {
    const { loc, perPage, bandadelobibaranList, showDialog } = this.state;
    const { user,role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वनडढेलो सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "bandadelolist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="bandadelo"
                title="डढेलो लागेको मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="bandadelo" />
            </div>
            <BandadeloBibaran.List
              buttonName="+ वनडढेलो"
              title="वनडढेलो सम्बन्धि विवरण"
              pageCount={
                !isNil(bandadelobibaranList)
                  ? Math.ceil(bandadelobibaranList.total / perPage)
                  : 10
              }
              data={
                !isNil(bandadelobibaranList) ? bandadelobibaranList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={bandadeloHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("bandadelo")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "bandadeloadd") && (
          <BandadeloBibaran.Add
            title="+ वनडढेलो"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBandadelo(e)}
          />
        )}
        {equals(loc, "bandadeloedit") && (
          <BandadeloBibaran.Edit
            title="वनडढेलो सम्बन्धी विवरण शंसोधन"
            user={user}
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
  user: state.app.user,
  role:state.app.user.user_type,
  bandadelobibaranDataList: state.bipatbibaran.allbandadelobibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBandadelo: (payload) =>
    dispatch(BipatbibaranActions.fetchallbandadelobibaranRequest(payload)),

  addBandadelo: (payload) =>
    dispatch(BipatbibaranActions.addbandadelobibaranRequest(payload)),

  updateBandadelo: (payload, bandadelobibaranId) =>
    dispatch(
    BipatbibaranActions.updatebandadelobibaranRequest(
        payload,
        bandadelobibaranId
      )
    ),

  deleteBandadelo: (bandadelobibaranId) =>
    dispatch(
    BipatbibaranActions.deletebandadelobibaranRequest(bandadelobibaranId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bandadelo);
