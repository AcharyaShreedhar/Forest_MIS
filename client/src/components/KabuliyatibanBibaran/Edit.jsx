import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./KabuliyatibanBibaran.scss";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.kabuliyatiban_bibaran_id,
      regno: props.history.location.item.darta_no,
      name: props.history.location.item.samudayik_upavokta_samiti_name,
      entry_date: props.history.location.item.entry_date,
      perm_addr: props.history.location.item.perm_addr,
      curr_addr: props.history.location.item.curr_addr,
      gharduri_dalit: props.history.location.item.gharduri_dalit,
      gharduri_janjati: props.history.location.item.gharduri_janjati,
      gharduri_anya: props.history.location.item.gharduri_anya,
      ghardhuri_total: props.history.location.item.ghardhuri_total,
      population_female: props.history.location.item.population_female,
      population_male: props.history.location.item.population_male,
      population_total: props.history.location.item.population_total,
      sampannata_starikan_sampanna:
        props.history.location.item.sampannata_starikan_sampanna,
      sampannata_starikan_madhyam:
        props.history.location.item.sampannata_starikan_madhyam,
      sampannata_starikan_bipanna:
        props.history.location.item.sampannata_starikan_bipanna,
      karyasamiti_representation_dalit:
        props.history.location.item.karyasamiti_representation_dalit,
      karyasamiti_representation_janjati:
        props.history.location.item.karyasamiti_representation_janjati,
      karyasamiti_representation_anya: karyasamiti_representation_anya,
      adhyakshya_female: props.history.location.item.adhyakshya_female,
      adhyakshya_male: props.history.location.item.adhyakshya_male,
      sachib_female: props.history.location.item.sachib_female,
      sachib_male: props.history.location.item.sachib_male,
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
      id,
      regno,
      name,
      entry_date,
      perm_Editr,
      curr_Editr,
      gharduri_dalit,
      gharduri_janjati,
      gharduri_anya,
      ghardhuri_total,
      population_female,
      population_male,
      population_total,
      sampannata_starikan_sampanna,
      sampannata_starikan_madhyam,
      sampannata_starikan_bipanna,
      karyasamiti_representation_dalit,
      karyasamiti_representation_janjati,
      karyasamiti_representation_anya,
      adhyakshya_female,
      adhyakshya_male,
      sachib_female,
      sachib_male,
    } = this.state;
    const payload = {
      samudayikban: {
        data: {
          darta_no: regno,
          samudayik_upavokta_samiti_name: name,
          entry_date: entry_date,
          perm_Editr: perm_Editr,
          curr_Editr: curr_Editr,
          gharduri_dalit: gharduri_dalit,
          gharduri_janjati: gharduri_janjati,
          gharduri_anya: gharduri_anya,
          ghardhuri_total: ghardhuri_total,
          population_female: population_female,
          population_male: population_male,
          population_total: population_total,
          sampannata_starikan_sampanna: sampannata_starikan_sampanna,
          sampannata_starikan_madhyam: sampannata_starikan_madhyam,
          sampannata_starikan_bipanna: sampannata_starikan_bipanna,
          karyasamiti_representation_dalit: karyasamiti_representation_dalit,
          karyasamiti_representation_janjati: karyasamiti_representation_janjati,
          karyasamiti_representation_anya: karyasamiti_representation_anya,
          adhyakshya_female: adhyakshya_female,
          adhyakshya_male: adhyakshya_male,
          sachib_female: sachib_female,
          sachib_male: sachib_male,
        },
      },
    };
    this.props.onUpdate(payload,id);
  }

  handleDate(e) {
    this.setState({ entry_date: e });
  }

  render() {
    const { title } = this.props;
    const {
      regno,
      name,
      entry_date,
      perm_Editr,
      curr_Editr,
      gharduri_dalit,
      gharduri_janjati,
      gharduri_anya,
      ghardhuri_total,
      population_female,
      population_male,
      population_total,
      sampannata_starikan_sampanna,
      sampannata_starikan_madhyam,
      sampannata_starikan_bipanna,
      karyasamiti_representation_dalit,
      karyasamiti_representation_janjati,
      karyasamiti_representation_anya,
      adhyakshya_female,
      adhyakshya_male,
      sachib_female,
      sachib_male,
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
              title="दर्ता नं"
              value={regno}
              direction="vertical"
              onChange={(e) => this.setState({ regno: e })}
            />
            <span className="dsl-b18">दर्ता मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={entry_date}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />

            <Input
              className="mb-4"
              title="सामुदायिक वन उपभोक्ता समितिको नाम"
              direction="vertical"
              value={name}
              onChange={(e) => this.setState({ name: e })}
            />
            <Input
              className="mb-4"
              title="ठेगाना साविक"
              value={perm_Editr}
              direction="vertical"
              onChange={(e) => this.setState({ perm_Editr: e })}
            />
            <Input
              className="mb-4"
              title="ठेगाना हाल"
              value={curr_Editr}
              direction="vertical"
              onChange={(e) => this.setState({ curr_Editr: e })}
            />
            <Input
              className="mb-4"
              title="दलित घरधुरी"
              value={gharduri_dalit}
              direction="vertical"
              onChange={(e) => this.setState({ gharduri_dalit: e })}
            />
            <Input
              className="mb-4"
              title="जनजाति घरधुरी"
              value={gharduri_janjati}
              direction="vertical"
              onChange={(e) => this.setState({ gharduri_janjati: e })}
            />
            <Input
              className="mb-4"
              title="अन्य घरधुरी"
              value={gharduri_anya}
              direction="vertical"
              onChange={(e) => this.setState({ gharduri_anya: e })}
            />
            <Input
              className="mb-4"
              title="जम्मा घरधुरी"
              value={ghardhuri_total}
              direction="vertical"
              onChange={(e) => this.setState({ ghardhuri_total: e })}
            />
            <Input
              className="mb-4"
              title="महिला जनसंख्या"
              value={population_female}
              direction="vertical"
              onChange={(e) => this.setState({ population_female: e })}
            />
            <Input
              className="mb-4"
              title="पुरुष जनसंख्या"
              value={population_male}
              direction="vertical"
              onChange={(e) => this.setState({ population_male: e })}
            />
            <Input
              className="mb-4"
              title="जम्मा जनसंख्या"
              value={population_total}
              direction="vertical"
              onChange={(e) => this.setState({ population_total: e })}
            />
            <Input
              className="mb-4"
              title="सम्पन्न"
              value={sampannata_starikan_sampanna}
              direction="vertical"
              onChange={(e) =>
                this.setState({ sampannata_starikan_sampanna: e })
              }
            />
            <Input
              className="mb-4"
              title="मध्यम"
              value={sampannata_starikan_madhyam}
              direction="vertical"
              onChange={(e) =>
                this.setState({ sampannata_starikan_madhyam: e })
              }
            />
            <Input
              className="mb-4"
              title="विपन्न"
              value={sampannata_starikan_bipanna}
              direction="vertical"
              onChange={(e) =>
                this.setState({ sampannata_starikan_bipanna: e })
              }
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा दलित प्रतिनिधित्व"
              value={karyasamiti_representation_dalit}
              direction="vertical"
              onChange={(e) =>
                this.setState({ karyasamiti_representation_dalit: e })
              }
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा जनजाति प्रतिनिधित्व"
              value={karyasamiti_representation_janjati}
              direction="vertical"
              onChange={(e) =>
                this.setState({ karyasamiti_representation_janjati: e })
              }
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा अन्य प्रतिनिधित्व"
              value={karyasamiti_representation_anya}
              direction="vertical"
              onChange={(e) =>
                this.setState({ karyasamiti_representation_anya: e })
              }
            />

            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(महिला अध्यक्ष)"
              direction="vertical"
              value={adhyakshya_female}
              onChange={(e) => this.setState({ adhyakshya_female: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(पुरुष अध्यक्ष)"
              direction="vertical"
              value={adhyakshya_male}
              onChange={(e) => this.setState({ adhyakshya_male: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(महिला सचिव)"
              direction="vertical"
              value={sachib_female}
              onChange={(e) => this.setState({ sachib_female: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(पुरुष सचिव)"
              direction="vertical"
              value={sachib_male}
              onChange={(e) => this.setState({ sachib_male: e })}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Update"
                onClick={this.handleSubmit.bind(this)}
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
