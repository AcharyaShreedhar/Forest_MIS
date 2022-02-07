import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { Brixyaropan, Filter, ReportGenerator, ConfirmationDialoge } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import { brixyaropanHeadings,districtList } from "../../../services/config";

class Plantation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "brixyaropanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "plantation",
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
    this.handlePerCallback = this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var brixyaropanList = [];
    if (nextProps !== prevState) {
      brixyaropanList = nextProps.brixyaropanDataList.data;
    }
    return { brixyaropanList, loc };
  }
  handlePer(e){
    this.setState({ page: 0 }, ()=> this.handlePerCallback(e));
  }

  handlePerCallback(e) {
    const { fromDate, toDate, distId, page } = this.state;
    this.setState({ 
      perPage: e,
      page: page-page,
    });
    this.fetchResults(fromDate, toDate, distId, page, e);
  }

  handleFromDate(e) {
    const { distId, page, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: page-page,
    });
    this.fetchResults(e, toDate, distId, page, perPage);
  }
  handleToDate(e) {
     const { distId, fromDate,page, perPage } = this.state;
    this.setState({ 
      fromDate: e,
      page: page-page,
    });
    this.fetchResults(fromDate, e, distId, page, perPage);
  }
  handleDistrict(e) {
    const { fromDate, page, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: page-page,
    });
    this.fetchResults(fromDate, toDate, e, page, perPage);
  }

  fetchResults(fromDate, toDate, distId, page, perPage) {
    this.props.fetchallBrixyaropan({
      fromDate,
      toDate,
      distId,
      name: "brixyaropan_miti",
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
          pathname: `/activities/brixyaropanedit/${item.brixyaropan_id}`,
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
     
        this.props.deleteBrixyaropan(item.brixyaropan_id);
        this.setState({ 
          showDialog: !this.state.showDialog,
          page: page-page,
          perPage: 10, 
        });
  }

  handleAdd() {
    this.props.history.push("/activities/brixyaropanadd/new");
  }

  render() {
    const { brixyaropanList, loc, perPage, showDialog } = this.state;
    const { user,role } = this.props;

    return (
      <div>
      <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ वृक्षरोपण सम्बन्धी विवरण  हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "plantationlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="brixyaropan"
                title="वृक्षरोपण मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="brixyaropan" />
            </div>
            <Brixyaropan.List
              buttonName="+ वृक्षरोपण"
              title="वृक्षरोपण सम्बन्धी विवरण"
              pageCount={
                !isNil(brixyaropanList)
                  ? Math.ceil(brixyaropanList.total / perPage)
                  : 10
              }
              data={!isNil(brixyaropanList) ? brixyaropanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={brixyaropanHeadings}
              onAdd={() => this.handleAdd()}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "brixyaropanadd") && (
          <Brixyaropan.Add
            title="+ वृक्षरोपण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBrixyaropan(e)}
          />
        )}
        {equals(loc, "brixyaropanedit") && (
          <Brixyaropan.Edit
            title="वृक्षरोपण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBrixyaropan(e, id)}
          />
        )}
      </div>
    );
  }
}

Plantation.propsTypes = {
  brixyaropanDataList: PropTypes.any,
};

Plantation.defaultProps = {
  brixyaropanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role:state.app.user.user_type,
  brixyaropanDataList: state.biruwautpadan.allbrixyaropanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBrixyaropan: (payload) =>
    dispatch(BiruwautpadanActions.fetchallbrixyaropanRequest(payload)),

  addBrixyaropan: (payload) =>
    dispatch(BiruwautpadanActions.addbrixyaropanRequest(payload)),

  updateBrixyaropan: (payload, brixyaropanId) =>
    dispatch(
      BiruwautpadanActions.updatebrixyaropanRequest(payload, brixyaropanId)
    ),

  deleteBrixyaropan: (brixyaropanId) =>
    dispatch(BiruwautpadanActions.deletebrixyaropanRequest(brixyaropanId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Plantation);
