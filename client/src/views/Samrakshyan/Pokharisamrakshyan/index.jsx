import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  PokhariSamrakshyan,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import SamrakshyanActions from "../../../actions/samrakshyan";
import {
  pokharisamrakshyanHeadings,
  districtList,
} from "../../../services/config";

class Pokharisamrakshyan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "pokharisamrakshyanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "pokharisamrakshyan",
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
    this.handlePerCallback= this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var pokharisamrakshyanList = [];
    if (nextProps !== prevState) {
      pokharisamrakshyanList = nextProps.pokharisamrakshyanDataList.data;
    }

    return {
      loc,
      pokharisamrakshyanList,
    };
  }
  handlePer(e){
    this.setState({ page: 0 }, ()=> this.handlePerCallback(e));
  }
  handlePerCallback(e) {
    const { fromDate, toDate, distId, officeId, page } = this.state;
    this.setState({ 
      perPage: e,
     });
    this.fetchResults(fromDate, toDate, distId, officeId, page, e);
  }
  handleFromDate(e) {
    const { distId, officeId, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: 0,
    });
    this.fetchResults(e, toDate, distId, officeId, 0, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, perPage, fromDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: 0,
    });
    this.fetchResults(fromDate, e, distId, officeId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, officeId, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: 0,
    });
    this.fetchResults(fromDate, toDate, e, officeId, 0, perPage);
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallPokharisamrakshyan({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "karyakram_miti",
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
          pathname: `/samrakshyan/pokharisamrakshyanedit/${item.id}`,
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

    this.props.deletePokharisamrakshyan(item.id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: 0, 
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/samrakshyan/pokharisamrakshyanadd/new");
  }

  render() {
    const { loc, perPage, pokharisamrakshyanList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ पोखरी संरक्षण सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "pokharisamrakshyanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="pokharisamrakshyan"
                title="कार्यक्रम मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="pokharisamrakshyan" />
            </div>
            <PokhariSamrakshyan.List
              buttonName="+ पोखरी संरक्षण"
              title="पोखरी संरक्षण सम्बन्धि विवरण"
              pageCount={
                !isNil(pokharisamrakshyanList)
                  ? Math.ceil(pokharisamrakshyanList.total / perPage)
                  : 10
              }
              data={
                !isNil(pokharisamrakshyanList)
                  ? pokharisamrakshyanList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={pokharisamrakshyanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("pokharisamrakshyan")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "pokharisamrakshyanadd") && (
          <PokhariSamrakshyan.Add
            title="+ पोखरी संरक्षण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addPokharisamrakshyan(e)}
          />
        )}
        {equals(loc, "pokharisamrakshyanedit") && (
          <PokhariSamrakshyan.Edit
            title="पोखरी संरक्षण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updatePokharisamrakshyan(e, id)}
          />
        )}
      </div>
    );
  }
}

Pokharisamrakshyan.propsTypes = {
  pokharisamrakshyanDataList: PropTypes.any,
};

Pokharisamrakshyan.defaultProps = {
  pokharisamrakshyanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  pokharisamrakshyanDataList: state.samrakshyan.allsamrakshyanpokharinirmanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallPokharisamrakshyan: (payload) =>
    dispatch(
      SamrakshyanActions.fetchallsamrakshyanpokharinirmanRequest(payload)
    ),

  addPokharisamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.addsamrakshyanpokharinirmanRequest(payload)),

  updatePokharisamrakshyan: (payload, pokharisamrakshyanId) =>
    dispatch(
      SamrakshyanActions.updatesamrakshyanpokharinirmanRequest(
        payload,
        pokharisamrakshyanId
      )
    ),

  deletePokharisamrakshyan: (pokharisamrakshyanId) =>
    dispatch(
      SamrakshyanActions.deletesamrakshyanpokharinirmanRequest(
        pokharisamrakshyanId
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokharisamrakshyan);
