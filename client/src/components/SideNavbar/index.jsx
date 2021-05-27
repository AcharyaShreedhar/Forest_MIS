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
              <NavText>गृह पृष्ठ</NavText>
            </NavItem>
            <NavItem eventKey="employees">
              <NavIcon>
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
              </NavIcon>
              <NavText>कर्मचारी</NavText>
            </NavItem>
            <NavItem eventKey="forest">
              <NavIcon>
                <FontAwesomeIcon icon={faTree} className="mr-2" />
              </NavIcon>
              <NavText>बन बिबरण</NavText>
              <NavItem eventKey="community">
                <NavText>सामुदायिक बन</NavText>
              </NavItem>
              <NavItem eventKey="religious">
                <NavText>धार्मिक बन</NavText>
              </NavItem>
              <NavItem eventKey="kabuliyeti">
                <NavText>काबुलियती बन</NavText>
              </NavItem>
              <NavItem eventKey="personal">
                <NavText>निजी बन</NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="mudda">
              <NavIcon>
                <FontAwesomeIcon icon={faGavel} className="mr-2" />
              </NavIcon>
              <NavText>मुद्दा अनुसन्धान तथा दायरी बिबरण</NavText>
            </NavItem>
            <NavItem eventKey="atikraman">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </NavIcon>
              <NavText>बन क्षेत्र अतिक्रमण बिबरण</NavText>
            </NavItem>

            <NavItem eventKey="forestfire">
              <NavIcon>
                <FontAwesomeIcon icon={faFire} className="mr-2" />
              </NavIcon>
              <NavText>बन डडेलो बिबरण</NavText>
            </NavItem>
            <NavItem eventKey="humananimalconflict">
              <NavIcon>
                <FontAwesomeIcon icon={faTree} className="mr-2" />
              </NavIcon>
              <NavText>मानब बन्यजन्तु द्वन्द ब्यबस्थापन बिबरण</NavText>
              <NavItem eventKey="conflict">
                <NavText>बन्यजन्तु उद्दार तथा ब्यबस्थापन बिबरण</NavText>
              </NavItem>
              <NavItem eventKey="lossaid">
                <NavText>बन्यजन्तु क्षति राहत बिबरण</NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey="lilam">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </NavIcon>
              <NavText>बन पैदावर लीलाम बिबरण</NavText>
            </NavItem>

            <NavItem eventKey="anyaprayojan">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </NavIcon>
              <NavText>बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि बिबरण</NavText>
            </NavItem>
            <NavItem eventKey="osarpasar">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </NavIcon>
              <NavText>बन पैदावर ओसारपसारको बिबरण</NavText>
            </NavItem>

            <NavItem eventKey="nurseryplantation">
              <NavIcon>
                <FontAwesomeIcon icon={faSeedling} className="mr-2" />
              </NavIcon>
              <NavText>बिरुवा उत्पादन तथा बृक्षरोपन बिबरण</NavText>
              <NavItem eventKey="nursery">
                <NavText>बिरुवा उत्पादन</NavText>
              </NavItem>
              <NavItem eventKey="plantation">
                <NavText>बृक्षरोपन</NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey="seedgardernplots">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </NavIcon>
              <NavText>बन बीउ बगैच/समबर्धन प्लटहरु बिबरण</NavText>
            </NavItem>
            <NavItem eventKey="organizationassets">
              <NavIcon>
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              </NavIcon>
              <NavText>कार्यालय सम्पती बिबरण</NavText>
              <NavItem eventKey="assets">
                <NavText>घर जग्गा </NavText>
              </NavItem>
              <NavItem eventKey="vehicles">
                <NavText>सवारी साधनहरु </NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default SideNavbar;
