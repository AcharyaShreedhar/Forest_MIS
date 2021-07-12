import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.registration_no,
      registration_no: props.history.location.item.registration_no,
      registration_date: props.history.location.item.registration_date,
      ghardhuri_dalit: props.history.location.item.ghardhuri_dalit,
      perm_addr: props.history.location.item.perm_addr,
      curr_addr: props.history.location.item.curr_addr,
      ghardhuri_janjati: props.history.location.item.ghardhuri_janjati,
      ghardhuri_anya: props.history.location.item.ghardhuri_anya,
      ghardhuri_total: props.history.location.item.ghardhuri_total,
      population_female: props.history.location.item.population_female,
      population_male: props.history.location.item.population_male,
      population_total: props.history.location.item.population_total,
      samudayik_upavokta_samiti_name:
        props.history.location.item.samudayik_upavokta_samiti_name,
      sampannata_starikaran_sampanna:
        props.history.location.item.sampannata_starikaran_sampanna,
      sampannata_starikaran_madhyam:
        props.history.location.item.sampannata_starikaran_madhyam,
      sampannata_starikaran_bipanna:
        props.history.location.item.sampannata_starikaran_bipanna,
      karyasamiti_representation_dalit:
        props.history.location.item.karyasamiti_representation_dalit,
      karyasamiti_representation_janjati:
        props.history.location.item.karyasamiti_representation_janjati,
      karyasamiti_representation_anya:
        props.history.location.item.karyasamiti_representation_anya,
      adhyakshya_male: props.history.location.item.adhyakshya_male,
      adhyakshya_female: props.history.location.item.adhyakshya_female,
      sachib_male: props.history.location.item.sachib_male,
      sachib_female: props.history.location.item.sachib_female,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleSubmit.bind(this);
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
      registration_no,
      samudayik_upavokta_samiti_name,
      registration_date,
      ghardhuri_dalit,
      perm_addr,
      curr_addr,
      ghardhuri_janjati,
      ghardhuri_anya,
      ghardhuri_total,
      population_female,
      population_male,
      population_total,
      sampannata_starikaran_sampanna,
      sampannata_starikaran_madhyam,
      sampannata_starikaran_bipanna,
      karyasamiti_representation_dalit,
      karyasamiti_representation_janjati,
      karyasamiti_representation_anya,
      adhyakshya_female,
      adhyakshya_male,
      sachib_male,
      sachib_female,
      created_by,
    } = this.state;
    const payload = {
      consumergroupdetails: {
        data: {
          samudayik_upavokta_samiti_name: samudayik_upavokta_samiti_name,
          registration_no: registration_no,
          registration_date: registration_date,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          ghardhuri_janjati: ghardhuri_janjati,
          ghardhuri_dalit: ghardhuri_dalit,
          ghardhuri_anya: ghardhuri_anya,
          ghardhuri_total: ghardhuri_total,
          population_female: population_female,
          population_male: population_male,
          population_total: population_total,
          sampannata_starikaran_sampanna: sampannata_starikaran_sampanna,
          sampannata_starikaran_madhyam: sampannata_starikaran_madhyam,
          sampannata_starikaran_bipanna: sampannata_starikaran_bipanna,
          karyasamiti_representation_dalit: karyasamiti_representation_dalit,
          karyasamiti_representation_janjati: karyasamiti_representation_janjati,
          karyasamiti_representation_anya: karyasamiti_representation_anya,
          adhyakshya_male: adhyakshya_male,
          adhyakshya_female: adhyakshya_female,
          sachib_male: sachib_male,
          sachib_female: sachib_female,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }
  handleDate(e) {
    this.setState({ registration_date: e });
  }
  render() {
    const { title } = this.props;
    const {
      registration_no,
      samudayik_upavokta_samiti_name,
      registration_date,
      ghardhuri_dalit,
      perm_addr,
      curr_addr,
      ghardhuri_janjati,
      ghardhuri_anya,
      ghardhuri_total,
      population_female,
      population_male,
      population_total,
      sampannata_starikaran_sampanna,
      sampannata_starikaran_madhyam,
      sampannata_starikaran_bipanna,
      karyasamiti_representation_dalit,
      karyasamiti_representation_janjati,
      karyasamiti_representation_anya,
      adhyakshya_female,
      adhyakshya_male,
      sachib_male,
      sachib_female,
      showDialog,
    } = this.state;
    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ उपभोक्ता समुह सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <Input
              className="mb-4"
              title="दर्ता नं"
              value={registration_no}
              direction="vertical"
              onChange={(e) => this.setState({ registration_no: e })}
            />
            <span className="dsl-b18">स्विकृत मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={registration_date}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="सामुदायिक वन उपभोक्ता समितिको नाम"
              direction="vertical"
              value={samudayik_upavokta_samiti_name}
              onChange={(e) =>
                this.setState({ samudayik_upavokta_samiti_name: e })
              }
            />
            <Input
              className="mb-4"
              title="साविक ठेगाना"
              value={perm_addr}
              direction="vertical"
              onChange={(e) => this.setState({ perm_addr: e })}
            />

            <Input
              className="mb-4"
              title="हाल ठेगाना"
              direction="vertical"
              value={curr_addr}
              onChange={(e) => this.setState({ curr_addr: e })}
            />

            <Input
              className="mb-4"
              title="दलित घरधुरी"
              direction="vertical"
              as="textarea"
              value={ghardhuri_dalit}
              onChange={(e) => this.setState({ ghardhuri_dalit: e })}
            />
            <Input
              className="mb-4"
              title="जनजाती घरधुरी"
              direction="vertical"
              as="textarea"
              value={ghardhuri_janjati}
              onChange={(e) => this.setState({ ghardhuri_janjati: e })}
            />
            <Input
              className="mb-4"
              title="अन्य घरधुरी "
              direction="vertical"
              as="textarea"
              value={ghardhuri_anya}
              onChange={(e) => this.setState({ ghardhuri_anya: e })}
            />
            <Input
              className="mb-4"
              title="जम्मा घरधुरी"
              direction="vertical"
              as="textarea"
              value={ghardhuri_total}
              onChange={(e) => this.setState({ ghardhuri_total: e })}
            />
            <Input
              className="mb-4"
              title="महिला जनसंख्या "
              direction="vertical"
              as="textarea"
              value={population_female}
              onChange={(e) => this.setState({ population_female: e })}
            />
            <Input
              className="mb-4"
              title="पुरुष जनसंख्या "
              direction="vertical"
              as="textarea"
              value={population_male}
              onChange={(e) => this.setState({ population_male: e })}
            />
            <Input
              className="mb-4"
              title="जम्मा जनसंख्या"
              direction="vertical"
              as="textarea"
              value={population_total}
              onChange={(e) => this.setState({ population_total: e })}
            />
            <Input
              className="mb-4"
              title="सम्पन्नता स्तरीकरण घरधुरी (सम्पन्न) "
              direction="vertical"
              as="textarea"
              value={sampannata_starikaran_sampanna}
              onChange={(e) =>
                this.setState({ sampannata_starikaran_sampanna: e })
              }
            />
            <Input
              className="mb-4"
              title="सम्पन्नता स्तरीकरण घरधुरी (मध्यम) "
              direction="vertical"
              as="textarea"
              value={sampannata_starikaran_madhyam}
              onChange={(e) =>
                this.setState({ sampannata_starikaran_madhyam: e })
              }
            />
            <Input
              className="mb-4"
              title="सम्पन्नता स्तरीकरण घरधुरी (विपन्न) "
              direction="vertical"
              as="textarea"
              value={sampannata_starikaran_bipanna}
              onChange={(e) =>
                this.setState({ sampannata_starikaran_bipanna: e })
              }
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा प्रतिनिधित्व (दलित)"
              direction="vertical"
              as="textarea"
              value={karyasamiti_representation_dalit}
              onChange={(e) =>
                this.setState({ karyasamiti_representation_dalit: e })
              }
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा प्रतिनिधित्व (जनजाती)"
              direction="vertical"
              as="textarea"
              value={karyasamiti_representation_janjati}
              onChange={(e) =>
                this.setState({ karyasamiti_representation_janjati: e })
              }
            />

            <Input
              className="mb-4"
              title="कार्यसमितिमा प्रतिनिधित्व (अन्य)"
              direction="vertical"
              as="textarea"
              value={karyasamiti_representation_anya}
              onChange={(e) =>
                this.setState({ karyasamiti_representation_anya: e })
              }
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व अध्यक्ष (महिला) "
              direction="vertical"
              as="textarea"
              value={adhyakshya_female}
              onChange={(e) => this.setState({ adhyakshya_female: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व अध्यक्ष (पुरुष)"
              direction="vertical"
              as="textarea"
              value={adhyakshya_male}
              onChange={(e) => this.setState({ adhyakshya_male: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व सचिव (महिला) "
              direction="vertical"
              as="textarea"
              value={sachib_female}
              onChange={(e) => this.setState({ sachib_female: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व सचिव (पुरुष) "
              direction="vertical"
              as="textarea"
              value={sachib_male}
              onChange={(e) => this.setState({ sachib_male: e })}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Save"
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
  registration_no: PropTypes.number,
};

Edit.defaultProps = {
  registration_no: 1,
};

export default Edit;
