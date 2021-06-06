import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, DatePicker, Dropdown } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./SamudayikbanBibaran.scss";

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
      area: "",
      main_species: "",
      forest_type: 1,
      handover_date: "",
      forest_maujdat: "",
      nikasi_timber: "",
      nikasi_wood: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForestType = this.handleForestType.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
      name,
      regno,
      area,
      main_species,
      forest_type,
      handover_date,
      forest_maujdat,
      nikasi_timber,
      nikasi_wood,
    } = this.state;
    const payload = {
      samudayikban: {
        data: {
          name: name,
          regno: regno,
          area: area,
          main_species: main_species,
          forest_type: forest_type,
          handover_date: handover_date,
          forest_maujdat: forest_maujdat,
          nikasi_timber: nikasi_timber,
          nikasi_wood: nikasi_wood,
        },
      },
    };

    console.log("payload", payload);
  }

  handleForestType(e) {}
  handleDate(e) {}

  render() {
    const {} = this.props;
    const {
      name,
      regno,
      area,
      main_species,
      forest_type,
      handover_date,
      forest_maujdat,
      nikasi_timber,
      nikasi_wood,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">+ सामुदायिक वन</span>
            </div>
            <Input
              className="mb-4"
              title="दर्ता नं"
              value={regno}
              direction="vertical"
              onChange={(e) => this.setState({ regno: e })}
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
              title="क्षत्रफल(हे.)"
              value={area}
              direction="vertical"
              onChange={(e) => this.setState({ area: e })}
            />

            <Input
              className="mb-4"
              title="मुख्य प्रजाति"
              direction="vertical"
              as="textarea"
              value={main_species}
              onChange={(e) => this.setState({ main_species: e })}
            />
            <Dropdown
              className="dropdownlabel mb-4"
              title="वनको किसिम"
              direction="vertical"
              width="fit-content"
              defaultIds={[forest_type]}
              data={ForestTypes}
              getValue={(ForestTypes) => ForestTypes["value"]}
              onChange={(e) => this.handleForestType(e)}
              value={forest_type}
            />

            <span className="dsl-b18">हस्तान्तरण मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={handover_date}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="वनको मौज्दात"
              value={forest_maujdat}
              direction="vertical"
              onChange={(e) => this.setState({ forest_maujdat: e })}
            />
            <Input
              className="mb-4"
              title="वार्षिक निकासी परिमाण (घ. मी)काठ"
              value={nikasi_timber}
              direction="vertical"
              onChange={(e) => this.setState({ nikasi_timber: e })}
            />
            <Input
              className="mb-4"
              title="वार्षिक निकासी परिमाण (घ. मी)दाउरा"
              value={nikasi_wood}
              direction="vertical"
              onChange={(e) => this.setState({ nikasi_wood: e })}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Save"
                onClick={this.handleSubmit.bind(this, 0)}
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
