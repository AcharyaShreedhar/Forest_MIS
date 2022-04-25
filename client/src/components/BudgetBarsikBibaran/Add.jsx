import React, { Component } from 'react'
import { isEmpty, equals } from 'ramda'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Button, ConfirmationDialoge, Dropdown, Input } from '../../components'
import { nepaliToEnglishNumber } from 'nepali-number'
import BudgetbibaranActions from '../../actions/budgetbibaran'
import AppActions from '../../actions/app'
import { f_year, fiscal_year_list, fiscal_year_id } from '../../services/config'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dist_id: this.props.user.dist_id,
      fiscal_year: f_year,
      sirshak_id: '',
      karyakram_sirshak_id: '',
      budget_office_id: '',
      pratham_chaumasik_amount: 0,
      doshro_chaumasik_amount: 0,
      teshro_chaumasik_amount: 0,
      barsik_lakshay_amount: 0,
      pratham_chaumasik_pariman: 0,
      doshro_chaumasik_pariman: 0,
      teshro_chaumasik_pariman: 0,
      barsik_lakshay_pariman: 0,
      showDialog: false,
    }
    this.handleBudgetSirshak = this.handleBudgetSirshak.bind(this)
    this.handleKaryakramSirshak = this.handleKaryakramSirshak.bind(this)
    this.handleFiscalYear = this.handleFiscalYear.bind(this)
    this.handleBarsikAmount = this.handleBarsikAmount.bind(this)
    this.handleBarsikPariman = this.handleBarsikPariman.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
    this.handleBudgetOffice = this.handleBudgetOffice.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var budgetSirshakList = []
    var karyakramSirshakList = []
    var budgetOfficeList = []
    if (nextProps !== prevState) {
      budgetSirshakList = nextProps.budgetSirshakDataList.data
      karyakramSirshakList = nextProps.karyakramSirshakDataList.data
      budgetOfficeList = nextProps.budgetOfficeDataList.data
    }
    return { budgetSirshakList, karyakramSirshakList, budgetOfficeList }
  }

  componentDidMount() {
    this.props.fetchBudgetsirshakdropdown({
      dist_id: '%',
    })
    this.props.fetchKaryakramsirshakdropdown({
      dist_id: '%',
      sirshak_id: '%',
    })
    this.props.fetchOfficedropdown({
      distId: '%',
      name: 'value',
    })
  }

  handleFiscalYear(e) {
    const value = e[0].value
    this.setState({ fiscal_year: value })
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog })
  }
  handleInputKeyPress(e) {
    if (!/[0-9०-९]/.test(e.key)) {
      e.preventDefault()
    }
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog })
  }

  handleBarsikAmount(e, amount) {
    switch (amount) {
      case 'pratham':
        if (!isEmpty(e)) {
          this.setState({ pratham_chaumasik_amount: parseInt(e) })
        } else {
          this.setState({ pratham_chaumasik_amount: 0 })
        }
        break
      case 'doshro':
        if (!isEmpty(e)) {
          this.setState({ doshro_chaumasik_amount: parseInt(e) })
        } else {
          this.setState({ doshro_chaumasik_amount: 0 })
        }
        break
      case 'teshro':
        if (!isEmpty(e)) {
          this.setState({ teshro_chaumasik_amount: parseInt(e) })
        } else {
          this.setState({ teshro_chaumasik_amount: 0 })
        }
        break
      default:
        break
    }
    this.setState((prevState) => ({
      barsik_lakshay_amount:
        prevState.pratham_chaumasik_amount +
        prevState.doshro_chaumasik_amount +
        prevState.teshro_chaumasik_amount,
    }))
  }

  handleBarsikPariman(e, pariman) {
    switch (pariman) {
      case 'pratham':
        if (!isEmpty(e)) {
          this.setState({ pratham_chaumasik_pariman: parseInt(e) })
        } else {
          this.setState({ pratham_chaumasik_pariman: 0 })
        }
        break
      case 'doshro':
        if (!isEmpty(e)) {
          this.setState({ doshro_chaumasik_pariman: parseInt(e) })
        } else {
          this.setState({ doshro_chaumasik_pariman: 0 })
        }
        break
      case 'teshro':
        if (!isEmpty(e)) {
          this.setState({ teshro_chaumasik_pariman: parseInt(e) })
        } else {
          this.setState({ teshro_chaumasik_pariman: 0 })
        }
        break
      default:
        break
    }
    this.setState((prevState) => ({
      barsik_lakshay_pariman:
        prevState.pratham_chaumasik_pariman +
        prevState.doshro_chaumasik_pariman +
        prevState.teshro_chaumasik_pariman,
    }))
  }

  handleBudgetSirshak(e) {
    // const { dist_id } = this.state
    const id = e[0].id
    this.setState({ sirshak_id: id, karyakram_sirshak_id: 0 })
    this.fetchKaryakramsirshak(id, '%')
  }

  fetchKaryakramsirshak(sirshak_id, dist_id) {
    this.props.fetchKaryakramsirshakdropdown({
      dist_id,
      sirshak_id,
    })
  }

  handleKaryakramSirshak(e) {
    const id = e[0].id
    this.setState({ karyakram_sirshak_id: id })
  }
  handleBudgetOffice(e) {
    const id = e[0].id
    this.setState({ budget_office_id: id })
  }
  handleSubmit() {
    const {
      fiscal_year,
      sirshak_id,
      karyakram_sirshak_id,
      budget_office_id,
      pratham_chaumasik_amount,
      doshro_chaumasik_amount,
      teshro_chaumasik_amount,
      barsik_lakshay_amount,
      pratham_chaumasik_pariman,
      doshro_chaumasik_pariman,
      teshro_chaumasik_pariman,
      barsik_lakshay_pariman,
    } = this.state
    const payload = {
      budgetbarsik: {
        data: {
          fiscal_year: nepaliToEnglishNumber(fiscal_year),
          sirshak_id: sirshak_id,
          karyakram_sirshak_id: karyakram_sirshak_id,
          budget_office_id: budget_office_id,
          pratham_chaumasik_amount: nepaliToEnglishNumber(
            pratham_chaumasik_amount
          ),
          doshro_chaumasik_amount: nepaliToEnglishNumber(
            doshro_chaumasik_amount
          ),
          teshro_chaumasik_amount: teshro_chaumasik_amount,
          barsik_lakshay_amount: barsik_lakshay_amount,
          pratham_chaumasik_pariman: nepaliToEnglishNumber(
            pratham_chaumasik_pariman
          ),
          doshro_chaumasik_pariman: nepaliToEnglishNumber(
            doshro_chaumasik_pariman
          ),
          teshro_chaumasik_pariman: teshro_chaumasik_pariman,
          barsik_lakshay_pariman: barsik_lakshay_pariman,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          user_id: this.props.user.user_id,
          created_by: this.props.user.user_name,
        },
      },
    }
    this.props.onSubmit(payload)
  }

  render() {
    const { title } = this.props
    const {
      fiscal_year,
      sirshak_id,
      karyakram_sirshak_id,
      budget_office_id,
      pratham_chaumasik_amount,
      doshro_chaumasik_amount,
      teshro_chaumasik_amount,
      barsik_lakshay_amount,
      pratham_chaumasik_pariman,
      doshro_chaumasik_pariman,
      teshro_chaumasik_pariman,
      barsik_lakshay_pariman,
      budgetSirshakList,
      karyakramSirshakList,
      budgetOfficeList,
      showDialog,
    } = this.state

    let disabled =
      isEmpty(fiscal_year) ||
      isEmpty(sirshak_id) ||
      isEmpty(budget_office_id) ||
      equals(0, karyakram_sirshak_id) ||
      equals(0, barsik_lakshay_amount) ||
      equals(0, barsik_lakshay_pariman)
        ? true
        : false

    return (
      <React.Fragment>
        <div className='card p-5 border-5'>
          <ConfirmationDialoge
            showDialog={showDialog}
            title='थप'
            body='के तपाईँ विरुवा उत्पादन सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?'
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
              <div className='w-30'>
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

              <div className='w-30'>
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
              <div className='w-30'>
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
              <div className='w-30'>
                <Dropdown
                  className='dropdownlabel'
                  title='कार्यलय : '
                  direction='vertical'
                  returnBy='data'
                  defaultIds={[budget_office_id]}
                  data={budgetOfficeList}
                  getValue={(budgetOfficeList) => budgetOfficeList['value']}
                  onChange={(e) => this.handleBudgetOffice(e)}
                  value={budget_office_id}
                />
              </div>
            </div>
            <div className='section mb-4' />
            <span className='dsl-b18'>परिमाण विवरण :</span>
            <div className='panel space mt-2 mb-4'>
              <Input
                className='w-30'
                title='प्रथम चौमासिक परिमाण :'
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={pratham_chaumasik_pariman}
                direction='vertical'
                // onChange={(e) => this.setState({ pratham_chaumasik_pariman: e })}
                onChange={(e) => this.handleBarsikPariman(e, 'pratham')}
              />
              <Input
                className='w-30'
                title='दोस्रो चौमासिक परिमाण :'
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={doshro_chaumasik_pariman}
                direction='vertical'
                // onChange={(e) => this.setState({ doshro_chaumasik_pariman: e })}
                onChange={(e) => this.handleBarsikPariman(e, 'doshro')}
              />
              <Input
                className='w-30'
                title='तेस्रो चौमासिक परिमाण :'
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={teshro_chaumasik_pariman}
                direction='vertical'
                // onChange={(e) => this.setState({ teshro_chaumasik_pariman: e })}
                onChange={(e) => this.handleBarsikPariman(e, 'teshro')}
              />
            </div>
            <div className='panel space'>
              <Input
                className='w-30'
                title='बार्सिक लक्क्ष परिमाण :'
                readOnly
                value={barsik_lakshay_pariman}
                direction='vertical'
              />
              <div className='w-30' />
            </div>
            <div className='section mb-4' />
            <span className='dsl-b18'>बजेट रकम :</span>
            <div className='panel space mt-2 mb-4'>
              <Input
                className='w-30'
                title='प्रथम चौमासिक रकम :'
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={pratham_chaumasik_amount}
                direction='vertical'
                // onChange={(e) => this.setState({ pratham_chaumasik_amount: e })}
                onChange={(e) => this.handleBarsikAmount(e, 'pratham')}
              />
              <Input
                className='w-30'
                title='दोस्रो चौमासिक रकम :'
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={doshro_chaumasik_amount}
                direction='vertical'
                // onChange={(e) => this.setState({ doshro_chaumasik_amount: e })}
                onChange={(e) => this.handleBarsikAmount(e, 'doshro')}
              />
              <Input
                className='w-30'
                title='तेस्रो चौमासिक रकम :'
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={teshro_chaumasik_amount}
                direction='vertical'
                // onChange={(e) => this.setState({ teshro_chaumasik_amount: e })}
                onChange={(e) => this.handleBarsikAmount(e, 'teshro')}
              />
            </div>
            <div className='panel space'>
              <Input
                className='w-30'
                title='बार्सिक लक्क्ष रकम	:'
                readOnly
                value={barsik_lakshay_amount}
                direction='vertical'
              />
              <div className='w-30' />
            </div>
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
  budgetOfficeDataList: PropTypes.any,
}

Add.defaultProps = {
  budgetSirshakDataList: {},
  karyakramSirshakDataList: {},
  budgetOfficeDataList: {},
}

const mapStateToProps = (state) => ({
  budgetSirshakDataList: state.budgetbibaran.budgetSirshakDropdownData,
  karyakramSirshakDataList: state.budgetbibaran.karyakramSirshakDropdownData,
  budgetOfficeDataList: state.app.officesDropdownData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBudgetsirshakdropdown: (payload) =>
    dispatch(BudgetbibaranActions.fetchbudgetsirshakdropdownRequest(payload)),
  fetchKaryakramsirshakdropdown: (payload) =>
    dispatch(
      BudgetbibaranActions.fetchkaryakramsirshakdropdownRequest(payload)
    ),

  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
