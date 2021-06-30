import React, { Component } from "react";
import { Button, Input, Dropdown } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { equals } from "ramda";

const JafatMaagdabi = [
  { id: 1, value: "लिएको" },
  { id: 2, value: "नलिएको" },
];

const BojbahakJafat = [
  { id: 1, value: "भएको" },
  { id: 2, value: "नभएको" },
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
      bojbahak_jafat: 1,
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleJafatMaagdabi = this.handleJafatMaagdabi.bind(this);
    this.handleBojbahakJafat = this.handleBojbahakJafat.bind(this);
    this.handleDate = this.handleDate.bind(this);
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
          bojbahak_jafat_maagdabi: equals(bojbahak_jafat_maagdabi, 1)
            ? "लिएको"
            : "नलिएको",
          pratibadi_sankhya: pratibadi_sankhya,
          thunchek_dharauti: thunchek_dharauti,
          sadharan_tarekh: sadharan_tarekh,
          thuna_aadhes: thuna_aadhes,
          faisala_miti: faisala_miti,
          faisala_jariwana: faisala_jariwana,
          faisala_kaid: faisala_kaid,
          bojbahak_jafat: equals(bojbahak_jafat, 1) ? "भएको" : "नभएको",
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleJafatMaagdabi(e) {
    this.setState({ bojbahak_jafat_maagdabi: e });
  }
  handleBojbahakJafat(e) {
    this.setState({ bojbahak_jafat: e });
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
      bojbahak_jafat,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>

            <span className="dsl-b18">जाहेरी प्रतिवेदन मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={jaheri_partibedan_miti}
              onChange={(e) => this.handleDate(e, "partibedan")}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="कसुरको किसिम"
              value={kasurko_kisim}
              direction="vertical"
              onChange={(e) => this.setState({ kasurko_kisim: e })}
            />

            <Input
              className="mb-4"
              title="विगो भए विगो परिमाण (रु)"
              direction="vertical"
              value={bigo_pariman}
              onChange={(e) => this.setState({ bigo_pariman: e })}
            />

            <Input
              className="mb-4"
              title="अतिक्रमित जग्गाको क्षेत्रफल"
              direction="vertical"
              value={jaggako_area}
              onChange={(e) => this.setState({ jaggako_area: e })}
            />
            <Input
              className="mb-4"
              title="अतिक्रमित जग्गाको ठेगाना"
              direction="vertical"
              value={jaggako_thegana}
              onChange={(e) => this.setState({ jaggako_thegana: e })}
            />
            <span className="dsl-b18">अभियोग पत्र दायर भएको मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={abhiyog_miti}
              onChange={(e) => this.handleDate(e, "abhiyog")}
              options={{ calenderLocale: "ne", abhiyog_miti: "en" }}
            />
            <Input
              className="mb-4"
              title="अभियोग पत्र दायर भएको निकाय"
              direction="vertical"
              value={abhiyog_nikaya}
              onChange={(e) => this.setState({ abhiyog_nikaya: e })}
            />
            <Input
              className="mb-4"
              title="अभियोग मागदावी जरीवाना (रु)"
              direction="vertical"
              value={abhiyog_jariwana}
              onChange={(e) => this.setState({ abhiyog_jariwana: e })}
            />
            <Input
              className="mb-4"
              title="अभियोग मागदावी कैद (वर्ष)"
              direction="vertical"
              value={kaid}
              onChange={(e) => this.setState({ kaid: e })}
            />
            <Dropdown
              className="dropdownlabel mb-4"
              title="वोझ वाहक जफत माग दावी (लिएको वा नलिएको)"
              direction="vertical"
              width="fit-content"
              defaultIds={[bojbahak_jafat_maagdabi]}
              data={JafatMaagdabi}
              getValue={(JafatMaagdabi) => JafatMaagdabi["value"]}
              onChange={(e) => this.handleJafatMaagdabi(e)}
              value={bojbahak_jafat_maagdabi}
            />
            <Input
              className="mb-4"
              title="प्रतिवादी संख्या (जना)"
              direction="vertical"
              value={pratibadi_sankhya}
              onChange={(e) => this.setState({ pratibadi_sankhya: e })}
            />
            <Input
              className="mb-4"
              title="थुनछेक आदेश-धरौटी (रु)"
              direction="vertical"
              value={thunchek_dharauti}
              onChange={(e) => this.setState({ thunchek_dharauti: e })}
            />
            <Input
              className="mb-4"
              title="थुनछेक आदेश-साधारण तारेख	"
              direction="vertical"
              value={sadharan_tarekh}
              onChange={(e) => this.setState({ sadharan_tarekh: e })}
            />
            <Input
              className="mb-4"
              title="थुनछेक आदेश-थुना आदेश"
              direction="vertical"
              value={thuna_aadhes}
              onChange={(e) => this.setState({ thuna_aadhes: e })}
            />
            <span className="dsl-b18">फैसला मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={faisala_miti}
              onChange={(e) => this.handleDate(e, "faisala")}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="फैसला जरीवाना"
              value={faisala_jariwana}
              direction="vertical"
              onChange={(e) => this.setState({ faisala_jariwana: e })}
            />

            <Input
              className="mb-4"
              title="फैसला कैद"
              direction="vertical"
              value={faisala_kaid}
              onChange={(e) => this.setState({ faisala_kaid: e })}
            />
            <Dropdown
              className="dropdownlabel mb-4"
              title="वोझ वाहक जफत"
              direction="vertical"
              width="fit-content"
              defaultIds={[bojbahak_jafat]}
              data={BojbahakJafat}
              getValue={(BojbahakJafat) => BojbahakJafat["value"]}
              onChange={(e) => this.handleBojbahakJafat(e)}
              value={bojbahak_jafat}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Save"
                onClick={this.handleSubmit.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Add;
