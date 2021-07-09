import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanyajantuXetibibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import DwandabebasthapanActions from "../../../actions/dwandabebasthapan";
import {
  banyajantuxetirahatHeadings,
  districtList,
} from "../../../services/config";

export class BanyajantuxetiRahat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "xetilist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "banyajantuxetirahat",
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
    var banyajantuxetirahatList = [];
    if (nextProps !== prevState) {
      banyajantuxetirahatList = nextProps.banyajantuxetirahatDataList.data;

      return {
        loc,
        banyajantuxetirahatList,
      };
    }
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
    this.props.fetchallBanyajantuxetirahat({
      fromDate,
      toDate,
      distId,
      name: "xeti_miti",
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
          pathname: `/dwandabebasthapan/banyajantuxetirahatedit/${item.banyajantuxeti_bibaran_id}`,
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
    const { item, path } = this.state;
    switch (path) {
      case "banyajantuxetirahat": {
        this.props.deleteBanyajantuxetirahat(item.banyajantuxeti_bibaran_id);
        break;
      }
      default:
        break;
    }
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/dwandabebasthapan/banyajantuxetirahatadd/new");
  }

  render() {
    const { loc, perPage, banyajantuxetirahatList, showDialog } = this.state;
    const { user } = this.props;

    return (
      <div>
      <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ वन्यजन्तु क्षेति राहात सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "banyajantuxetirahatlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banyajantuxetirahat"
                title="क्षतिको मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banyajantuxetirahat" />
            </div>
            <BanyajantuXetibibaran.List
              buttonName="+ वन्यजन्तु क्षेति राहात"
              title="वन्यजन्तु क्षेति राहात सम्बन्धि विवरण"
              pageCount={
                !isNil(banyajantuxetirahatList)
                  ? Math.ceil(banyajantuxetirahatList.total / perPage)
                  : 10
              }
              data={
                !isNil(banyajantuxetirahatList)
                  ? banyajantuxetirahatList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={banyajantuxetirahatHeadings}
              user={user}
              onAdd={() => this.handleAdd("banyajantuxetirahat")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) =>
                this.handlePageChange(e, "banyajantuxetirahat")
              }
            />
          </Fragment>
        )}
        {equals(loc, "banyajantuxetirahatadd") && (
          <BanyajantuXetibibaran.Add
            title="+ वन्यजन्तु क्षेति राहात"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanyajantuxetirahat(e)}
          />
        )}
        {equals(loc, "banyajantuxetirahatedit") && (
          <BanyajantuXetibibaran.Edit
            title="वन्यजन्तु क्षेति राहात पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanyajantuxetirahat(e, id)}
          />
        )}
      </div>
    );
  }
}

BanyajantuxetiRahat.propsTypes = {
  banyajantuxetirahatDataList: PropTypes.any,
};

BanyajantuxetiRahat.defaultProps = {
  banyajantuxetirahatDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banyajantuxetirahatDataList: state.dwandabebasthapan.allbanyajantuxetiData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanyajantuxetirahat: (payload) =>
    dispatch(DwandabebasthapanActions.fetchallbanyajantuxetiRequest(payload)),
  addBanyajantuxetirahat: (payload) =>
    dispatch(DwandabebasthapanActions.addbanyajantuxetiRequest(payload)),
  updateBanyajantuxetirahat: (payload, banyajantuxetiId) =>
    dispatch(
      DwandabebasthapanActions.updatebanyajantuxetiRequest(
        payload,
        banyajantuxetiId
      )
    ),

  deleteBanyajantuxetirahat: (banyajantuxetiId) =>
    dispatch(
      DwandabebasthapanActions.deletebanyajantuxetiRequest(banyajantuxetiId)
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BanyajantuxetiRahat);
