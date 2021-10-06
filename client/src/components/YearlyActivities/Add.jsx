import React, { Component } from "react";
import { Button, Input, Dropdown, ConfirmationDialoge } from "../../components";
import { equals } from "ramda";

const AnnualBibaran = [
  { id: 1, value: "बुझाएको" },
  { id: 2, value: "नबुझाएको" },
];

const LekhaParikshyan = [
  { id: 1, value: "गरेको" },
  { id: 2, value: "नगरेको" },
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      samudayikban_name: "",
      fiscal_year: "",
      area: "",
      production_from_conservation_timber: "",
      production_from_conservation_wood: "",
      employment: "",
      withingroup_timber: "",
      withingroup_wood: "",
      outsidegroup_timber: "",
      outsidegroup_wood: "",
      maujdat_timber: "",
      maujdat_wood: "",
      annual_income: "",
      annual_expenditure: "",
      netannual_saving: "",
      rojgar: "",
      udhyam: "",
      annual_bibaran: "",
      lekha_parikshyan: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAnnualBibaran = this.handleAnnualBibaran.bind(this);
    this.handleLekhaParikshyan = this.handleLekhaParikshyan.bind(this);
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
      samudayikban_name,
      fiscal_year,
      area,
      production_from_conservation_timber,
      production_from_conservation_wood,
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
          production_from_conservation_timber: production_from_conservation_timber,
          production_from_conservation_wood: production_from_conservation_wood,
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
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
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
      production_from_conservation_timber,
      production_from_conservation_wood,
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
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ वार्षिक कार्यक्रम सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
                className="w-65"
                title="सामुदायीक वन नाम :"
                value={samudayikban_name}
                direction="vertical"
                onChange={(e) => this.setState({ samudayikban_name: e })}
              />

              <Input
                className="w-30"
                title="आर्थिक वर्ष :"
                direction="vertical"
                value={fiscal_year}
                onChange={(e) => this.setState({ fiscal_year: e })}
              />
            </div>
            <span className="dsl-b18">सम्बर्धन विवरण :</span>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="क्षेत्रफल"
                value={area}
                direction="vertical"
                onChange={(e) => this.setState({ area: e })}
              />

              <Input
                className="w-30"
                title="काठ उत्पादन(क्यू. फि.)"
                direction="vertical"
                value={production_from_conservation_timber}
                onChange={(e) =>
                  this.setState({ production_from_conservation_timber: e })
                }
              />
              <Input
                className="w-30"
                title="दाउरा उत्पादन(क्यू. फि.)"
                value={production_from_conservation_wood}
                direction="vertical"
                onChange={(e) =>
                  this.setState({ production_from_conservation_wood: e })
                }
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="रोजगारीको श्रृजना संख्या (श्रम दिन)"
                value={employment}
                direction="vertical"
                onChange={(e) => this.setState({ employment: e })}
              />
              <Input
                className="w-30"
                title="मौज्दात काठ (क्यू. फि.)"
                value={maujdat_timber}
                direction="vertical"
                onChange={(e) => this.setState({ maujdat_timber: e })}
              />

              <Input
                className="w-30"
                title="मौज्दात दाउरा (चट्ट))"
                value={maujdat_wood}
                direction="vertical"
                onChange={(e) => this.setState({ maujdat_wood: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="समूहभित्र काठ वितरण (क्यू. फि.)"
                value={withingroup_timber}
                direction="vertical"
                onChange={(e) => this.setState({ withingroup_timber: e })}
              />

              <Input
                className="w-30"
                title="समूहभित्र दाउरा वितरण (भारी)"
                value={withingroup_wood}
                direction="vertical"
                onChange={(e) => this.setState({ withingroup_wood: e })}
              />
              <Input
                className="w-30"
                title="समूहबाहिर काठ वितरण (क्यू. फि.)"
                value={outsidegroup_timber}
                direction="vertical"
                onChange={(e) => this.setState({ outsidegroup_timber: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="समूहबाहिर दाउरा वितरण (चट्ट)"
                value={outsidegroup_wood}
                direction="vertical"
                onChange={(e) => this.setState({ outsidegroup_wood: e })}
              />
              <Input
                className="w-30"
                title="वार्षिक आम्दानी (रु)"
                value={annual_income}
                direction="vertical"
                onChange={(e) => this.setState({ annual_income: e })}
              />

              <Input
                className="w-30"
                title="वार्षिक खर्च (रु)"
                value={annual_expenditure}
                direction="vertical"
                onChange={(e) => this.setState({ annual_expenditure: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="खुद वचत खुद आम्दानी (रु)"
                value={netannual_saving}
                direction="vertical"
                onChange={(e) => this.setState({ netannual_saving: e })}
              />
              <Input
                className="w-30"
                title="सामूहमा नियमित रोजगार संख्या(जना)"
                value={rojgar}
                direction="vertical"
                onChange={(e) => this.setState({ rojgar: e })}
              />
              <Input
                className="w-30"
                title="समूहले संचालन गरेको उद्यमको विवरण"
                value={udhyam}
                direction="vertical"
                onChange={(e) => this.setState({ udhyam: e })}
              />
            </div>
            <div className="panel space">
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वार्षिक प्रतिवेदन"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[annual_bibaran]}
                  data={AnnualBibaran}
                  getValue={(AnnualBibaran) => AnnualBibaran["value"]}
                  onChange={(e) => this.handleAnnualBibaran(e)}
                  value={annual_bibaran}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
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
              <div className="w-30" />
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
                onClick={this.handleConfirm.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Add;
