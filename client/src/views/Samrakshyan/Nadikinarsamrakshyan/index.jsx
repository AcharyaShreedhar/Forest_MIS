import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  NadikinarSamrakshyan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SamrakshyanActions from "../../../actions/samrakshyan";
import {
  nadikinarsamrakshyanHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Nadikinarsamrakshyan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "nadikinarsamrakshyanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "nadikinarsamrakshyan",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var nadikinarsamrakshyanList = [];
    if (nextProps !== prevState) {
      nadikinarsamrakshyanList = nextProps.nadikinarsamrakshyanDataList.data;
    }
    return { loc, nadikinarsamrakshyanList };
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
    this.props.fetchallNadikinarsamrakshyan({
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
          pathname: `/samrakshyan/nadikinarsamrakshyanedit/${item.nadikinarsamrakshyan_id}`,
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

    this.props.deleteNadikinarsamrakshyan(item.nadikinarsamrakshyan_id);
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/samrakshyan/nadikinarsamrakshyanadd/new");
  }
  render() {
    const { loc, perPage, nadikinarsamrakshyanList, showDialog } = this.state;
    const { user } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ नदिकिनार संरक्षण सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "nadikinarsamrakshyanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="nadikinarsamrakshyan"
                title="कार्यक्रम मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="nadikinarsamrakshyan" />
            </div>
            <NadikinarSamrakshyan.List
              buttonName="+ नदिकिनार संरक्षण"
              title="नदिकिनार संरक्षण सम्बन्धी विवरण"
              pageCount={
                !isNil(nadikinarsamrakshyanList)
                  ? Math.ceil(nadikinarsamrakshyanList.total / perPage)
                  : 10
              }
              data={
                !isNil(nadikinarsamrakshyanList)
                  ? nadikinarsamrakshyanList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              headings={nadikinarsamrakshyanHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "nadikinarsamrakshyanadd") && (
          <NadikinarSamrakshyan.Add
            title="+ नदिकिनार संरक्षण विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addNadikinarsamrakshyan(e)}
          />
        )}
        {equals(loc, "nadikinarsamrakshyanedit") && (
          <NadikinarSamrakshyan.Edit
            title="नदिकिनार संरक्षण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateNadikinarsamrakshyan(e, id)}
          />
        )}
      </div>
    );
  }
}

Nadikinarsamrakshyan.propTypes = {
  nadikinarsamrakshyanList: PropTypes.any,
};

Nadikinarsamrakshyan.defaultProps = {
  nadikinarsamrakshyanList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  nadikinarsamrakshyanDataList: state.samrakshyan.allnadikinarsamrakshyanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallNadikinarsamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.fetchallnadikinarsamrakshyanRequest(payload)),
  addNadikinarsamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.addnadikinarsamrakshyanRequest(payload)),

  updateNadikinarsamrakshyan: (payload, nadikinarSamrakshyanId) =>
    dispatch(
      SamrakshyanActions.updatenadikinarsamrakshyanRequest(
        payload,
        nadikinarSamrakshyanId
      )
    ),

  deleteNadikinarsamrakshyan: (nadikinarSamrakshyanId) =>
    dispatch(
      SamrakshyanActions.deletenadikinarsamrakshyanRequest(
        nadikinarSamrakshyanId
      )
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nadikinarsamrakshyan);
