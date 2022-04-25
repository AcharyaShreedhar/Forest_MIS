import React, { Component } from 'react'
import { isEmpty } from 'ramda'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Button, ConfirmationDialoge, Dropdown, Input } from '../../components'
import 'nepali-datepicker-reactjs/dist/index.css'
import BudgetbibaranActions from '../../actions/budgetbibaran'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      dist_id: '',
      office_id: '',
      sirshak_id: '',
      karyakram_name: '',
      karyakram_sirshak_no: '',
      created_by: '',
      updated_by: '',
      showDialog: false,
    }
    this.handleBudgetSirshak = this.handleBudgetSirshak.bind(this)
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
    const { sirshak_id, karyakram_name, karyakram_sirshak_no } = this.state
    const payload = {
      karyakramsirshak: {
        data: {
          user_id: this.props.user.user_id,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          sirshak_id: sirshak_id,
          karyakram_name: karyakram_name,
          karyakram_sirshak_no: karyakram_sirshak_no,
          created_by: this.props.user.user_name,
        },
      },
    }
    this.props.onSubmit(payload)
  }

  render() {
    const { title } = this.props
    const {
      sirshak_id,
      karyakram_name,
      karyakram_sirshak_no,
      budgetSirshakList,
      showDialog,
    } = this.state

    let disabled =
      isEmpty(karyakram_name) ||
      isEmpty(karyakram_sirshak_no) ||
      isEmpty(sirshak_id)
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
              <Input
                className='w-30'
                title='कार्यक्रम शिर्षक नं.  :'
                direction='vertical'
                value={karyakram_sirshak_no}
                onChange={(e) => this.setState({ karyakram_sirshak_no: e })}
              />
              <Input
                className='w-30'
                title='कार्यक्रम शिर्षक :'
                direction='vertical'
                value={karyakram_name}
                onChange={(e) => this.setState({ karyakram_name: e })}
              />

              {/* <div className='w-30' /> */}
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
