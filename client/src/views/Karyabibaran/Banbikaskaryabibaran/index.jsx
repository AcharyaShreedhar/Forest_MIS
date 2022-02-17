import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanbikasKaryabibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import KaryabibaranActions from "../../../actions/karyabibaran";
import {
  banbikaskaryabibaranHeadings,
  districtList,
} from "../../../services/config";

class Banbikaskaryabibaran extends Component {
  constructor(props) {
    super(props);
    const { officeRole, districtId, officeId } = this.props;
    this.state = {
      loc: "banbikaskaryabibaranlist",
      distId: `${ officeRole < 3 ? "%" : districtId }`,
      officeId: `${ officeRole < 3 ? "%" : officeId }`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "banbikaskaryabibaran",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handlePerCallback = this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var banbikaskaryabibaranList = [];
    if (nextProps !== prevState) {
      banbikaskaryabibaranList = nextProps.banbikaskaryabibaranDataList.data;
    }
    return { loc, banbikaskaryabibaranList };
  }

  handlePer(e){
    this.setState({ page: 0 }, ()=> this.handlePerCallback(e));;
  }

  handlePerCallback(e) {
    const { distId, officeId, page } = this.state;
    this.setState({ 
      perPage: e,
   });
    this.fetchResults(distId, officeId, page, e);
  }

  handleDistrict(e, item) {
    const { officeId, perPage } = this.state;
    this.setState({ 
      distId: e,
      page: 0,
    });
    this.fetchResults(e, officeId, 0, perPage);
  }

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallBanbikaskaryabibaran({
      distId,
      officeId,
      name: "banbikas_karyabibaran",
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
          pathname: `/karyabibaran/banbikaskaryabibaranedit/${item.banbikas_karyabibaran_id}`,
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

    this.props.deleteBanbikaskaryabibaran(item.banbikas_karyabibaran_id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10, 
    });
  }

  handleAdd() {
    this.props.history.push("/karyabibaran/banbikaskaryabibaranadd/new");
  }
  render() {
    const { loc, perPage, banbikaskaryabibaranList, showDialog } = this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वनविकास कार्यविवरण सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "banbikaskaryabibaranlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banbikaskaryabibaran"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="banbikaskaryabibaran" />
            </div>
            <BanbikasKaryabibaran.List
              buttonName="+ वनविकास कार्यविवरण"
              title="वनविकास कार्यविवरण सम्बन्धी विवरण"
              pageCount={
                !isNil(banbikaskaryabibaranList)
                  ? Math.ceil(banbikaskaryabibaranList.total / perPage)
                  : 10
              }
              data={
                !isNil(banbikaskaryabibaranList)
                  ? banbikaskaryabibaranList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={banbikaskaryabibaranHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "banbikaskaryabibaranadd") && (
          <BanbikasKaryabibaran.Add
            title="+ वनविकास कार्यविवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanbikaskaryabibaran(e)}
          />
        )}
        {equals(loc, "banbikaskaryabibaranedit") && (
          <BanbikasKaryabibaran.Edit
            title="वनविकास कार्यविवरण सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanbikaskaryabibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

Banbikaskaryabibaran.propTypes = {
  banbikaskaryabibaranDataList: PropTypes.any,
};

Banbikaskaryabibaran.defaultProps = {
  banbikaskaryabibaranDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeRole: state.app.user.office_type,
  banbikaskaryabibaranDataList: state.karyabibaran.allbanbikaskaryabibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanbikaskaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.fetchallbanbikaskaryabibaranRequest(payload)),
  addBanbikaskaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.addbanbikaskaryabibaranRequest(payload)),

  updateBanbikaskaryabibaran: (payload, banbikaskaryabibaranId) =>
    dispatch(
      KaryabibaranActions.updatebanbikaskaryabibaranRequest(
        payload,
        banbikaskaryabibaranId
      )
    ),

  deleteBanbikaskaryabibaran: (banbikaskaryabibaranId) =>
    dispatch(
      KaryabibaranActions.deletebanbikaskaryabibaranRequest(
        banbikaskaryabibaranId
      )
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banbikaskaryabibaran);
