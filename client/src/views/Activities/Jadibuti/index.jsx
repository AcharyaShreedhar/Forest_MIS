import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { JadibutiUtpadan, Filter, ReportGenerator, ConfirmationDialoge } from "../../../components";
import BiruwautpadanActions from "../../../actions/biruwautpadan";
import { jadibutiHeadings, districtList } from "../../../services/config";

class Jadibuti extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loc: "jadibutilist",
      distId: "%", 
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "jadibuti",
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

    var jadibutiList = [];
    if (nextProps !== prevState) {
      jadibutiList = nextProps.jadibutiDataList.data;
    }
    return { loc, jadibutiList };
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
    this.props.fetchallJadibuti({
      distId,
      name: "jadibuti_thegana",
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
          pathname: `/activities/jadibutiedit/${item.jadibuti_id}`,
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
  
        this.props.deleteJadibuti(item.jadibuti_id);
        this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/activities/jadibutiadd/new");
  }
  render() {
    const { loc, perPage, jadibutiList, showDialog } = this.state;
    const { user } = this.props;

    return (
      <div>
      <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ जडिबुटी उत्पादन सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "jadibutilist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="jadibuti"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
              <ReportGenerator id="jadibuti" />
            </div>
            <JadibutiUtpadan.List
              buttonName="+ जडिबुटी उत्पादन"
              title="जडिबुटी उत्पादन सम्बन्धी विवरण"
              pageCount={
                !isNil(jadibutiList)
                  ? Math.ceil(jadibutiList.total / perPage)
                  : 10
              }
              data={!isNil(jadibutiList) ? jadibutiList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              headings={jadibutiHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "jadibutiadd") && (
          <JadibutiUtpadan.Add
            title="+ जडिबुटी उत्पादन प्रविष्ट"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addJadibuti(e)}
          />
        )}
        {equals(loc, "jadibutiedit") && (
          <JadibutiUtpadan.Edit
            title="जडिबुटी उत्पादन सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateJadibuti(e, id)}
          />
        )}
      </div>
    );
  }
}

Jadibuti.propTypes = {
  jadibutiDataList: PropTypes.any,
};

Jadibuti.defaultProps = {
  jadibutiDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  jadibutiDataList: state.biruwautpadan.alljadibutiData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallJadibuti: (payload) =>
    dispatch(BiruwautpadanActions.fetchalljadibutiRequest(payload)),
  addJadibuti: (payload) =>
    dispatch(BiruwautpadanActions.addjadibutiRequest(payload)),

  updateJadibuti: (payload, jadibutiId) =>
    dispatch(BiruwautpadanActions.updatejadibutiRequest(payload, jadibutiId)),

  deleteJadibuti: (jadibutiId) =>
    dispatch(BiruwautpadanActions.deletejadibutiRequest(jadibutiId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jadibuti);
