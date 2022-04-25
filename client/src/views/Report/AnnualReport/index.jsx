import React, { Component } from 'react'
import { Button } from '../../../components'
import { connect } from 'react-redux'
import { englishToNepaliNumber, nepaliToEnglishNumber } from 'nepali-number'
import jsreport from 'jsreport-browser-client-dist'
import NepaliDate from 'nepali-date-converter'
import AppActions from '../../../actions/app'
import DwandabebasthapanActions from '../../../actions/dwandabebasthapan'
import ReportActions from '../../../actions/report'
import { districtList } from '../../../services/config'
import { Fragment } from 'react'
import '../Report.scss'
import Filter from '../../../components/Filter'
import { isNil } from 'ramda'

export class AnnualReport extends Component {
  constructor(props) {
    super(props)
    const { officeRole, districtId, officeId } = this.props
    this.state = {
      report: '',
      reportScript: '',
      arthikbarsa: '',
      aghilloarthikbarsa: '',
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    }
    this.handleReport = this.handleReport.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
    this.handleDistrict = this.handleDistrict.bind(this)
    this.handleOffice = this.handleOffice.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let currentYear = ''
    let previousYear = ''
    let upcommingYear = ''
    let arthikbarsa = ''
    let aghilloarthikbarsa = ''
    let currentArthikbarsa = ''
    let previousArthikbarsa = ''
    let upcommingArthikbarsa = ''
    NepaliDate.language = 'np'
    var officeList = []

    if (new NepaliDate().getMonth <= '03') {
      upcommingYear = new NepaliDate().format('YYY')
      upcommingArthikbarsa = upcommingYear + '-04-01'
      currentYear = new NepaliDate().getYear()
      currentYear -= 1
      currentYear = currentYear.toString()
      currentArthikbarsa = currentYear + '-04-01'
      currentYear = englishToNepaliNumber(currentYear)
      previousYear = new NepaliDate().getYear()
      previousYear -= 2
      previousYear = previousYear.toString()
      previousArthikbarsa = previousYear + '-04-01'
      previousYear = englishToNepaliNumber(previousYear)
      arthikbarsa = currentYear + '|' + upcommingYear
      aghilloarthikbarsa = previousYear + '|' + new NepaliDate().format('YYY')
    } else {
      NepaliDate.language = 'np'
      upcommingYear = new NepaliDate().getYear()
      upcommingYear += 1
      upcommingYear = upcommingYear.toString()
      upcommingArthikbarsa = nepaliToEnglishNumber(upcommingYear) + '-04-01'
      upcommingYear = englishToNepaliNumber(upcommingYear)
      currentYear = new NepaliDate().format('YYYY')
      currentArthikbarsa = nepaliToEnglishNumber(currentYear) + '-04-01'
      previousYear = new NepaliDate().getYear()
      previousYear -= 1
      previousYear = previousYear.toString()
      previousArthikbarsa = previousYear + '-04-01'
      previousYear = englishToNepaliNumber(previousYear)
      arthikbarsa = currentYear + '|' + upcommingYear.substr(1, 3)
      aghilloarthikbarsa = previousYear + '|' + new NepaliDate().format('YYY')
    }

    var report_data = {}
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data
      report_data = {
        name: nextProps.user_office,
        arthikbarsa: arthikbarsa,
        aghilloarthikbarsa: aghilloarthikbarsa,
        nabikaran_yojana: nextProps.nabikaranData.data,
        banpaidawar_bikri:
          nextProps.samuhabhitraBanpaidawar.data.banpaidawar_bikri,
        banxetra_atikraman: nextProps.banxetraAtikraman.banxetra_atikramans,
        banyajantu_xeti_rahat: nextProps.xetiRahatData.banyajantu_xeti_rahat,
        banyajantu_uddar: nextProps.uddarData.banyajantu_uddar,
        dadelo: nextProps.bandadeloxetiData.dadelo,
        banxetra_anyaprayojan:
          nextProps.banxetraAnyaprayojanData.banxetra_anyaprayojan,
        mudda: nextProps.muddaAnusandhandayariData.mudda,
        gairkastha_banpaidawar: nextProps.gairkasthabanpaidawarbikribitaranData,
        kathdaura_bikri: nextProps.kathdaurabikribitaranData,
        biruwa: nextProps.biruwautpadankharidData,
        banpaidawar_uddham: nextProps.uddhamData.uddham,
        rojgari_srijana: nextProps.rojgarData,
        susasanko_abastha: nextProps.susasanData.susasanko_abastha,
        ban: nextProps.banhastantaranData,
      }
    }
    return {
      report_data,
      currentYear,
      previousYear,
      arthikbarsa,
      aghilloarthikbarsa,
      upcommingYear,
      officeList,
      previousArthikbarsa,
      currentArthikbarsa,
      upcommingArthikbarsa,
    }
  }

  handleDistrict(e) {
    const {
      currentYear,
      previousYear,
      arthikbarsa,
      aghilloarthikbarsa,
      upcommingYear,
      previousArthikbarsa,
      currentArthikbarsa,
      upcommingArthikbarsa,
    } = this.state
    this.setState({
      distId: e,
      officeId: '%', // office reset
    })
    this.fetchReportResults(
      currentYear,
      previousYear,
      arthikbarsa,
      aghilloarthikbarsa,
      upcommingYear,
      previousArthikbarsa,
      currentArthikbarsa,
      upcommingArthikbarsa,
      e,
      '%'
    )

    //O-DDL
    this.fetchOffice(e)
  }
  handleOffice(e) {
    const {
      currentYear,
      previousYear,
      arthikbarsa,
      aghilloarthikbarsa,
      upcommingYear,
      previousArthikbarsa,
      currentArthikbarsa,
      upcommingArthikbarsa,
    } = this.state
    const { distId } = this.state
    this.setState({
      officeId: e,
    })
    this.fetchReportResults(
      currentYear,
      previousYear,
      arthikbarsa,
      aghilloarthikbarsa,
      upcommingYear,
      previousArthikbarsa,
      currentArthikbarsa,
      upcommingArthikbarsa,
      distId,
      e
    )
  }

  // O-DDL
  fetchOffice(distId) {
    this.props.fetchOfficedropdown({
      distId,
      // name: "value", //"office_name"
    })
  }

  handleReport() {
    // jsreport.serverUrl = "https://forest-mis-report.herokuapp.com";
    jsreport.serverUrl = 'http://localhost:5488'
    let reportRequest = {
      template: { name: 'bansambhandhibibaran' },
      data: this.state.report_data,
    }
    jsreport.render(null, reportRequest)
  }

  handlePreview() {
    jsreport.serverUrl = 'http://localhost:5488'
    let reportRequest = {
      template: { name: 'bansambhandhibibaran' },
      data: this.state.report_data,
      options: {
        office: {
          preview: true,
        },
      },
    }
    jsreport.render(this.reportPreview, reportRequest)
  }

  componentDidMount() {
    this.props.fetchOfficedropdown({
      distId: '%',
      name: 'value', //"office_name"
    })
    // jsreport.serverUrl = "https://forest-mis-report.herokuapp.com";
    // jsreport.serverUrl = "http://localhost:5488";
    // let reportRequest = {
    //   template: { name: "bansambhandhibibaran" },
    //   data: this.state.report_data,
    //   options: {
    //     office: {
    //       preview: true,
    //     },
    //   },
    // };
    // jsreport.render(this.reportPreview, reportRequest);
  }

  fetchReportResults(
    currentYear,
    previousYear,
    arthikbarsa,
    aghilloarthikbarsa,
    upcommingYear,
    previousArthikbarsa,
    currentArthikbarsa,
    upcommingArthikbarsa,
    distId,
    officeId
  ) {
    this.props.fetchtotalBanyajantuuddar({
      distId: distId, //9
      officeId: officeId,
    })
    this.props.fetchtotalBanyajantuxeti({
      distId: distId, //8
      officeId: officeId,
    })
    this.props.fetchNabikaranBibaran({
      currentArthikbarsa,
      upcommingArthikbarsa, //2
      distId: distId,
      officeId: officeId,
    })
    this.props.fetchSamuhaBhitraBanpaidawarBikri({
      distId: distId, //3
      officeId: officeId,
    })
    this.props.fetchBanxetraAtikraman({
      previousArthikbarsa,
      currentArthikbarsa, //7
      distId: distId,
      officeId: officeId,
    })
    this.props.fetchBanyajantuXetiRahat({
      distId: distId, //8
      officeId: officeId,
    })
    this.props.fetchBanyajantuUddar({
      currentArthikbarsa, //9
      distId: distId,
      officeId: officeId,
    })
    this.props.fetchBandadeloXeti({
      distId: distId, //13
      officeId: officeId,
    })
    this.props.fetchBanxetraAnyaprayojan({
      distId: distId, //15
      officeId: officeId,
    })

    this.props.fetchMuddaanusandhandayari({
      previousArthikbarsa,
      distId: distId, //4
      officeId: officeId,
    })

    this.props.fetchGairakasthaBanpaidawarBikribitaran({
      currentArthikbarsa,
      distId: distId, //6
      officeId: officeId,
    })
    this.props.fetchKathdauraBikribitaran({
      currentArthikbarsa,
      distId: distId, //5
      officeId: officeId,
    })
    this.props.fetchBiruwaUtpadanKharid({
      distId: distId, //11
      officeId: officeId,
    })
    this.props.fetchUddhamBibaran({
      distId: distId, //14
      officeId: officeId,
    })
    this.props.fetchSrijanaBhayekoRojgari({
      distId: distId,
      officeId: officeId,
      currentArthikbarsa, //10
    })
    this.props.fetchUpavoktaSusasan({
      currentArthikbarsa,
      arthikbarsa: '077/78', //12
      distId: distId,
      officeId: officeId,
    })

    this.props.fetchBanHastantaran({
      currentArthikbarsa,
      distId: distId, //1
      officeId: officeId,
    })
  }

  render() {
    const { officeList } = this.state
    const { officeRole } = this.props
    return (
      <Fragment>
        <div className='report-filter'>
          <Filter
            id='sampati'
            title='प्राप्ति मिति'
            districtsList={districtList}
            officesList={!isNil(officeList) ? officeList : []}
            onSelect={this.handleDistrict}
            onSelectOffice={this.handleOffice}
            yesOffice={officeRole < 3 ? true : false}
            yesDistrict={officeRole < 3 ? true : false}
            yesDate={false}
            multi={true}
          />
          <div className='w-40 button_style'>
            <Button
              className='mr-3 preview'
              name='पुर्वालोकन गर्नुहोस ।'
              onClick={this.handlePreview.bind(this)}
            />
            <Button
              className='mr-3 save'
              name='शेभ गर्नुहोस ।'
              onClick={this.handleReport.bind(this)}
            />
          </div>
        </div>
        <div
          style={{ height: '100vh' }}
          ref={(el) => (this.reportPreview = el)}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  nabikaranData: state.report.nabikaran_yojana,
  samuhabhitraBanpaidawar: state.report.banpaidawar_bikri,
  banxetraAtikraman: state.report.banxetra_atikraman,
  xetiRahatData: state.report.banyajantu_xeti_rahat,
  uddarData: state.report.banyajantu_uddar,
  bandadeloxetiData: state.report.bandadelo_xeti,
  banxetraAnyaprayojanData: state.report.banxetra_anyaprayojan,
  muddaAnusandhandayariData: state.report.mudda_dayari,
  gairkasthabanpaidawarbikribitaranData: state.report.gairkastha_banpaidawar,
  kathdaurabikribitaranData: state.report.kathdaura_bikri,
  biruwautpadankharidData: state.report.biruwautpadan_kharid,
  uddhamData: state.report.banpaidawar_uddham,
  rojgarData: state.report.rojgari_srijana,
  susasanData: state.report.susasanko_abastha,
  banhastantaranData: state.report.ban_bibaran,
  officeDataList: state.app.officesDropdownData,
  user_office: state.app.user.user_office,
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
})

const mapDispatchToProps = (dispatch) => ({
  fetchtotalBanyajantuuddar: (payload) =>
    dispatch(
      DwandabebasthapanActions.fetchtotalbanyajantuuddarRequest(payload)
    ),
  fetchtotalBanyajantuxeti: (payload) =>
    dispatch(DwandabebasthapanActions.fetchtotalbanyajantuxetiRequest(payload)),
  fetchNabikaranBibaran: (payload) =>
    dispatch(ReportActions.fetchnabikaranbibaranRequest(payload)),
  fetchSamuhaBhitraBanpaidawarBikri: (payload) =>
    dispatch(
      ReportActions.fetchsamuhabhitrabanpaidawarbikribibaranRequest(payload)
    ),
  fetchBanxetraAtikraman: (payload) =>
    dispatch(ReportActions.fetchbanxetraatikramanniyantranRequest(payload)),
  fetchBanyajantuXetiRahat: (payload) =>
    dispatch(ReportActions.fetchbanyajantuxetirahatRequest(payload)),
  fetchBanyajantuUddar: (payload) =>
    dispatch(ReportActions.fetchbanyajantuuddarbibaranRequest(payload)),
  fetchBandadeloXeti: (payload) =>
    dispatch(ReportActions.fetchbandadeloxetibibaranRequest(payload)),
  fetchBanxetraAnyaprayojan: (payload) =>
    dispatch(ReportActions.fetchbanxetraanyaprayojanbibaranRequest(payload)),
  fetchMuddaanusandhandayari: (payload) =>
    dispatch(ReportActions.fetchmuddaanusandhandayaribibaranRequest(payload)),
  fetchGairakasthaBanpaidawarBikribitaran: (payload) =>
    dispatch(
      ReportActions.fetchgairakasthabanpaidawarbikribitaranRequest(payload)
    ),
  fetchKathdauraBikribitaran: (payload) =>
    dispatch(ReportActions.fetchkathdaurabikribitaranRequest(payload)),
  fetchBiruwaUtpadanKharid: (payload) =>
    dispatch(ReportActions.fetchbiruwautpadankharidRequest(payload)),
  fetchUddhamBibaran: (payload) =>
    dispatch(ReportActions.fetchuddhambibaranRequest(payload)),
  fetchSrijanaBhayekoRojgari: (payload) =>
    dispatch(ReportActions.fetchsrijanabhayekorojgariRequest(payload)),
  fetchUpavoktaSusasan: (payload) =>
    dispatch(ReportActions.fetchupavoktasusasanRequest(payload)),
  fetchBanHastantaran: (payload) =>
    dispatch(ReportActions.fetchbanhastantaranbibaranRequest(payload)),
  menuRequest: (payload) => dispatch(AppActions.menuRequest(payload)),

  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AnnualReport)
