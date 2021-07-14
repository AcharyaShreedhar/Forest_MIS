import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  PanimuhanSamrakshyan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SamrakshyanActions from "../../../actions/samrakshyan";
import { panimuhansamrakshyanHeadings, districtList } from "../../../services/config";

class Panimuhansamrakshyan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "panumuhansamrakshyanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "panumuhansamrakshyan",
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
    var panumuhansamrakshyanList = [];
    if (nextProps !== prevState) {
      //panimuhansamrakshyanList = nextProps.panimuhansamrakshyanDataList.data;
    }

    return {
      loc,
      panumuhansamrakshyanList,
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
    this.props.fetchallPanimuhansamrakshyan({
      fromDate,
      toDate,
      distId,
      name: "karyakram_miti",
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
          pathname: `/samrakshyan/panimuhansamrakshyanedit/${item.panimuhansamrakshyan_id}`,
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

    this.props.deletePanimuhansamrakshyan(item.id);
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/samrakshyan/panimuhansamrakshyanadd/new");
  }

  render() {
    const { loc, perPage, panimuhansamrakshyanList, showDialog } = this.state;
    const { user } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ पानीमुहान संरक्षण सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "panimuhansamrakshyanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="panimuhansamrakshyan"
                title="कार्यक्रम मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="panimuhansamrakshyan" />
            </div>
            <PanimuhanSamrakshyan.List
              buttonName="+ पानीमुहान संरक्षण"
              title="पानीमुहान संरक्षण सम्बन्धि विवरण"
              pageCount={
                !isNil(panimuhansamrakshyanList)
                  ? Math.ceil(panimuhansamrakshyanList.total / perPage)
                  : 10
              }
              data={
                !isNil(panimuhansamrakshyanList) ? panimuhansamrakshyanList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={panimuhansamrakshyanHeadings}
              user={user}
              onAdd={() => this.handleAdd("panimuhansamrakshyan")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "panimuhansamrakshyanadd") && (
          <PanimuhanSamrakshyan.Add
            title="+ पानीमुहान संरक्षण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addPanimuhansamrakshyan(e)}
          />
        )}
        {equals(loc, "panimuhansamrakshyanedit") && (
          <PanimuhanSamrakshyan.Edit
            title="पानीमुहान संरक्षण पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updatePanimuhansamrakshyan(e, id)}
          />
        )}
      </div>
    );
  }
}

Panimuhansamrakshyan.propsTypes = {
  panimuhansamrakshyanDataList: PropTypes.any,
};

Panimuhansamrakshyan.defaultProps = {
  panimuhansamrakshyanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  panimuhansamrakshyanDataList: state.samrakshyan.allpanimuhansamrakshyanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallPanimuhansamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.fetchallpanimuhansamrakshyanRequest(payload)),

  addPanimuhansamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.addpanimuhansamrakshyanRequest(payload)),

  updatePanimuhansamrakshyan: (payload, panimuhansamrakshyanId) =>
    dispatch(
      SamrakshyanActions.updatepanimuhansamrakshyanRequest(
        payload,
        panimuhansamrakshyanId
      )
    ),

  deletePanimuhansamrakshyan: (panimuhansamrakshyanId) =>
    dispatch(
      SamrakshyanActions.deletepanimuhansamrakshyanRequest(panimuhansamrakshyanId)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Panimuhansamrakshyan);
