import React, { Component } from 'react'
import { Button } from '../../../components'
import { connect } from 'react-redux'
import { equals } from 'ramda'
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
import { isNil } from 'ramda'
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
      officeList = nextProps.officeDataList.data
      user_name = nextProps.user_name
      user_office = nextProps.user_office
      budget_monthly = nextProps.budgetmonthlylist.budget_monthly
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
    let c_sum = 0
    let gc_sum = 0
    let gm_sum = 0
    let m_sum = 0
    let h_sum = 0
    let h_sum_p = 0
    let p_total = {}
    // console.log(allbs[0])
    budget_monthly.map((karyakram) => {
      if (equals(allbs[0], karyakram.sirshak_name)) {
        // console.log('------', sn, karyakram.karyakram_name)
        b_sum += karyakram.barsik_lakshay_amount
        c_sum += karyakram.chaumasik_lakshay_amount
        gc_sum += karyakram.gata_chaumasik_pragati
        gm_sum += karyakram.gata_mahina_pragati
        m_sum += karyakram.yes_mahina_pragati
        h_sum += karyakram.mahina_pragati
        p_value.push({
          sn: sn,
          karyakram_name: karyakram.karyakram_name,
          barsik_lakshay_amount: karyakram.barsik_lakshay_amount,
          chaumasik_lakshay_amount: karyakram.chaumasik_lakshay_amount,
          gata_chaumasik_pragati: karyakram.gata_chaumasik_pragati,
          gata_mahina_pragati: karyakram.gata_mahina_pragati,
          yes_mahina_pragati: karyakram.yes_mahina_pragati,
          mahina_pragati: karyakram.mahina_pragati,
          mahina_pragati_percent: (
            (karyakram.mahina_pragati / karyakram.barsik_lakshay_amount) *
            100
          ).toFixed(2),
        })
        sn++
      }
      return 0
    })
    h_sum_p = (h_sum / b_sum) * 100
    // console.log(h_sum, b_sum)
    p_total = {
      name: 'Total pungi',
      b_sum: b_sum,
      c_sum: c_sum,
      gc_sum: gc_sum,
      gm_sum: gm_sum,
      m_sum: m_sum,
      h_sum: h_sum,
      h_sum_p: h_sum_p.toFixed(2),
    }
    report_data = { pungi: allbs[0], p_value, p_total }

    sn = 1
    let c_value = []
    b_sum = 0
    c_sum = 0
    gc_sum = 0
    gm_sum = 0
    m_sum = 0
    h_sum = 0
    h_sum_p = 0
    let c_total = {}
    // console.log(allbs[1])
    budget_monthly.map((karyakram) => {
      if (equals(allbs[1], karyakram.sirshak_name)) {
        // console.log('------', sn, karyakram.karyakram_name)
        b_sum += karyakram.barsik_lakshay_amount
        c_sum += karyakram.chaumasik_lakshay_amount
        gc_sum += karyakram.gata_chaumasik_pragati
        gm_sum += karyakram.gata_mahina_pragati
        m_sum += karyakram.yes_mahina_pragati
        h_sum += karyakram.mahina_pragati
        c_value.push({
          sn: sn,
          karyakram_name: karyakram.karyakram_name,
          barsik_lakshay_amount: karyakram.barsik_lakshay_amount,
          chaumasik_lakshay_amount: karyakram.chaumasik_lakshay_amount,
          gata_chaumasik_pragati: karyakram.gata_chaumasik_pragati,
          gata_mahina_pragati: karyakram.gata_mahina_pragati,
          yes_mahina_pragati: karyakram.yes_mahina_pragati,
          mahina_pragati: karyakram.mahina_pragati,
          mahina_pragati_percent: (
            (karyakram.mahina_pragati / karyakram.barsik_lakshay_amount) *
            100
          ).toFixed(2),
        })
        sn++
      }
      return 0
    })
    h_sum_p = (h_sum / b_sum) * 100

    c_total = {
      name: 'Total chalu',
      b_sum: b_sum,
      c_sum: c_sum,
      gc_sum: gc_sum,
      gm_sum: gm_sum,
      m_sum: m_sum,
      h_sum: h_sum,
      h_sum_p: h_sum_p.toFixed(2),
    }
    report_data = {
      ...report_data,
      chalu: allbs[1],
      c_value,
      c_total,
      user_name: user_name,
      user_office: user_office,
      arthik_barsa: fiscal_year,
    }
    console.log(report_data)
    jsreport.serverUrl = 'http://localhost:5488'
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
    console.log(
      '.........parameters',
      fiscal_year,
      year,
      chaumasik_id,
      month_id,
      officeId
    )
    this.props.fetchbudgetmonthlylist({
      chaumasik_id,
      expense_year: year,
      expense_month_id: month_id,
      fiscal_year,
      office_id: officeId,
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
