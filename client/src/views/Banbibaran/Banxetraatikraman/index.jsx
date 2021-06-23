import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, length, isNil } from "ramda";
import { BanxetraAtikraman } from "../../../components";
import BanxetraatikramanActions from "../../../actions/banxetraatikraman";
import { banxetraatikramanHeadings } from "../../../services/config";


class Banxetraatikraman extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "banxetraatikramanlist" };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
      const loc = nextProps.location.pathname.split("/")[2];
    var banxetraatikramanList = [];
    if (nextProps != prevState) {
        banxetraatikramanList = nextProps.banxetraatikramanDataList.data;
    }

    return {
        loc,
        banxetraatikramanList
     };
  }

  handlePageChange(data, item) {
      const {perPage } = this.state;
      this.setState({ page: data.selected });
      this.props.fetchallBanxetraatikraman({
          name:"address",
          page: data.selected * perPage,
          perPage,
      });
  }

  handleSelectMenu(event, item, path) {
   switch (event) {
      case "edit": {
        switch (path) {
          case "banxetraatikraman": {
            this.props.history.push({
              pathname: `/banbibaran/banxetraatikramanedit/${item.banxetra_atikraman_id}`,
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
          case "banxetraatikraman": {
            this.props.deleteBanxetraatikraman(item.banxetra_atikraman_id);
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
      case "banxetraatikraman": {
        this.props.history.push("/banbibaran/banxetraatikramanadd/new");
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
        banxetraatikramanList,
    } = this.state;
    const { user } = this.props;
       
    return (
      <div>
        {equals(loc, "banxetraatikramanlist") && (
          <BanxetraAtikraman.List
            buttonName="+ वनक्षेत्र अतिक्रमण"
            title="वनक्षेत्र अतिक्रमण सम्बन्धि विवरण"
            pageCount={
                !isNil(banxetraatikramanList)
                  ? Math.ceil(banxetraatikramanList.total / perPage)
                  : 10
              }
            data={ !isNil(banxetraatikramanList) ? banxetraatikramanList.list : []}
            headings={banxetraatikramanHeadings}
            user={user}
            onAdd={() => this.handleAdd("banxetraatikraman")}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e, "banxetraatikraman")}
          />
        )}
        {equals(loc, "banxetraatikramanadd") && (
          <BanxetraAtikraman.Add
            title="+ वनक्षेत्र अतिक्रमण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBanxetraatikraman (e)}
          />
        )}
        {equals(loc, "banxetraatikramanedit") && (
          <BanxetraAtikraman.Edit
            title="वनक्षेत्र अतिक्रमण पुनः प्रविष्ट"
            history={this.props.history}
            user={user}
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

  addBanxetraatikraman: (payload) =>
    dispatch(BanxetraatikramanActions.addbanxetraatikramanRequest(payload)),

  updateBanxetraatikraman: (payload, banxetraatikramanId) =>
    dispatch(
      BanxetraatikramanActions.updatebanxetraatikramanRequest(payload, banxetraatikramanId)
    ),

  deleteBanxetraatikraman: (banxetraatikramanId) =>
    dispatch(BanxetraatikramanActions.deletebanxetraatikramanRequest(banxetraatikramanId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banxetraatikraman);
