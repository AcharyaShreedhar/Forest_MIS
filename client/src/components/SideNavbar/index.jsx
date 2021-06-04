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
  faChartLine,
  faUsers,
  faTree,
  faGavel,
  faFire,
  faSeedling,
  faBuilding,
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
    const { history } = this.props;
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
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {expanded && <Displaybox value="गृह पृष्ठ" />}
            </Link>
          </NavItem>
          <NavItem eventKey="employees">
            <Link to="/employees" className="displaybox">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              {expanded && <Displaybox value="कर्मचारी" />}
            </Link>
          </NavItem>

          <NavItem eventKey="/forests">
            <NavIcon>
              <FontAwesomeIcon icon={faTree} className="mr-2" />
            </NavIcon>
            <NavText> बन बिबरण</NavText>

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
              eventKey="forests/nijiban"
              onClick={() => history.push("/forests/nijiban")}
            >
              <NavText>निजी बन</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="mudda">
            <Link to="/mudda" className="displaybox">
              <FontAwesomeIcon icon={faGavel} className="mr-2" />
              {expanded && (
                <Displaybox value=" मुद्दा अनुसन्धान तथा दायरी बिबरण" />
              )}
            </Link>
          </NavItem>

          <NavItem eventKey="atikraman">
            <Link to="/atikraman" className="displaybox">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {expanded && <Displaybox value=" बन क्षेत्र अतिक्रमण बिबरण" />}
            </Link>
          </NavItem>

          <NavItem eventKey="forestfire">
            <Link to="/forestfire" className="displaybox">
              <FontAwesomeIcon icon={faFire} className="mr-2" />
              {expanded && <Displaybox value="बन डडेलो बिबरण" />}
            </Link>
          </NavItem>

          <NavItem eventKey="humananimalconflict">
            <NavIcon>
              <FontAwesomeIcon icon={faTree} className="mr-2" />
            </NavIcon>
            <NavText>मानब बन्यजन्तु द्वन्द ब्यबस्थापन बिबरण</NavText>

            <NavItem
              eventKey="conflict"
              onClick={() => history.push("/conflict")}
            >
              <NavText>बन्यजन्तु उद्दार तथा ब्यबस्थापन बिबरण </NavText>
            </NavItem>

            <NavItem
              eventKey="lossaid"
              onClick={() => history.push("/lossaid")}
            >
              <NavText>बन्यजन्तु क्षति राहत बिबरण</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="lilam">
            <Link to="/lilam" className="displaybox">
              <FontAwesomeIcon icon={faHome} className="mr-2" />

              {expanded && <Displaybox value="बन पैदावर लीलाम बिबरण" />}
            </Link>
          </NavItem>

          <NavItem eventKey="anyaprayojan">
            <Link to="/anyaprayojan" className="displaybox">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {expanded && (
                <Displaybox value="बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि बिबरण" />
              )}
            </Link>
          </NavItem>

          <NavItem eventKey="osarpasar">
            <Link to="/osarpasar" className="displaybox">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {expanded && <Displaybox value=" बन पैदावर ओसारपसारको बिबरण" />}
            </Link>
          </NavItem>

          <NavItem eventKey="nurseryplantation">
            <NavIcon>
              <FontAwesomeIcon icon={faSeedling} className="mr-2" />
            </NavIcon>
            <NavText>बिरुवा उत्पादन तथा बृक्षरोपन बिबरण </NavText>

            <NavItem
              eventKey="nursery"
              onClick={() => history.push("/nursery")}
            >
              <NavText>बिरुवा उत्पादन</NavText>
            </NavItem>

            <NavItem
              eventKey="plantation"
              onClick={() => history.push("/plantation")}
            >
              <NavText> बृक्षरोपन</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="seedgardernplots">
            <Link to="/seedgardernplots" className="displaybox">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {expanded && (
                <Displaybox value="बन बीउ बगैच/समबर्धन प्लटहरु बिबरण" />
              )}
            </Link>
          </NavItem>

          <NavItem eventKey="/organizationassets">
            <NavIcon>
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />
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
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavbar;
