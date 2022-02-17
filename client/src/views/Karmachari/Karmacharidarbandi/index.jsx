import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  KarmachariDarbandi,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import KarmacharidarbandiActions from "../../../actions/karmacharidarbandi";
import AppActions from "../../../actions/app";
import {
  karmacharidarbandiHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Karmacharidarbandi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "karmacharidarbandilist",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "karmacharidarbandi",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleOffice = this.handleOffice.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePerCallback = this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var karmacharidarbandiList = [];
    var officeList = [];

    if (nextProps !== prevState) {
      karmacharidarbandiList = nextProps.karmacharidarbandiDataList.data;
      officeList = nextProps.officeDataList.data;
    }

    return {
      loc,
      officeList,
      karmacharidarbandiList,
    };
  }
  handlePer(e) {
    this.setState({ page: 0 }, () => this.handlePerCallback(e));
  }

  handlePerCallback(e) {
    const { distId, officeId, page } = this.state;
    this.setState({
      perPage: e,
    });
    this.fetchResults(distId, officeId, page, e);
  }

  handleDistrict(e) {
    const { officeId, perPage } = this.state;
    this.setState({
      distId: e,
      officeId: "%", // office reset
      page: 0,
    });
    this.fetchResults(e, "%", 0, perPage);

    //O-DDL
    this.fetchOffice(e);
  }
  handleOffice(e) {
    const { perPage, distId } = this.state;
    this.setState({
      officeId: e,
      page: 0,
    });
    this.fetchResults(distId, e, 0, perPage);
  }

  // O-DDL
  fetchOffice(distId) {
    this.props.fetchOfficedropdown({
      distId,
      // name: "value", //"office_name"
    });
  }

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallKarmacharidarbandi({
      distId,
      officeId,
      name: "post",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { distId, officeId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(distId, officeId, data.selected * perPage, perPage);
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item });
    this.setState({ path: path });
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/karmachari/karmacharidarbandiedit/${item.karmachari_darbandi_id}`,
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

    this.props.deleteKarmacharidarbandi(item.karmachari_darbandi_id);
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    });
  }

  handleAdd(item) {
    this.props.history.push("/karmachari/karmacharidarbandiadd/new");
  }

  render() {
    const { loc, perPage, karmacharidarbandiList, officeList, showDialog } =
      this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ कर्मचारी दरबन्दी  हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "karmacharidarbandilist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="karmacharidarbandi"
                districtsList={districtList}
                officesList={officeList}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDate={false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="karmacharidarbandi" />
            </div>
            <KarmachariDarbandi.List
              buttonName="+ कर्मचारी दरबन्दी"
              title="कर्मचारी दरबन्दी सम्बन्धि विवरण"
              pageCount={
                !isNil(karmacharidarbandiList)
                  ? Math.ceil(karmacharidarbandiList.total / perPage)
                  : 10
              }
              data={
                !isNil(karmacharidarbandiList)
                  ? karmacharidarbandiList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={karmacharidarbandiHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd("karmacharidarbandi")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "karmacharidarbandiadd") && (
          <KarmachariDarbandi.Add
            title="+ कर्मचारी दरबन्दी"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addKarmacharidarbandi(e)}
          />
        )}
        {equals(loc, "karmacharidarbandiedit") && (
          <KarmachariDarbandi.Edit
            title="कर्मचारी दरबन्दी सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateKarmacharidarbandi(e, id)}
          />
        )}
      </div>
    );
  }
}

Karmacharidarbandi.propsTypes = {
  karmacharidarbandiDataList: PropTypes.any,
  officeDataList: PropTypes.any,
};

Karmacharidarbandi.defaultProps = {
  karmacharidarbandiDataList: {},
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  karmacharidarbandiDataList:
    state.karmacharidarbandi.allkarmacharidarbandiData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallKarmacharidarbandi: (payload) =>
    dispatch(
      KarmacharidarbandiActions.fetchallkarmacharidarbandiRequest(payload)
    ),

  addKarmacharidarbandi: (payload) =>
    dispatch(KarmacharidarbandiActions.addkarmacharidarbandiRequest(payload)),

  updateKarmacharidarbandi: (payload, karmacharidarbandiId) =>
    dispatch(
      KarmacharidarbandiActions.updatekarmacharidarbandiRequest(
        payload,
        karmacharidarbandiId
      )
    ),

  deleteKarmacharidarbandi: (karmacharidarbandiId) =>
    dispatch(
      KarmacharidarbandiActions.deletekarmacharidarbandiRequest(
        karmacharidarbandiId
      )
    ),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Karmacharidarbandi);
