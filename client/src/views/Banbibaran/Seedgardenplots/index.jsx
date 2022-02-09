import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  SeedgardenplotsBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BanbibaranActions from "../../../actions/banbibaran";
import {
  seedgardenplotsHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Seedgardenplots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "seedgardenplotslist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "seedgardenplots",
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

    var seedgardenplotsList = [];
    if (nextProps !== prevState) {
      seedgardenplotsList = nextProps.seedgardenplotsDataList.data;
    }
    return { loc, seedgardenplotsList };
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
    const { distId, officeId, fromDate, perPage } = this.state;
    this.setState({ 
      toDate: e, 
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
    this.props.fetchallSeedgardenplots({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "established_date",
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
          pathname: `/banbibaran/seedgardenplotsedit/${item.plot_id}`,
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

    this.props.deleteSeedgardenplots(item.plot_id);
    this.setState({ 
      showDialog: !this.state.showDialog, 
      page: 0,
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/banbibaran/seedgardenplotsadd/new");
  }
  render() {
    const { loc, perPage, seedgardenplotsList, showDialog } = this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ बन बीउ बगैच/समबर्धन प्लटहरु सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "seedgardenplotslist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="seedgardenplots"
                title="स्थापना मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="seedgardenplots" />
            </div>
            <SeedgardenplotsBibaran.List
              buttonName="+ बन बीउ बगैच/समबर्धन प्लटहरु"
              title="बन बीउ बगैच/समबर्धन प्लटहरु सम्बन्धी विवरण"
              pageCount={
                !isNil(seedgardenplotsList)
                  ? Math.ceil(seedgardenplotsList.total / perPage)
                  : 10
              }
              data={!isNil(seedgardenplotsList) ? seedgardenplotsList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={seedgardenplotsHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page} 
            />
     
          </Fragment>
        )}
        {equals(loc, "seedgardenplotsadd") && (
          <SeedgardenplotsBibaran.Add
            title="+ बन बीउ बगैच/समबर्धन प्लटहरु विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSeedgardenplots(e)}
          />
        )}
        {equals(loc, "seedgardenplotsedit") && (
          <SeedgardenplotsBibaran.Edit
            title="बन बीउ बगैच/समबर्धन प्लटहरु सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSeedgardenplots(e, id)}
          />
        )}
      </div>
    );
  }
}

Seedgardenplots.propTypes = {
  seedgardenplotsDataList: PropTypes.any,
};

Seedgardenplots.defaultProps = {
  seedgardenplotsDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeRole: state.app.user.office_type,
  seedgardenplotsDataList: state.banbibaran.allplotbibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallSeedgardenplots: (payload) =>
    dispatch(BanbibaranActions.fetchallplotbibaranRequest(payload)),
  addSeedgardenplots: (payload) =>
    dispatch(BanbibaranActions.addplotbibaranRequest(payload)),

  updateSeedgardenplots: (payload, assetId) =>
    dispatch(BanbibaranActions.updateplotbibaranRequest(payload, assetId)),

  deleteSeedgardenplots: (assetId) =>
    dispatch(BanbibaranActions.deleteplotbibaranRequest(assetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Seedgardenplots);
