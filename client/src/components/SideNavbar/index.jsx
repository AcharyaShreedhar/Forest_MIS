import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { HeaderComponent } from "../../components";
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
    console.log("expanded", expanded);
    return (
      <div className={expanded ? "leftmarginMax" : "leftmarginMin"}>
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

          <SideNav.Nav defaultSelected="home">
            <HeaderComponent enabled={expanded} />
            <NavItem eventKey="home">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </NavIcon>
              <NavText>Charts</NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>Line Chart</NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>Bar Chart</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default SideNavbar;
