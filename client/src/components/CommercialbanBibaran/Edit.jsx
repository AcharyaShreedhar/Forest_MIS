import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.darta_no,
      darta_no: props.history.location.item.darta_no,
      darta_miti: props.history.location.item.darta_miti,
      commercialkabuliyatiban_naam:
        props.history.location.item.commercialkabuliyatiban_naam,
      address: props.history.location.item.address,
      area: props.history.location.item.area,
      main_species: props.history.location.item.main_species,
      dalit_ghardhuri: props.history.location.item.dalit_ghardhuri,
      janjati_ghardhuri: props.history.location.item.janjati_ghardhuri,
      anya_ghardhuri: props.history.location.item.anya_ghardhuri,
      female: props.history.location.item.female,
      male: props.history.location.item.male,
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
      darta_no,
      darta_miti,
      commercialkabuliyatiban_naam,
      address,
      area,
      main_species,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      created_by,
    } = this.state;
    const payload = {
      commercialban: {
        data: {
          darta_no: darta_no,
          darta_miti: darta_miti,
          commercialkabuliyatiban_naam: commercialkabuliyatiban_naam,
          address: address,
          area: area,
          main_species: main_species,
          dalit_ghardhuri: dalit_ghardhuri,
          janjati_ghardhuri: janjati_ghardhuri,
          anya_ghardhuri: anya_ghardhuri,
          female: female,
          male: male,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }

  handleDate(e, type) {
    this.setState({ darta_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      darta_no,
      darta_miti,
      commercialkabuliyatiban_naam,
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

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ व्यवसायीक कबुलियति वनको विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                className="w-20"
                title="दर्ता नं :"
                value={darta_no}
                direction="vertical"
                onChange={(e) => this.setState({ darta_no: e })}
              />
              <Input
                className="w-75"
                title="व्यवसायीक कबुलियति वनको नाम :"
                direction="vertical"
                value={commercialkabuliyatiban_naam}
                onChange={(e) =>
                  this.setState({ commercialkabuliyatiban_naam: e })
                }
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
                title="क्षत्रफल(हे.) :"
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
            <div className="panel space mb-4">
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
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शंशोधन गर्नुहोस ।"
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
  darta_no: PropTypes.number,
  onClose: PropTypes.func,
};

Edit.defaultProps = {
  darta_no: 1,
  onClose: () => {},
};

export default Edit;
