import React, { Component } from 'react'
import { isEmpty, equals, isNil } from 'ramda'
import { PropTypes } from 'prop-types'
import { toast } from 'react-toastify'
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

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      dist_id: this.props.user.dist_id,
      office_id: this.props.user.office_id,
      fiscal_year: f_year,
      sirshak_id: '%',
      karyakram_sirshak_id: '',
      chaumasik_id: 0,
      expense_year: year,
      month_List: month_List,
      month_Filter: month_List,
      expense_month_id: 0,
      expense_month: '',
      expense_amount: 0,
      expense_pariman: 0,
      remarks: '',
      created_by: '',
      updated_by: '',
      showDialog: false,
    }
    // this.handleFiscalYear = this.handleFiscalYear.bind(this)
    // this.handleBudgetSirshak = this.handleBudgetSirshak.bind(this)
    // this.handleKaryakramSirshak = this.handleKaryakramSirshak.bind(this)
    // this.fetchBudgetbarsiklakshay = this.fetchBudgetbarsiklakshay.bind(this)
    // this.handleChaumasik = this.handleChaumasik.bind(this)
    // this.fetchBudgetchaumasiklakshay =
    //   this.fetchBudgetchaumasiklakshay.bind(this)
    // // this.handleYear = this.handleYear.bind(this)
    // this.handleMonthFilter = this.handleMonthFilter.bind(this)
    // this.handleMonth = this.handleMonth.bind(this)
    // this.handleClose = this.handleClose.bind(this)
    // this.handleConfirm = this.handleConfirm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var budgetSirshakList = []
    var karyakramSirshakList = []
    var budgetbarsiklakshay = ''
    var budgetbarsikpariman = ''
    var budgetchaumasikremain = ''
    var budgetchaumasikparimanremain = ''
    var budgetchaumasikamount = ''
    var budgetchaumasikpariman = ''
    if (nextProps !== prevState) {
      budgetSirshakList = nextProps.budgetSirshakDataList.data
      karyakramSirshakList = nextProps.karyakramSirshakDataList.data
      if (!isNil(nextProps.budgetbarsiklakshayData)) {
        if (!isNil(nextProps.budgetbarsiklakshayData.data[0])) {
          budgetbarsiklakshay =
            nextProps.budgetbarsiklakshayData.data[0].barsiklakshay
          budgetbarsikpariman =
            nextProps.budgetbarsiklakshayData.data[0].barsikpariman
        }
      }
      if (!isNil(nextProps.budgetchaumasiklakshayData)) {
        if (!isNil(nextProps.budgetchaumasiklakshayData.data[0])) {
          budgetchaumasikamount =
            nextProps.budgetchaumasiklakshayData.data[0].chaumasik_amount
          budgetchaumasikremain =
            nextProps.budgetchaumasiklakshayData.data[0].expense_remain
          budgetchaumasikpariman =
            nextProps.budgetchaumasiklakshayData.data[0].chaumasik_pariman
          budgetchaumasikparimanremain =
            nextProps.budgetchaumasiklakshayData.data[0].expense_pariman_remain
        } else {
          budgetchaumasikamount = 0
          budgetchaumasikremain = 0
          budgetchaumasikpariman = 0
          budgetchaumasikparimanremain = 0
        }
      }
    }
    return {
      budgetSirshakList,
      karyakramSirshakList,
      budgetbarsiklakshay,
      budgetbarsikpariman,
      budgetchaumasikremain,
      budgetchaumasikamount,
      budgetchaumasikparimanremain,
      budgetchaumasikpariman,
    }
  }

  componentDidMount() {
    this.props.fetchBudgetbarsiklakshayData({
      sirshak_id: '',
      karyakram_sirshak_id: '',
      fiscal_year: '',
      budget_office_id: '',
    })
    this.props.fetchBudgetchaumasiklakshayData({
      chaumasik_id: '',
      sirshak_id: '',
      karyakram_sirshak_id: '',
      fiscal_year: '',
      budget_office_id: '',
    })
    this.props.fetchBudgetsirshakdropdown({
      dist_id: '%',
    })
    this.props.fetchKaryakramsirshakdropdown({
      dist_id: '%',
      sirshak_id: '%',
    })
  }

  handleFiscalYear(e) {
    const value = e[0].value
    this.setState({
      fiscal_year: value,
      sirshak_id: 0,
      karyakram_sirshak_id: 0,
      chaumasik_id: 0,
    })
    this.fetchBudgetbarsiklakshay('', '', '', '')
    this.fetchBudgetchaumasiklakshay('', '', '', '', '')
  }
  handleBudgetSirshak(e) {
    // const { dist_id } = this.state
    const id = e[0].id
    this.setState({
      sirshak_id: id,
      karyakram_sirshak_id: 0,
      chaumasik_id: 0,
    })
    this.fetchKaryakramsirshak(id, '%')
    this.fetchBudgetbarsiklakshay('', '', '', '')
    this.fetchBudgetchaumasiklakshay('', '', '', '', '')
  }

  fetchKaryakramsirshak(sirshak_id, dist_id) {
    this.props.fetchKaryakramsirshakdropdown({
      dist_id,
      sirshak_id,
    })
  }

  handleKaryakramSirshak(e) {
    const { office_id, sirshak_id, fiscal_year } = this.state
    const id = e[0].id
    this.setState({ karyakram_sirshak_id: id })
    this.fetchBudgetbarsiklakshay(sirshak_id, id, fiscal_year, office_id)
    this.fetchBudgetchaumasiklakshay('', '', '', '', '')
  }

  fetchBudgetbarsiklakshay(
    sirshak_id,
    karyakram_sirshak_id,
    fiscal_year,
    office_id
  ) {
    this.props.fetchBudgetbarsiklakshayData({
      sirshak_id,
      karyakram_sirshak_id,
      fiscal_year,
      budget_office_id: office_id,
    })
  }

  handleChaumasik(e) {
    const { office_id, sirshak_id, karyakram_sirshak_id, fiscal_year } =
      this.state
    this.setState({ chaumasik_id: e[0] })
    this.setState({ expense_month_id: 0, expense_month: '' })
    this.handleMonthFilter(e[0])
    this.fetchBudgetchaumasiklakshay(
      sirshak_id,
      karyakram_sirshak_id,
      e[0],
      fiscal_year,
      office_id
    )
  }
  fetchBudgetchaumasiklakshay(
    sirshak_id,
    karyakram_sirshak_id,
    chaumasik_id,
    fiscal_year,
    office_id
  ) {
    this.props.fetchBudgetchaumasiklakshayData({
      sirshak_id,
      karyakram_sirshak_id,
      chaumasik_id,
      fiscal_year,
      budget_office_id: office_id,
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
      fiscal_year,
      sirshak_id,
      karyakram_sirshak_id,
      chaumasik_id,
      budgetchaumasikremain,
      budgetchaumasikparimanremain,
      expense_year,
      expense_month_id,
      expense_month,
      expense_amount,
      expense_pariman,
      remarks,
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
          expense_pariman: expense_pariman,
          remarks: remarks,
          created_by: this.props.user.user_name,
        },
      },
    }
    if (budgetchaumasikremain < expense_amount) {
      toast.error('खर्च रकम चौमासिक लक्ष्य भन्दा बढी हुन भएन !!!!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      })
      this.handleClose()
    } else if (budgetchaumasikparimanremain < expense_pariman) {
      toast.error('खर्च परिमाण चौमासिक परिमाण लक्ष्य भन्दा बढी हुन भएन !!!!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      })
      this.handleClose()
    } else {
      this.props.onSubmit(payload)
    }
  }

  render() {
    const { title } = this.props
    const {
      sirshak_id,
      karyakram_sirshak_id,
      budgetbarsiklakshay,
      budgetbarsikpariman,
      chaumasik_id,
      budgetchaumasikamount,
      budgetchaumasikremain,
      budgetchaumasikpariman,
      budgetchaumasikparimanremain,
      expense_year,
      month_Filter,
      expense_month_id,
      expense_amount,
      expense_pariman,
      remarks,
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
      equals(0, expense_pariman)
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
            <div className='panel space'>
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
            <div className='section mb-4' />
            <span className='dsl-b18'>वार्षिक लक्ष्य :</span>
            <div className='panel space mt-2'>
              <Input
                className='w-30'
                title='रकम :'
                direction='vertical'
                readOnly
                value={budgetbarsiklakshay}
              />
              <Input
                className='w-30'
                title='परिमाण :'
                direction='vertical'
                readOnly
                value={budgetbarsikpariman}
              />
              <div className='w-30' />
            </div>
            <div className='section mb-4' />
            <span className='dsl-b18'>चौमासिक लक्ष्य :</span>
            <div className='panel space mt-2'>
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
                title='रकम :'
                direction='vertical'
                readOnly
                value={budgetchaumasikamount}
              />
              <Input
                className='w-30'
                title='खर्च हुन बँकि रकम :'
                direction='vertical'
                readOnly
                value={budgetchaumasikremain}
              />
            </div>
            <div className='panel space mt-4'>
              <Input
                className='w-30'
                title='परिमाण :'
                direction='vertical'
                readOnly
                value={budgetchaumasikpariman}
              />
              <Input
                className='w-30'
                title='खर्च हुन बँकि परिमाण :'
                direction='vertical'
                readOnly
                value={budgetchaumasikparimanremain}
              />
              <div className='w-30' />
            </div>
            <div className='section mb-4' />
          </div>

          <span className='dsl-b18'>प्रगति विवरण :</span>
          <div className='panel space mt-2 mb-4'>
            <div className='w-10'>
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
            <div className='w-25'>
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
              className='w-25'
              title='खर्च रकम :'
              value={expense_amount}
              direction='vertical'
              onChange={(e) => this.setState({ expense_amount: e })}
            />
            <Input
              type='number'
              className='w-25'
              title='खर्च परिमाण :'
              value={expense_pariman}
              direction='vertical'
              onChange={(e) => this.setState({ expense_pariman: e })}
            />
          </div>
          <div className='panel space'>
            <Input
              type='text'
              className='w-30'
              title='कैफियत :'
              value={remarks}
              direction='vertical'
              onChange={(e) => this.setState({ remarks: e })}
            />
            <div className='w-30' />
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
  karyakramSirshakDataList: PropTypes.any,
}

Add.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Add)
