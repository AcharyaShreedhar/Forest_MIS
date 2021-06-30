import React, { Component } from "react";

import { Button, Input, Dropdown } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import { equals } from "ramda";

const LijRakam = [
  { id: 1, value: "गरेको" },
  { id: 2, value: "नगरेको" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.banxetra_anyaprayojan_id,
      arthik_barsa: props.history.location.item.arthik_barsa,
      uplabdakarta_naam: props.history.location.item.uplabdakarta_naam,
      upalabdha_address: props.history.location.item.upalabdha_address,
      xetrafal_temp: props.history.location.item.xetrafal_temp,
      xetrafal_perm: props.history.location.item.xetrafal_perm,
      samaya_abadhi: props.history.location.item.samaya_abadhi,
      rukh_hataunuparne: props.history.location.item.rukh_hataunuparne,
      rukh_hatayeko: props.history.location.item.rukh_hatayeko,
      sattajagga_area: props.history.location.item.sattajagga_area,
      xetipurti_brixyaropan: props.history.location.item.xetipurti_brixyaropan,
      sattajagga_brixyaropan:
        props.history.location.item.sattajagga_brixyaropan,
      leejrakam_adhyaadhik: equals(
        props.history.location.item.leejrakam_adhyaadhik,
        "गरेको"
      )
        ? 1
        : 2,
      barsik_pratibedan: equals(
        props.history.location.item.barsik_pratibedan,
        "गरेको"
      )
        ? 1
        : 2,
      prapta_rajaswo: props.history.location.item.prapta_rajaswo,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLijRakam = this.handleLijRakam.bind(this);
    this.handleBarsikPratibedan = this.handleBarsikPratibedan.bind(this);
  }

  handleSubmit() {
    const {
      id,
      arthik_barsa,
      uplabdakarta_naam,
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
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }
  handleLijRakam(e) {
    this.setState({ leejrakam_adhyaadhik: e });
  }
  handleBarsikPratibedan(e) {
    this.setState({ barsik_pratibedan: e });
  }

  render() {
    const { title } = this.props;
    const {
      arthik_barsa,
      uplabdakarta_naam,
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

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>

            <Input
              className="mb-4"
              title="आर्थिक वर्ष"
              value={arthik_barsa}
              direction="vertical"
              onChange={(e) => this.setState({ arthik_barsa: e })}
            />

            <Input
              className="mb-4"
              title="वन क्षेत्र उपलब्ध गराएको संस्था/आयोजनाको नाम"
              direction="vertical"
              value={uplabdakarta_naam}
              onChange={(e) => this.setState({ uplabdakarta_naam: e })}
            />

            <Input
              className="mb-4"
              title="वन उपलब्ध गराएको ठेगाना सामुदायीक वन/ कबुलियति वन/ गाउँपालिका/ नगरपालिका"
              direction="vertical"
              value={upalabdha_address}
              onChange={(e) => this.setState({ upalabdha_address: e })}
            />
            <Input
              className="mb-4"
              title="अस्थायी प्रयोजनको लागि उपलब्ध गराएको जग्गाको क्षेत्रफल (हे)"
              direction="vertical"
              value={xetrafal_temp}
              onChange={(e) => this.setState({ xetrafal_temp: e })}
            />
            <Input
              className="mb-4"
              title="स्थायी प्रयोजनको लागि उपलब्ध गराएको जग्गाको क्षेत्रफल (हे)"
              direction="vertical"
              value={xetrafal_perm}
              onChange={(e) => this.setState({ xetrafal_perm: e })}
            />
            <Input
              className="mb-4"
              title="समयावधी"
              direction="vertical"
              value={samaya_abadhi}
              onChange={(e) => this.setState({ samaya_abadhi: e })}
            />
            <Input
              className="mb-4"
              title="हटाउनु पर्ने रुख संख्या"
              direction="vertical"
              value={rukh_hataunuparne}
              onChange={(e) => this.setState({ rukh_hataunuparne: e })}
            />
            <Input
              className="mb-4"
              title="हटाएको रुख संख्या"
              direction="vertical"
              value={rukh_hatayeko}
              onChange={(e) => this.setState({ rukh_hatayeko: e })}
            />
            <Input
              className="mb-4"
              title="सट्टा भर्नावापत उपलब्ध गराएको जग्गाको क्षेत्रफल (हे.)"
              direction="vertical"
              value={sattajagga_area}
              onChange={(e) => this.setState({ sattajagga_area: e })}
            />
            <Input
              className="mb-4"
              title="क्षतिपूर्ति वृक्षरोपण प्रजाति"
              direction="vertical"
              value={xetipurti_brixyaropan}
              onChange={(e) => this.setState({ xetipurti_brixyaropan: e })}
            />
            <Input
              className="mb-4"
              title="सट्टा भर्ना जग्गामा वृक्षरोपण प्रजाति"
              direction="vertical"
              value={sattajagga_brixyaropan}
              onChange={(e) => this.setState({ sattajagga_brixyaropan: e })}
            />
            <Dropdown
              className="dropdownlabel mb-4"
              title="लिज रकम अध्यावधिक गरेको नगरेको"
              direction="vertical"
              width="fit-content"
              defaultIds={[leejrakam_adhyaadhik]}
              data={LijRakam}
              getValue={(LijRakam) => LijRakam["value"]}
              onChange={(e) => this.handleLijRakam(e)}
              value={leejrakam_adhyaadhik}
            />
            <Dropdown
              className="dropdownlabel mb-4"
              title="वार्षिक प्रतिवेदन पेश गरेको नगरेको"
              direction="vertical"
              width="fit-content"
              defaultIds={[barsik_pratibedan]}
              data={LijRakam}
              getValue={(LijRakam) => LijRakam["value"]}
              onChange={(e) => this.handleBarsikPratibedan(e)}
              value={barsik_pratibedan}
            />
            <Input
              className="mb-4"
              title="प्राप्त राजश्व (रु)"
              direction="vertical"
              value={prapta_rajaswo}
              onChange={(e) => this.setState({ prapta_rajaswo: e })}
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

export default Edit;
