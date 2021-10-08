import React, { Component } from "react";
import { isEmpty } from "ramda";
import PropTypes from "prop-types";
import { Button, ConfirmationDialoge, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./NijibanBibaran.scss";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regno: "",
      name: "",
      swikrit_miti: "",
      perm_addr: "",
      curr_addr: "",
      area: "",
      dalit_ghardhuri: "",
      janjati_ghardhuri: "",
      anya_ghardhuri: "",
      female: "",
      male: "",
      main_species: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ swikrit_miti: e });
  }

  handleSubmit() {
    const {
      name,
      regno,
      swikrit_miti,
      perm_addr,
      curr_addr,
      area,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      main_species,
    } = this.state;
    const payload = {
      nijiban: {
        data: {
          nijiban_dhaniko_naam: name,
          darta_no: regno,
          swikrit_miti: swikrit_miti,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          area: area,
          dalit_ghardhuri: dalit_ghardhuri,
          janjati_ghardhuri: janjati_ghardhuri,
          anya_ghardhuri: anya_ghardhuri,
          female: female,
          male: male,
          main_species: main_species,
          dist_id: this.props.user.dist_id,
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
      swikrit_miti,
      perm_addr,
      curr_addr,
      area,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      main_species,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(name) ||
      isEmpty(regno) ||
      isEmpty(swikrit_miti) ||
      isEmpty(perm_addr) ||
      isEmpty(curr_addr) ||
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
            body="के तपाईँ निजि वन थप गर्न चाहनुहुन्छ ?"
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
                className="w-30"
                title="दर्ता नं :"
                value={regno}
                direction="vertical"
                onChange={(e) => this.setState({ regno: e })}
              />

              <Input
                className="w-30"
                title="नीजि वन धनिको नाम :"
                direction="vertical"
                value={name}
                onChange={(e) => this.setState({ name: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">स्विकृत मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={swikrit_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="साविक ठेगाना :"
                value={perm_addr}
                direction="vertical"
                onChange={(e) => this.setState({ perm_addr: e })}
              />

              <Input
                className="w-30"
                title="हालको ठेगाना :"
                direction="vertical"
                value={curr_addr}
                onChange={(e) => this.setState({ curr_addr: e })}
              />

              <Input
                className="w-30"
                title="क्षेत्रफल(हे.):"
                direction="vertical"
                value={area}
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
                title="वनका मुख्य तथा सहायक प्रजातिहरु :"
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
  regno: PropTypes.number,
  onClose: PropTypes.func,
};

Add.defaultProps = {
  regno: 1,
  onClose: () => {},
};

export default Add;
