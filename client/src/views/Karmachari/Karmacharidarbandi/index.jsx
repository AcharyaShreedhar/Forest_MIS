import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { KarmachariDarbandi, Filter, ReportGenerator } from "../../../components";
import KarmacharidarbandiActions from "../../../actions/karmacharidarbandi";
import { karmacharidarbandiHeadings } from "../../../services/config";
import { Fragment } from "react";

class Karmacharidarbandi extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "karmacharidarbandilist", perPage: 10, page: 0 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var karmacharidarbandiList = [];
    if (nextProps !== prevState) {
      karmacharidarbandiList = nextProps.karmacharidarbandiDataList.data;
    }

    return {
      loc,
      karmacharidarbandiList,
    };
  }
  handlePer(e) {
    this.setState({ perPage: e });
    this.fetchResults(0, e);
  }

  fetchResults(page, perPage) {
    this.props.fetchallKarmacharidarbandi({
      name: "post",
      page: page,
      perPage,
    });
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(data.selected * perPage, perPage);
  }

  handleSelectMenu(event, item, path) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/karmachari/karmacharidarbandiedit/${item.karmachari_darbandi_id}`,
          item,
        });

        break;
      }
      case "delete": {
        this.props.deleteKarmacharidarbandi(item.karmachari_darbandi_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd(item) {
    this.props.history.push("/karmachari/karmacharidarbandiadd/new");
    }

  render() {
    const { loc, perPage, karmacharidarbandiList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "karmacharidarbandilist") && (
          <Fragment>
            <div className="report-filter">
              <Filter />
              <ReportGenerator id="karmacharidarbandi" />
            </div>
            <KarmachariDarbandi.List
              buttonName="+ कर्मचारी दरबन्दी"
              title="कर्मचारी दरबन्दी सम्बन्धि विवरण"
              pageCount={
                !isNil(karmacharidarbandiList)
                  ? Math.ceil(karmacharidarbandiList.total / perPage)
                  : 10
              }
              data={
                !isNil(karmacharidarbandiList) ? karmacharidarbandiList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={karmacharidarbandiHeadings}
              user={user}
              onAdd={() => this.handleAdd("karmacharidarbandi")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
            />
          </Fragment>
        )}
        {equals(loc, "karmacharidarbandiadd") && (
          <KarmachariDarbandi.Add
            title="+ कर्मचारी दरबन्दी"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addKarmacharidarbandi(e)}
          />
        )}
        {equals(loc, "karmacharidarbandiedit") && (
          <KarmachariDarbandi.Edit
            title="वनडढेलो पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateKarmacharidarbandi(e, id)}
          />
        )}
      </div>
    );
  }
}

Karmacharidarbandi.propsTypes = {
  karmacharidarbandiDataList: PropTypes.any,
};

Karmacharidarbandi.defaultProps = {
  karmacharidarbandiDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  karmacharidarbandiDataList: state.karmacharidarbandi.allkarmacharidarbandiData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallKarmacharidarbandi: (payload) =>
    dispatch(KarmacharidarbandiActions.fetchallkarmacharidarbandiRequest(payload)),

  addKarmacharidarbandi: (payload) =>
    dispatch(KarmacharidarbandiActions.addkarmacharidarbandiRequest(payload)),

  updateKarmacharidarbandi: (payload, karmacharidarbandiId) =>
    dispatch(KarmacharidarbandiActions.updateKarmacharidarbandiRequest(payload, karmacharidarbandiId)),

  deleteKarmacharidarbandi: (karmacharidarbandiId) =>
    dispatch(KarmacharidarbandiActions.deletebandadelobibaranRequest(karmacharidarbandiId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Karmacharidarbandi);
