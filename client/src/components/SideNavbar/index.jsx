import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faTree,
  faBuilding,
  faSignOutAlt,
  faTasks,
  faGavel,
  faListAlt,
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
            <NavIcon>
            <FontAwesomeIcon size="2x" icon={faUsers} className="mr-2" />
            </NavIcon>
            <NavText>कर्मचारी</NavText>
            <NavItem
            eventKey="/karmachari/karmacharibibaranlist"
            onClick={() => history.push("/karmachari/karmacharibibaranlist")}
            >
            <NavText>कर्मचारी विवरण</NavText>
            </NavItem>
            <NavItem
            eventKey="/karmachari/karmacharidarbandilist"
            onClick={() => history.push("/karmachari/karmacharidarbandilist")}
            >
            <NavText>कर्मचारी दरबन्दी </NavText>
            </NavItem>
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
            <NavItem
              eventKey="forests/sajhedaribanlist"
              onClick={() => history.push("/forests/sajhedaribanlist")}
            >
              <NavText>साझेदारी बन</NavText>
            </NavItem>
            <NavItem
              eventKey="forests/chaklabanlist"
              onClick={() => history.push("/forests/chaklabanlist")}
            >
              <NavText>चक्ला बन</NavText>
            </NavItem>
            <NavItem
              eventKey="forests/rastriyabanlist"
              onClick={() => history.push("/forests/rastriyabanlist")}
            >
              <NavText>राष्ट्रिय बन</NavText>
            </NavItem>
            <NavItem
              eventKey="forests/commercialbanlist"
              onClick={() => history.push("/forests/commercialbanlist")}
            >
              <NavText>व्यबसायीक कबुलियती बन</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="/banbibaran">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faListAlt} className="mr-2" />
            </NavIcon>
            <NavText> बन बिबरण </NavText>
            <NavItem
              eventKey="banbibaran/bandadelolist"
              onClick={() => history.push("/banbibaran/bandadelolist")}
            >
              <NavText>बन डडेलो</NavText>
            </NavItem>
            <NavItem
              eventKey="banbibaran/banxetraatikramanlist"
              onClick={() => history.push("/banbibaran/banxetraatikramanlist")}
            >
              <NavText>बन क्षेत्र अतिक्रमण</NavText>
            </NavItem>
            <NavItem
              eventKey="banbibaran/muddaanusandhandayarilist"
              onClick={() =>
                history.push("/banbibaran/muddaanusandhandayarilist")
              }
            >
              <NavText> मुद्दा अनुसन्धान तथा दायरी</NavText>
            </NavItem>
            <NavItem
              eventKey="banbibaran/banxetraanyaprayojanlist"
              onClick={() =>
                history.push("/banbibaran/banxetraanyaprayojanlist")
              }
            >
              <NavText> बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि</NavText>
            </NavItem>
            <NavItem
              eventKey="banbibaran/seedgardernplotslist"
              onClick={() => history.push("/banbibaran/seedgardenplotslist")}
            >
              <NavText> बन बीउ बगैच/समबर्धन प्लटहरु</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="dwandabebasthapan">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faGavel} className="mr-2" />
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
              <FontAwesomeIcon size="2x" icon={faTasks} className="mr-2" />
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
            <NavItem
              eventKey="activities/jadibutilist"
              onClick={() => history.push("/activities/jadibutilist")}
            >
              <NavText> जडिबुटी उत्पादन</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="/sampatibibaran">
            <NavIcon>
              <FontAwesomeIcon size="2x" icon={faBuilding} className="mr-2" />
            </NavIcon>
            <NavText>कार्यालय सम्पती बिबरण</NavText>

            <NavItem
              eventKey="sampatibibaran/gharjaggalist"
              onClick={() => history.push("/sampatibibaran/gharjaggalist")}
            >
              <NavText>घर जग्गा</NavText>
            </NavItem>
            <NavItem
              eventKey="sampatibibaran/sawarisadhanlist"
              onClick={() => history.push("/sampatibibaran/sawarisadhanlist")}
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
