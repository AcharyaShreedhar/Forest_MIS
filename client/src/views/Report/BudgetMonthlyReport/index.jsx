import React, { Component } from 'react'
import { Button } from '../../../components'
import { connect } from 'react-redux'
import { equals, isNil } from 'ramda'
import { englishToNepaliNumber } from 'nepali-number' //nepaliToEnglishNumber
import jsreport from 'jsreport-browser-client-dist'
// import NepaliDate from 'nepali-date-converter'
import AppActions from '../../../actions/app'
import DwandabebasthapanActions from '../../../actions/dwandabebasthapan'
import ReportActions from '../../../actions/report'
import {
  districtList,
  year,
  f_year,
  fiscal_year_list,
  fiscal_year_id,
  year_list,
  month_List,
  chaumasik_List,
} from '../../../services/config'
import { Fragment } from 'react'
import '../Report.scss'
import Filter from '../../../components/Filter'
import Report from '..'

export class BudgetMonthlyReport extends Component {
  constructor(props) {
    super(props)
    const { officeRole, districtId, officeId } = this.props
    this.state = {
      report: '',
      reportScript: '',
      fiscal_year: f_year,
      year: year,
      chaumasik_id: 0,
      month_List: month_List,
      month_Filter: month_List,
      month_id: 0,
      month: '',
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    }
    // this.handleReport = this.handleReport.bind(this)
    // this.handlePreview = this.handlePreview.bind(this)
    this.handleFiscalYear = this.handleFiscalYear.bind(this)
    this.handleYear = this.handleYear.bind(this)
    this.handleChaumasik = this.handleChaumasik.bind(this)
    this.handleMonth = this.handleMonth.bind(this)
    this.handleOffice = this.handleOffice.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var officeList = []
    var user_name = ''
    var user_office = ''
    var budget_monthly = {}
    if (nextProps !== prevState) {
      officeList = !isNil(nextProps.officeDataList)
        ? nextProps.officeDataList.data
        : []
      user_name = nextProps.user_name
      user_office = nextProps.user_office
      if (!isNil(nextProps.budgetmonthlylist))
        if (!isNil(nextProps.budgetmonthlylist.budget_monthly)) {
          budget_monthly = nextProps.budgetmonthlylist.budget_monthly
        }
    }
    return {
      budget_monthly,
      user_name,
      user_office,
      officeList,
    }
  }

  handleFiscalYear(e) {
    const { year, chaumasik_id, month_id, officeId } = this.state
    const value = e[0].value
    this.setState({
      fiscal_year: value,
    })
    this.fetchReportResults(value, year, chaumasik_id, month_id, officeId)
  }

  handleYear(e) {
    const { fiscal_year, chaumasik_id, month_id, officeId } = this.state
    const value = e[0].value
    this.setState({ year: value })
    this.fetchReportResults(
      fiscal_year,
      value,
      chaumasik_id,
      month_id,
      officeId
    )
  }

  handleChaumasik(e) {
    const { fiscal_year, year, month_id, officeId } = this.state
    this.setState({ chaumasik_id: e[0] })
    this.setState({ month_id: 0, month: '' })
    this.handleMonthFilter(e[0])
    this.fetchReportResults(fiscal_year, year, e[0], month_id, officeId)
  }

  handleMonthFilter(chaumasik_id) {
    let { month_List } = this.state
    let month_new = month_List.filter((month) => month.quater === chaumasik_id)
    this.setState({ month_Filter: month_new })
  }

  handleMonth(e) {
    const { fiscal_year, year, chaumasik_id, officeId } = this.state
    const id = e[0].id
    const value = e[0].value
    this.setState({ month_id: id })
    this.setState({ month: value })
    this.fetchReportResults(fiscal_year, year, chaumasik_id, id, officeId)
  }
  handleOffice(e) {
    const { fiscal_year, year, chaumasik_id, month_id } = this.state
    this.setState({
      officeId: e,
    })
    this.fetchReportResults(fiscal_year, year, chaumasik_id, month_id, e)
  }

  // handleReport() {
  //   // jsreport.serverUrl = "https://forest-mis-report.herokuapp.com";
  //   const { fromDate, toDate, distId, officeId } = this.state
  //   this.fetchReportResults(fromDate, toDate, distId, officeId)
  //   jsreport.serverUrl = 'http://localhost:5488'
  //   let reportRequest = {
  //     template: { name: 'mitianusarbibaran' },
  //     data: this.state.report_data,
  //   }
  //   jsreport.render(null, reportRequest)
  // }

  // handlePreview() {
  //   jsreport.serverUrl = 'http://localhost:5488'
  //   let reportRequest = {
  //     template: { name: 'mitianusarbibaran' },
  //     data: this.state.report_data,
  //     options: {
  //       office: {
  //         preview: true,
  //       },
  //     },
  //   }
  //   jsreport.render(this.reportPreview, reportRequest)
  // }

  handlePreview() {
    // console.log(this.state.budget_monthly)
    let allbs = []
    const { budget_monthly, user_name, user_office, fiscal_year } = this.state
    const budget = (budget_monthly) => {
      let bs = ''
      budget_monthly.map((budget) => {
        if (!equals(bs, budget.sirshak_name)) {
          bs = budget.sirshak_name
          allbs.push(budget.sirshak_name)
        }
        return 0
      })
    }
    budget(budget_monthly)
    let report_data = {}
    let sn = 1
    let p_value = []
    let b_sum = 0
    let b_p_sum = 0
    let c_sum = 0
    let c_p_sum = 0
    let gc_sum = 0
    let gc_p_sum = 0
    let gm_sum = 0
    let gm_p_sum = 0
    let m_sum = 0
    let m_p_sum = 0
    let h_sum = 0
    let h_p_sum = 0
    let h_sum_p = 0
    let h_p_sum_p = 0
    let p_total = {}
    // console.log(allbs[0])
    budget_monthly.map((karyakram) => {
      if (equals(allbs[0], karyakram.sirshak_name)) {
        // console.log('------', sn, karyakram.karyakram_name)
        b_sum += karyakram.barsik_lakshay_amount
        b_p_sum += karyakram.barsik_lakshay_pariman
        c_sum += karyakram.chaumasik_lakshay_amount
        c_p_sum += karyakram.chaumasik_lakshay_pariman
        gc_sum += karyakram.gata_chaumasik_pragati
        gc_p_sum = karyakram.gata_chaumasik_pariman_pragati
        gm_sum += karyakram.gata_mahina_pragati
        gm_p_sum += karyakram.gata_mahina_pariman_pragati
        m_sum += karyakram.yes_mahina_pragati
        m_p_sum += karyakram.yes_mahina_pariman_pragati
        h_sum += karyakram.mahina_pragati
        h_p_sum += karyakram.mahina_pariman_pragati
        p_value.push({
          sn: sn,
          karyakram_name: karyakram.karyakram_name,
          barsik_lakshay_amount: karyakram.barsik_lakshay_amount,
          barsik_lakshay_pariman: karyakram.barsik_lakshay_pariman,
          chaumasik_lakshay_amount: karyakram.chaumasik_lakshay_amount,
          chaumasik_lakshay_pariman: karyakram.chaumasik_lakshay_pariman,
          remarks: karyakram.remarks,
          gata_chaumasik_pragati: karyakram.gata_chaumasik_pragati,
          gata_chaumasik_pariman_pragati:
            karyakram.gata_chaumasik_pariman_pragati,
          gata_mahina_pragati: karyakram.gata_mahina_pragati,
          gata_mahina_pariman_pragati: karyakram.gata_mahina_pariman_pragati,
          yes_mahina_pragati: karyakram.yes_mahina_pragati,
          yes_mahina_pariman_pragati: karyakram.yes_mahina_pariman_pragati,
          mahina_pragati: karyakram.mahina_pragati,
          mahina_pariman_pragati: karyakram.mahina_pariman_pragati,
          mahina_pragati_percent: (
            (karyakram.mahina_pragati / karyakram.barsik_lakshay_amount) *
            100
          ).toFixed(2),
          mahina_pariman_pragati_percent: (
            (karyakram.mahina_pariman_pragati /
              karyakram.barsik_lakshay_pariman) *
            100
          ).toFixed(2),
        })
        sn++
      }
      return 0
    })
    h_sum_p = (h_sum / b_sum) * 100
    h_p_sum_p = (h_p_sum / b_p_sum) * 100
    // console.log(h_sum, b_sum)
    p_total = {
      name: `${allbs[0]} खर्च जम्म`,
      b_sum: b_sum,
      b_p_sum: b_p_sum,
      c_sum: c_sum,
      c_p_sum: c_p_sum,
      gc_sum: gc_sum,
      gc_p_sum: gc_p_sum,
      gm_sum: gm_sum,
      gm_p_sum: gm_p_sum,
      m_sum: m_sum,
      m_p_sum: m_p_sum,
      h_sum: h_sum,
      h_p_sum: h_p_sum,
      h_sum_p: h_sum_p.toFixed(2),
      h_p_sum_p: h_p_sum_p.toFixed(2),
    }
    report_data = { pungi: allbs[0], p_value, p_total }

    sn = 1
    let c_value = []
    let b_sum_t = b_sum
    let b_p_sum_t = b_p_sum
    let c_sum_t = c_sum
    let c_p_sum_t = c_p_sum
    let gc_sum_t = gc_sum
    let gc_p_sum_t = gc_p_sum
    let gm_sum_t = gm_sum
    let gm_p_sum_t = gm_p_sum
    let m_sum_t = m_sum
    let m_p_sum_t = m_p_sum
    let h_sum_t = h_sum
    let h_p_sum_t = h_p_sum
    let h_sum_p_t = h_sum_p
    let h_p_sum_p_t = h_p_sum_p
    b_sum = 0
    b_p_sum = 0
    c_sum = 0
    c_p_sum = 0
    gc_sum = 0
    gc_p_sum = 0
    gm_sum = 0
    gm_p_sum = 0
    m_sum = 0
    m_p_sum = 0
    h_sum = 0
    h_p_sum = 0
    h_sum_p = 0
    h_p_sum_p = 0
    let c_total = {}
    let p_c_total = {}
    // console.log(allbs[1])
    budget_monthly.map((karyakram) => {
      if (equals(allbs[1], karyakram.sirshak_name)) {
        // console.log('------', sn, karyakram.karyakram_name)
        b_sum += karyakram.barsik_lakshay_amount
        b_p_sum += karyakram.barsik_lakshay_pariman
        c_sum += karyakram.chaumasik_lakshay_amount
        c_p_sum += karyakram.chaumasik_lakshay_pariman
        gc_sum += karyakram.gata_chaumasik_pragati
        gc_p_sum = karyakram.gata_chaumasik_pariman_pragati
        gm_sum += karyakram.gata_mahina_pragati
        gm_p_sum += karyakram.gata_mahina_pariman_pragati
        m_sum += karyakram.yes_mahina_pragati
        m_p_sum += karyakram.yes_mahina_pariman_pragati
        h_sum += karyakram.mahina_pragati
        h_p_sum += karyakram.mahina_pariman_pragati
        //total
        b_sum_t += karyakram.barsik_lakshay_amount
        b_p_sum_t += karyakram.barsik_lakshay_pariman
        c_sum_t += karyakram.chaumasik_lakshay_amount
        c_p_sum_t += karyakram.chaumasik_lakshay_pariman
        gc_sum_t += karyakram.gata_chaumasik_pragati
        gc_p_sum_t += karyakram.gata_chaumasik_pariman_pragati
        gm_sum_t += karyakram.gata_mahina_pragati
        gm_p_sum_t += karyakram.gata_mahina_pariman_pragati
        m_sum_t += karyakram.yes_mahina_pragati
        m_p_sum_t += karyakram.yes_mahina_pariman_pragati
        h_sum_t += karyakram.mahina_pragati
        h_p_sum_t += karyakram.mahina_pariman_pragati
        //
        c_value.push({
          sn: sn,
          karyakram_name: karyakram.karyakram_name,
          barsik_lakshay_amount: karyakram.barsik_lakshay_amount,
          barsik_lakshay_pariman: karyakram.barsik_lakshay_pariman,
          chaumasik_lakshay_amount: karyakram.chaumasik_lakshay_amount,
          chaumasik_lakshay_pariman: karyakram.chaumasik_lakshay_pariman,
          remarks: karyakram.remarks,
          gata_chaumasik_pragati: karyakram.gata_chaumasik_pragati,
          gata_chaumasik_pariman_pragati:
            karyakram.gata_chaumasik_pariman_pragati,
          gata_mahina_pragati: karyakram.gata_mahina_pragati,
          gata_mahina_pariman_pragati: karyakram.gata_mahina_pariman_pragati,
          yes_mahina_pragati: karyakram.yes_mahina_pragati,
          yes_mahina_pariman_pragati: karyakram.yes_mahina_pariman_pragati,
          mahina_pragati: karyakram.mahina_pragati,
          mahina_pariman_pragati: karyakram.mahina_pariman_pragati,
          mahina_pragati_percent: (
            (karyakram.mahina_pragati / karyakram.barsik_lakshay_amount) *
            100
          ).toFixed(2),
          mahina_pariman_pragati_percent: (
            (karyakram.mahina_pariman_pragati /
              karyakram.barsik_lakshay_pariman) *
            100
          ).toFixed(2),
        })
        sn++
      }
      return 0
    })
    h_sum_p = !isNaN((h_sum / b_sum) * 100) ? (h_sum / b_sum) * 100 : 0
    h_p_sum_p = !isNaN((h_p_sum / b_p_sum) * 100)
      ? (h_p_sum / b_p_sum) * 100
      : 0
    h_sum_p_t = !isNaN((h_sum_t / b_sum_t) * 100)
      ? (h_sum_t / b_sum_t) * 100
      : 0
    h_p_sum_p_t = !isNaN((h_p_sum_t / b_p_sum_t) * 100)
      ? (h_p_sum_t / b_p_sum_t) * 100
      : 0

    const allbsdata = !isNil(allbs[1]) ? allbs[1] : ''
    c_total = {
      name: `${allbsdata} खर्च जम्मा`,
      b_sum: b_sum,
      b_p_sum: b_p_sum,
      c_sum: c_sum,
      c_p_sum: c_p_sum,
      gc_sum: gc_sum,
      gc_p_sum: gc_p_sum,
      gm_sum: gm_sum,
      gm_p_sum: gm_p_sum,
      m_sum: m_sum,
      m_p_sum: m_p_sum,
      h_sum: h_sum,
      h_p_sum: h_p_sum,
      h_sum_p: h_sum_p.toFixed(2),
      h_p_sum_p: h_p_sum_p.toFixed(2),
    }
    p_c_total = {
      name: 'पुजी र चालु जम्मा',
      b_sum: b_sum_t,
      b_p_sum: b_p_sum_t,
      c_sum: c_sum_t,
      c_p_sum: c_p_sum_t,
      gc_sum: gc_sum_t,
      gc_p_sum: gc_p_sum_t,
      gm_sum: gm_sum_t,
      gm_p_sum: gm_p_sum_t,
      m_sum: m_sum_t,
      m_p_sum: m_p_sum_t,
      h_sum: h_sum_t,
      h_p_sum: h_p_sum_t,
      h_sum_p: h_sum_p_t.toFixed(2),
      h_p_sum_p: h_p_sum_p_t.toFixed(2),
    }
    report_data = {
      ...report_data,
      chalu: allbs[1],
      c_value,
      c_total,
      p_c_total,
      budget_total: b_sum_t,
      user_name: user_name,
      verify_user: '',
      user_office: user_office,
      arthik_barsa: fiscal_year,
    }
    // console.log(report_data)
    jsreport.serverUrl = 'https://forest-mis-reportserver.herokuapp.com/' //'http://localhost:5488'
    let reportRequest = {
      template: { name: 'budgetbibaran' },
      data: report_data,
      options: {
        office: {
          preview: true,
        },
      },
    }
    jsreport.render(this.reportPreview, reportRequest)
  }

  componentDidMount() {
    const { distId } = this.state
    this.props.fetchOfficedropdown({
      distId: distId,
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

  fetchReportResults(fiscal_year, year, chaumasik_id, month_id, officeId) {
    // console.log(
    //   '.........parameters',
    //   fiscal_year,
    //   year,
    //   chaumasik_id,
    //   month_id,
    //   officeId
    // )
    this.props.fetchbudgetmonthlylist({
      chaumasik_id,
      expense_year: year,
      expense_month_id: month_id,
      fiscal_year,
      budget_office_id: officeId,
    })
  }

  render() {
    const { officeList, month_Filter, chaumasik_id, month_id } = this.state
    const { officeRole } = this.props

    return (
      <Fragment>
        <div className='report-filter'>
          <Filter
            id='budget'
            title='मिति'
            districtsList={districtList}
            officesList={!isNil(officeList) ? officeList : []}
            fiscalYearList={fiscal_year_list}
            yearList={year_list}
            chaumasikList={chaumasik_List}
            monthList={month_Filter}
            fYear={fiscal_year_id}
            year={2}
            chaumasik={chaumasik_id}
            month={month_id}
            onSelectOffice={this.handleOffice}
            onSelectFiscalYear={this.handleFiscalYear}
            onSelectYear={this.handleYear}
            onSelectChaumasik={this.handleChaumasik}
            onSelectMonth={this.handleMonth}
            yesOffice={officeRole < 3 ? true : false}
            yesDistrict={false}
            yesDate={false}
            yesYear={true}
            yesFiscalYear={true}
            yesChaumasik={true}
            yesMonth={true}
            multi={false}
          />
          <div className='w-40 button_style'>
            <Button
              className='mr-3 preview'
              name='पुर्वालोकन गर्नुहोस ।'
              onClick={this.handlePreview.bind(this)}
            />
            {/* <Button
              className='mr-3 save'
              name='शेभ गर्नुहोस ।'
              onClick={this.handleReport.bind(this)}
            /> */}
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
  officeDataList: state.app.officesDropdownData,
  user_office: state.app.user.user_office,
  user_name: state.app.user.user_name,
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  budgetmonthlylist: state.report.budget_monthly,
})

const mapDispatchToProps = (dispatch) => ({
  fetchbudgetmonthlylist: (payload) =>
    dispatch(ReportActions.fetchbudgetmonthlybibaranRequest(payload)),

  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMonthlyReport)
