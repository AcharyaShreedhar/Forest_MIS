import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { BiruwaUtpadan, Filter, ReportGenerator,   ConfirmationDialoge, } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import { biruwautpadanHeadings, districtList } from "../../../services/config";
import "./Nursery.scss";

class Nursery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "biruwautpadanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "nursery",
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
    var biruwautpadanList = [];
    if (nextProps !== prevState) {
      biruwautpadanList = nextProps.biruwautpadanDataList.data;
    }
    return { biruwautpadanList, loc };
  }

  handlePer(e){
    this.setState({ page: 0 }, ()=> this.handlePerCallback(e));
  }

  handlePerCallback(e) {
    const { fromDate, toDate, distId, page } = this.state;
    this.setState({ 
      perPage: e,
      page: 0,
    });
    this.fetchResults(fromDate, toDate, distId, page, e);
  }

  handleFromDate(e) {
    const { distId, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: 0,
    });
    this.fetchResults(e, toDate, distId, 0, perPage);
  }
  handleToDate(e) {
     const { distId, fromDate, perPage } = this.state;
    this.setState({ 
      fromDate: e,
      page: 0,
    });
    this.fetchResults(fromDate, e, distId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: 0,
    });
    this.fetchResults(fromDate, toDate, e, 0, perPage);
  }

  fetchResults(fromDate, toDate, distId, page, perPage) {
    this.props.fetchallBiruwautpadan({
      fromDate,
      toDate,
      distId,
      name: "arthik_barsa",
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
          pathname: `/activities/biruwautpadanedit/${item.biruwa_utpadan_id}`,
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
    this.props.deleteBiruwautpadan(item.biruwa_utpadan_id);    
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: 0, 
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/activities/biruwautpadanadd/new");
  }

  render() {
    const { biruwautpadanList, loc, perPage, showDialog } = this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
      <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ विरुवा उत्पादन सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "nurserylist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="nursery"
                title="आर्थिक वर्ष"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="nursery" />
            </div>
            <BiruwaUtpadan.List
              buttonName="+ विरुवा उत्पादन"
              title="विरुवा उत्पादन सम्बन्धी विवरण"
              pageCount={
                !isNil(biruwautpadanList)
                  ? Math.ceil(biruwautpadanList.total / perPage)
                  : 10
              }
              data={!isNil(biruwautpadanList) ? biruwautpadanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              role={role}
              officeRole={officeRole}
              user={user}
              headings={biruwautpadanHeadings}
              onAdd={() => this.handleAdd()}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "biruwautpadanadd") && (
          <BiruwaUtpadan.Add
            title="+ विरुवा उत्पादन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBiruwautpadan(e)}
          />
        )}
        {equals(loc, "biruwautpadanedit") && (
          <BiruwaUtpadan.Edit
            title="विरुवा उत्पादन सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBiruwautpadan(e, id)}
          />
        )}
      </div>
    );
  }
}

Nursery.propsTypes = {
  biruwautpadanDataList: PropTypes.any,
};

Nursery.defaultProps = {
  biruwautpadanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeRole:state.app.user.office_type,
  biruwautpadanDataList: state.biruwautpadan.allbiruwautpadanData,
});

const mapDispatchToProps = (dispatch) => ({
  //-------------biruwautpadan
  fetchallBiruwautpadan: (payload) =>
    dispatch(BiruwautpadanActions.fetchallbiruwautpadanRequest(payload)),

  addBiruwautpadan: (payload) =>
    dispatch(BiruwautpadanActions.addbiruwautpadanRequest(payload)),

  updateBiruwautpadan: (payload, biruwautpadanId) =>
    dispatch(
      BiruwautpadanActions.updatebiruwautpadanRequest(payload, biruwautpadanId)
    ),

  deleteBiruwautpadan: (biruwautpadanId) =>
    dispatch(BiruwautpadanActions.deletebiruwautpadanRequest(biruwautpadanId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nursery);
