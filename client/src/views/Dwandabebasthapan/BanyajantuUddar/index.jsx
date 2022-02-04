import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanyajantuUddarbibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import DwandabebasthapanActions from "../../../actions/dwandabebasthapan";
import {
  banyajantuuddarHeadings,
  districtList,
} from "../../../services/config";

export class BanyajantuUddar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "uddarlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "banyajantuuddar",
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
    var banyajantuuddarList = [];
    if (nextProps !== prevState) {
      banyajantuuddarList = nextProps.banyajantuuddarDataList.data;

      return {
        loc,
        banyajantuuddarList,
      };
    }
  }
  handlePer(e) {
    const { fromDate, toDate, distId, officeId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(fromDate, toDate, distId, officeId, 0, e);
  }
  handleFromDate(e) {
    const { distId, officeId, page, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e, 
      page: page-page,
  });
    this.fetchResults(e, toDate, distId, officeId, page, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, page, perPage } = this.state;
    this.setState({ 
      toDate: e, 
      page: page-page,
  });
    this.fetchResults(fromDate, e, distId, officeId, page, perPage);
  }
  handleDistrict(e) {
    const { fromDate, officeId, page, perPage, toDate } = this.state;
    this.setState({ 
      distId: e, 
      page: page-page,
  });
    this.fetchResults(fromDate, toDate, e, officeId, page, perPage);
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallBanyajantuuddar({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "miti",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { fromDate, toDate, distId, officeId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(
      fromDate,
      toDate,
      distId,
      officeId,
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
          pathname: `/dwandabebasthapan/banyajantuuddaredit/${item.banyajantu_uddar_id}`,
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
    const { item, page } = this.state;

    this.props.deleteBanyajantuuddar(item.banyajantu_uddar_id);
    this.setState({ 
      showDialog: !this.state.showDialog, 
      page: page-page,
    });
  }

  handleAdd() {
    this.props.history.push("/dwandabebasthapan/banyajantuuddaradd/new");
  }
  render() {
    const { loc, perPage, banyajantuuddarList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वन्यजन्तु उद्दार सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "banyajantuuddarlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banyajantuuddar"
                title="उद्दार मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banyajantuuddar" />
            </div>
            <BanyajantuUddarbibaran.List
              buttonName="+ वन्यजन्तु उद्दार"
              title="वन्यजन्तु उद्दार सम्बन्धि विवरण"
              pageCount={
                !isNil(banyajantuuddarList)
                  ? Math.ceil(banyajantuuddarList.total / perPage)
                  : 10
              }
              data={!isNil(banyajantuuddarList) ? banyajantuuddarList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={banyajantuuddarHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("banyajantuuddar")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "banyajantuuddar")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "banyajantuuddaradd") && (
          <BanyajantuUddarbibaran.Add
            title="+ वन्यजन्तु उद्दार"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanyajantuuddar(e)}
          />
        )}
        {equals(loc, "banyajantuuddaredit") && (
          <BanyajantuUddarbibaran.Edit
            title="वन्यजन्तु उद्दार सम्बन्धी विवरण शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanyajantuuddar(e, id)}
          />
        )}
      </div>
    );
  }
}

BanyajantuUddar.propsTypes = {
  banyajantuuddarDataList: PropTypes.any,
};

BanyajantuUddar.defaultProps = {
  banyajantuuddarDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  banyajantuuddarDataList: state.dwandabebasthapan.allbanyajantuuddarData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanyajantuuddar: (payload) =>
    dispatch(DwandabebasthapanActions.fetchallbanyajantuuddarRequest(payload)),
  addBanyajantuuddar: (payload) =>
    dispatch(DwandabebasthapanActions.addbanyajantuuddarRequest(payload)),
  updateBanyajantuuddar: (payload, banyajantuuddarId) =>
    dispatch(
      DwandabebasthapanActions.updatebanyajantuuddarRequest(
        payload,
        banyajantuuddarId
      )
    ),

  deleteBanyajantuuddar: (banyajantuuddarId) =>
    dispatch(
      DwandabebasthapanActions.deletebanyajantuuddarRequest(banyajantuuddarId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(BanyajantuUddar);
