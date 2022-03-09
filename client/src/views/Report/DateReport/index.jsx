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

export class DateReport extends Component {
  constructor(props) {
    super(props)
    const { officeRole, districtId, officeId } = this.props
    this.state = {
      report: '',
      reportScript: '',
      fromDate: '2075-01-01',
      toDate: '2090-12-30',
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    }
    this.handleReport = this.handleReport.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
    this.handleDistrict = this.handleDistrict.bind(this)
    this.handleOffice = this.handleOffice.bind(this)
    this.handleToDate = this.handleToDate.bind(this)
    this.handleFromDate = this.handleFromDate.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var officeList = []

    var report_data = {}
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data
      report_data = {
        name: nextProps.user_office,
        fromDate: englishToNepaliNumber(prevState.fromDate),
        toDate: englishToNepaliNumber(prevState.toDate),
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
      officeList,
    }
  }

  handleFromDate(e) {
    const { toDate, distId, officeId } = this.state
    this.setState({
      fromDate: e,
    })
    this.fetchReportResults(e, toDate, distId, officeId)
  }
  handleToDate(e) {
    const { distId, officeId, fromDate } = this.state
    this.setState({
      toDate: e,
    })
    this.fetchReportResults(fromDate, e, distId, officeId)
  }

  handleDistrict(e) {
    const { fromDate, toDate } = this.state
    this.setState({
      distId: e,
      officeId: '%', // office reset
    })
    this.fetchReportResults(fromDate, toDate, e, '%')

    //O-DDL
    this.fetchOffice(e)
  }
  handleOffice(e) {
    const { fromDate, toDate, distId } = this.state
    this.setState({
      officeId: e,
    })
    this.fetchReportResults(fromDate, toDate, distId, e)
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
    const { fromDate, toDate, distId, officeId } = this.state
    this.fetchReportResults(fromDate, toDate, distId, officeId)
    jsreport.serverUrl = 'http://localhost:5488'
    let reportRequest = {
      template: { name: 'mitianusarbibaran' },
      data: this.state.report_data,
    }
    jsreport.render(null, reportRequest)
  }

  handlePreview() {
    const { fromDate, toDate, distId, officeId } = this.state
    jsreport.serverUrl = 'http://localhost:5488'
    let reportRequest = {
      template: { name: 'mitianusarbibaran' },
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

  fetchReportResults(fromDate, toDate, distId, officeId) {
    this.props.fetchtotalBanyajantuuddar({
      fromDate,
      toDate,
      distId, //9
      officeId,
    })
    this.props.fetchtotalBanyajantuxeti({
      fromDate,
      toDate,
      distId, //8
      officeId,
    })
    // this.props.fetchNabikaranBibaran({
    //   //2
    //   distId,
    //   officeId,
    // })
    this.props.fetchSamuhaBhitraBanpaidawarBikri({
      fromDate,
      toDate,
      distId, //3
      officeId,
    })
    this.props.fetchBanxetraAtikraman({
      fromDate,
      toDate, //7
      distId,
      officeId,
    })
    this.props.fetchBanyajantuXetiRahat({
      fromDate,
      toDate,
      distId, //8
      officeId,
    })
    this.props.fetchBanyajantuUddar({
      fromDate,
      toDate, //9
      distId,
      officeId,
    })
    this.props.fetchBandadeloXeti({
      fromDate,
      toDate,
      distId, //13
      officeId,
    })
    this.props.fetchBanxetraAnyaprayojan({
      fromDate,
      toDate,
      distId, //15
      officeId,
    })

    this.props.fetchMuddaanusandhandayari({
      fromDate,
      toDate,
      distId, //4
      officeId,
    })

    this.props.fetchGairakasthaBanpaidawarBikribitaran({
      fromDate,
      toDate,
      distId, //6
      officeId,
    })
    this.props.fetchKathdauraBikribitaran({
      fromDate,
      toDate,
      distId, //5
      officeId,
    })
    this.props.fetchBiruwaUtpadanKharid({
      fromDate,
      toDate,
      distId, //11
      officeId,
    })
    this.props.fetchUddhamBibaran({
      fromDate,
      toDate,
      distId, //14
      officeId,
    })
    this.props.fetchSrijanaBhayekoRojgari({
      distId,
      officeId,
      fromDate,
      toDate, //10
    })
    // this.props.fetchUpavoktaSusasan({
    //   fromDate,
    //   toDate, //12
    //   distId,
    //   officeId,
    // });

    this.props.fetchBanHastantaran({
      fromDate,
      toDate,
      distId, //1
      officeId,
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
            title='मिति'
            districtsList={districtList}
            officesList={!isNil(officeList) ? officeList : []}
            onToDate={this.handleToDate}
            onFromDate={this.handleFromDate}
            onSelect={this.handleDistrict}
            onSelectOffice={this.handleOffice}
            yesOffice={officeRole < 3 ? true : false}
            yesDistrict={officeRole < 3 ? true : false}
            yesDate={true}
            multi={true}
          />
          <div className='w-40 button_style'>
            <Button
              className='mr-3 preview'
              name='पूर्वावलोकन गर्नुहोस ।'
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

export default connect(mapStateToProps, mapDispatchToProps)(DateReport)
