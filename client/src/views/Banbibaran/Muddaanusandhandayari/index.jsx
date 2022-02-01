import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  MuddaanusandhanDayari,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BanbibaranActions from "../../../actions/banbibaran";
import {
  muddaanusandhandayariHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Muddaanusandhandayari extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "muddaanusandhandayarilist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "muddaanusandhandayari",
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
    var muddaanusandhandayariList = [];
    if (nextProps !== prevState) {
      muddaanusandhandayariList = nextProps.muddaanusandhandayariDataList.data;
    }

    return {
      loc,
      muddaanusandhandayariList,
    };
  }
  handlePer(e) {
    const { fromDate, toDate, distId, officeId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(fromDate, toDate, distId, officeId, 0, e);
  }
  handleFromDate(e) {
    const { distId, officeId, perPage, toDate } = this.state;
    this.setState({ fromDate: e });
    this.fetchResults(e, toDate, distId, officeId, 0, perPage);
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, perPage } = this.state;
    this.setState({ toDate: e });
    this.fetchResults(fromDate, e, distId, officeId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, officeId, perPage, toDate } = this.state;
    this.setState({ distId: e });
    this.fetchResults(fromDate, toDate, e, officeId, 0, perPage);
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallMuddaanusandhandayari({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "jaheri_partibedan_miti",
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
          pathname: `/banbibaran/muddaanusandhandayariedit/${item.mudda_anusandhan_dayari_id}`,
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

    this.props.deleteMuddaanusandhandayari(item.mudda_anusandhan_dayari_id);
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/banbibaran/muddaanusandhandayariadd/new");
  }

  render() {
    const { loc, perPage, muddaanusandhandayariList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ मुद्दा अनुसन्धान दायरी सम्बन्धि विवरण  हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "muddaanusandhandayarilist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="muddaanusandhandayaris"
                title="जाहेरी प्रतिवेदन मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="muddaanusandhandayaris" />
            </div>
            <MuddaanusandhanDayari.List
              buttonName="+ मुद्दा अनुसन्धान दायरी"
              title="मुद्दा अनुसन्धान दायरी सम्बन्धि विवरण"
              pageCount={
                !isNil(muddaanusandhandayariList)
                  ? Math.ceil(muddaanusandhandayariList.total / perPage)
                  : 10
              }
              data={
                !isNil(muddaanusandhandayariList)
                  ? muddaanusandhandayariList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={muddaanusandhandayariHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("muddaanusandhandayari")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "muddaanusandhandayariadd") && (
          <MuddaanusandhanDayari.Add
            title="+ मुद्दा अनुसन्धान दायरी"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addMuddaanusandhandayari(e)}
          />
        )}
        {equals(loc, "muddaanusandhandayariedit") && (
          <MuddaanusandhanDayari.Edit
            title="मुद्दा अनुसन्धान दायरी सम्बन्धी विवरण शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateMuddaanusandhandayari(e, id)}
          />
        )}
      </div>
    );
  }
}

Muddaanusandhandayari.propsTypes = {
  muddaanusandhandayariDataList: PropTypes.any,
};

Muddaanusandhandayari.defaultProps = {
  muddaanusandhandayariDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  muddaanusandhandayariDataList: state.banbibaran.allmuddaanusandhandayariData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallMuddaanusandhandayari: (payload) =>
    dispatch(BanbibaranActions.fetchallmuddaanusandhandayariRequest(payload)),

  addMuddaanusandhandayari: (payload) =>
    dispatch(BanbibaranActions.addmuddaanusandhandayariRequest(payload)),

  updateMuddaanusandhandayari: (payload, muddaanusandhandayariId) =>
    dispatch(
      BanbibaranActions.updatemuddaanusandhandayariRequest(
        payload,
        muddaanusandhandayariId
      )
    ),

  deleteMuddaanusandhandayari: (muddaanusandhandayariId) =>
    dispatch(
      BanbibaranActions.deletemuddaanusandhandayariRequest(
        muddaanusandhandayariId
      )
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Muddaanusandhandayari);
