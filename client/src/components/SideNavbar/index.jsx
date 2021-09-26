import React, { Component } from "react";
import { HeaderComponent, ConfirmationDialoge } from "../../components";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Sidenav.scss";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  FaBuilding,
  FaFileWord,
  FaHome,
  FaListAlt,
  FaTasks,
  FaUsers,
  FaWater,
} from "react-icons/fa";
import { GiBurningForest, GiForest, GiWoodPile } from "react-icons/gi";
import { MdGavel, MdWork } from "react-icons/md";
import { BiLogOut, BiTask } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";

export class SideNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      showDialog: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleSubmit() {
    this.props.onlogout();
  }
  handleToggle(e) {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { showDialog, expanded } = this.state;
    const { history } = this.props;

    return (
      <ProSidebar collapsed={!expanded}>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="लग आउट"
          body="के तपाईँ बाहिर निस्किन चाहनुहुन्छ ?"
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleSubmit}
          onClose={this.handleClose}
        />
        <SidebarHeader
          onClick={(e) => {
            this.handleToggle(e);
          }}
        >
          <HeaderComponent enabled={expanded} side={true} />
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              className="maintitle"
              icon={<FaHome />}
              onClick={() => history.push("/home")}
            >
              गृह पृष्ठ
            </MenuItem>
            <SubMenu title="कर्मचारी" className="maintitle" icon={<FaUsers />}>
              <MenuItem
                onClick={() =>
                  history.push("/karmachari/karmacharibibaranlist")
                }
              >
                कर्मचारी विवरण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/karmachari/karmacharidarbandilist")
                }
              >
                कर्मचारी दरबन्दी
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="बनका प्रकारहरु"
              className="maintitle"
              icon={<GiForest />}
            >
              <SubMenu title="सामुदायिक">
                <MenuItem
                  onClick={() => history.push("/forests/samudayikbanlist")}
                >
                  सामुदायिक वन
                </MenuItem>
                <MenuItem
                  onClick={() => history.push("/forests/upabhoktasamuhalist")}
                >
                  उपभोक्ता समुहको बिबरण
                </MenuItem>
              </SubMenu>
              <MenuItem onClick={() => history.push("/forests/dharmikbanlist")}>
                धार्मिक बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/forests/kabuliyatibanlist")}
              >
                कबुलियती बन
              </MenuItem>
              <MenuItem onClick={() => history.push("/forests/nijibanlist")}>
                निजी बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/forests/sajhedaribanlist")}
              >
                साझेदारी बन
              </MenuItem>
              <MenuItem onClick={() => history.push("/forests/chaklabanlist")}>
                चक्ला बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/forests/rastriyabanlist")}
              >
                राष्ट्रिय बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/forests/commercialbanlist")}
              >
                व्यबसायीक कबुलियती बन
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="बन बिबरण"
              className="maintitle"
              icon={<FaListAlt />}
            >
              <MenuItem
                onClick={() =>
                  history.push("/banbibaran/banxetraatikramanlist")
                }
              >
                बन क्षेत्र अतिक्रमण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/banbibaran/muddaanusandhandayarilist")
                }
              >
                मुद्दा अनुसन्धान तथा दायरी
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/banbibaran/banxetraanyaprayojanlist")
                }
              >
                बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/banbibaran/seedgardenplotslist")}
              >
                बन बीउ बगैच/समबर्धन प्लटहरु
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="मानब बन्यजन्तु द्वन्द ब्यबस्थापन"
              className="maintitle"
              icon={<MdGavel />}
            >
              <MenuItem
                onClick={() =>
                  history.push("/dwandabebasthapan/banyajantuuddarlist")
                }
              >
                बन्यजन्तु उद्दार तथा ब्यबस्थापन बिबरण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/dwandabebasthapan/banyajantuxetirahatlist")
                }
              >
                बन्यजन्तु क्षति राहत बिबरण
              </MenuItem>
            </SubMenu>

            <SubMenu
              title="बन पैदावर"
              className="maintitle"
              icon={<GiWoodPile />}
            >
              <MenuItem onClick={() => history.push("/banpaidawar/lilamlist")}>
                लीलाम बिबरण
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/banpaidawar/osarpasarlist")}
              >
                ओसारपसार बिबरण
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="कार्यक्रमहरु"
              className="maintitle"
              icon={<FaTasks />}
            >
              <MenuItem
                onClick={() => history.push("/activities/yearlyactivitieslist")}
              >
                वार्षिक कार्यक्रम
              </MenuItem>
              <MenuItem onClick={() => history.push("/activities/nurserylist")}>
                विरुवा उत्पादन
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/activities/plantationlist")}
              >
                बृक्षरोपन
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/activities/jadibutilist")}
              >
                जडिबुटी उत्पादन
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="कार्यालय सम्पती बिबरण"
              className="maintitle"
              icon={<FaBuilding />}
            >
              <MenuItem
                onClick={() => history.push("/sampatibibaran/gharjaggalist")}
              >
                घर जग्गा
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/sampatibibaran/sawarisadhanlist")}
              >
                सवारी साधनहरु
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="कार्य विवरण"
              className="maintitle"
              icon={<BiTask />}
            >
              <MenuItem
                onClick={() =>
                  history.push("/karyabibaran/samajikkaryabibaranlist")
                }
              >
                सामाजिक कार्य विवरण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/karyabibaran/banbikaskaryabibaranlist")
                }
              >
                वन विकास कार्य विवरण
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="विपत व्यवस्थापन"
              className="maintitle"
              icon={<GiBurningForest />}
            >
              <MenuItem
                onClick={() =>
                  history.push("/bipatbebasthapan/badibebasthapanlist")
                }
              >
                बाढी व्यवस्थापन
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/bipatbebasthapan/pahirobebasthapanlist")
                }
              >
                पहिरो व्यवस्थापन
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/bipatbebasthapan/bandadelolist")}
              >
                बन डडेलो
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="संरक्षण कार्य"
              className="maintitle"
              icon={<FaWater />}
            >
              <MenuItem
                onClick={() =>
                  history.push("/samrakshyan/pokharisamrakshyanlist")
                }
              >
                पोखरी
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/samrakshyan/panimuhansamrakshyanlist")
                }
              >
                पानीमुहान
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/samrakshyan/jaladharsamrakshyanlist")
                }
              >
                जलाधार
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push("/samrakshyan/nadikinarsamrakshyanlist")
                }
              >
                नदी किनार
              </MenuItem>
            </SubMenu>
            <SubMenu title="विविध" className="maintitle" icon={<MdWork />}>
              <MenuItem
                onClick={() => history.push("/miscellaneous/rojgarsrijanalist")}
              >
                रोजगार सिर्जना
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<FaFileWord />}
              className="maintitle"
              onClick={() => history.push("/report")}
            >
              रिपोर्ट
            </MenuItem>

            <MenuItem
              icon={<BiLogOut />}
              className="maintitle"
              onClick={(e) => this.handleConfirm(e)}
            >
              लग आउट
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          {expanded ? (
            <p>©2021 AakarⓔSolution All rights reserved</p>
          ) : (
            <p>Aakar ⓔ Solution</p>
          )}
        </SidebarFooter>
      </ProSidebar>
    );
  }
}

export default SideNavbar;
