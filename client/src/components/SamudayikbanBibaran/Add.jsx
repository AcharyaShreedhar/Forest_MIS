import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./SamudayikbanBibaran.scss";

const ForestTypes = [
  { id: 1, value: "प्राकृतिक्" },
  { id: 2, value: "वृक्षरोपण" },
];
const BaiganikBan = [
  { id: 1, value: "भएको" },
  { id: 2, value: "नभएको" },
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regno: "",
      name: "",
      area: "",
      dalit_ghardhuri: "",
      janjati_ghardhuri: "",
      anya_ghardhuri: "",
      female: "",
      male: "",
      main_species: "",
      forest_type: 1,
      handover_date: "",
      forest_maujdat: "",
      timber: "",
      wood: "",
      nabikaran_abadhi: "१",
      renewed_date: "",
      renewal_date: "",
      baiganik_ban: 1,
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleBaiganikBan = this.handleBaiganikBan.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleForestType = this.handleForestType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleBaiganikBan(e) {
    this.setState({ baiganik_ban: e[0] });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleDate(e, type) {
    switch (type) {
      case "handover": {
        this.setState({ handover_date: e });
        break;
      }
      case "renewed": {
        this.setState({ renewed_date: e });
        break;
      }
      case "renewal": {
        this.setState({ renewal_date: e });
        break;
      }
      default:
        break;
    }
  }
  handleForestType(e) {
    this.setState({ forest_type: e[0] });
  }

  handleSubmit() {
    const {
      name,
      regno,
      area,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      main_species,
      forest_type,
      handover_date,
      forest_maujdat,
      timber,
      wood,
      renewed_date,
      renewal_date,
      baiganik_ban,
      nabikaran_abadhi,
    } = this.state;
    const payload = {
      samudayikban: {
        data: {
          samudayikban_name: name,
          darta_no: regno,
          area: area,
          dalit_ghardhuri: dalit_ghardhuri,
          janjati_ghardhuri: janjati_ghardhuri,
          anya_ghardhuri: anya_ghardhuri,
          female: female,
          male: male,
          main_species: main_species,
          forest_type: forest_type,
          handover_date: handover_date,
          forest_maujdat: forest_maujdat,
          timber: timber,
          wood: wood,
          baiganik_ban: baiganik_ban,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
      nabikarankaryayojana: {
        data: {
          darta_id: regno,
          renewed_date: renewed_date,
          renewal_date: renewal_date,
          nabikaran_abadhi: nabikaran_abadhi,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const {
      name,
      regno,
      area,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      main_species,
      forest_type,
      handover_date,
      forest_maujdat,
      timber,
      wood,
      renewed_date,
      nabikaran_abadhi,
      renewal_date,
      baiganik_ban,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ सामुदायिक वन थप गर्न चाहनुहुन्छ ?"
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
                className="w-20"
                title="दर्ता नं:"
                value={regno}
                direction="vertical"
                onChange={(e) => this.setState({ regno: e })}
              />

              <Input
                className="w-75"
                title="सामुदायिक वन उपभोक्ता समितिको नाम:"
                direction="vertical"
                value={name}
                onChange={(e) => this.setState({ name: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-20"
                title="क्षेत्रफल(हे.):"
                value={area}
                direction="vertical"
                onChange={(e) => this.setState({ area: e })}
              />

              <Input
                className="w-75"
                title="मुख्य प्रजाति:"
                direction="vertical"
                as="textarea"
                value={main_species}
                onChange={(e) => this.setState({ main_species: e })}
              />
            </div>
            <div className="section mb-4" />
            <span className="dsl-b18">जनसंख्या विवरण :</span>
            <div className="panel space mt-2">
              <Input
                className="w-45"
                title="महिला :"
                value={female}
                direction="vertical"
                onChange={(e) => this.setState({ female: e })}
              />
              <Input
                className="w-45"
                title="पुरुष :"
                value={male}
                direction="vertical"
                onChange={(e) => this.setState({ male: e })}
              />
            </div>
            <div className="section mb-4" />
            <span className="dsl-b18">घरधुरी विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-30"
                title="दलित :"
                value={dalit_ghardhuri}
                direction="vertical"
                onChange={(e) => this.setState({ dalit_ghardhuri: e })}
              />
              <Input
                className="w-30"
                title="जनजाति :"
                value={janjati_ghardhuri}
                direction="vertical"
                onChange={(e) => this.setState({ janjati_ghardhuri: e })}
              />
              <Input
                className="w-30"
                title="अन्य :"
                value={anya_ghardhuri}
                direction="vertical"
                onChange={(e) => this.setState({ anya_ghardhuri: e })}
              />
            </div>
            <div className="panel space mb-4 pt-2">
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वनको किसिम:"
                  direction="vertical"
                  defaultIds={[forest_type]}
                  data={ForestTypes}
                  getValue={(ForestTypes) => ForestTypes["value"]}
                  onChange={(e) => this.handleForestType(e)}
                  value={forest_type}
                />
              </div>

              <div className="w-30">
                <span className="dsl-b18">हस्तान्तरण मिति:</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={handover_date}
                  onChange={(e) => this.handleDate(e, "handover")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वैज्ञानीक वन व्यबस्थापन (स्विकृती अवस्था):"
                  direction="vertical"
                  defaultIds={[baiganik_ban]}
                  data={BaiganikBan}
                  getValue={(BaiganikBan) => BaiganikBan["value"]}
                  onChange={(e) => this.handleBaiganikBan(e)}
                  value={baiganik_ban}
                />
              </div>
            </div>
            <div className="panel mb-4 space">
              <Input
                className="w-30"
                title="वनको मौज्दात:"
                value={forest_maujdat}
                direction="vertical"
                onChange={(e) => this.setState({ forest_maujdat: e })}
              />
              <Input
                className="w-30"
                title="वार्षिक निकासी परिमाण काठ(घ. मी):"
                value={timber}
                direction="vertical"
                onChange={(e) => this.setState({ timber: e })}
              />
              <Input
                className="w-30"
                title="वार्षिक निकासी परिमाण दाउरा(घ. मी):"
                value={wood}
                direction="vertical"
                onChange={(e) => this.setState({ wood: e })}
              />
            </div>
            <span className="dsl-b18">नविकरण सम्बन्धी विवरण:</span>
            <div className="panel space mt-2">
              <div className="w-30">
                <span className="dsl-b18">गरेको मिती:</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={renewed_date}
                  onChange={(e) => this.handleDate(e, "renewed")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="अबधि(बर्ष):"
                value={nabikaran_abadhi}
                direction="vertical"
                onChange={(e) => this.setState({ nabikaran_abadhi: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">गर्नुपर्ने आर्थिक बर्ष:</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={renewal_date}
                  onChange={(e) => this.handleDate(e, "renewal")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
          </div>
          <div className="section" />
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

Add.propTypes = {
  regno: PropTypes.number,
  onClose: PropTypes.func,
};

Add.defaultProps = {
  regno: 1,
  onClose: () => {},
};

export default Add;
