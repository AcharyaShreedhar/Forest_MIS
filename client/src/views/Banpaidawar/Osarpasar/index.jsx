import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals } from "ramda";
import { BanpaidawarOsarpasar } from "../../../components";
import BanpaidawarActions from "../../../actions/banpaidawar";
import { banpaidawarosarpasarHeadings } from "../../../services/config";


class Osarpasar extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "osarpasarlist" };
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
          case "banpaidawarosarpasar": {
            this.props.history.push({
              pathname: `/banpaidawar/osarpasaredit/${item.paidawar_id}`,
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
          case "banpaidawarosarpasar": {
            this.props.deleteBanpaidawarosarpasar(item.paidawar_id);
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
      case "banpaidawarosarpasar": {
        this.props.history.push("/banpaidawar/osarpasaradd/new");
        break;
      }

      default:
        break;
    }
  }

  render() {
    
    const banpaidawarosarpasarList = this.props.banpaidawarDataList
      ? this.props.banpaidawarDataList.data
      : [];

    const { loc } = this.state;
    console.log("location", loc);

    return (
      <div>
        {equals(loc, "osarpasarlist") && (
          <BanpaidawarOsarpasar.List
            buttonName="+ वनपैदावार ओसारपसार"
            title="वनपैदावार ओसारपसार सम्बन्धि विवरण"
            data={banpaidawarosarpasarList}
            headings={banpaidawarosarpasarHeadings}
            onAdd={() => this.handleAdd("banpaidawarosarpasar")}
            onSelect={this.handleSelectMenu}
          />
        )}
        {equals(loc, "osarpasaradd") && (
          <BanpaidawarOsarpasar.Add
            title="+ वनपैदावार ओसारपसार"
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanpaidawarosarpasar(e)}
          />
        )}
        {equals(loc, "osarpasaredit") && (
          <BanpaidawarOsarpasar.Edit
            title="वनपैदावार ओसारपसार पुनः प्रविष्ट"
            history={this.props.history}
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

  addBanpaidawarosarpasar: (payload) =>
    dispatch(BanpaidawarActions.addbanpaidawarRequest(payload)),

  updateBanpaidawarosarpasar: (payload, paidawarId) =>
    dispatch(
      BanpaidawarActions.updatebanpaidawarRequest(payload, paidawarId)
    ),

  deleteBanpaidawarosarpasar: (paidawarId) =>
    dispatch(BanpaidawarActions.deletebanpaidawarRequest(paidawarId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Osarpasar);
