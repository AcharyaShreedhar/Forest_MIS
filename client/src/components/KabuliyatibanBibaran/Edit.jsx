import React, { Component } from "react";
import PropTypes from "prop-types";
import { equals ,isEmpty } from "ramda";
import {englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./KabuliyatibanBibaran.scss";

const GenderTypes = [
  { id: 1, value: "पुरुष" },
  { id: 2, value: "महिला" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.darta_no,
      regno: props.history.location.item.darta_no,
      name: props.history.location.item.kabuliyati_ban_samiti_name,
      darta_miti: props.history.location.item.darta_miti,
      perm_addr: props.history.location.item.perm_addr,
      curr_addr: props.history.location.item.curr_addr,
      area: englishToNepaliNumber(props.history.location.item.area),
      dalit_ghardhuri: englishToNepaliNumber(props.history.location.item.dalit_ghardhuri),
      janjati_ghardhuri: englishToNepaliNumber(props.history.location.item.janjati_ghardhuri),
      anya_ghardhuri: englishToNepaliNumber(props.history.location.item.anya_ghardhuri),
      female: englishToNepaliNumber(props.history.location.item.female),
      male: englishToNepaliNumber(props.history.location.item.male),
      sampanna: englishToNepaliNumber(props.history.location.item.sampanna),
      madhyam: englishToNepaliNumber(props.history.location.item.madhyam),
      bipanna: englishToNepaliNumber(props.history.location.item.bipanna),
      dalit_rep: englishToNepaliNumber(props.history.location.item.dalit_rep),
      janjati_rep: englishToNepaliNumber(props.history.location.item.janjati_rep),
      anya_rep: englishToNepaliNumber(props.history.location.item.anya_rep),
      adhyakshya: props.history.location.item.adhyakshya,
      adhyakshya_gender: props.history.location.item.adhyakshya_gender,
      sachib: props.history.location.item.sachib,
      sachib_gender: props.history.location.item.sachib_gender,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ darta_miti: e });
  }
  handleGender(e, type) {
    switch (type) {
      case "adhyakshya": {
        this.setState({ adhyakshya_gender: equals(e[0], 1) ? "M" : "F" });
        break;
      }
      case "sachib": {
        this.setState({ sachib_gender: equals(e[0], 1) ? "M" : "F" });
        break;
      }
      default:
        break;
    }
  }

  handleSubmit() {
    const {
      id,
      regno,
      name,
      darta_miti,
      area,
      perm_addr,
      curr_addr,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      sampanna,
      madhyam,
      bipanna,
      dalit_rep,
      janjati_rep,
      anya_rep,
      adhyakshya,
      adhyakshya_gender,
      sachib,
      sachib_gender,
      created_by,
    } = this.state;
    const payload = {
      kabuliyatiban: {
        data: {
          darta_no: regno,
          kabuliyati_ban_samiti_name: name,
          darta_miti: darta_miti,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          area: nepaliToEnglishNumber(area),
          dalit_ghardhuri: nepaliToEnglishNumber(dalit_ghardhuri),
          janjati_ghardhuri: nepaliToEnglishNumber(janjati_ghardhuri),
          anya_ghardhuri: nepaliToEnglishNumber(anya_ghardhuri),
          female: nepaliToEnglishNumber(female),
          male: nepaliToEnglishNumber(male),
          sampanna: nepaliToEnglishNumber(sampanna),
          madhyam: nepaliToEnglishNumber(madhyam),
          bipanna: nepaliToEnglishNumber(bipanna),
          dalit_rep: nepaliToEnglishNumber(dalit_rep),
          janjati_rep: nepaliToEnglishNumber(janjati_rep),
          anya_rep: nepaliToEnglishNumber(anya_rep),
          adhyakshya: adhyakshya,
          adhyakshya_gender: adhyakshya_gender,
          sachib: sachib,
          sachib_gender: sachib_gender,
          dist_id: this.props.user.dist_id,
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
      regno,
      name,
      darta_miti,
      area,
      perm_addr,
      curr_addr,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      sampanna,
      madhyam,
      bipanna,
      dalit_rep,
      janjati_rep,
      anya_rep,
      adhyakshya,
      adhyakshya_gender,
      sachib,
      sachib_gender,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(name) ||
      isEmpty(regno) ||
      isEmpty(darta_miti) ||
      isEmpty(area) ||
      isEmpty(perm_addr) ||
      isEmpty(curr_addr) ||
      isEmpty(dalit_ghardhuri) ||
      isEmpty(janjati_ghardhuri) ||
      isEmpty(anya_ghardhuri) ||
      isEmpty(female) ||
      isEmpty(male) ||
      isEmpty(sampanna) ||
      isEmpty(madhyam) ||
      isEmpty(bipanna) ||
      isEmpty(dalit_rep) ||
      isEmpty(janjati_rep) ||
      isEmpty(anya_rep) ||
      isEmpty(adhyakshya) ||
      isEmpty(adhyakshya_gender) ||
      isEmpty(sachib) ||
      isEmpty(sachib_gender)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ कवुलियती वनको विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                className="w-15"
                title="दर्ता नं :"
                value={regno}
                direction="vertical"
                onChange={(e) => this.setState({ regno: e })}
              />

              <Input
                className="w-60 px-5"
                title="कवुलियती वन उपभोक्ता समितिको नाम :"
                direction="vertical"
                value={name}
                onChange={(e) => this.setState({ name: e })}
              />
              <Input
                className="w-15"
                title="क्षत्रफल(हे.):"
                value={area}
                direction="vertical"
                onChange={(e) => this.setState({ area: e })}
              />
            </div>
            <div className="section mb-4" />
            <div className="panel space mb-4">
              <div className="w-30">
                <span className="dsl-b18">दर्ता मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={darta_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="साविक ठेगाना :"
                value={perm_addr}
                direction="vertical"
                onChange={(e) => this.setState({ perm_addr: e })}
              />
              <Input
                className="w-30"
                title="हाल ठेगाना :"
                direction="vertical"
                value={curr_addr}
                onChange={(e) => this.setState({ curr_addr: e })}
              />
            </div>
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
            <span className="dsl-b18">सम्पन्नता स्तरीकरण घरधुरी विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-30"
                title="सम्पन्न :"
                value={sampanna}
                direction="vertical"
                onChange={(e) => this.setState({ sampanna: e })}
              />
              <Input
                className="w-30"
                title="मध्यम :"
                value={madhyam}
                direction="vertical"
                onChange={(e) => this.setState({ madhyam: e })}
              />
              <Input
                className="w-30"
                title="विपन्न :"
                value={bipanna}
                direction="vertical"
                onChange={(e) => this.setState({ bipanna: e })}
              />
            </div>

            <span className="dsl-b18">कार्यसमितिमा प्रतिनिधित्व विवरण :</span>
            <div className="panel space mt-2">
              <Input
                className="w-30"
                title="दलित :"
                value={dalit_rep}
                direction="vertical"
                onChange={(e) => this.setState({ dalit_rep: e })}
              />
              <Input
                className="w-30"
                title="जनजाति :"
                value={janjati_rep}
                direction="vertical"
                onChange={(e) => this.setState({ janjati_rep: e })}
              />
              <Input
                className="w-30"
                title="अन्य :"
                value={anya_rep}
                direction="vertical"
                onChange={(e) => this.setState({ anya_rep: e })}
              />
            </div>
            <div className="section mb-4" />
            <span className="dsl-b18">जनसंख्या विवरण :</span>
            <div className="panel space mt-2 mb-4">
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
            <span className="dsl-b18">
              मुख्य पदाधिकारीमा प्रतिनिधित्व विवरण :
            </span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-45"
                title="अध्यक्ष :"
                direction="vertical"
                value={adhyakshya}
                onChange={(e) => this.setState({ adhyakshya: e })}
              />
              <div className="w-45">
                <Dropdown
                  className="dropdownlabel"
                  title="लिङ्ग :"
                  direction="vertical"
                  defaultIds={equals(adhyakshya_gender, "M") ? [1] : [2]}
                  data={GenderTypes}
                  getValue={(GenderTypes) => GenderTypes["value"]}
                  onChange={(e) => this.handleGender(e, "adhyakshya")}
                  value={adhyakshya_gender}
                />
              </div>
            </div>
            <div className="panel space mt-2">
              <Input
                className="w-45"
                title="सचिव :"
                direction="vertical"
                value={sachib}
                onChange={(e) => this.setState({ sachib: e })}
              />
              <div className="w-45">
                <Dropdown
                  className="dropdownlabel"
                  title="लिङ्ग :"
                  direction="vertical"
                  defaultIds={equals(sachib_gender, "M") ? [1] : [2]}
                  data={GenderTypes}
                  getValue={(GenderTypes) => GenderTypes["value"]}
                  onChange={(e) => this.handleGender(e, "sachib")}
                  value={sachib_gender}
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

Edit.propTypes = {
  regno: PropTypes.number,
};

Edit.defaultProps = {
  regno: 1,
};

export default Edit;
