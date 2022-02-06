import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  RojgarSrijana,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import MiscellaneousActions from "../../../actions/miscellaneous";
import { rojgarsrijanaHeadings, districtList } from "../../../services/config";

class Rojgarsrijana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "rojgarsrijanalist",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "rojgarsrijana",
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var rojgarsrijanaList = [];
    if (nextProps !== prevState) {
      rojgarsrijanaList = nextProps.rojgarsrijanaDataList.data;
    }

    return {
      loc,
      rojgarsrijanaList,
    };
  }
  handlePer(e) {
    const { distId, officeId, page } = this.state;
    this.setState({ 
      perPage: e,
      page:page-page,
   });
    this.fetchResults(distId, officeId, page, e);
  }
  handleDistrict(e) {
    const { officeId, page, perPage } = this.state;
    this.setState({ 
      distId: e,
      page: page-page,
    });
    this.fetchResults(e, officeId, page, perPage);
  }

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallRojgarsrijana({
      distId,
      officeId,
      name: "banka_prakar",
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
          pathname: `/miscellaneous/rojgarsrijanaedit/${item.rojgar_srijana_id}`,
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

    this.props.deleteRojgarsrijana(item.rojgar_srijana_id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: page-page, 
      perPage: 10,
    });
  }

  handleAdd() {
    this.props.history.push("/miscellaneous/rojgarsrijanaadd/new");
  }

  render() {
    const { loc, perPage, rojgarsrijanaList, showDialog } = this.state;
    const { user, role } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ रोजगार सिर्जना सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "rojgarsrijanalist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="rojgarsrijana"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
              <ReportGenerator id="rojgarsrijana" />
            </div>
            <RojgarSrijana.List
              buttonName="+ रोजगार सिर्जना"
              title="रोजगार सिर्जना सम्बन्धि विवरण"
              pageCount={
                !isNil(rojgarsrijanaList)
                  ? Math.ceil(rojgarsrijanaList.total / perPage)
                  : 10
              }
              data={!isNil(rojgarsrijanaList) ? rojgarsrijanaList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={rojgarsrijanaHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("rojgarsrijana")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "rojgarsrijanaadd") && (
          <RojgarSrijana.Add
            title="+ रोजगार सिर्जना"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addRojgarsrijana(e)}
          />
        )}
        {equals(loc, "rojgarsrijanaedit") && (
          <RojgarSrijana.Edit
            title="रोजगार सिर्जना सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateRojgarsrijana(e, id)}
          />
        )}
      </div>
    );
  }
}

Rojgarsrijana.propsTypes = {
  rojgarsrijanaDataList: PropTypes.any,
};

Rojgarsrijana.defaultProps = {
  rojgarsrijanaDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  rojgarsrijanaDataList: state.miscellaneous.allrojgarsrijanaData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.fetchallrojgarsrijanaRequest(payload)),

  addRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.addrojgarsrijanaRequest(payload)),

  updateRojgarsrijana: (payload, rojgarsrijanaId) =>
    dispatch(
      MiscellaneousActions.updaterojgarsrijanaRequest(payload, rojgarsrijanaId)
    ),

  deleteRojgarsrijana: (rojgarsrijanaId) =>
    dispatch(MiscellaneousActions.deleterojgarsrijanaRequest(rojgarsrijanaId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rojgarsrijana);
