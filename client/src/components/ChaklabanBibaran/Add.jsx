import React, { Component } from "react";
import { isEmpty } from "ramda";
import PropTypes from "prop-types";
import { nepaliToEnglishNumber } from "nepali-number";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darta_no: "",
      darta_miti: "",
      chaklaban_naam: "",
      address: "",
      area: "",
      main_species: "",
      dalit_ghardhuri: "",
      janjati_ghardhuri: "",
      anya_ghardhuri: "",
      female: "",
      male: "",
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
      darta_no,
      darta_miti,
      chaklaban_naam,
      address,
      area,
      main_species,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
    } = this.state;
    const payload = {
      chaklaban: {
        data: {
          darta_no: darta_no,
          darta_miti: darta_miti,
          chaklaban_naam: chaklaban_naam,
          address: address,
          main_species: main_species,
          area: nepaliToEnglishNumber(area),
          dalit_ghardhuri: nepaliToEnglishNumber(dalit_ghardhuri),
          janjati_ghardhuri: nepaliToEnglishNumber(janjati_ghardhuri),
          anya_ghardhuri: nepaliToEnglishNumber(anya_ghardhuri),
          female: nepaliToEnglishNumber(female),
          male: nepaliToEnglishNumber(male),
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  handleDate(e, type) {
    this.setState({ darta_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      darta_no,
      darta_miti,
      chaklaban_naam,
      address,
      area,
      main_species,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(darta_no) ||
      isEmpty(darta_miti) ||
      isEmpty(chaklaban_naam) ||
      isEmpty(address) ||
      isEmpty(area) ||
      isEmpty(anya_ghardhuri) ||
      isEmpty(dalit_ghardhuri) ||
      isEmpty(janjati_ghardhuri) ||
      isEmpty(female) ||
      isEmpty(male) ||
      isEmpty(main_species)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ चक्ला वन थप गर्न चाहनुहुन्छ ?"
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
                value={darta_no}
                direction="vertical"
                onChange={(e) => this.setState({ darta_no: e })}
              />
              <Input
                className="w-65"
                title="चक्लावनको नाम :"
                direction="vertical"
                value={chaklaban_naam}
                onChange={(e) => this.setState({ chaklaban_naam: e })}
              />
            </div>
            <div className="section mb-4" />

            <div className="panel space mb-4">
              <div className="w-30">
                <span className="dsl-b18">दर्ता मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={darta_miti}
                  onChange={(e) => this.handleDate(e, "darta")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="ठेगाना :"
                direction="vertical"
                value={address}
                onChange={(e) => this.setState({ address: e })}
              />
              <Input
                className="w-30"
                title="क्षेत्रफल(हे.):"
                value={area}
                direction="vertical"
                onChange={(e) => this.setState({ area: e })}
              />
            </div>
            <span className="dsl-b18">घरधुरी विवरण :</span>
            <div className="panel space mt-2">
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
            <div className="section mb-4" />
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
            <div className="panel space">
              <Input
                className="w-100"
                title="मुख्य प्रजाति :"
                direction="vertical"
                as="textarea"
                value={main_species}
                onChange={(e) => this.setState({ main_species: e })}
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

Add.propTypes = {
  darta_no: PropTypes.number,
  onClose: PropTypes.func,
};

Add.defaultProps = {
  darta_no: 1,
  onClose: () => {},
};

export default Add;
