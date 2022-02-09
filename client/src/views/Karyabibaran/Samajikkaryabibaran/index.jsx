import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  SamajikKaryabibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import KaryabibaranActions from "../../../actions/karyabibaran";
import {
  samajikkaryabibaranHeadings,
  districtList,
  officeList,
} from "../../../services/config";

class Samajikkaryabibaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "samajikkaryabibaranlist",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "samajikkaryabibaran",
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
    var samajikkaryabibaranList = [];
    if (nextProps !== prevState) {
      samajikkaryabibaranList = nextProps.samajikkaryabibaranDataList.data;
    }

    return {
      loc,
      samajikkaryabibaranList,
    };
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

  handleDistrict(e) {
    const { officeId, perPage } = this.state;
    this.setState({ 
      distId: e,
      page: 0,
    });
    this.fetchResults(e, officeId, 0, perPage);
  }

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallSamajikkaryabibaran({
      distId,
      officeId,
      name: "ban_type",
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
          pathname: `/karyabibaran/samajikkaryabibaranedit/${item.samajik_karyabibaran_id}`,
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

    this.props.deleteSamajikkaryabibaran(item.samajik_karyabibaran_id);
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10, 
    });
  }

  handleAdd() {
    this.props.history.push("/karyabibaran/samajikkaryabibaranadd/new");
  }

  render() {
    const { loc, perPage, samajikkaryabibaranList, showDialog } = this.state;
    const { user, role, officeRole } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ सामाजिक कार्य सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "samajikkaryabibaranlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="samajikkaryabibaran"
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
              />
              <ReportGenerator id="samajikkaryabibaran" />
            </div>
            <SamajikKaryabibaran.List
              buttonName="+ सामाजिक कार्य"
              title="सामाजिक कार्य सम्बन्धि विवरण"
              pageCount={
                !isNil(samajikkaryabibaranList)
                  ? Math.ceil(samajikkaryabibaranList.total / perPage)
                  : 10
              }
              data={
                !isNil(samajikkaryabibaranList)
                  ? samajikkaryabibaranList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={samajikkaryabibaranHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd("samajikkaryabibaran")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "samajikkaryabibaranadd") && (
          <SamajikKaryabibaran.Add
            title="+ सामाजिक कार्य"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSamajikkaryabibaran(e)}
          />
        )}
        {equals(loc, "samajikkaryabibaranedit") && (
          <SamajikKaryabibaran.Edit
            title="सामाजिक कार्य सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSamajikkaryabibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

Samajikkaryabibaran.propsTypes = {
  samajikkaryabibaranDataList: PropTypes.any,
};

Samajikkaryabibaran.defaultProps = {
  samajikkaryabibaranDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeRole: state.app.user.office_type,
  samajikkaryabibaranDataList: state.karyabibaran.allsamajikkaryabibaranData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallSamajikkaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.fetchallsamajikkaryabibaranRequest(payload)),

  addSamajikkaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.addsamajikkaryabibaranRequest(payload)),

  updateSamajikkaryabibaran: (payload, samajikkaryabibaranId) =>
    dispatch(
      KaryabibaranActions.updatesamajikkaryabibaranRequest(
        payload,
        samajikkaryabibaranId
      )
    ),

  deleteSamajikkaryabibaran: (samajikkaryabibaranId) =>
    dispatch(
      KaryabibaranActions.deletesamajikkaryabibaranRequest(
        samajikkaryabibaranId
      )
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Samajikkaryabibaran);
