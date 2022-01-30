import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.badhi_bibaran_id,
      badhi_aayeko_sthan: props.history.location.item.badhi_aayeko_sthan,
      manab_ghaite: props.history.location.item.manab_ghaite,
      manab_mareko: props.history.location.item.manab_mareko,
      uddar_sankhya: props.history.location.item.uddar_sankhya,
      badhi_aayeko_miti: props.history.location.item.badhi_aayeko_miti,
      xeti_bibaran: props.history.location.item.xeti_bibaran,
      banyajantu_mareko: props.history.location.item.banyajantu_mareko,
      botbiruwa_xeti: props.history.location.item.botbiruwa_xeti,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
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
      id,
      badhi_aayeko_sthan,
      manab_ghaite,
      manab_mareko,
      uddar_sankhya,
      badhi_aayeko_miti,
      xeti_bibaran,
      banyajantu_mareko,
      botbiruwa_xeti,
      created_by,
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
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
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
            title="शंसोधन"
            body="के तपाईँ बाढी व्यवस्थापन सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                direction="vertical"
                value={uddar_sankhya}
                onChange={(e) => this.setState({ uddar_sankhya: e })}
              />
            </div>
            <div className="panel mb-4 space">
              <Input
                className="w-30"
                title="घाइते मानव संख्या :"
                value={manab_ghaite}
                direction="vertical"
                onChange={(e) => this.setState({ manab_ghaite: e })}
              />
              <Input
                className="w-30"
                title="मृत मानव संख्या :"
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
                value={banyajantu_mareko}
                direction="vertical"
                onChange={(e) => this.setState({ banyajantu_mareko: e })}
              />
              <Input
                className="w-30"
                title="बोटविरुवा क्षेति संख्या :"
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
