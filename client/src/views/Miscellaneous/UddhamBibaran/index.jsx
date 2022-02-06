import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  Uddham,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import MiscellaneousActions from "../../../actions/miscellaneous";
import { uddhamHeadings, districtList } from "../../../services/config";

class UddhamBibaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "uddhamlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "uddham",
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
    var uddhamList = [];
    if (nextProps !== prevState) {
      uddhamList = nextProps.uddhamDataList.data;
    }

    return {
      loc,
      uddhamList,
    };
  }
  handlePer(e) {
    const { fromDate, toDate, distId, officeId, page } = this.state;
    this.setState({ 
      perPage: e,
      page: page-page,
     });
    this.fetchResults(fromDate, toDate, distId, officeId, page, e);
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
    const { distId, officeId, page, perPage, fromDate } = this.state;
    this.setState({ 
      fromDate: e,
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
    this.props.fetchallUddhamBibaran({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "darta_miti",
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
          pathname: `/miscellaneous/uddhambibaranedit/${item.uddham_id}`,
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

    this.props.deleteUddhamBibaran(item.uddham_id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: page-page,
      perPage: 10, 
    });
  }

  handleAdd() {
    this.props.history.push("/miscellaneous/uddhambibaranadd/new");
  }

  render() {
    const { loc, perPage, uddhamList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ उद्धम सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "uddhamlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                title="आर्थिक वर्ष"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="uddham" />
            </div>
            <Uddham.List
              buttonName="+ उद्धम"
              title="उद्धम सम्बन्धि विवरण"
              pageCount={
                !isNil(uddhamList) ? Math.ceil(uddhamList.total / perPage) : 10
              }
              data={!isNil(uddhamList) ? uddhamList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={uddhamHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("uddham")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "uddhambibaranadd") && (
          <Uddham.Add
            title="+ उद्धम"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addUddhamBibaran(e)}
          />
        )}
        {equals(loc, "uddhambibaranedit") && (
          <Uddham.Edit
            title="उद्धम सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateUddhamBibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

UddhamBibaran.propsTypes = {
  uddhamDataList: PropTypes.any,
};

UddhamBibaran.defaultProps = {
  uddhamDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  uddhamDataList: state.miscellaneous.alluddhamData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallUddhamBibaran: (payload) =>
    dispatch(MiscellaneousActions.fetchalluddhamRequest(payload)),

  addUddhamBibaran: (payload) =>
    dispatch(MiscellaneousActions.adduddhamRequest(payload)),

  updateUddhamBibaran: (payload, uddhamId) =>
    dispatch(MiscellaneousActions.updateuddhamRequest(payload, uddhamId)),

  deleteUddhamBibaran: (uddhamId) =>
    dispatch(MiscellaneousActions.deleteuddhamRequest(uddhamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UddhamBibaran);
