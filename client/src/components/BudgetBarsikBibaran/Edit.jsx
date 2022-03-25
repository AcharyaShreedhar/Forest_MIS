import React, { Component } from 'react'
import { isEmpty } from 'ramda'
import { Button, Input, ConfirmationDialoge } from '../../components'
import { nepaliToEnglishNumber } from 'nepali-number'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.history.location.item?.budget_barsik_id,
      sirshak_id: props.history.location.item?.sirshak_id,
      karyakram_sirshak_id: props.history.location.item?.karyakram_sirshak_id,
      fiscal_year: props.history.location.item?.fiscal_year,
      pratham_chaumasik_amount:
        props.history.location.item?.pratham_chaumasik_amount,
      doshro_chaumasik_amount:
        props.history.location.item?.doshro_chaumasik_amount,
      teshro_chaumasik_amount:
        props.history.location.item?.teshro_chaumasik_amount,
      barsik_lakshay_amount: props.history.location.item?.barsik_lakshay_amount,
      createdAt: props.history.location.item?.createdAt,
      updatedAt: props.history.location.item?.updatedAt,
      dist_id: props.history.location.item?.dist_id,
      office_id: props.history.location.item?.office_id,
      user_id: props.history.location.item?.user_id,
      created_by: props.history.location.item?.created_by,
      updated_by: props.history.location.item?.updated_by,
      showDialog: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
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

  handleDate(e, type) {
    switch (type) {
      case 'prapti': {
        this.setState({ acquired_date: e })
        break
      }
      case 'nirman': {
        this.setState({ manufactured_date: e })
        break
      }
      default:
        break
    }
  }
  handleSubmit() {
    const {
      id,
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
          fiscal_year: fiscal_year,
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
    this.props.onUpdate(payload, id)
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
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ सवारी साधन सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
              <Input
                className="w-30"
                title="शिर्षक नम्बर :"
                value={sirshak_id}
                direction="vertical"
                onChange={(e) => this.setState({ sirshak_id: e })}
              />
              <Input
                className="w-30"
                title="शिर्षकको नाम :"
                direction="vertical"
                value={karyakram_sirshak_id}
                onChange={(e) => this.setState({ karyakram_sirshak_id: e })}
              />
              <div className="w-30"></div>
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
                name="शंशोधन गर्नुहोस ।"
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

export default Edit
