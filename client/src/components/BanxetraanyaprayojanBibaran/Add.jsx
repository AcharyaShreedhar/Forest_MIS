import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, Dropdown, ConfirmationDialoge } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import { equals } from "ramda";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

const LijRakam = [
  { id: 1, value: "गरेको" },
  { id: 2, value: "नगरेको" },
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arthik_barsa: "",
      uplabdakarta_naam: "",
      prayojan: "",
      upalabdha_address: "",
      xetrafal_temp: "",
      xetrafal_perm: "",
      samaya_abadhi: "",
      rukh_hataunuparne: "",
      rukh_hatayeko: "",
      sattajagga_area: "",
      xetipurti_brixyaropan: "",
      sattajagga_brixyaropan: "",
      leejrakam_adhyaadhik: 1,
      barsik_pratibedan: 1,
      prapta_rajaswo: "",
      dist_id: "",
      office_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLijRakam = this.handleLijRakam.bind(this);
    this.handleBarsikPratibedan = this.handleBarsikPratibedan.bind(this);
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
      arthik_barsa,
      uplabdakarta_naam,
      prayojan,
      upalabdha_address,
      xetrafal_temp,
      xetrafal_perm,
      samaya_abadhi,
      rukh_hataunuparne,
      rukh_hatayeko,
      sattajagga_area,
      xetipurti_brixyaropan,
      sattajagga_brixyaropan,
      leejrakam_adhyaadhik,
      barsik_pratibedan,
      prapta_rajaswo,
    } = this.state;
    const payload = {
      banxetraanyaprayojan: {
        data: {
          arthik_barsa: arthik_barsa,
          uplabdakarta_naam: uplabdakarta_naam,
          sanstha_name: uplabdakarta_naam,
          prayojan: prayojan,
          upalabdha_address: upalabdha_address,
          xetrafal_temp: xetrafal_temp,
          xetrafal_perm: xetrafal_perm,
          samaya_abadhi: samaya_abadhi,
          rukh_hataunuparne: rukh_hataunuparne,
          rukh_hatayeko: rukh_hatayeko,
          sattajagga_area: sattajagga_area,
          xetipurti_brixyaropan: xetipurti_brixyaropan,
          sattajagga_brixyaropan: sattajagga_brixyaropan,
          leejrakam_adhyaadhik: equals(leejrakam_adhyaadhik, 1)
            ? "गरेको"
            : "नगरेको",
          barsik_pratibedan: equals(barsik_pratibedan, 1) ? "गरेको" : "नगरेको",
          prapta_rajaswo: prapta_rajaswo,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleDate(e) {
    this.setState({ arthik_barsa: e });
  }
  handleLijRakam(e) {
    this.setState({ leejrakam_adhyaadhik: e[0] });
  }
  handleBarsikPratibedan(e) {
    this.setState({ barsik_pratibedan: e[0] });
  }

  render() {
    const { title } = this.props;
    const {
      arthik_barsa,
      uplabdakarta_naam,
      prayojan,
      upalabdha_address,
      xetrafal_temp,
      xetrafal_perm,
      samaya_abadhi,
      rukh_hataunuparne,
      rukh_hatayeko,
      sattajagga_area,
      xetipurti_brixyaropan,
      sattajagga_brixyaropan,
      leejrakam_adhyaadhik,
      barsik_pratibedan,
      prapta_rajaswo,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(arthik_barsa) ||
      isEmpty(uplabdakarta_naam) ||
      isEmpty(prayojan) ||
      isEmpty(upalabdha_address) ||
      isEmpty(xetrafal_temp) ||
      isEmpty(xetrafal_perm) ||
      isEmpty(samaya_abadhi) ||
      isEmpty(rukh_hataunuparne) ||
      isEmpty(rukh_hatayeko) ||
      isEmpty(sattajagga_area) ||
      isEmpty(xetipurti_brixyaropan) ||
      isEmpty(sattajagga_brixyaropan) ||
      isEmpty(leejrakam_adhyaadhik) ||
      isEmpty(barsik_pratibedan) ||
      isEmpty(prapta_rajaswo)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ वनक्षेत्रको जग्गा अन्यप्रयोजन्को लागि विवरण थप गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <div className="panel space">
              <div className="w-30">
                <span className="dsl-b18">आर्थिक वर्ष :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={arthik_barsa}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="वन क्षेत्र उपलब्ध गराएको संस्था/आयोजनाको नाम :"
                direction="vertical"
                value={uplabdakarta_naam}
                onChange={(e) => this.setState({ uplabdakarta_naam: e })}
              />
              <Input
                className="w-30"
                title="प्रयोजन :"
                direction="vertical"
                value={prayojan}
                onChange={(e) => this.setState({ prayojan: e })}
              />
            </div>
            <div className="section mb-4" />
            <span className="dsl-b18">उपलब्ध गराएको जग्गा विवरण :</span>
            <div className="panel space mb-4 mt-2">
              <Input
                className="w-30"
                title="वन उपलब्ध गराएको ठेगाना:"
                direction="vertical"
                value={upalabdha_address}
                onChange={(e) => this.setState({ upalabdha_address: e })}
              />
              <Input
                className="w-30"
                title="अस्थायी प्रयोजन क्षेत्रफल (हे) :"
                direction="vertical"
                value={xetrafal_temp}
                onChange={(e) => this.setState({ xetrafal_temp: e })}
              />
              <Input
                className="w-30"
                title="स्थायी प्रयोजन क्षेत्रफल (हे) :"
                direction="vertical"
                value={xetrafal_perm}
                onChange={(e) => this.setState({ xetrafal_perm: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="समयावधी :"
                direction="vertical"
                value={samaya_abadhi}
                onChange={(e) => this.setState({ samaya_abadhi: e })}
              />
              <Input
                className="w-30"
                title="हटाउनु पर्ने रुख संख्या :"
                direction="vertical"
                value={rukh_hataunuparne}
                onChange={(e) => this.setState({ rukh_hataunuparne: e })}
              />
              <Input
                className="w-30"
                title="हटाएको रुख संख्या :"
                direction="vertical"
                value={rukh_hatayeko}
                onChange={(e) => this.setState({ rukh_hatayeko: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="क्षतिपूर्ति वृक्षरोपण प्रजाति :"
                direction="vertical"
                value={xetipurti_brixyaropan}
                onChange={(e) => this.setState({ xetipurti_brixyaropan: e })}
              />
              <Input
                className="w-30"
                title="सट्टा भर्नावापत उपलब्ध गराएको जग्गाको क्षेत्रफल (हे.):"
                direction="vertical"
                value={sattajagga_area}
                onChange={(e) => this.setState({ sattajagga_area: e })}
              />

              <Input
                className="w-30"
                title="सट्टा भर्ना जग्गामा वृक्षरोपण प्रजाति :"
                direction="vertical"
                value={sattajagga_brixyaropan}
                onChange={(e) => this.setState({ sattajagga_brixyaropan: e })}
              />
            </div>
            <div className="panel space">
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="लिज रकम अध्यावधिक :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[leejrakam_adhyaadhik]}
                  data={LijRakam}
                  getValue={(LijRakam) => LijRakam["value"]}
                  onChange={(e) => this.handleLijRakam(e)}
                  value={leejrakam_adhyaadhik}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वार्षिक प्रतिवेदन पेश :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[barsik_pratibedan]}
                  data={LijRakam}
                  getValue={(LijRakam) => LijRakam["value"]}
                  onChange={(e) => this.handleBarsikPratibedan(e)}
                  value={barsik_pratibedan}
                />
              </div>
              <Input
                className="w-30"
                title="प्राप्त राजश्व (रु) :"
                direction="vertical"
                value={prapta_rajaswo}
                onChange={(e) => this.setState({ prapta_rajaswo: e })}
              />
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
