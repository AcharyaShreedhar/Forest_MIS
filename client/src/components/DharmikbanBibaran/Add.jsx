import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, Dropdown } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./DharmikbanBibaran.scss";
import { equals } from "ramda";

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
      main_species: "",
      forest_type: 1,
      handover_date: "",
      forest_maujdat: "",
      nabikaran_abadhi: "",
      renewed_date: "",
      renewal_date: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleForestType = this.handleForestType.bind(this);
  }

  handleSubmit() {
    const {
      name,
      regno,
      community_name,
      area,
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
          area: area,
          main_species: main_species,
          forest_type: equals(forest_type, 1) ? "प्राकृतिक्" : "वृक्षरोपण",
          handover_date: handover_date,
          renewed_date: renewed_date,
          nabikaran_abadhi: nabikaran_abadhi,
          forest_maujdat: forest_maujdat,
          renewal_date: renewal_date,
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
      nabikarankaryayojana: {
        data: {
          darta_id: regno,
          renewed_date: renewed_date,
          renewal_date: renewal_date,
          nabikaran_abadhi: nabikaran_abadhi,
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleForestType(e) {
    this.setState({ forest_type: e });
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

  render() {
    const { title } = this.props;
    const {
      name,
      regno,
      community_name,
      area,
      main_species,
      forest_type,
      handover_date,
      renewed_date,
      nabikaran_abadhi,
      forest_maujdat,
      renewal_date,
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

            <Input
              className="mb-4"
              title="धर्मिक वनको नाम"
              direction="vertical"
              value={name}
              onChange={(e) => this.setState({ name: e })}
            />
            <Input
              className="mb-4"
              title="व्यवस्थापन गर्ने धार्मिक निकाय / समुदायको नाम"
              value={community_name}
              direction="vertical"
              onChange={(e) => this.setState({ community_name: e })}
            />

            <Input
              className="mb-4"
              title="क्षत्रफल(हे.)"
              direction="vertical"
              as="textarea"
              value={area}
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
              onChange={(e) => this.handleDate(e, "handover")}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <span className="dsl-b18">नविकरण गरेको मिती</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={renewed_date}
              onChange={(e) => this.handleDate(e, "renewed")}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="नविकरण अबधि"
              value={nabikaran_abadhi}
              direction="vertical"
              onChange={(e) => this.setState({ nabikaran_abadhi: e })}
            />
            <Input
              className="mb-4"
              title="वनको मौज्दात"
              value={forest_maujdat}
              direction="vertical"
              onChange={(e) => this.setState({ forest_maujdat: e })}
            />
            <span className="dsl-b18">नविकरण गर्नुपर्ने आर्थिक बर्ष</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={renewal_date}
              onChange={(e) => this.handleDate(e, "renewal")}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Save"
                onClick={this.handleSubmit.bind(this)}
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
