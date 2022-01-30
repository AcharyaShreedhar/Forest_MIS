import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, Dropdown, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

const JafatMaagdabi = [
  { id: 1, value: "लिएको" },
  { id: 2, value: "नलिएको" },
];

const Status = [
  { id: 1, value: "भएको" },
  { id: 2, value: "नभएको" },
];

const KasurKisim = [
  { id: 1, value: "बन पैदावार चोरिनिकासी" },
  { id: 2, value: "बन्यजन्तु अपराध" },
  { id: 3, value: "बन अतिक्रमण" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.mudda_anusandhan_dayari_id,
      jaheri_partibedan_miti:
        props.history.location.item.jaheri_partibedan_miti,
      kasurko_kisim: props.history.location.item.kasurko_kisim,
      bigo_pariman: props.history.location.item.bigo_pariman,
      jaggako_area: props.history.location.item.jaggako_area,
      jaggako_thegana: props.history.location.item.jaggako_thegana,
      abhiyog_miti: props.history.location.item.abhiyog_miti,
      abhiyog_nikaya: props.history.location.item.abhiyog_nikaya,
      abhiyog_jariwana: props.history.location.item.abhiyog_jariwana,
      kaid: props.history.location.item.kaid,
      bojbahak_jafat_maagdabi:
        props.history.location.item.bojbahak_jafat_maagdabi,
      pratibadi_sankhya: props.history.location.item.pratibadi_sankhya,
      thunchek_dharauti: props.history.location.item.thunchek_dharauti,
      sadharan_tarekh: props.history.location.item.sadharan_tarekh,
      thuna_aadhes: props.history.location.item.thuna_aadhes,
      faisala_miti: props.history.location.item.faisala_miti,
      faisala_jariwana: props.history.location.item.faisala_jariwana,
      faisala_kaid: props.history.location.item.faisala_kaid,
      faisala_status: props.history.location.item.faisala_status,
      bojbahak_jafat: props.history.location.item.bojbahak_jafat,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKasurKisim = this.handleKasurKisim.bind(this);
    this.handleJafatMaagdabi = this.handleJafatMaagdabi.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
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
      jaheri_partibedan_miti,
      kasurko_kisim,
      bigo_pariman,
      jaggako_area,
      jaggako_thegana,
      abhiyog_miti,
      abhiyog_nikaya,
      abhiyog_jariwana,
      kaid,
      bojbahak_jafat_maagdabi,
      pratibadi_sankhya,
      thunchek_dharauti,
      sadharan_tarekh,
      thuna_aadhes,
      faisala_miti,
      faisala_jariwana,
      faisala_kaid,
      faisala_status,
      bojbahak_jafat,
      created_by,
    } = this.state;
    const payload = {
      muddaanusandhandayari: {
        data: {
          jaheri_partibedan_miti: jaheri_partibedan_miti,
          kasurko_kisim: kasurko_kisim,
          bigo_pariman: bigo_pariman,
          jaggako_area: jaggako_area,
          jaggako_thegana: jaggako_thegana,
          abhiyog_miti: abhiyog_miti,
          abhiyog_nikaya: abhiyog_nikaya,
          abhiyog_jariwana: abhiyog_jariwana,
          kaid: kaid,
          bojbahak_jafat_maagdabi: bojbahak_jafat_maagdabi,
          pratibadi_sankhya: pratibadi_sankhya,
          thunchek_dharauti: thunchek_dharauti,
          sadharan_tarekh: sadharan_tarekh,
          thuna_aadhes: thuna_aadhes,
          faisala_miti: faisala_miti,
          faisala_jariwana: faisala_jariwana,
          faisala_kaid: faisala_kaid,
          faisala_status: faisala_status,
          bojbahak_jafat: bojbahak_jafat,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }
  handleKasurKisim(e) {
    this.setState({ kasurko_kisim: e[0] });
  }
  handleJafatMaagdabi(e) {
    this.setState({ bojbahak_jafat_maagdabi: e[0] });
  }
  handleStatus(e) {
    this.setState({ bojbahak_jafat: e[0] });
  }
  handleDate(e, type) {
    switch (type) {
      case "partibedan": {
        this.setState({ jaheri_partibedan_miti: e });
        break;
      }
      case "abhiyog": {
        this.setState({ abhiyog_miti: e });
        break;
      }
      case "faisala": {
        this.setState({ faisala_miti: e });
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { title } = this.props;
    const {
      jaheri_partibedan_miti,
      kasurko_kisim,
      bigo_pariman,
      jaggako_area,
      jaggako_thegana,
      abhiyog_miti,
      abhiyog_nikaya,
      abhiyog_jariwana,
      kaid,
      bojbahak_jafat_maagdabi,
      pratibadi_sankhya,
      thunchek_dharauti,
      sadharan_tarekh,
      thuna_aadhes,
      faisala_miti,
      faisala_jariwana,
      faisala_kaid,
      faisala_status,
      bojbahak_jafat,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(jaheri_partibedan_miti) ||
      isEmpty(kasurko_kisim) ||
      isEmpty(bigo_pariman) ||
      isEmpty(jaggako_area) ||
      isEmpty(jaggako_thegana) ||
      isEmpty(abhiyog_miti) ||
      isEmpty(abhiyog_nikaya) ||
      isEmpty(abhiyog_jariwana) ||
      isEmpty(kaid) ||
      isEmpty(bojbahak_jafat_maagdabi) ||
      isEmpty(pratibadi_sankhya) ||
      isEmpty(thunchek_dharauti) ||
      isEmpty(sadharan_tarekh) ||
      isEmpty(thuna_aadhes) ||
      isEmpty(faisala_miti) ||
      isEmpty(faisala_jariwana) ||
      isEmpty(faisala_kaid) ||
      isEmpty(faisala_status) ||
      isEmpty(bojbahak_jafat)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ मुद्दा अनुसन्धान दायरी सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                <span className="dsl-b18">जाहेरी प्रतिवेदन मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={jaheri_partibedan_miti}
                  onChange={(e) => this.handleDate(e, "partibedan")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="कसुरको किसिम :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[kasurko_kisim]}
                  data={KasurKisim}
                  getValue={(KasurKisim) => KasurKisim["value"]}
                  onChange={(e) => this.handleKasurKisim(e)}
                  value={kasurko_kisim}
                />
              </div>
              <Input
                className="w-30"
                title="विगो भए विगो परिमाण (रु) :"
                direction="vertical"
                value={bigo_pariman}
                onChange={(e) => this.setState({ bigo_pariman: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="अतिक्रमित जग्गाको ठेगाना :"
                direction="vertical"
                value={jaggako_thegana}
                onChange={(e) => this.setState({ jaggako_thegana: e })}
              />
              <Input
                className="w-30"
                title="अतिक्रमित जग्गाको क्षेत्रफल :"
                direction="vertical"
                value={jaggako_area}
                onChange={(e) => this.setState({ jaggako_area: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">अभियोग पत्र दायर भएको मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={abhiyog_miti}
                  onChange={(e) => this.handleDate(e, "abhiyog")}
                  options={{ calenderLocale: "ne", abhiyog_miti: "en" }}
                />
              </div>
            </div>
            <span className="dsl-b18">अभियोग मागदावी विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-30"
                title="अभियोग पत्र दायर भएको निकाय :"
                direction="vertical"
                value={abhiyog_nikaya}
                onChange={(e) => this.setState({ abhiyog_nikaya: e })}
              />
              <Input
                className="w-30"
                title="जरीवाना (रु) :"
                direction="vertical"
                value={abhiyog_jariwana}
                onChange={(e) => this.setState({ abhiyog_jariwana: e })}
              />
              <Input
                className="w-30"
                title="कैद (वर्ष) :"
                direction="vertical"
                value={kaid}
                onChange={(e) => this.setState({ kaid: e })}
              />
            </div>
            <span className="dsl-b18">थुनछेक आदेश विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-30"
                title="धरौटी (रु) :"
                direction="vertical"
                value={thunchek_dharauti}
                onChange={(e) => this.setState({ thunchek_dharauti: e })}
              />
              <Input
                className="w-30"
                title="साधारण तारेख	:"
                direction="vertical"
                value={sadharan_tarekh}
                onChange={(e) => this.setState({ sadharan_tarekh: e })}
              />
              <Input
                className="w-30"
                title="थुना आदेश :"
                direction="vertical"
                value={thuna_aadhes}
                onChange={(e) => this.setState({ thuna_aadhes: e })}
              />
            </div>
            <span className="dsl-b18">फैसला विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <div className="w-30">
                <span className="dsl-b18">मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={faisala_miti}
                  onChange={(e) => this.handleDate(e, "faisala")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="जरीवाना :"
                value={faisala_jariwana}
                direction="vertical"
                onChange={(e) => this.setState({ faisala_jariwana: e })}
              />
              <Input
                className="w-30"
                title="कैद :"
                direction="vertical"
                value={faisala_kaid}
                onChange={(e) => this.setState({ faisala_kaid: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="प्रतिवादी संख्या (जना) :"
                direction="vertical"
                value={pratibadi_sankhya}
                onChange={(e) => this.setState({ pratibadi_sankhya: e })}
              />
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वोझ वाहक जफत माग दावी :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[bojbahak_jafat_maagdabi]}
                  data={JafatMaagdabi}
                  getValue={(JafatMaagdabi) => JafatMaagdabi["value"]}
                  onChange={(e) => this.handleJafatMaagdabi(e)}
                  value={bojbahak_jafat_maagdabi}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वोझ वाहक जफत :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[bojbahak_jafat]}
                  data={Status}
                  getValue={(Status) => Status["value"]}
                  onChange={(e) => this.handleStatus(e)}
                  value={bojbahak_jafat}
                />
              </div>
            </div>
            <div className="panel space">
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="फैसला अवस्था  :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[faisala_status]}
                  data={Status}
                  getValue={(Status) => Status["value"]}
                  onChange={(e) => this.handleStatus(e)}
                  value={faisala_status}
                />
              </div>
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
