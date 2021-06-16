import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faTree,
  faGavel,
  faFire,
  faSeedling,
  faBuilding,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { HeaderComponent, Displaybox } from "../../components";
import "./Sidenav.scss";

export class SideNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;
    const { history, onlogout } = this.props;
    console.log("expanded", expanded);
    return (
      <SideNav
        expanded={expanded}
        onToggle={(selected) => {
          this.handleToggle(selected);
        }}
      >
        <SideNav.Toggle
          onSelect={(selected) => {
            this.handleToggle(selected);
          }}
          className={expanded ? "displayNone" : ""}
        />
        <SideNav.Nav defaultSelected="forests">
          <HeaderComponent enabled={expanded} side={true} />
          <NavItem eventKey="home">
            <Link to="/" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faHome} className="mr-2" />
              {expanded && <Displaybox value="गृह पृष्ठ" />}
            </Link>
          </NavItem>
          <NavItem eventKey="employees">
            <Link to="/employees" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faUsers} className="mr-2" />
              {expanded && <Displaybox value="कर्मचारी" />}
            </Link>
          </NavItem>

          <NavItem eventKey="/forests">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faTree} className="mr-2" />
            </NavIcon>
            <NavText> बनका प्रकारहरु </NavText>

            <NavItem
              eventKey="forests/samudayikbanlist"
              onClick={() => history.push("/forests/samudayikbanlist")}
            >
              <NavText>सामुदायिक वन</NavText>
            </NavItem>

            <NavItem
              eventKey="forests/dharmikbanlist"
              onClick={() => history.push("/forests/dharmikbanlist")}
            >
              <NavText>धार्मिक बन</NavText>
            </NavItem>

            <NavItem
              eventKey="forests/kabuliyatibanlist"
              onClick={() => history.push("/forests/kabuliyatibanlist")}
            >
              <NavText>कबुलियती बन</NavText>
            </NavItem>

            <NavItem
              eventKey="forests/nijibanlist"
              onClick={() => history.push("/forests/nijibanlist")}
            >
              <NavText>निजी बन</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="mudda">
            <Link to="/mudda" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faGavel} className="mr-2" />
              {expanded && (
                <Displaybox value=" मुद्दा अनुसन्धान तथा दायरी बिबरण" />
              )}
            </Link>
          </NavItem>

          <NavItem eventKey="atikraman">
            <Link to="/atikraman" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faHome} className="mr-2" />
              {expanded && <Displaybox value=" बन क्षेत्र अतिक्रमण बिबरण" />}
            </Link>
          </NavItem>

          <NavItem eventKey="forestfire">
            <Link to="/forestfire" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faFire} className="mr-2" />
              {expanded && <Displaybox value="बन डडेलो बिबरण" />}
            </Link>
          </NavItem>

          <NavItem eventKey="dwandabebasthapan">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faTree} className="mr-2" />
            </NavIcon>
            <NavText>मानब बन्यजन्तु द्वन्द ब्यबस्थापन</NavText>

            <NavItem
              eventKey="dwandabebasthapan/banyajantuuddarlist"
              onClick={() =>
                history.push("/dwandabebasthapan/banyajantuuddarlist")
              }
            >
              <NavText>बन्यजन्तु उद्दार तथा ब्यबस्थापन बिबरण </NavText>
            </NavItem>

            <NavItem
              eventKey="dwandabebasthapan/banyajantuxetirahatlist"
              onClick={() =>
                history.push("/dwandabebasthapan/banyajantuxetirahatlist")
              }
            >
              <NavText>बन्यजन्तु क्षति राहत बिबरण</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="anyaprayojan">
            <Link to="/anyaprayojan" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faHome} className="mr-2" />
              {expanded && (
                <Displaybox value="बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि बिबरण" />
              )}
            </Link>
          </NavItem>

          <NavItem eventKey="banpaidawar">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faTree} className="mr-2" />
            </NavIcon>
            <NavText>बन पैदावर</NavText>

            <NavItem
              eventKey="banpaidawar/lilamlist"
              onClick={() => history.push("/banpaidawar/lilamlist")}
            >
              <NavText>लीलाम बिबरण </NavText>
            </NavItem>

            <NavItem
              eventKey="banpaidawar/osarpasarlist"
              onClick={() => history.push("/banpaidawar/osarpasarlist")}
            >
              <NavText>ओसारपसार बिबरण</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="activities">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faSeedling} className="mr-2" />
            </NavIcon>
            <NavText>कार्यक्रमहरु </NavText>
            <NavItem
              eventKey="activities/yearlyactivitieslist"
              onClick={() => history.push("/activities/yearlyactivitieslist")}
            >
              <NavText>वार्षिक कार्यक्रम </NavText>
            </NavItem>
            <NavItem
              eventKey="activities/nurserylist"
              onClick={() => history.push("/activities/nurserylist")}
            >
              <NavText>बिरुवा उत्पादन</NavText>
            </NavItem>

            <NavItem
              eventKey="activities/plantationlist"
              onClick={() => history.push("/activities/plantationlist")}
            >
              <NavText> बृक्षरोपन</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="seedgardernplots">
            <Link to="/seedgardernplots" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faSeedling} className="mr-2" />
              {expanded && (
                <Displaybox value="बन बीउ बगैच/समबर्धन प्लटहरु बिबरण" />
              )}
            </Link>
          </NavItem>

          <NavItem eventKey="/organizationassets">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faBuilding} className="mr-2" />
            </NavIcon>
            <NavText>कार्यालय सम्पती बिबरण</NavText>

            <NavItem eventKey="assets" onClick={() => history.push("/assets")}>
              <NavText>घर जग्गा</NavText>
            </NavItem>

            <NavItem
              eventKey="vehicles"
              onClick={() => history.push("/vehicles")}
            >
              <NavText> सवारी साधनहरु</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="signout" onClick={onlogout}>
            <Link to="/logout" className="displaybox">
              <FontAwesomeIcon size="2x" icon={faSignOutAlt} className="mr-2" />
              {expanded && <Displaybox value="लग आउट " />}
            </Link>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavbar;
