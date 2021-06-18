import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals } from "ramda";
import { BanpaidawarLilam } from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import { banpaidawarlilamHeadings } from "../../../services/config";


class Lilam extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "lilamlist" };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    return { loc };
  }

  handleSelectMenu(event, item, path) {
   switch (event) {
      case "edit": {
        switch (path) {
          case "banpaidawarlilam": {
            this.props.history.push({
              pathname: `/banpaidawar/lilamedit/${item.lilam_id}`,
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
          case "banpaidawarlilam": {
            this.props.deleteBanpaidawarlilam(item.lilam_id);
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
      case "banpaidawarlilam": {
        this.props.history.push("/banpaidawar/lilamadd/new");
        break;
      }

      default:
        break;
    }
  }

  render() {
    const banpaidawarlilamList = this.props.banpaidawarlilamDataList
      ? this.props.banpaidawarlilamDataList.data
      : [];

    const { loc } = this.state;
    console.log("location", loc);

    return (
      <div>
        {equals(loc, "lilamlist") && (
          <BanpaidawarLilam.List
            buttonName="+ वनपैदावार लिलाम"
            title="वनपैदावार लिलाम सम्बन्धि विवरण"
            data={banpaidawarlilamList}
            headings={banpaidawarlilamHeadings}
            onAdd={() => this.handleAdd("banpaidawarlilam")}
            onSelect={this.handleSelectMenu}
          />
        )}
        {equals(loc, "lilamadd") && (
          <BanpaidawarLilam.Add
            title="+ वनपैदावार लिलाम"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanpaidawarlilam(e)}
          />
        )}
        {equals(loc, "lilamedit") && (
          <BanpaidawarLilam.Edit
            title="वनपैदावार लिलाम पुनः प्रविष्ट"
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
  banpaidawarlilamDataList: state.banpaidawar.allbanpaidawarlilamData,
});

const mapDispatchToProps = (dispatch) => ({

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
