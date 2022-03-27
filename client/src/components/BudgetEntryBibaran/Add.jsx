import React, { Component } from 'react'
import { isEmpty, equals } from 'ramda'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Button, ConfirmationDialoge, Dropdown, Input } from '../../components'
import 'nepali-datepicker-reactjs/dist/index.css'
import BudgetbibaranActions from '../../actions/budgetbibaran'
import {
  year,
  f_year,
  fiscal_year_list,
  fiscal_year_id,
  year_list,
  month_List,
  chaumasik_List,
} from '../../services/config'
import { GiConsoleController } from 'react-icons/gi'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      dist_id: '',
      office_id: '',
      sirshak_id: '',
      karyakram_sirshak_id: '',
      fiscal_year: f_year,
      expense_year: year,
      month_List: month_List,
      month_Filter: month_List,
      chaumasik_id: 0,
      expense_month: 0,
      expense_amount: '',
      created_by: '',
      updated_by: '',
      showDialog: false,
    }
    // this.handleBudgetSirshak = this.handleBudgetSirshak.bind(this)
    // this.handleKaryakramSirshak = this.handleKaryakramSirshak.bind(this)
    this.handleFiscalYear = this.handleFiscalYear.bind(this)
    this.handleChaumasik = this.handleChaumasik.bind(this)
    this.handleMonthFilter = this.handleMonthFilter.bind(this)
    this.handleMonth = this.handleMonth.bind(this)
    this.handleYear = this.handleYear.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var budgetSirshakList = []
    if (nextProps !== prevState) {
      budgetSirshakList = nextProps.budgetSirshakDataList.data
    }
    return { budgetSirshakList }
  }

  handleFiscalYear(e) {
    const value = e[0].value
    this.setState({ fiscal_year: value })
  }

  handleChaumasik(e) {
    this.setState({ chaumasik_id: e[0] })
    this.setState({ expense_month: 0 })
    this.handleMonthFilter(e[0])
  }

  handleYear(e) {
    const value = e[0].value
    this.setState({ expense_year: value })
  }

  handleMonthFilter(chaumasik_id) {
    let { month_List } = this.state
    let month_new = month_List.filter((month) => month.quater == chaumasik_id)
    this.setState({ month_Filter: month_new })
  }

  handleMonth(e) {
    this.setState({ expense_month: e[0] })
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog })
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog })
  }
  handleBudgetSirshak(e) {
    const id = e[0].id
    this.setState({ sirshak_id: id })
  }

  handleSubmit() {
    const {
      fiscal_year,
      sirshak_id,
      karyakram_sirshak_id,
      expense_year,
      expense_month,
      expense_amount,
    } = this.state
    const payload = {
      budgetentry: {
        data: {
          user_id: this.props.user.user_id,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          fiscal_year: fiscal_year,
          sirshak_id: sirshak_id,
          karyakram_sirshak_id: karyakram_sirshak_id,
          expense_year: expense_year,
          expense_month: expense_month,
          expense_amount: expense_amount,
          created_by: this.props.user.user_name,
        },
      },
    }
    console.log('payload', payload)
    this.props.onSubmit(payload)
  }

  render() {
    const { title } = this.props
    const {
      month_Filter,
      chaumasik_id,
      sirshak_id,
      karyakram_sirshak_id,
      expense_year,
      expense_month,
      expense_amount,
      budgetSirshakList,
      showDialog,
    } = this.state

    let disabled =
      isEmpty(sirshak_id) ||
      isEmpty(karyakram_sirshak_id) ||
      isEmpty(expense_year) ||
      equals(0, expense_month) ||
      isEmpty(expense_amount)
        ? true
        : false

    return (
      <React.Fragment>
        <div className=' card p-5 border-5'>
          <ConfirmationDialoge
            showDialog={showDialog}
            title='थप'
            body='के तपाईँ रोजगार सिर्जना सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?'
            confirmLabel='चाहन्छु '
            cancelLabel='चाहंदिन '
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className='detail-content'>
            <div className='title'>
              <span className='dsl-b22'>{title}</span>
            </div>
            <div className='panel space mb-4'>
              <Dropdown
                className='dropdownlabel'
                title='आर्थिक वर्ष :'
                direction='vertical'
                returnBy='data'
                defaultIds={[fiscal_year_id]}
                data={fiscal_year_list}
                getValue={(fiscal_year_list) => fiscal_year_list['value']}
                onChange={(e) => this.handleFiscalYear(e)}
                value={fiscal_year_id}
              />
              <Input
                className='w-15'
                title='बजेट शिर्षक :'
                direction='vertical'
                value={sirshak_id}
                onChange={(e) => this.setState({ sirshak_id: e })}
              />
              <Input
                className='w-60'
                title='कार्यक्रम शिर्षक :'
                direction='vertical'
                value={karyakram_sirshak_id}
                onChange={(e) => this.setState({ karyakram_sirshak_id: e })}
              />
            </div>
            <div className='panel space'>
              {/* <Dropdown
                  className='dropdownlabel'
                  title='बजेट शिर्षक: '
                  direction='vertical'
                  returnBy='data'
                  defaultIds={[sirshak_id]}
                  data={budgetSirshakList}
                  getValue={(budgetSirshakList) => budgetSirshakList['value']}
                  getType={(budgetSirshakList) => budgetSirshakList['type']}
                  onChange={(e) => this.handleBudgetSirshak(e)}
                  value={sirshak_id}
                /> */}
              <Input
                className='w-30'
                title='वार्षिक लक्ष्य :'
                direction='vertical'
                readOnly
                value={10000}
              />
              <Dropdown
                className='dropdownlabel'
                title='चौमासिक :'
                direction='vertical'
                returnBy='id'
                defaultIds={[chaumasik_id]}
                data={chaumasik_List}
                getValue={(chaumasik_List) => chaumasik_List['value']}
                onChange={(e) => this.handleChaumasik(e)}
                value={chaumasik_id}
              />
              <Input
                className='w-30'
                title='चौमासिक लक्ष्य :'
                direction='vertical'
                readOnly
                value={3300}
              />
            </div>
            <div className='section mb-4' />
          </div>
          <span className='dsl-b18'>प्रगति विवरण :</span>
          <div className='panel space mt-2 mb-4'>
            <Dropdown
              className='dropdownlabel'
              title='खर्च भएको वर्ष :'
              direction='vertical'
              returnBy='data'
              defaultIds={[2]} //current year
              data={year_list}
              getValue={(year_list) => year_list['value']}
              onChange={(e) => this.handleYear(e)}
              value={2}
            />
            <Dropdown
              className='dropdownlabel'
              title='खर्च भएको महिना :'
              direction='vertical'
              returnBy='id'
              defaultIds={[expense_month]}
              data={month_Filter}
              getValue={(month_Filter) => month_Filter['value']}
              onChange={(e) => this.handleMonth(e)}
              value={expense_month}
            />
            <Input
              type='number'
              className='w-30'
              title='खर्च रकम :'
              value={expense_amount}
              direction='vertical'
              onChange={(e) => this.setState({ expense_amount: e })}
            />
          </div>
          <div className='section mb-4' />
          <div className='mt-2 border-5'>
            <div className='d-flex justify-content-end align-items-center'>
              <Button
                className='mr-3'
                name='शेभ गर्नुहोस ।'
                disabled={disabled}
                onClick={this.handleConfirm.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Add.propTypes = {
  budgetSirshakDataList: PropTypes.any,
}

Add.defaultProps = {
  budgetSirshakDataList: {},
}

const mapStateToProps = (state) => ({
  budgetSirshakDataList: state.budgetbibaran.budgetSirshakDropdownData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBudgetsirshakdropdown: (payload) =>
    dispatch(BudgetbibaranActions.fetchbudgetsirshakdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
