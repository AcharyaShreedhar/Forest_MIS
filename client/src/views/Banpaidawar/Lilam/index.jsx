import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanpaidawarLilam,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import {
  banpaidawarlilamHeadings,
  districtList,
} from "../../../services/config";

class Lilam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "lilamlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "lilam",
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
    var banpaidawarlilamList = [];
    if (nextProps !== prevState) {
      banpaidawarlilamList = nextProps.banpaidawarlilamDataList.data;
    }

    return { banpaidawarlilamList, loc };
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
    this.props.fetchallBanpaidawarlilam({
      fromDate,
      toDate,
      distId,
      officeId,
      name: "lilam_date",
      page: page,
      perPage,
    });
    // this.setState({
    //   distId: "%",
    //   officeId: "%",
    // })
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
          pathname: `/banpaidawar/lilamedit/${item.lilam_id}`,
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

    this.props.deleteBanpaidawarlilam(item.lilam_id);
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/banpaidawar/lilamadd/new");
  }

  render() {
    const { banpaidawarlilamList, loc, perPage, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वनपैदावार लिलाम सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "lilamlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="lilam"
                title="लिलाम मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="lilam" />
            </div>

            <BanpaidawarLilam.List
              buttonName="+ वनपैदावार लिलाम"
              title="वनपैदावार लिलाम सम्बन्धि विवरण"
              pageCount={
                !isNil(banpaidawarlilamList)
                  ? Math.ceil(banpaidawarlilamList.total / perPage)
                  : 10
              }
              data={
                !isNil(banpaidawarlilamList) ? banpaidawarlilamList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              headings={banpaidawarlilamHeadings}
              onAdd={() => this.handleAdd("banpaidawarlilam")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "lilamadd") && (
          <BanpaidawarLilam.Add
            title="+ वनपैदावार लिलाम"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanpaidawarlilam(e)}
          />
        )}
        {equals(loc, "lilamedit") && (
          <BanpaidawarLilam.Edit
            title="वनपैदावार लिलाम सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanpaidawarlilam(e, id)}
          />
        )}
      </div>
    );
  }
}

Lilam.propsTypes = {
  banpaidawarlilamDataList: PropTypes.any,
};

Lilam.defaultProps = {
  banpaidawarlilamDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  banpaidawarlilamDataList: state.banpaidawar.allbanpaidawarlilamData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanpaidawarlilam: (payload) =>
    dispatch(BanpaidawarActions.fetchallbanpaidawarlilamRequest(payload)),
  addBanpaidawarlilam: (payload) =>
    dispatch(BanpaidawarActions.addbanpaidawarlilamRequest(payload)),

  updateBanpaidawarlilam: (payload, lilamId) =>
    dispatch(
      BanpaidawarActions.updatebanpaidawarlilamRequest(payload, lilamId)
    ),

  deleteBanpaidawarlilam: (lilamId) =>
    dispatch(BanpaidawarActions.deletebanpaidawarlilamRequest(lilamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lilam);
