import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { Filter, OfficeBibaran, ConfirmationDialoge } from "../../components";
import AppActions from "../../actions/app";
import { districtList, officeHeadings } from "../../services/config";

export class Office extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "officelist",
      distId: "%",
      perPage: 10,
      page: 0,
      path: "offices",
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePerCallback= this.handlePerCallback.bind(this);
  }
  componentDidMount() {
    this.props.fetchallOffice({
      distId: "%",
      name: "office_name",
      page: 0,
      perPage: 10,
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[1];
    var officeList = [];
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data;
    }

    return {
      loc,
      officeList,
    };
  }
  handlePer(e){
    this.setState({ page: 0 }, ()=> this.handlePerCallback(e));
  }

  handlePerCallback(e) {
    const { distId, page } = this.state;
    this.setState({ 
      perPage: e, 
    });
    this.fetchResults(distId, page, e);
  }

  handleDistrict(e) {
    const { page, perPage } = this.state;
    this.setState({ 
      distId: e,
      page: page-page,
    });
    this.fetchResults(e, page, perPage);
  }

  fetchResults(distId, page, perPage) {
    this.props.fetchallOffice({
      distId,
      name: "office_name",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { distId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(distId, data.selected * perPage, perPage);
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item });
    this.setState({ path: path });
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `officeedit/${item.office_id}`,
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

    this.props.deleteOffice(item.office_id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: page-page,
      perPage: 10, 
    });
  }

  handleAdd() {
    this.props.history.push("/officeadd/new");
  }

  render() {
    const { loc, perPage, officeList, showDialog } = this.state;
    const { user } = this.props;
    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ कार्यालय सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "officelist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="office"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
            </div>
            <OfficeBibaran.List
              buttonName="+ नयाँ कार्यालय "
              title="कार्यालय सम्बन्धि विवरण"
              pageCount={
                !isNil(officeList) ? Math.ceil(officeList.total / perPage) : 10
              }
              data={!isNil(officeList) ? officeList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={officeHeadings}
              user={user}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "officeadd") && (
          <OfficeBibaran.Add
            title="+ नयाँ कार्यालय"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addOffice(e)}
          />
        )}
        {equals(loc, "officeedit") && (
          <OfficeBibaran.Edit
            title="कार्यालय सम्बन्धि विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateOffice(e, id)}
          />
        )}
      </div>
    );
  }
}

Office.propsTypes = {
  officeDataList: PropTypes.any,
};

Office.defaultProps = {
  officeDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  officeDataList: state.app.allofficesData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallOffice: (payload) =>
    dispatch(AppActions.fetchallofficesRequest(payload)),
  addOffice: (payload) => dispatch(AppActions.addofficesRequest(payload)),
  updateOffice: (payload, officeId) =>
    dispatch(AppActions.updateofficesRequest(payload, officeId)),
  deleteOffice: (officeId) =>
    dispatch(AppActions.deleteofficesRequest(officeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Office);
