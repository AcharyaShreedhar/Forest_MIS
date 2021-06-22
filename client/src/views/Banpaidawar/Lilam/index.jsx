import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { BanpaidawarLilam } from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import { banpaidawarlilamHeadings } from "../../../services/config";

class Lilam extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "lilamlist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("nextprops", nextProps);
    const loc = nextProps.location.pathname.split("/")[2];
    var banpaidawarlilamList = [];
    if (nextProps != prevState) {
      banpaidawarlilamList = nextProps.banpaidawarlilamDataList.data;
    }

    return { banpaidawarlilamList, loc };
  }
  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallBanpaidawarlilam({
      name: "lilam_date",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/banpaidawar/lilamedit/${item.lilam_id}`,
          item,
        });
        break;
      }
      case "delete": {
        this.props.deleteBanpaidawarlilam(item.lilam_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd(item) {
    this.props.history.push("/banpaidawar/lilamadd/new");
  }

  render() {
    const { banpaidawarlilamList, loc, perPage } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "lilamlist") && (
          <BanpaidawarLilam.List
            buttonName="+ वनपैदावार लिलाम"
            title="वनपैदावार लिलाम सम्बन्धि विवरण"
            pageCount={
              !isNil(banpaidawarlilamList)
                ? Math.ceil(banpaidawarlilamList.total / perPage)
                : 10
            }
            data={!isNil(banpaidawarlilamList) ? banpaidawarlilamList.list : []}
            user={user}
            headings={banpaidawarlilamHeadings}
            onAdd={() => this.handleAdd("banpaidawarlilam")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
        {equals(loc, "lilamadd") && (
          <BanpaidawarLilam.Add
            title="+ वनपैदावार लिलाम"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanpaidawarlilam(e)}
          />
        )}
        {equals(loc, "lilamedit") && (
          <BanpaidawarLilam.Edit
            title="वनपैदावार लिलाम पुनः प्रविष्ट"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBanpaidawarlilam(e, id)}
          />
        )}
      </div>
    );
  }
}

Lilam.propsTypes = {
  banpaidawarlilamDataList: PropTypes.any,
};

Lilam.defaultProps = {
  banpaidawarlilamDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banpaidawarlilamDataList: state.banpaidawar.allbanpaidawarlilamData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanpaidawarlilam: (payload) =>
    dispatch(BanpaidawarActions.fetchallbanpaidawarlilamRequest(payload)),
  addBanpaidawarlilam: (payload) =>
    dispatch(BanpaidawarActions.addbanpaidawarlilamRequest(payload)),

  updateBanpaidawarlilam: (payload, lilamId) =>
    dispatch(
      BanpaidawarActions.updatebanpaidawarlilamRequest(payload, lilamId)
    ),

  deleteBanpaidawarlilam: (lilamId) =>
    dispatch(BanpaidawarActions.deletebanpaidawarlilamRequest(lilamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lilam);
