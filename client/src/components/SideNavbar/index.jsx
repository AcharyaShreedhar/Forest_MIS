import React, { Component } from 'react'
import { equals } from 'ramda'
import { HeaderComponent, ConfirmationDialoge } from '../../components'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import './Sidenav.scss'
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar'
import {
  FaBuilding,
  FaFileWord,
  FaHome,
  FaListAlt,
  FaTasks,
  FaUsers,
  FaWater,
} from 'react-icons/fa'
import {
  GiBurningForest,
  GiForest,
  GiReceiveMoney,
  GiWoodPile,
} from 'react-icons/gi'
import { MdGavel, MdWork } from 'react-icons/md'
import { BiLogOut, BiTask, BiUserPlus } from 'react-icons/bi'
import { ImOffice } from 'react-icons/im'
import 'react-pro-sidebar/dist/css/styles.css'

export class SideNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // expanded: false,
      showDialog: false,
      karmachari: false,
      bantype: false,
      banbibaran: false,
      dwanda: false,
      banpaidawar: false,
      karyakram: false,
      assets: false,
      karya: false,
      report: false,
      budget: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmenu = this.handleSubmenu.bind(this)
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog })
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog })
  }
  handleSubmit() {
    this.props.onlogout()
  }
  handleToggle(e) {
    this.props.menuRequest(e)
  }
  handleSubmenu(e, item) {
    switch (item) {
      case 'karmachari': {
        this.setState({ karmachari: true })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'bantype': {
        this.setState({ karmachari: false })
        this.setState({ bantype: true })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'banbibaran': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: true })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'dwanda': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: true })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'banpaidawar': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: true })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'karyakram': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: true })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'assets': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: true })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'karya': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: true })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'bipat': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: true })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'samraxan': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: true })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'misc': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: true })
        this.setState({ report: false })
        this.setState({ budget: false })
        break
      }
      case 'report': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: true })
        this.setState({ budget: false })
        break
      }
      case 'budget': {
        this.setState({ karmachari: false })
        this.setState({ bantype: false })
        this.setState({ banbibaran: false })
        this.setState({ dwanda: false })
        this.setState({ banpaidawar: false })
        this.setState({ karyakram: false })
        this.setState({ assets: false })
        this.setState({ karya: false })
        this.setState({ bipat: false })
        this.setState({ samraxan: false })
        this.setState({ misc: false })
        this.setState({ report: false })
        this.setState({ budget: true })
        break
      }
      default:
        break
    }
  }

  render() {
    const {
      showDialog,
      bantype,
      banbibaran,
      karmachari,
      dwanda,
      banpaidawar,
      karyakram,
      assets,
      karya,
      bipat,
      samraxan,
      misc,
      report,
      budget,
    } = this.state
    const { history, menuStatus, role, officeRole } = this.props
    return (
      <ProSidebar collapsed={!menuStatus}>
        <ConfirmationDialoge
          showDialog={showDialog}
          title='लग आउट'
          body='के तपाईँ बाहिर निस्किन चाहनुहुन्छ ?'
          confirmLabel='चाहन्छु '
          cancelLabel='चाहंदिन '
          onYes={this.handleSubmit}
          onClose={this.handleClose}
        />
        <SidebarHeader
          onClick={(e) => {
            this.handleToggle(e)
          }}
        >
          <HeaderComponent enabled={menuStatus} side={true} />
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape='square'>
            <MenuItem
              className='maintitle'
              icon={<FaHome />}
              onClick={() => history.push('/home')}
            >
              गृह पृष्ठ
            </MenuItem>
            <SubMenu
              title='कर्मचारी'
              className='maintitle'
              icon={<FaUsers />}
              onClick={(e) => this.handleSubmenu(e, 'karmachari')}
              open={karmachari}
            >
              <MenuItem
                onClick={() =>
                  history.push('/karmachari/karmacharibibaranlist')
                }
              >
                कर्मचारी विवरण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/karmachari/karmacharidarbandilist')
                }
              >
                कर्मचारी दरबन्दी
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='बनका प्रकारहरु'
              className='maintitle'
              icon={<GiForest />}
              open={bantype}
              onClick={(e) => this.handleSubmenu(e, 'bantype')}
            >
              <SubMenu title='सामुदायिक'>
                <MenuItem
                  onClick={() => history.push('/forests/samudayikbanlist')}
                >
                  सामुदायिक वन
                </MenuItem>
                <MenuItem
                  onClick={() => history.push('/forests/upabhoktasamuhalist')}
                >
                  उपभोक्ता समुहको बिबरण
                </MenuItem>
              </SubMenu>
              <MenuItem onClick={() => history.push('/forests/dharmikbanlist')}>
                धार्मिक बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/forests/kabuliyatibanlist')}
              >
                कबुलियती बन
              </MenuItem>
              <MenuItem onClick={() => history.push('/forests/nijibanlist')}>
                निजी बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/forests/sajhedaribanlist')}
              >
                साझेदारी बन
              </MenuItem>
              <MenuItem onClick={() => history.push('/forests/chaklabanlist')}>
                चक्ला बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/forests/rastriyabanlist')}
              >
                राष्ट्रिय बन
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/forests/commercialbanlist')}
              >
                व्यबसायीक कबुलियती बन
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='बन बिबरण'
              className='maintitle'
              icon={<FaListAlt />}
              onClick={(e) => this.handleSubmenu(e, 'banbibaran')}
              open={banbibaran}
            >
              <MenuItem
                onClick={() =>
                  history.push('/banbibaran/banxetraatikramanlist')
                }
              >
                बन क्षेत्र अतिक्रमण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/banbibaran/muddaanusandhandayarilist')
                }
              >
                मुद्दा अनुसन्धान तथा दायरी
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/banbibaran/banxetraanyaprayojanlist')
                }
              >
                बनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/banbibaran/seedgardenplotslist')}
              >
                बन बीउ बगैच/समबर्धन प्लटहरु
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='मानब बन्यजन्तु द्वन्द ब्यबस्थापन'
              className='maintitle'
              icon={<MdGavel />}
              open={dwanda}
              onClick={(e) => this.handleSubmenu(e, 'dwanda')}
            >
              <MenuItem
                onClick={() =>
                  history.push('/dwandabebasthapan/banyajantuuddarlist')
                }
              >
                बन्यजन्तु उद्दार तथा ब्यबस्थापन बिबरण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/dwandabebasthapan/banyajantuxetirahatlist')
                }
              >
                बन्यजन्तु क्षति राहत बिबरण
              </MenuItem>
            </SubMenu>

            <SubMenu
              title='बन पैदावर'
              className='maintitle'
              icon={<GiWoodPile />}
              open={banpaidawar}
              onClick={(e) => this.handleSubmenu(e, 'banpaidawar')}
            >
              <MenuItem onClick={() => history.push('/banpaidawar/lilamlist')}>
                लीलाम बिबरण
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/banpaidawar/osarpasarlist')}
              >
                ओसारपसार बिबरण
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='कार्यक्रमहरु'
              className='maintitle'
              icon={<FaTasks />}
              open={karyakram}
              onClick={(e) => this.handleSubmenu(e, 'karyakram')}
            >
              <MenuItem
                onClick={() => history.push('/activities/yearlyactivitieslist')}
              >
                वार्षिक कार्यक्रम
              </MenuItem>
              <MenuItem onClick={() => history.push('/activities/nurserylist')}>
                विरुवा उत्पादन
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/activities/plantationlist')}
              >
                बृक्षरोपन
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/activities/jadibutilist')}
              >
                जडिबुटी उत्पादन
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='कार्यालय सम्पती बिबरण'
              className='maintitle'
              icon={<FaBuilding />}
              open={assets}
              onClick={(e) => this.handleSubmenu(e, 'assets')}
            >
              <MenuItem
                onClick={() => history.push('/sampatibibaran/gharjaggalist')}
              >
                घर जग्गा
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/sampatibibaran/sawarisadhanlist')}
              >
                सवारी साधनहरु
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/sampatibibaran/anyasampatilist')}
              >
                अन्य सम्पति
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='कार्य विवरण'
              className='maintitle'
              icon={<BiTask />}
              open={karya}
              onClick={(e) => this.handleSubmenu(e, 'karya')}
            >
              <MenuItem
                onClick={() =>
                  history.push('/karyabibaran/samajikkaryabibaranlist')
                }
              >
                सामाजिक कार्य विवरण
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/karyabibaran/banbikaskaryabibaranlist')
                }
              >
                वन विकास कार्य विवरण
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='विपत व्यवस्थापन'
              className='maintitle'
              icon={<GiBurningForest />}
              open={bipat}
              onClick={(e) => this.handleSubmenu(e, 'bipat')}
            >
              <MenuItem
                onClick={() =>
                  history.push('/bipatbebasthapan/badibebasthapanlist')
                }
              >
                बाढी व्यवस्थापन
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/bipatbebasthapan/pahirobebasthapanlist')
                }
              >
                पहिरो व्यवस्थापन
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/bipatbebasthapan/bandadelolist')}
              >
                बन डडेलो
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='संरक्षण कार्य'
              className='maintitle'
              icon={<FaWater />}
              open={samraxan}
              onClick={(e) => this.handleSubmenu(e, 'samraxan')}
            >
              <MenuItem
                onClick={() =>
                  history.push('/samrakshyan/pokharisamrakshyanlist')
                }
              >
                पोखरी
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/samrakshyan/panimuhansamrakshyanlist')
                }
              >
                पानीमुहान
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/samrakshyan/jaladharsamrakshyanlist')
                }
              >
                जलाधार
              </MenuItem>
              <MenuItem
                onClick={() =>
                  history.push('/samrakshyan/nadikinarsamrakshyanlist')
                }
              >
                नदी किनार
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='विविध'
              className='maintitle'
              icon={<MdWork />}
              open={misc}
              onClick={(e) => this.handleSubmenu(e, 'misc')}
            >
              <MenuItem
                onClick={() => history.push('/miscellaneous/rojgarsrijanalist')}
              >
                रोजगार सिर्जना
              </MenuItem>
              <MenuItem
                onClick={() => history.push('/miscellaneous/uddhamlist')}
              >
                उद्धम विवरण
              </MenuItem>
            </SubMenu>
            <SubMenu
              title='रिपोर्ट'
              className='maintitle'
              icon={<FaFileWord />}
              open={report}
              onClick={(e) => this.handleSubmenu(e, 'report')}
            >
              <MenuItem onClick={() => history.push('/report/annualreport')}>
                आर्थिक वर्ष रिपोर्ट
              </MenuItem>
              <MenuItem onClick={() => history.push('/report/datereport')}>
                मिति रिपोर्ट
              </MenuItem>
            </SubMenu>

            <SubMenu
              title='बजेट विवरण'
              className='maintitle'
              icon={<GiReceiveMoney />}
              open={budget}
              onClick={(e) => this.handleSubmenu(e, 'budget')}
            >
              {officeRole < 3 && (
                <>
                  <MenuItem
                    onClick={() => history.push('/budget/budgetsirshaklist')}
                  >
                    बजेट शिर्षक
                  </MenuItem>
                  <MenuItem
                    onClick={() => history.push('/budget/karyakramsirshaklist')}
                  >
                    कार्यक्रम शिर्षक
                  </MenuItem>
                  <MenuItem
                    onClick={() => history.push('/budget/budgetbarshiklist')}
                  >
                    बजेट बार्षिक
                  </MenuItem>
                </>
              )}
              <MenuItem onClick={() => history.push('/budget/budgetentrylist')}>
                बजेट खर्च विवरण
              </MenuItem>
            </SubMenu>

            {equals(role, 3) && (
              <MenuItem
                icon={<BiUserPlus />}
                className='maintitle'
                onClick={() => history.push('/userlist')}
              >
                नयाँ प्रयोगकर्ता
              </MenuItem>
            )}
            {equals(role, 3) && (
              <MenuItem
                icon={<ImOffice />}
                className='maintitle'
                onClick={() => history.push('/officelist')}
              >
                कार्यालय
              </MenuItem>
            )}
            <MenuItem
              icon={<BiLogOut />}
              className='maintitle'
              onClick={(e) => this.handleConfirm(e)}
            >
              लग आउट
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    )
  }
}

export default SideNavbar
