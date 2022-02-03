import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { banList, karyaList } from "../../services/config";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.rojgar_srijana_id,
      miti: props.history.location.item.miti,
      karya: props.history.location.item.karya,
      ekai: props.history.location.item.ekai,
      banka_prakar: props.history.location.item.banka_prakar,
      mahila: props.history.location.item.mahila,
      purus: props.history.location.item.purus,
      kaifiyat: props.history.location.item.kaifiyat,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };
    this.handleBanType = this.handleBanType.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleKarya = this.handleKarya.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBanType(e) {
    this.setState({ banka_prakar: e[0] });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ miti: e });
  }
  handleKarya(e) {
    this.setState({ karya: e[0] });
  }

  handleSubmit() {
    const {
      id,
      miti,
      karya,
      ekai,
      banka_prakar,
      mahila,
      purus,
      jamma,
      kaifiyat,
      created_by,
    } = this.state;
    const payload = {
      rojgarsrijana: {
        data: {
          karya: karya,
          miti: miti,
          ekai: ekai,
          banka_prakar: banka_prakar,
          mahila: mahila,
          purus: purus,
          jamma: jamma,
          kaifiyat: kaifiyat,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }

  render() {
    const { title } = this.props;
    const {
      karya,
      miti,
      ekai,
      banka_prakar,
      mahila,
      purus,
      kaifiyat,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(karya) ||
      isEmpty(miti) ||
      isEmpty(ekai) ||
      isEmpty(banka_prakar) ||
      isEmpty(mahila) ||
      isEmpty(purus) ||
      isEmpty(kaifiyat)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ रोजगार सिर्जना सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                <Dropdown
                  className="dropdownlabel"
                  title="कार्यहरु :"
                  direction="vertical"
                  defaultIds={[karya]}
                  data={karyaList}
                  getValue={(karyaList) => karyaList["value"]}
                  onChange={(e) => this.handleKarya(e)}
                  value={karya}
                />
              </div>
              <Input
                className="w-30"
                title="ईकाइ :"
                direction="vertical"
                value={ekai}
                onChange={(e) => this.setState({ ekai: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">कार्यक्रम मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space mb-4">
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वनको किसिम :"
                  direction="vertical"
                  defaultIds={[banka_prakar]}
                  data={banList}
                  getValue={(banList) => banList["value"]}
                  onChange={(e) => this.handleBanType(e)}
                  value={banka_prakar}
                />
              </div>
              <Input
                className="w-30"
                title="महिला :"
                type="number"
                value={mahila}
                direction="vertical"
                onChange={(e) => this.setState({ mahila: e })}
              />
              <Input
                className="w-30"
                title="पुरुष :"
                type="number"
                direction="vertical"
                value={purus}
                onChange={(e) => this.setState({ purus: e })}
              />
            </div>
            <Input
              className="w-30"
              title="कैफियत :"
              direction="vertical"
              value={kaifiyat}
              onChange={(e) => this.setState({ kaifiyat: e })}
            />
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
    );
  }
}

export default Edit;
