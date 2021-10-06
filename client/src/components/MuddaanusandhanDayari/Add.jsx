import React, { Component } from "react";
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

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jaheri_partibedan_miti: "",
      kasurko_kisim: "",
      bigo_pariman: "",
      jaggako_area: "",
      jaggako_thegana: "",
      abhiyog_miti: "",
      abhiyog_nikaya: "",
      abhiyog_jariwana: "",
      kaid: "",
      bojbahak_jafat_maagdabi: 1,
      pratibadi_sankhya: "",
      thunchek_dharauti: "",
      sadharan_tarekh: "",
      thuna_aadhes: "",
      faisala_miti: "",
      faisala_jariwana: "",
      faisala_kaid: "",
      faisala_status: "",
      bojbahak_jafat: 1,
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKasurKisim=this.handleKasurKisim.bind(this);
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
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
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

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ मुद्दा अनुसन्धान दायरी सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?"
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
                name="शेभ गर्नुहोस ।"
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
