import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { JaladharSamrakshyan, Filter, ReportGenerator, ConfirmationDialoge } from "../../../components";
import SamrakshyanActions from "../../../actions/samrakshyan";
import { jaladharsamrakshyanHeadings, districtList } from "../../../services/config";

class Jaladharsamrakshyan extends Component {
  constructor(props) {
    super(props);
    this.state = {
       loc: "jaladharsamrakshyanlist",
       distId: "%",
       perPage: 10, 
       page: 0,
       showDialog: false,
       item: {},
       path: "jaladharsamrakshyan",
       };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var jaladharsamrakshyanList = [];
    if (nextProps !== prevState) {
        jaladharsamrakshyanList = nextProps.jaladharsamrakshyanDataList.data;
    }
    return { loc, jaladharsamrakshyanList };
  }

  handlePer(e) {
    const { distId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(distId, 0, e);
  }
  handleDistrict(e, item) {
    const { perPage } = this.state;
    this.setState({ distId: e });
    this.fetchResults(e, 0, perPage);
  }

  fetchResults(distId, page, perPage) {
    this.props.fetchallJaladharsamrakshyan({
      distId,
      name: "karyakram_miti",
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
          pathname: `/samrakshyan/jaladharsamrakshyanedit/${item.jaladhar_samrakshyan_id}`,
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
  
        this.props.deleteJaladharsamrakshyan(item.jaladhar_samrakshyan_id);
        this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/samrakshyan/jaladharsamrakshyanadd/new");
  }
  render() {
    const { loc, perPage, jaladharsamrakshyanList, showDialog } = this.state;
    const { user } = this.props;

    return (
      <div>
       <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ जलाधार संरक्षण सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "jaladharsamrakshyanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="jaladharsamrakshyan"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
              <ReportGenerator id="jaladharsamrakshyan" />
            </div>
            <JaladharSamrakshyan.List
              buttonName="+ जलाधार संरक्षण"
              title="जलाधार संरक्षण सम्बन्धी विवरण"
              pageCount={
                !isNil(jaladharsamrakshyanList)
                  ? Math.ceil(jaladharsamrakshyanList.total / perPage)
                  : 10
              }
              data={!isNil(jaladharsamrakshyanList) ? jaladharsamrakshyanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              headings={jaladharsamrakshyanHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "jaladharsamrakshyanadd") && (
          <JaladharSamrakshyan.Add
            title="+ जलाधार संरक्षण प्रविष्ट"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addJaladharsamrakshyan(e)}
          />
        )}
        {equals(loc, "jaladharsamrakshyanedit") && (
          <JaladharSamrakshyan.Edit
            title="जलाधार संरक्षण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateJaladharsamrakshyan(e, id)}
          />
        )}
      </div>
    );
  }
}

Jaladharsamrakshyan.propTypes = {
    jaladharsamrakshyanDataList: PropTypes.any,
};

Jaladharsamrakshyan.defaultProps = {
    jaladharsamrakshyanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  jaladharsamrakshyanDataList: state.samrakshyan.alljaladharsamrakshyanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallJaladharsamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.fetchalljaladharsamrakshyanRequest(payload)),
  addJaladharsamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.addjaladharsamrakshyanRequest(payload)),

  updateJaladharsamrakshyan: (payload, jaladharsamrakshyanId) =>
    dispatch(SamrakshyanActions.updatejaladharsamrakshyanRequest(payload, jaladharsamrakshyanId)),

  deleteJaladharsamrakshyan: (jaladharsamrakshyanId) =>
    dispatch(SamrakshyanActions.deletejaladharsamrakshyanRequest(jaladharsamrakshyanId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jaladharsamrakshyan);
