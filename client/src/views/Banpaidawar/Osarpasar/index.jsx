import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { BanpaidawarOsarpasar } from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import { banpaidawarosarpasarHeadings } from "../../../services/config";

class Osarpasar extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "osarpasarlist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var banpaidawarosarpasarList = [];
    if (nextProps != prevState) {
      banpaidawarosarpasarList = nextProps.banpaidawarDataList.data;
    }
    return { banpaidawarosarpasarList, loc };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallBanpaidawarosarpasar({
      name: "arthik_barsa",
      page: data.selected * perPage,
      perPage,
    });
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
            user={user}
            headings={banpaidawarosarpasarHeadings}
            onAdd={() => this.handleAdd("banpaidawarosarpasar")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
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
