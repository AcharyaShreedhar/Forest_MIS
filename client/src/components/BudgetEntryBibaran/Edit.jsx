import React, { Component } from 'react'
import { isEmpty, equals, isNil } from 'ramda'
import { PropTypes } from 'prop-types'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { Button, ConfirmationDialoge, Dropdown, Input } from '../../components'
import 'nepali-datepicker-reactjs/dist/index.css'
import BudgetbibaranActions from '../../actions/budgetbibaran'
import {
  fiscal_year_list,
  year_list,
  month_List,
  chaumasik_List,
} from '../../services/config'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.history.location.item?.budget_karmacharidetail_id,
      user_id: props.history.location.item?.user_id,
      dist_id: props.history.location.item?.dist_id,
      office_id: props.history.location.item?.office_id,
      fiscal_year: props.history.location.item?.fiscal_year,
      sirshak_id: props.history.location.item?.sirshak_id,
      karyakram_sirshak_id: props.history.location.item?.karyakram_sirshak_id,
      expense_year: props.history.location.item?.expense_year,
      chaumasik_id: props.history.location.item?.chaumasik_id,
      month_List: month_List,
      month_Filter: month_List,
      expense_month_id: props.history.location.item?.expense_month_id,
      expense_month: props.history.location.item?.expense_month,
      expense_amount: props.history.location.item?.expense_amount,
      created_by: props.history.location.item?.created_by,
      updated_by: props.history.location.item?.updated_by,
      showDialog: false,
    }
    this.handleFiscalYear = this.handleFiscalYear.bind(this)
    this.handleBudgetSirshak = this.handleBudgetSirshak.bind(this)
    this.handleKaryakramSirshak = this.handleKaryakramSirshak.bind(this)
    this.fetchBudgetbarsiklakshay = this.fetchBudgetbarsiklakshay.bind(this)
    this.handleChaumasik = this.handleChaumasik.bind(this)
    this.fetchBudgetchaumasiklakshay =
      this.fetchBudgetchaumasiklakshay.bind(this)
    this.handleYear = this.handleYear.bind(this)
    this.handleMonthFilter = this.handleMonthFilter.bind(this)
    this.handleMonth = this.handleMonth.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    let selected_f_year = fiscal_year_list.find((year) => {
      return year.value === props.history.location.item?.fiscal_year
    })
    this.state = { ...this.state, fiscal_year_id: selected_f_year.id }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var karyakramSirshakList = []
    var budgetSirshakList = []
    var budgetbarsiklakshay = ''
    var budgetchaumasikremain = ''
    var budgetchaumasikamount = ''
    if (nextProps !== prevState) {
      budgetSirshakList = nextProps.budgetSirshakDataList.data
      karyakramSirshakList = nextProps.karyakramSirshakDataList.data
      if (!isNil(nextProps.budgetbarsiklakshayData)) {
        if (!isNil(nextProps.budgetbarsiklakshayData.data[0])) {
          budgetbarsiklakshay =
            nextProps.budgetbarsiklakshayData.data[0].barsiklakshay
        }
      }
      if (!isNil(nextProps.budgetchaumasiklakshayData)) {
        if (!isNil(nextProps.budgetchaumasiklakshayData.data[0])) {
          budgetchaumasikamount =
            nextProps.budgetchaumasiklakshayData.data[0].chaumasik_amount
          budgetchaumasikremain =
            nextProps.budgetchaumasiklakshayData.data[0].expense_remain
        } else {
          budgetchaumasikamount = 0
          budgetchaumasikremain = 0
        }
      }
    }
    console.log(
      'Lakshayvalues: ',
      budgetbarsiklakshay,
      budgetchaumasikremain,
      budgetchaumasikamount
    )
    return {
      budgetSirshakList,
      karyakramSirshakList,
      budgetbarsiklakshay,
      budgetchaumasikremain,
      budgetchaumasikamount,
    }
  }

  componentDidMount() {
    const {
      sirshak_id,
      chaumasik_id,
      karyakram_sirshak_id,
      fiscal_year,
      budgetbarsiklakshay,
      budgetchaumasikamount,
      budgetchaumasikremain,
    } = this.state
    this.props.fetchBudgetbarsiklakshayData({
      sirshak_id: sirshak_id,
      karyakram_sirshak_id: karyakram_sirshak_id,
      fiscal_year: fiscal_year,
    })
    this.props.fetchBudgetchaumasiklakshayData({
      chaumasik_id: chaumasik_id,
      sirshak_id: sirshak_id,
      karyakram_sirshak_id: karyakram_sirshak_id,
      fiscal_year: fiscal_year,
    })
    console.log(
      'componenet mount: ',
      sirshak_id,
      chaumasik_id,
      karyakram_sirshak_id,
      fiscal_year,
      budgetbarsiklakshay,
      budgetchaumasikamount,
      budgetchaumasikremain
    )
  }

  handleFiscalYear(e) {
    const value = e[0].value
    this.setState({
      fiscal_year: value,
      sirshak_id: 0,
      karyakram_sirshak_id: 0,
      chaumasik_id: 0,
    })
    this.fetchBudgetbarsiklakshay('', '', '')
    this.fetchBudgetchaumasiklakshay('', '', '', '')
  }
  handleBudgetSirshak(e) {
    const { dist_id } = this.state
    const id = e[0].id
    this.setState({
      sirshak_id: id,
      karyakram_sirshak_id: 0,
      chaumasik_id: 0,
    })
    this.fetchKaryakramsirshak(id, dist_id)
    this.fetchBudgetbarsiklakshay('', '', '')
    this.fetchBudgetchaumasiklakshay('', '', '', '')
  }

  fetchKaryakramsirshak(sirshak_id, dist_id) {
    this.props.fetchKaryakramsirshakdropdown({
      dist_id,
      sirshak_id,
    })
  }

  handleKaryakramSirshak(e) {
    const { sirshak_id, fiscal_year } = this.state
    const id = e[0].id
    this.setState({ karyakram_sirshak_id: id })
    this.fetchBudgetbarsiklakshay(sirshak_id, id, fiscal_year)
    this.fetchBudgetchaumasiklakshay('', '', '', '')
  }

  fetchBudgetbarsiklakshay(sirshak_id, karyakram_sirshak_id, fiscal_year) {
    this.props.fetchBudgetbarsiklakshayData({
      sirshak_id,
      karyakram_sirshak_id,
      fiscal_year,
    })
  }

  handleChaumasik(e) {
    const { sirshak_id, karyakram_sirshak_id, fiscal_year } = this.state
    this.setState({ chaumasik_id: e[0] })
    this.setState({ expense_month_id: 0, expense_month: '' })
    this.handleMonthFilter(e[0])
    this.fetchBudgetchaumasiklakshay(
      sirshak_id,
      karyakram_sirshak_id,
      e[0],
      fiscal_year
    )
  }
  fetchBudgetchaumasiklakshay(
    sirshak_id,
    karyakram_sirshak_id,
    chaumasik_id,
    fiscal_year
  ) {
    this.props.fetchBudgetchaumasiklakshayData({
      sirshak_id,
      karyakram_sirshak_id,
      chaumasik_id,
      fiscal_year,
    })
  }

  handleYear(e) {
    const value = e[0].value
    this.setState({ expense_year: value })
  }

  handleMonthFilter(chaumasik_id) {
    let { month_List } = this.state
    let month_new = month_List.filter((month) => month.quater === chaumasik_id)
    this.setState({ month_Filter: month_new })
  }

  handleMonth(e) {
    const id = e[0].id
    const value = e[0].value
    this.setState({ expense_month_id: id })
    this.setState({ expense_month: value })
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog })
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog })
  }

  handleSubmit() {
    const {
      id,
      fiscal_year,
      sirshak_id,
      karyakram_sirshak_id,
      chaumasik_id,
      budgetchaumasikremain,
      expense_year,
      expense_month_id,
      expense_month,
      expense_amount,
      created_by,
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
          chaumasik_id: chaumasik_id,
          expense_year: expense_year,
          expense_month_id: expense_month_id,
          expense_month: expense_month,
          expense_amount: expense_amount,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    }
    if (budgetchaumasikremain < expense_amount) {
      toast.error('खर्च रकम चौमासिक लक्ष्य भन्दा बढी हुन भएन !!!!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      })
      this.handleClose()
    } else {
      this.props.onUpdate(payload, id)
    }
  }

  render() {
    const { title } = this.props
    const {
      fiscal_year_id,
      sirshak_id,
      karyakram_sirshak_id,
      budgetbarsiklakshay,
      chaumasik_id,
      budgetchaumasikamount,
      budgetchaumasikremain,
      expense_year,
      month_Filter,
      expense_month_id,
      expense_amount,
      budgetSirshakList,
      karyakramSirshakList,
      showDialog,
    } = this.state

    let disabled =
      isEmpty(sirshak_id) ||
      isEmpty(karyakram_sirshak_id) ||
      isEmpty(expense_year) ||
      equals(0, expense_month_id) ||
      equals(0, expense_amount) ||
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
              <div className='w-15'>
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
              </div>
              <div className='w-15'>
                <Dropdown
                  className='dropdownlabel'
                  title='बजेट शिर्षक: '
                  direction='vertical'
                  returnBy='data'
                  defaultIds={[sirshak_id]}
                  data={budgetSirshakList}
                  getValue={(budgetSirshakList) => budgetSirshakList['value']}
                  // getType={(budgetSirshakList) => budgetSirshakList['type']}
                  onChange={(e) => this.handleBudgetSirshak(e)}
                  value={sirshak_id}
                />
              </div>
              <div className='w-60'>
                <Dropdown
                  className='dropdownlabel'
                  title='कार्यक्रम शिर्षक: '
                  direction='vertical'
                  returnBy='data'
                  defaultIds={[karyakram_sirshak_id]}
                  data={karyakramSirshakList}
                  getValue={(karyakramSirshakList) =>
                    karyakramSirshakList['value']
                  }
                  // getType={(karyakramSirshakList) => karyakramSirshakList['type']}
                  onChange={(e) => this.handleKaryakramSirshak(e)}
                  value={karyakram_sirshak_id}
                />
              </div>
            </div>
            <div className='panel space'>
              <Input
                className='w-30'
                title='वार्षिक लक्ष्य :'
                direction='vertical'
                readOnly
                value={budgetbarsiklakshay}
              />
              <div className='w-30'>
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
              </div>
              <Input
                className='w-30'
                title='चौमासिक लक्ष्य :'
                direction='vertical'
                readOnly
                value={budgetchaumasikamount}
              />
            </div>
            <div className='panel space mt-4'>
              <Input
                className='w-30'
                title='खर्च हुन बँकि रकम :'
                direction='vertical'
                readOnly
                value={budgetchaumasikremain}
              />
            </div>
            <div className='section mb-4' />
          </div>
          <span className='dsl-b18'>प्रगति विवरण :</span>
          <div className='panel space mt-2 mb-4'>
            <div className='w-15'>
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
            </div>
            <div className='w-30'>
              <Dropdown
                className='dropdownlabel'
                title='खर्च भएको महिना :'
                direction='vertical'
                returnBy='data'
                defaultIds={[expense_month_id]}
                data={month_Filter}
                getValue={(month_Filter) => month_Filter['value']}
                onChange={(e) => this.handleMonth(e)}
                value={expense_month_id}
              />
            </div>
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

Edit.propTypes = {
  budgetSirshakDataList: PropTypes.any,
  karyakramSirshakDataList: PropTypes.any,
}

Edit.defaultProps = {
  budgetSirshakDataList: {},
  karyakramSirshakDataList: {},
}

const mapStateToProps = (state) => ({
  budgetSirshakDataList: state.budgetbibaran.budgetSirshakDropdownData,
  karyakramSirshakDataList: state.budgetbibaran.karyakramSirshakDropdownData,
  budgetbarsiklakshayData: state.budgetbibaran.budgetbarsiklakshayData,
  budgetchaumasiklakshayData: state.budgetbibaran.budgetchaumasiklakshayData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBudgetsirshakdropdown: (payload) =>
    dispatch(BudgetbibaranActions.fetchbudgetsirshakdropdownRequest(payload)),
  fetchKaryakramsirshakdropdown: (payload) =>
    dispatch(
      BudgetbibaranActions.fetchkaryakramsirshakdropdownRequest(payload)
    ),
  fetchBudgetbarsiklakshayData: (payload) =>
    dispatch(BudgetbibaranActions.fetchbudgetbarsiklakshaydataRequest(payload)),
  fetchBudgetchaumasiklakshayData: (payload) =>
    dispatch(
      BudgetbibaranActions.fetchbudgetchaumasiklakshaydataRequest(payload)
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
