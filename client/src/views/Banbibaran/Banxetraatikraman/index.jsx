import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanxetraAtikraman,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from "../../../components";
import BanxetraatikramanActions from "../../../actions/banxetraatikraman";
import {
  banxetraatikramanHeadings,
  districtList,
} from "../../../services/config";
import { Fragment } from "react";

class Banxetraatikraman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "banxetraatikramanlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "banxetraatikraman",
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
    var banxetraatikramanList = [];
    if (nextProps !== prevState) {
      banxetraatikramanList = nextProps.banxetraatikramanDataList.data;
    }

    return {
      loc,
      banxetraatikramanList,
    };
  }
  handlePer(e) {
    const { fromDate, toDate, distId } = this.state;
    this.setState({ perPage: e });
    this.fetchResults(fromDate, toDate, distId, 0, e);
  }
  handleFromDate(e) {
    const { distId, perPage, toDate } = this.state;
    this.setState({ fromDate: e });
    this.fetchResults(e, toDate, distId, 0, perPage);
  }
  handleToDate(e) {
    const { distId, fromDate, perPage } = this.state;
    this.setState({ toDate: e });
    this.fetchResults(fromDate, e, distId, 0, perPage);
  }
  handleDistrict(e) {
    const { fromDate, perPage, toDate } = this.state;
    this.setState({ distId: e });
    this.fetchResults(fromDate, toDate, e, 0, perPage);
  }

  fetchResults(fromDate, toDate, distId, page, perPage) {
    this.props.fetchallBanxetraatrikraman({
      fromDate,
      toDate,
      distId,
      name: "atikraman_miti",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { fromDate, toDate, distId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(
      fromDate,
      toDate,
      distId,
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
          pathname: `/banbibaran/banxetraatikramanedit/${item.banxetra_atikraman_id}`,
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

    this.props.deleteBanxetraatikraman(item.banxetra_atikraman_id);
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleAdd() {
    this.props.history.push("/banbibaran/banxetraatikramanadd/new");
  }

  render() {
    const { loc, perPage, banxetraatikramanList, showDialog } = this.state;
    const { user } = this.props;

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={"के तपाईँ वनक्षेत्र अतिक्रमण सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?"}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "banxetraatikramanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banxetraatikraman"
                title="अतिक्रमण मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banxetraatikraman" />
            </div>
            <BanxetraAtikraman.List
              buttonName="+ वनक्षेत्र अतिक्रमण"
              title="वनक्षेत्र अतिक्रमण सम्बन्धि विवरण"
              pageCount={
                !isNil(banxetraatikramanList)
                  ? Math.ceil(banxetraatikramanList.total / perPage)
                  : 10
              }
              data={
                !isNil(banxetraatikramanList) ? banxetraatikramanList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={banxetraatikramanHeadings}
              user={user}
              onAdd={() => this.handleAdd()}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "banxetraatikramanadd") && (
          <BanxetraAtikraman.Add
            user={user}
            title="+ वनक्षेत्र अतिक्रमण"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanxetraatikraman(e)}
          />
        )}
        {equals(loc, "banxetraatikramanedit") && (
          <BanxetraAtikraman.Edit
            title="वनक्षेत्र अतिक्रमण पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanxetraatikraman(e, id)}
          />
        )}
      </div>
    );
  }
}

Banxetraatikraman.propsTypes = {
  banxetraatikramanDataList: PropTypes.any,
};

Banxetraatikraman.defaultProps = {
  banxetraatikramanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banxetraatikramanDataList: state.banxetraatikraman.allbanxetraatikramanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanxetraatrikraman: (payload) =>
    dispatch(
      BanxetraatikramanActions.fetchallbanxetraatikramanRequest(payload)
    ),

  addBanxetraatikraman: (payload) =>
    dispatch(BanxetraatikramanActions.addbanxetraatikramanRequest(payload)),

  updateBanxetraatikraman: (payload, banxetraatikramanId) =>
    dispatch(
      BanxetraatikramanActions.updatebanxetraatikramanRequest(
        payload,
        banxetraatikramanId
      )
    ),

  deleteBanxetraatikraman: (banxetraatikramanId) =>
    dispatch(
      BanxetraatikramanActions.deletebanxetraatikramanRequest(
        banxetraatikramanId
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banxetraatikraman);
