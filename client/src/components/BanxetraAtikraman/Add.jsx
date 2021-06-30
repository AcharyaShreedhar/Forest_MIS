import React, { Component } from "react";
import { Button, Input, Dropdown } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import { equals } from "ramda";

const AtikramanKisim = [
  { id: 1, value: "संस्थागत" },
  { id: 2, value: "व्यक्तिगत" },
];

const AtikramanAbasta = [
  { id: 1, value: "नयाँ" },
  { id: 2, value: "पुरानो" },
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atikramit_area: "",
      address: "",
      atikraman_kisim: 1,
      samalagna_ghardhuri: "",
      atikraman_prayojan: "",
      samrachana_bibaran: "",
      atikraman_abastha: 1,
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAtikramanKisim = this.handleAtikramanKisim.bind(this);
    this.handleAtikramanAbastha = this.handleAtikramanAbastha.bind(this);
  }

  handleSubmit() {
    const {
      atikramit_area,
      address,
      atikraman_kisim,
      samalagna_ghardhuri,
      atikraman_prayojan,
      samrachana_bibaran,
      atikraman_abastha,
    } = this.state;
    const payload = {
      banxetraatikraman: {
        data: {
          atikramit_area: atikramit_area,
          address: address,
          atikraman_kisim: equals(atikraman_kisim, 1)
            ? "संस्थागत"
            : "व्यक्तिगत",
          samalagna_ghardhuri: samalagna_ghardhuri,
          atikraman_prayojan: atikraman_prayojan,
          samrachana_bibaran: samrachana_bibaran,
          atikraman_abastha: equals(atikraman_abastha, 1) ? "नयाँ" : "पुरानो",
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleAtikramanKisim(e) {
    this.setState({ atikraman_kisim: e });
  }
  handleAtikramanAbastha(e) {
    this.setState({ atikraman_abastha: e });
  }

  render() {
    const { title } = this.props;
    const {
      atikramit_area,
      address,
      atikraman_kisim,
      samalagna_ghardhuri,
      atikraman_prayojan,
      samrachana_bibaran,
      atikraman_abastha,
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
              title="अतिक्रमित वनको क्षेत्रफल"
              value={atikramit_area}
              direction="vertical"
              onChange={(e) => this.setState({ atikramit_area: e })}
            />

            <Input
              className="mb-4"
              title="ठेगाना"
              direction="vertical"
              value={address}
              onChange={(e) => this.setState({ address: e })}
            />
            <Dropdown
              className="dropdownlabel mb-4"
              title="किसिम"
              direction="vertical"
              width="fit-content"
              defaultIds={[atikraman_kisim]}
              data={AtikramanKisim}
              getValue={(AtikramanKisim) => AtikramanKisim["value"]}
              onChange={(e) => this.handleAtikramanKisim(e)}
              value={atikraman_kisim}
            />
            <Input
              className="mb-4"
              title="संलग्न घरधुरीहरु"
              value={samalagna_ghardhuri}
              direction="vertical"
              onChange={(e) => this.setState({ samalagna_ghardhuri: e })}
            />

            <Input
              className="mb-4"
              title="अतिक्रमण प्रयोजन (घरछाप्रो, खेती, पूर्वाधार निर्माण)"
              direction="vertical"
              as="textarea"
              value={atikraman_prayojan}
              onChange={(e) => this.setState({ atikraman_prayojan: e })}
            />

            <Input
              className="mb-4"
              title="संरचना वनेको भए संरचना विवरण"
              value={samrachana_bibaran}
              direction="vertical"
              onChange={(e) => this.setState({ samrachana_bibaran: e })}
            />
            <Dropdown
              className="dropdownlabel mb-4"
              title="अतिक्रमित अवस्था"
              direction="vertical"
              width="fit-content"
              defaultIds={[atikraman_abastha]}
              data={AtikramanAbasta}
              getValue={(AtikramanAbasta) => AtikramanAbasta["value"]}
              onChange={(e) => this.handleAtikramanAbastha(e)}
              value={atikraman_abastha}
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

export default Add;
