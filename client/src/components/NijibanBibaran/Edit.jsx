import React, { Component } from "react";
import { isEmpty } from "ramda";
import PropTypes from "prop-types";
import { englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./NijibanBibaran.scss";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.darta_no,
      regno: props.history.location.item.darta_no,
      name: props.history.location.item.nijiban_dhaniko_naam,
      swikrit_miti: props.history.location.item.swikrit_miti,
      perm_addr: props.history.location.item.perm_addr,
      curr_addr: props.history.location.item.curr_addr,
      area: englishToNepaliNumber(props.history.location.item.area),
      dalit_ghardhuri: englishToNepaliNumber(
        props.history.location.item.dalit_ghardhuri
      ),
      janjati_ghardhuri: englishToNepaliNumber(
        props.history.location.item.janjati_ghardhuri
      ),
      anya_ghardhuri: englishToNepaliNumber(
        props.history.location.item.anya_ghardhuri
      ),
      female: englishToNepaliNumber(props.history.location.item.female),
      male: englishToNepaliNumber(props.history.location.item.male),
      main_species: props.history.location.item.main_species,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
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
      id,
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
      created_by,
    } = this.state;
    const payload = {
      nijiban: {
        data: {
          nijiban_dhaniko_naam: name,
          darta_no: regno,
          swikrit_miti: swikrit_miti,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          area: nepaliToEnglishNumber(area),
          dalit_ghardhuri: nepaliToEnglishNumber(dalit_ghardhuri),
          janjati_ghardhuri: nepaliToEnglishNumber(janjati_ghardhuri),
          anya_ghardhuri: nepaliToEnglishNumber(anya_ghardhuri),
          female: nepaliToEnglishNumber(female),
          male: nepaliToEnglishNumber(male),
          main_species: main_species,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };

    this.props.onUpdate(payload, id);
  }

  handleDate(e) {
    this.setState({ swikrit_miti: e });
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
            title="शंसोधन"
            body="के तपाईँ निजि वनको विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                title="क्षेत्रफल(हे.) :"
                direction="vertical"
                value={area}
                onChange={(e) => this.setState({ area: e })}
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
            <div className="panel space mb-4">
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
