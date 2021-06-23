import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import { BanxetraanyaprayojanBibaran } from "../../../components";
import BanbibaranActions from "../../../actions/banbibaran";
import { banxetraanyaprayojanHeadings } from "../../../services/config";

class Banxetraanyaprayojan extends Component {
  constructor(props) {
    super(props);
    this.state = { loc: "banxetraanyaprayojanlist", perPage: 10, page: 1 };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];

    var banxetraanyaprayojanList = [];
    if (nextProps != prevState) {
      banxetraanyaprayojanList = nextProps.banxetraanyaprayojanDataList.data;
    }
    return { loc, banxetraanyaprayojanList };
  }

  handlePageChange(data) {
    const { perPage } = this.state;
    this.setState({ page: data.selected });

    this.props.fetchallBanxetraanyaprayojan({
      name: "arthik_barsa",
      page: data.selected * perPage,
      perPage,
    });
  }

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        this.props.history.push({
          pathname: `/banbibaran/banxetraanyaprayojanedit/${item.plot_id}`,
          item,
        });
        break;
      }

      case "delete": {
        this.props.deleteBanxetraanyaprayojan(item.plot_id);
        break;
      }
      default:
        break;
    }
  }

  handleAdd() {
    this.props.history.push("/banbibaran/banxetraanyaprayojanadd/new");
  }
  render() {
    const { loc, perPage, page, banxetraanyaprayojanList } = this.state;
    const { user } = this.props;

    return (
      <div>
        {equals(loc, "banxetraanyaprayojanlist") && (
          <BanxetraanyaprayojanBibaran.List
            buttonName="+ बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि"
            title="बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि विवरण"
            pageCount={
              !isNil(banxetraanyaprayojanList)
                ? Math.ceil(banxetraanyaprayojanList.total / perPage)
                : 10
            }
            data={
              !isNil(banxetraanyaprayojanList)
                ? banxetraanyaprayojanList.list
                : []
            }
            user={user}
            headings={banxetraanyaprayojanHeadings}
            onAdd={this.handleAdd}
            onSelect={this.handleSelectMenu}
            onPageClick={(e) => this.handlePageChange(e)}
          />
        )}
      </div>
    );
  }
}

Banxetraanyaprayojan.propTypes = {
  banxetraanyaprayojanDataList: PropTypes.any,
};

Banxetraanyaprayojan.defaultProps = {
  banxetraanyaprayojanDataList: {},
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  banxetraanyaprayojanDataList: state.banbibaran.allbanxetraanyaprayojanData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanxetraanyaprayojan: (payload) =>
    dispatch(BanbibaranActions.fetchallbanxetraanyaprayojanRequest(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banxetraanyaprayojan);
