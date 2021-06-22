import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, length, isNil } from "ramda";
import { BanyajantuXetibibaran } from "../../../components";
import DwandabebasthapanActions from "../../../actions/dwandabebasthapan";
import { banyajantuxetirahatHeadings } from "../../../services/config";

export class BanyajantuxetiRahat extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "xetilist" };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var banyajantuxetirahatList = [];
     if (nextProps != prevState) {
      banyajantuxetirahatList = nextProps.banyajantuxetirahatDataList.data;
     

    return { 
      loc,
      banyajantuxetirahatList,
     };
  }
}

handlePageChange(data, item) {
  const { perPage } = this.state;
  this.setState({ page: data.selected });
  switch (item) {
    case "banyajantuxetirahat": {
      this.props.fetchallBanyajantuxetirahat({
        name: "banyajantuxetirahat_name",
        page: data.selected * perPage,
        perPage,
      });
      break;
    }
    default:
      break;
  }
}

  handleSelectMenu(event, item, path) {
   switch (event) {
      case "edit": {
        switch (path) {
          case "banyajantuxetirahat": {
            this.props.history.push({
              pathname: `/dwandabebasthapan/banyajantuxetiRahatedit/${item.banyajantuxeti_bibaran_id}`,
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
          case "banyajantuxetiRahat": {
            this.props.deleteBanyajantuxetiRahat(item.banyajantuxeti_bibaran_id);
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
      case "banyajantuxetirahat": {
        this.props.history.push("/dwandabebasthapan/banyajantuxetirahatadd/new");
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
    page,
    banyajantuxetirahatList,
   } = this.state;
  const { user } = this.props;

    return(
    <div>
     {equals(loc, "banyajantuxetirahatlist") && (
            <BanyajantuXetibibaran.List
              buttonName="+ वन्यजन्तु क्षेति राहात"
              title="वन्यजन्तु क्षेति राहात सम्बन्धि विवरण"
              pageCount={
              !isNil(banyajantuxetirahatList)
                ? Math.ceil(banyajantuxetirahatList.total / perPage)
                : 10
            }
              data={banyajantuxetirahatList}
              headings={banyajantuxetirahatHeadings}
              user={user}
              onAdd={() => this.handleAdd("banyajantuxetirahat")}
              onSelect={this.handleSelectMenu}
            />
          )}
          {equals(loc, "banyajantuxetirahatadd") && (
            <BanyajantuXetibibaran.Add
              title="+ वन्यजन्तु उद्दार"
              user={user}
              onSelect={this.handleSelectMenu}
              onSubmit={(e) => this.props.addBanyajantuxetirahat(e)}
            />
          )}
          {equals(loc, "banyajantuxetirahatedit") && (
            <BanyajantuXetibibaran.Edit
              title="वन्यजन्तु क्षेति राहात पुनः प्रविष्ट"
              history={this.props.history}
              user={user}
              onSelect={this.handleSelectMenu}
              onUpdate={(e, id) => this.props.updateBanyajantuxetirahat(e, id)}
            />
          )}

    </div>
    ); 
  }
}

BanyajantuxetiRahat.propsTypes = {
  banyajantuxetirahatDataList: PropTypes.any,
};

BanyajantuxetiRahat.defaultProps = {
  banyajantuxetirahatDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banyajantuuddarDataList: state.dwandabebasthapan.allbanyajantuxetirahatData,
});

const mapDispatchToProps = (dispatch) => ({

  addBanyajantuxetirahat: (payload) =>
    dispatch(DwandabebasthapanActions.addbanyajantuxetiRequest(payload)),

  updateBanyajantuxetirahat: (payload, banyajantuxetiId) =>
    dispatch(
      DwandabebasthapanActions.updatebanyajantuxetiRequest(payload, banyajantuxetiId)
    ),

  deleteBanyajantuxetiRahat: (banyajantuxetiId) =>
    dispatch(DwandabebasthapanActions.deletebanyajantuxetiRequest(banyajantuxetiId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BanyajantuxetiRahat);
