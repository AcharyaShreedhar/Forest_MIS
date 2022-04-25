import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { NepaliDatePicker } from 'nepali-datepicker-reactjs'
import 'nepali-datepicker-reactjs/dist/index.css'
import { Dropdown } from '../../components'
import './Filter.scss'

export class Filter extends Component {
  constructor(props) {
    super(props)
    const { fYear, year, chaumasik, month } = this.props
    this.state = {
      fromdate: '2075-01-01',
      todate: '2090-12-30',
      district: ['%'],
      office: ['%'],
      fyearId: fYear,
      yearId: year, // current
      chaumasikId: chaumasik,
      monthId: month,
    }
    this.handletoDate = this.handletoDate.bind(this)
    this.handlefromDate = this.handlefromDate.bind(this)
    this.handleDistrict = this.handleDistrict.bind(this)
    this.handleOffice = this.handleOffice.bind(this)
  }

  handletoDate(e) {
    this.setState({ todate: e })
    this.props.onToDate(e, this.props.id)
  }
  handlefromDate(e) {
    this.setState({ fromdate: e })
    this.props.onFromDate(e, this.props.id)
  }
  handleDistrict(e) {
    this.setState({ district: e })
    this.props.onSelect(e.length === 0 ? '%' : e, this.props.id)
    this.props.yesOffice && this.setState({ office: ['%'] })
  }

  handleOffice(e) {
    this.setState({ office: e })
    this.props.onSelectOffice(e.length === 0 ? '%' : e, this.props.id)
  }

  handleFiscalYear(e) {
    this.setState({ fyearId: e[0].id })
    this.props.onSelectFiscalYear(e, this.props.id)
  }

  handleYear(e) {
    this.setState({ yearId: e[0].id })
    this.props.onSelectYear(e, this.props.id)
  }
  handleChaumasik(e) {
    this.setState({ chaumasikId: e[0] })
    this.setState({ monthId: 0 })
    this.props.onSelectChaumasik(e, this.props.id)
  }
  handleMonth(e) {
    this.setState({ monthId: e[0].id })
    this.props.onSelectMonth(e, this.props.id)
  }

  render() {
    const {
      district,
      office,
      fromdate,
      todate,
      fyearId,
      yearId,
      chaumasikId,
      monthId,
    } = this.state
    const {
      districtsList,
      officesList,
      fiscalYearList,
      yearList,
      chaumasikList,
      monthList,
      title,
      yesDate,
      yesOffice,
      yesDistrict,
      yesYear,
      yesFiscalYear,
      yesChaumasik,
      yesMonth,
      multi,
    } = this.props
    return (
      <div className='filter'>
        {yesDate && (
          <Fragment>
            <span className='dsl-b22'>{title}:</span>
            <NepaliDatePicker
              inputClassName='form-control'
              className='ml-2'
              value={fromdate}
              onChange={(e) => this.handlefromDate(e)}
              options={{ calenderLocale: 'ne', valueLocale: 'en' }}
            />
            <span className='dsl-b22 mx-2'>देखी </span>
            <NepaliDatePicker
              inputClassName='form-control'
              className='ml-2'
              value={todate}
              onChange={(e) => this.handletoDate(e)}
              options={{ calenderLocale: 'ne', valueLocale: 'en' }}
            />
          </Fragment>
        )}
        {yesDistrict && (
          <Dropdown
            className='dropdownlabel ml-2'
            title='जिल्ला :'
            width='fit-content'
            defaultIds={district}
            data={districtsList}
            getValue={(districtsList) => districtsList['value']}
            onChange={(e) => this.handleDistrict(e)}
            multi={multi}
            value={district}
          />
        )}
        {yesOffice && (
          <Dropdown
            className='dropdownlabel ml-2'
            title='कार्यालय :'
            width='fit-content'
            defaultIds={office}
            data={officesList}
            getValue={(officesList) => officesList['value']}
            onChange={(e) => this.handleOffice(e)}
            value={office}
            multi={multi}
          />
        )}
        {yesFiscalYear && (
          <Dropdown
            className='dropdownlabel ml-2'
            title='आर्थिक वर्ष :'
            returnBy='data'
            defaultIds={[fyearId]}
            data={fiscalYearList}
            getValue={(fiscalYearList) => fiscalYearList['value']}
            onChange={(e) => this.handleFiscalYear(e)}
            multi={multi}
            value={fyearId}
          />
        )}
        {yesYear && (
          <Dropdown
            className='dropdownlabel ml-2'
            title='वर्ष :'
            returnBy='data'
            defaultIds={[yearId]} //current year
            data={yearList}
            getValue={(yearList) => yearList['value']}
            onChange={(e) => this.handleYear(e)}
            multi={multi}
            value={yearId}
          />
        )}
        {yesChaumasik && (
          <Dropdown
            className='dropdownlabel ml-2'
            title='चौमासिक :'
            returnBy='id'
            defaultIds={[chaumasikId]}
            data={chaumasikList}
            getValue={(chaumasikList) => chaumasikList['value']}
            onChange={(e) => this.handleChaumasik(e)}
            multi={multi}
            value={chaumasikId}
          />
        )}
        {yesMonth && (
          <Dropdown
            className='dropdownlabel ml-2'
            title='महिना :'
            returnBy='data'
            defaultIds={[monthId]}
            data={monthList}
            getValue={(monthList) => monthList['value']}
            onChange={(e) => this.handleMonth(e)}
            multi={multi}
            value={monthId}
          />
        )}
      </div>
    )
  }
}
Filter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  yesDate: PropTypes.any,
  yesOffice: PropTypes.any,
  yesDistrict: PropTypes.any,
  yesYear: PropTypes.any,
  yesFiscalYear: PropTypes.any,
  yesChaumasik: PropTypes.any,
  yesMonth: PropTypes.any,
  fromdate: PropTypes.string,
  todate: PropTypes.string,
  district: PropTypes.string,
  office: PropTypes.string,
  onToDate: PropTypes.func,
  onFromDate: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectOffice: PropTypes.func,
  multi: PropTypes.bool,
}

Filter.defaultProps = {
  className: '',
  title: '',
  districtsList: {},
  officesList: {},
  fromdate: '',
  todate: '',
  district: '',
  office: '',
  yesDate: true,
  yesOffice: false,
  yesDistrict: false,
  yesYear: false,
  yesFiscalYear: false,
  yesChaumasik: false,
  yesMonth: false,
  multi: true,
  onToDate: () => {},
  onFromDate: () => {},
  onSelect: () => {},
  onSelectOffice: () => {},
}

export default Filter
