import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  BanpaidawarOsarpasar,
  Filter,
  ReportGenerator,
} from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import {
  banpaidawarosarpasarHeadings,
  districtList,
} from "../../../services/config";

class Osarpasar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "osarpasarlist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      perPage: 10,
      page: 1,
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var banpaidawarosarpasarList = [];
    if (nextProps !== prevState) {
      banpaidawarosarpasarList = nextProps.banpaidawarDataList.data;
    }
    return { banpaidawarosarpasarList, loc };
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
    this.props.fetchallBanpaidawarosarpasar({
      fromDate,
      toDate,
      distId,
      name: "arthik_barsa",
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
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/banpaidawar/osarpasaredit/${item.paidawar_id}`,
          item,
        });

        break;
      }
      case "delete": {
        this.props.deleteBanpaidawarosarpasar(item.paidawar_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/banpaidawar/osarpasaradd/new");
  }

  render() {
    const { banpaidawarosarpasarList, loc, perPage } = this.state;
    const { user } = this.props;
    return (
      <div>
        {equals(loc, "osarpasarlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="banpaidawar"
                title="आर्थिक वर्ष"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator id="banpaidawar" />
            </div>
            <BanpaidawarOsarpasar.List
              buttonName="+ वनपैदावार ओसारपसार"
              title="वनपैदावार ओसारपसार सम्बन्धि विवरण"
              pageCount={
                !isNil(banpaidawarosarpasarList)
                  ? Math.ceil(banpaidawarosarpasarList.total / perPage)
                  : 10
              }
              data={
                !isNil(banpaidawarosarpasarList)
                  ? banpaidawarosarpasarList.list
                  : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              user={user}
              headings={banpaidawarosarpasarHeadings}
              onAdd={() => this.handleAdd("banpaidawarosarpasar")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "osarpasaradd") && (
          <BanpaidawarOsarpasar.Add
            title="+ वनपैदावार ओसारपसार"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanpaidawarosarpasar(e)}
          />
        )}
        {equals(loc, "osarpasaredit") && (
          <BanpaidawarOsarpasar.Edit
            title="वनपैदावार ओसारपसार पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanpaidawarosarpasar(e, id)}
          />
        )}
      </div>
    );
  }
}

Osarpasar.propsTypes = {
  banpaidawarDataList: PropTypes.any,
};

Osarpasar.defaultProps = {
  banpaidawarDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banpaidawarDataList: state.banpaidawar.allbanpaidawarData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanpaidawarosarpasar: (payload) =>
    dispatch(BanpaidawarActions.fetchallbanpaidawarRequest(payload)),
  addBanpaidawarosarpasar: (payload) =>
    dispatch(BanpaidawarActions.addbanpaidawarRequest(payload)),

  updateBanpaidawarosarpasar: (payload, paidawarId) =>
    dispatch(BanpaidawarActions.updatebanpaidawarRequest(payload, paidawarId)),

  deleteBanpaidawarosarpasar: (paidawarId) =>
    dispatch(BanpaidawarActions.deletebanpaidawarRequest(paidawarId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Osarpasar);
