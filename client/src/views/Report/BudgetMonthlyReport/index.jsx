import React, { Component } from 'react'
import { Button } from '../../../components'
import { connect } from 'react-redux'
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

    var report_data = {}
    if (nextProps !== prevState) {
      officeList = nextProps.officeDataList.data
      report_data = {
        name: nextProps.user_office,
      }
    }
    return {
      report_data,
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
    console.log(fiscal_year, year, chaumasik_id, month_id, officeId)
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
          {/* <div className='w-40 button_style'>
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
          </div> */}
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
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
})

const mapDispatchToProps = (dispatch) => ({
  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMonthlyReport)
