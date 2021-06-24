import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, length, isNil } from "ramda";
import { MuddaanusandhanDayari } from "../../../components";
import MuddaanusandhandayariActions from "../../../actions/muddaanusandhandayari";
import { muddaanusandhandayariHeadings } from "../../../services/config";


class Muddaanusandhandayari extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "muddaanusandhandayarilist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
      const loc = nextProps.location.pathname.split("/")[2];
    var muddaanusandhandayariList = [];
    if (nextProps != prevState) {
        muddaanusandhandayariList = nextProps.muddaanusandhandayariDataList.data;
    }

    return {
        loc,
        muddaanusandhandayariList
     };
  }

  handlePageChange(data) {
      const {perPage } = this.state;
      this.setState({ page: data.selected });
      this.props.fetchallMuddaanusandhandayari({
          name: "jaheri_partibedan_miti",
          page: data.selected * perPage,
          perPage,
      });
  }

  handleSelectMenu(event, item, path) {
   switch (event) {
      case "edit": {
        switch (path) {
          case "muddaanusandhandayari": {
            this.props.history.push({
              pathname: `/banbibaran/muddaanusandhandayariedit/${item.mudda_anusandhan_dayari_id}`,
              item,
            });
            break;
          }
          default:
            break;
        }
        break;
      }
      case "delete": {
        switch (path) {
          case "muddaanusandhandayari": {
            this.props.deleteMuddaanusandhandayari(item.mudda_anusandhan_dayari_id);
            break;
          }
          default:
            break;
        }
      }
      default:
        break;
    }
  }

  handleAdd(item) {
    switch (item) {
      case "muddaanusandhandayari": {
        this.props.history.push("/banbibaran/muddaanusandhandayariadd/new");
        break;
      }

      default:
        break;
    }
  }

  render() {
      
    const {
        loc,
        perPage,
        muddaanusandhandayariList,
    } = this.state;
    console.log("muddaanusandan....", muddaanusandhandayariList);
    console.log("page...count", !isNil(muddaanusandhandayariList)
    ? Math.ceil(muddaanusandhandayariList.total / perPage)
    : 10);
    const { user } = this.props;
       
    return (
      <div>
        {equals(loc, "muddaanusandhandayarilist") && (
          <MuddaanusandhanDayari.List
            buttonName="+ मुद्दा अनुसन्धान दायरी"
            title="मुद्दा अनुसन्धान दायरी सम्बन्धि विवरण"
            pageCount={
                !isNil(muddaanusandhandayariList)
                  ? Math.ceil(muddaanusandhandayariList.total / perPage)
                  : 10
              }
            data={ !isNil(muddaanusandhandayariList) ? muddaanusandhandayariList.list : []}
            headings={muddaanusandhandayariHeadings}
            user={user}
            onAdd={() => this.handleAdd("muddaanusandhandayari")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "muddaanusandhandayari")}
          />
        )}
        {equals(loc, "muddaanusandhandayariadd") && (
          <MuddaanusandhanDayari.Add
            title="+ मुद्दा अनुसन्धान दायरी"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addMuddaanusandhandayari (e)}
          />
        )}
        {equals(loc, "muddaanusandhandayariedit") && (
          <MuddaanusandhanDayari.Edit
            title="मुद्दा अनुसन्धान दायरी पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateMuddaanusandhandayari(e, id)}
          />
        )}
      </div>
    );
  }
}

Muddaanusandhandayari.propsTypes = {
  muddaanusandhandayariDataList: PropTypes.any,
};

Muddaanusandhandayari.defaultProps = {
  muddaanusandhandayariDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  muddaanusandhandayariDataList: state.muddaanusandhandayari.allmuddaanusandhandayariData,
});

const mapDispatchToProps = (dispatch) => ({
fetchallMuddaanusandhandayari: (payload) =>
    dispatch(MuddaanusandhandayariActions.fetchallmuddaanusandhandayariRequest(payload)),

  addMuddaanusandhandayari: (payload) =>
    dispatch(MuddaanusandhandayariActions.addmuddaanusandhandayariRequest(payload)),

  updateMuddaanusandhandayari: (payload, muddaanusandhandayariId) =>
    dispatch(
      MuddaanusandhandayariActions.updatemuddaanusandhandayariRequest(payload, muddaanusandhandayariId)
    ),

  deleteMuddaanusandhandayari: (muddaanusandhandayariId) =>
    dispatch(MuddaanusandhandayariActions.deletemuddaanusandhandayariRequest(muddaanusandhandayariId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Muddaanusandhandayari);
