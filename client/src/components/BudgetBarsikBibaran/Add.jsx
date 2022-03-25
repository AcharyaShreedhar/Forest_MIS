import React, { Component } from 'react'
import { isEmpty } from 'ramda'
import { Button, ConfirmationDialoge, Dropdown, Input } from '../../components'
import { NepaliDatePicker } from 'nepali-datepicker-reactjs'
import { nepaliToEnglishNumber } from 'nepali-number'

const BiruwaTypes = [
  { id: 1, value: 'बहुउदेशिय ' },
  { id: 2, value: 'जडिबुटी ' },
  { id: 3, value: 'वहुवर्षिय ' },
]
const UtpadanMedium = [
  { id: 1, value: 'डिभिजन बन कार्यालय ' },
  { id: 2, value: 'समुह मार्फत ' },
  { id: 3, value: 'निजी' },
  { id: 4, value: 'खरिद' },
]

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fiscal_year: '',
      sirshak_id: '',
      karyakram_sirshak_id: '',
      pratham_chaumasik_amount: '',
      doshro_chaumasik_amount: '',
      teshro_chaumasik_amount: '',
      barsik_lakshay_amount: '',
      showDialog: false,
    }
    this.handleBiruwaTypes = this.handleBiruwaTypes.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUtpadanMedium = this.handleUtpadanMedium.bind(this)
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
  }
  handleBiruwaTypes(e) {
    this.setState({ sirshak_id: e[0] })
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
  handleDate(e) {
    this.setState({ fiscal_year: e })
  }
  handleSubmit() {
    const {
      fiscal_year,
      sirshak_id,
      karyakram_sirshak_id,
      pratham_chaumasik_amount,
      doshro_chaumasik_amount,
      teshro_chaumasik_amount,
      barsik_lakshay_amount,
    } = this.state
    const payload = {
      budgetbarsik: {
        data: {
          fiscal_year: nepaliToEnglishNumber(fiscal_year),
          sirshak_id: sirshak_id,
          karyakram_sirshak_id: karyakram_sirshak_id,
          pratham_chaumasik_amount: nepaliToEnglishNumber(
            pratham_chaumasik_amount
          ),
          doshro_chaumasik_amount: nepaliToEnglishNumber(
            doshro_chaumasik_amount
          ),
          teshro_chaumasik_amount: teshro_chaumasik_amount,
          barsik_lakshay_amount: barsik_lakshay_amount,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          user_id: this.props.user.user_id,
          created_by: this.props.user.user_name,
        },
      },
    }
    this.props.onSubmit(payload)
  }
  handleUtpadanMedium(e) {
    this.setState({ karyakram_sirshak_id: e[0] })
  }

  render() {
    const { title } = this.props
    const {
      fiscal_year,
      sirshak_id,
      karyakram_sirshak_id,
      pratham_chaumasik_amount,
      doshro_chaumasik_amount,
      teshro_chaumasik_amount,
      barsik_lakshay_amount,
      showDialog,
    } = this.state

    let disabled =
      isEmpty(fiscal_year) ||
      isEmpty(sirshak_id) ||
      isEmpty(karyakram_sirshak_id) ||
      isEmpty(pratham_chaumasik_amount) ||
      isEmpty(doshro_chaumasik_amount) ||
      isEmpty(teshro_chaumasik_amount) ||
      isEmpty(barsik_lakshay_amount)
        ? true
        : false

    return (
      <React.Fragment>
        <div className="card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ विरुवा उत्पादन सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <div className="panel space mb-4">
              <div className="w-30">
                <span className="dsl-b18">आर्थिक वर्ष :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={fiscal_year}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                />
              </div>

              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वजेट शिर्षक:"
                  direction="vertical"
                  defaultIds={[sirshak_id]}
                  data={BiruwaTypes}
                  getValue={(BiruwaTypes) => BiruwaTypes['value']}
                  onChange={(e) => this.handleBiruwaTypes(e)}
                  value={sirshak_id}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="कार्यक्रम शिर्षक :"
                  direction="vertical"
                  defaultIds={[karyakram_sirshak_id]}
                  data={UtpadanMedium}
                  getValue={(UtpadanMedium) => UtpadanMedium['value']}
                  onChange={(e) => this.handleUtpadanMedium(e)}
                  value={karyakram_sirshak_id}
                />
              </div>
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="प्रथम चौमासिक रकम :"
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={pratham_chaumasik_amount}
                direction="vertical"
                onChange={(e) => this.setState({ pratham_chaumasik_amount: e })}
              />
              <Input
                className="w-30"
                title="दोस्रो चौमासिक रकम :"
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={doshro_chaumasik_amount}
                direction="vertical"
                onChange={(e) => this.setState({ doshro_chaumasik_amount: e })}
              />
              <Input
                className="w-30"
                title="तेस्रो चौमासिक रकम :"
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={teshro_chaumasik_amount}
                direction="vertical"
                onChange={(e) => this.setState({ teshro_chaumasik_amount: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="बार्सिक लक्क्ष रकम	:"
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={barsik_lakshay_amount}
                direction="vertical"
                onChange={(e) => this.setState({ barsik_lakshay_amount: e })}
              />
              <div className="w-30" />
              <div className="w-30" />
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
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
export default Add
