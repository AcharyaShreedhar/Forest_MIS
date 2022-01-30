import React, { Component } from "react";
import PropTypes from "prop-types";
import { equals, isEmpty } from "ramda";
import { nepaliToEnglishNumber } from "nepali-number";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./DharmikbanBibaran.scss";


const ForestTypes = [
  { id: 1, value: "प्राकृतिक्" },
  { id: 2, value: "वृक्षरोपण" },
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regno: "",
      name: "",
      community_name: "",
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
      nabikaran_abadhi: "",
      renewed_date: "",
      renewal_date: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleForestType = this.handleForestType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      community_name,
      area,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      main_species,
      forest_type,
      handover_date,
      renewed_date,
      nabikaran_abadhi,
      forest_maujdat,
      renewal_date,
    } = this.state;
    const payload = {
      dharmikban: {
        data: {
          dharmikban_name: name,
          darta_no: regno,
          community_name: community_name,
          area: nepaliToEnglishNumber(area),
          dalit_ghardhuri: nepaliToEnglishNumber(dalit_ghardhuri),
          janjati_ghardhuri: nepaliToEnglishNumber(janjati_ghardhuri),
          anya_ghardhuri: nepaliToEnglishNumber(anya_ghardhuri),
          female: nepaliToEnglishNumber(female),
          male: nepaliToEnglishNumber(male),
          main_species: main_species,
          forest_type: equals(forest_type, 1) ? "प्राकृतिक्" : "वृक्षरोपण",
          handover_date: handover_date,
          renewed_date: renewed_date,
          nabikaran_abadhi: nabikaran_abadhi,
          forest_maujdat: forest_maujdat,
          renewal_date: renewal_date,
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
      community_name,
      area,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      main_species,
      forest_type,
      handover_date,
      renewed_date,
      nabikaran_abadhi,
      forest_maujdat,
      renewal_date,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(name) ||
      isEmpty(regno) ||
      isEmpty(community_name) ||
      isEmpty(area) ||
      isEmpty(dalit_ghardhuri) ||
      isEmpty(janjati_ghardhuri) ||
      isEmpty(anya_ghardhuri)||
      isEmpty(female) ||
      isEmpty(male) ||
      isEmpty(main_species) ||
      isEmpty(forest_type) ||
      isEmpty(handover_date) ||
      isEmpty(forest_maujdat) ||
      isEmpty(renewed_date) ||
      isEmpty(nabikaran_abadhi) ||
      isEmpty(renewal_date)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ धार्मिक वन थप गर्न चाहनुहुन्छ ?"
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
              <Input
                className="w-30"
                title="दर्ता नं :"
                value={regno}
                direction="vertical"
                onChange={(e) => this.setState({ regno: e })}
              />
              <Input
                className="w-65"
                title="धर्मिक वनको नाम :"
                direction="vertical"
                value={name}
                onChange={(e) => this.setState({ name: e })}
              />
            </div>
            <div className="section mb-4" />
            <span className="dsl-b18">जनसंख्या विवरण :</span>
            <div className="panel space mt-2">
              <Input
                className="w-30"
                title="महिला :"
                value={female}
                direction="vertical"
                onChange={(e) => this.setState({ female: e })}
              />
              <Input
                className="w-30"
                title="पुरुष :"
                value={male}
                direction="vertical"
                onChange={(e) => this.setState({ male: e })}
              />
              <div className="w-30" />
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
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="व्यवस्थापन गर्ने धार्मिक निकाय / समुदायको नाम :"
                value={community_name}
                direction="vertical"
                onChange={(e) => this.setState({ community_name: e })}
              />
              <Input
                className="w-30"
                title="क्षेत्रफल(हे.) :"
                direction="vertical"
                as="textarea"
                value={area}
                onChange={(e) => this.setState({ area: e })}
              />
              <Input
                className="w-30"
                title="मुख्य प्रजाति :"
                direction="vertical"
                as="textarea"
                value={main_species}
                onChange={(e) => this.setState({ main_species: e })}
              />
            </div>
            <div className="panel space mb-4 pt-2">
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वनको किसिम :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[forest_type]}
                  data={ForestTypes}
                  getValue={(ForestTypes) => ForestTypes["value"]}
                  onChange={(e) => this.handleForestType(e)}
                  value={forest_type}
                />
              </div>
              <Input
                className="w-30"
                title="वनको मौज्दात :"
                value={forest_maujdat}
                direction="vertical"
                onChange={(e) => this.setState({ forest_maujdat: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">हस्तान्तरण मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  className="pt-2"
                  value={handover_date}
                  onChange={(e) => this.handleDate(e, "handover")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <span className="dsl-b18">नविकरण सम्बन्धी विवरण :</span>
            <div className="panel space mt-2">
              <div className="w-30">
                <span className="dsl-b18">गरेको मिती :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={renewed_date}
                  onChange={(e) => this.handleDate(e, "renewed")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="अबधि(बर्ष) :"
                value={nabikaran_abadhi}
                direction="vertical"
                onChange={(e) => this.setState({ nabikaran_abadhi: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">गर्नुपर्ने आर्थिक बर्ष :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={renewal_date}
                  onChange={(e) => this.handleDate(e, "renewal")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
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

Add.propTypes = {
  regno: PropTypes.number,
};

Add.defaultProps = {
  regno: 1,
};

export default Add;
