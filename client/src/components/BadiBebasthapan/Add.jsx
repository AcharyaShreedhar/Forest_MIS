import React, { Component } from "react";
import { isEmpty } from "ramda";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badhi_aayeko_sthan: "",
      manab_ghaite: "",
      manab_mareko: "",
      uddar_sankhya: "",
      badhi_aayeko_miti: "",
      xeti_bibaran: "",
      banyajantu_mareko: "",
      botbiruwa_xeti: "",
      dist_id: "",
      office_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
      badhi_aayeko_sthan,
      manab_ghaite,
      manab_mareko,
      uddar_sankhya,
      badhi_aayeko_miti,
      xeti_bibaran,
      banyajantu_mareko,
      botbiruwa_xeti,
    } = this.state;
    const payload = {
      badhibibaran: {
        data: {
          badhi_aayeko_sthan: badhi_aayeko_sthan,
          manab_ghaite: manab_ghaite,
          manab_mareko: manab_mareko,
          uddar_sankhya: uddar_sankhya,
          badhi_aayeko_miti: badhi_aayeko_miti,
          xeti_bibaran: xeti_bibaran,
          banyajantu_mareko: banyajantu_mareko,
          botbiruwa_xeti: botbiruwa_xeti,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleDate(e) {
    this.setState({ badhi_aayeko_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      badhi_aayeko_sthan,
      manab_ghaite,
      manab_mareko,
      uddar_sankhya,
      badhi_aayeko_miti,
      xeti_bibaran,
      banyajantu_mareko,
      botbiruwa_xeti,
      showDialog,
    } = this.state;
    let disabled =
      isEmpty(badhi_aayeko_sthan) ||
      isEmpty(manab_ghaite) ||
      isEmpty(uddar_sankhya) ||
      isEmpty(badhi_aayeko_miti) ||
      isEmpty(xeti_bibaran) ||
      isEmpty(banyajantu_mareko) ||
      isEmpty(botbiruwa_xeti)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ बाढी व्यवस्थापन सम्बन्धि विवरण गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <div className="panel mb-4 space">
              <div className="w-30">
                <span className="dsl-b18">बाढी आएको मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={badhi_aayeko_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="बाढी आएको स्थान :"
                value={badhi_aayeko_sthan}
                direction="vertical"
                onChange={(e) => this.setState({ badhi_aayeko_sthan: e })}
              />
              <Input
                className="w-30"
                title="उद्दार संख्या :"
                type="number"
                direction="vertical"
                value={uddar_sankhya}
                onChange={(e) => this.setState({ uddar_sankhya: e })}
              />
            </div>
            <div className="panel mb-4 space">
              <Input
                className="w-30"
                title="घाइते मानव संख्या :"
                type="number"
                value={manab_ghaite}
                direction="vertical"
                onChange={(e) => this.setState({ manab_ghaite: e })}
              />
              <Input
                className="w-30"
                title="मृत मानव संख्या :"
                type="number"
                direction="vertical"
                value={manab_mareko}
                onChange={(e) => this.setState({ manab_mareko: e })}
              />
              <Input
                className="w-30"
                title="क्षेति विवरण :"
                value={xeti_bibaran}
                direction="vertical"
                onChange={(e) => this.setState({ xeti_bibaran: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="मर्ने वन्यजन्तु संख्या :"
                type="number"
                value={banyajantu_mareko}
                direction="vertical"
                onChange={(e) => this.setState({ banyajantu_mareko: e })}
              />
              <Input
                className="w-30"
                title="बोटविरुवा क्षेति संख्या :"
                type="number"
                value={botbiruwa_xeti}
                direction="vertical"
                onChange={(e) => this.setState({ botbiruwa_xeti: e })}
              />
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
    );
  }
}

export default Add;
