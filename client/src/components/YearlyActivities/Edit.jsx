import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, DatePicker, Dropdown } from "../../components";
import { equals } from "ramda";

const AnnualBibaran = [
  { id: 1, value: "बुझाएको" },
  { id: 2, value: "नबुझाएको" },
];

const LekhaParikshyan = [
  { id: 1, value: "गरेको" },
  { id: 2, value: "नगरेको" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.activities_info_id,
      samudayikban_name: props.history.location.item.samudayikban_naam,
      fiscal_year: props.history.location.item.fiscal_year,
      area: props.history.location.item.area,
      conservation_timber:
        props.history.location.item.production_from_conservation_timber,
      conservation_wood:
        props.history.location.item.production_from_conservation_wood,
      employment: props.history.location.item.employment_generated_workingday,
      withingroup_timber: props.history.location.item.withingroup_timber,
      withingroup_wood: props.history.location.item.withingroup_wood,
      outsidegroup_timber: props.history.location.item.outsidegroup_timber,
      outsidegroup_wood: props.history.location.item.outsidegroup_wood,
      maujdat_timber: props.history.location.item.maujdat_timber,
      maujdat_wood: props.history.location.item.maujdat_wood,
      annual_income: props.history.location.item.annual_income,
      annual_expenditure: props.history.location.item.annual_expenditure,
      netannual_saving: props.history.location.item.netannual_saving,
      rojgar: props.history.location.item.niyamit_rojgar_count,
      udhyam: props.history.location.item.community_udhyam_bibaran,
      annual_bibaran: equals(
        props.history.location.item.annual_bibaran,
        "बुझाएको"
      )
        ? 1
        : 2,
      lekha_parikshyan: equals(
        props.history.location.item.lekha_parikshyan,
        "गरेको"
      )
        ? 1
        : 2,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnnualBibaran = this.handleAnnualBibaran.bind(this);
    this.handleLekhaParikshyan = this.handleLekhaParikshyan.bind(this);
  }

  handleSubmit() {
    const {
      id,
      samudayikban_name,
      fiscal_year,
      area,
      conservation_timber,
      conservation_wood,
      employment,
      withingroup_timber,
      withingroup_wood,
      outsidegroup_timber,
      outsidegroup_wood,
      maujdat_timber,
      maujdat_wood,
      annual_income,
      annual_expenditure,
      netannual_saving,
      rojgar,
      udhyam,
      annual_bibaran,
      lekha_parikshyan,
    } = this.state;
    const payload = {
      yearlyactivities: {
        data: {
          samudayikban_naam: samudayikban_name,
          fiscal_year: fiscal_year,
          area: area,
          production_from_conservation_timber: conservation_timber,
          production_from_conservation_wood: conservation_wood,
          employment_generated_workingday: employment,
          withingroup_timber: withingroup_timber,
          withingroup_wood: withingroup_wood,
          outsidegroup_timber: outsidegroup_timber,
          outsidegroup_wood: outsidegroup_wood,
          maujdat_timber: maujdat_timber,
          maujdat_wood: maujdat_wood,
          annual_income: annual_income,
          annual_expenditure: annual_expenditure,
          netannual_saving: netannual_saving,
          niyamit_rojgar_count: rojgar,
          community_udhyam_bibaran: udhyam,
          annual_bibaran: equals(annual_bibaran, 1) ? "बुझाएको" : "नबुझाएको",
          lekha_parikshyan: equals(lekha_parikshyan, 1) ? "गरेको" : "नगरेको",
        },
      },
    };

    this.props.onUpdate(payload, id);
  }
  handleAnnualBibaran(e) {
    this.setState({ annual_bibaran: e[0] });
  }
  handleLekhaParikshyan(e) {
    this.setState({ lekha_parikshyan: e[0] });
  }

  render() {
    const { title } = this.props;
    const {
      samudayikban_name,
      fiscal_year,
      area,
      conservation_timber,
      conservation_wood,
      employment,
      withingroup_timber,
      withingroup_wood,
      outsidegroup_timber,
      outsidegroup_wood,
      maujdat_timber,
      maujdat_wood,
      annual_income,
      annual_expenditure,
      netannual_saving,
      rojgar,
      udhyam,
      annual_bibaran,
      lekha_parikshyan,
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
              title="सामुदायीक वन नाम"
              value={samudayikban_name}
              direction="vertical"
              onChange={(e) => this.setState({ samudayikban_name: e })}
            />

            <Input
              className="mb-4"
              title="आर्थिक वर्ष"
              direction="vertical"
              value={fiscal_year}
              onChange={(e) => this.setState({ fiscal_year: e })}
            />
            <Input
              className="mb-4"
              title="सम्बर्धन गरिएको क्षेत्रफल"
              value={area}
              direction="vertical"
              onChange={(e) => this.setState({ area: e })}
            />

            <Input
              className="mb-4"
              title="सम्बर्धनबाट उत्पादन काठ पारिमाण (क्यू. फि.)"
              direction="vertical"
              as="textarea"
              value={conservation_timber}
              onChange={(e) => this.setState({ conservation_timber: e })}
            />

            <Input
              className="mb-4"
              title="सम्बर्धनबाट उत्पादन दाउरा पारिमाण (क्यू. फि.)"
              value={conservation_wood}
              direction="vertical"
              onChange={(e) => this.setState({ conservation_wood: e })}
            />

            <Input
              className="mb-4"
              title="वन सम्बर्धन कार्यबाट रोजगारीको श्रृजना संख्या (श्रम दिन)"
              value={employment}
              direction="vertical"
              onChange={(e) => this.setState({ employment: e })}
            />

            <Input
              className="mb-4"
              title="समूहभित्र काठ वितरण (क्यू. फि.)"
              value={withingroup_timber}
              direction="vertical"
              onChange={(e) => this.setState({ withingroup_timber: e })}
            />

            <Input
              className="mb-4"
              title="समूहभित्र दाउरा वितरण (भारी)"
              value={withingroup_wood}
              direction="vertical"
              onChange={(e) => this.setState({ withingroup_wood: e })}
            />

            <Input
              className="mb-4"
              title="समूहबाहिर काठ वितरण (क्यू. फि.)"
              value={outsidegroup_timber}
              direction="vertical"
              onChange={(e) => this.setState({ outsidegroup_timber: e })}
            />

            <Input
              className="mb-4"
              title="समूहबाहिर दाउरा वितरण (चट्ट)"
              value={outsidegroup_wood}
              direction="vertical"
              onChange={(e) => this.setState({ outsidegroup_wood: e })}
            />

            <Input
              className="mb-4"
              title="मौज्दात काठ (क्यू. फि.)"
              value={maujdat_timber}
              direction="vertical"
              onChange={(e) => this.setState({ maujdat_timber: e })}
            />

            <Input
              className="mb-4"
              title="मौज्दात दाउरा (चट्ट))"
              value={maujdat_wood}
              direction="vertical"
              onChange={(e) => this.setState({ maujdat_wood: e })}
            />

            <Input
              className="mb-4"
              title="वार्षिक आम्दानी (रु)"
              value={annual_income}
              direction="vertical"
              onChange={(e) => this.setState({ annual_income: e })}
            />

            <Input
              className="mb-4"
              title="वार्षिक खर्च (रु)"
              value={annual_expenditure}
              direction="vertical"
              onChange={(e) => this.setState({ annual_expenditure: e })}
            />

            <Input
              className="mb-4"
              title="खुद वचत खुद आम्दानी (रु)"
              value={netannual_saving}
              direction="vertical"
              onChange={(e) => this.setState({ netannual_saving: e })}
            />

            <Input
              className="mb-4"
              title="सामूहमा नियमित रोजगार संख्या(जना)"
              value={rojgar}
              direction="vertical"
              onChange={(e) => this.setState({ rojgar: e })}
            />

            <Input
              className="mb-4"
              title="समूहले संचालन गरेको उद्यमको विवरण"
              value={udhyam}
              direction="vertical"
              onChange={(e) => this.setState({ udhyam: e })}
            />

            <Dropdown
              className="dropdownlabel mb-4"
              title="वार्षिक प्रतिवेदन"
              direction="vertical"
              width="fit-content"
              defaultIds={[annual_bibaran]}
              data={AnnualBibaran}
              getValue={(AnnualBibaran) => AnnualBibaran["value"]}
              onChange={(e) => this.handleAnnualBibaran(e)}
              value={annual_bibaran}
            />

            <Dropdown
              className="dropdownlabel mb-4"
              title="लेखा परिक्षण"
              direction="vertical"
              width="fit-content"
              defaultIds={[lekha_parikshyan]}
              data={LekhaParikshyan}
              getValue={(LekhaParikshyan) => LekhaParikshyan["value"]}
              onChange={(e) => this.handleLekhaParikshyan(e)}
              value={lekha_parikshyan}
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

export default Edit;
