import React, { Component } from "react";
import { equals } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

const GenderTypes = [
  { id: 1, value: "पुरुष" },
  { id: 2, value: "महिला" },
];

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dist_id: "",
      darta_no: "",
      samudayik_upavokta_samiti_name: "",
      darta_miti: "",
      dalit_ghardhuri: "",
      perm_addr: "",
      curr_addr: "",
      janjati_ghardhuri: "",
      anya_ghardhuri: "",
      female: "",
      male: "",
      sampanna: "",
      madhyam: "",
      bipanna: "",
      dalit_rep: "",
      janjati_rep: "",
      anya_rep: "",
      adhyakshya: "",
      adhyakshya_gender: "",
      sachib_gender: "",
      sachib: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ darta_miti: e });
  }
  handleGender(e, type) {
    switch (type) {
      case "adhyakshya": {
        this.setState({ adhyakshya_gender: equals(e[0], 1) ? "M" : "F" });
        break;
      }
      case "sachib": {
        this.setState({ sachib_gender: equals(e[0], 1) ? "M" : "F" });
        break;
      }
      default:
        break;
    }
  }

  handleSubmit() {
    const {
      darta_no,
      samudayik_upavokta_samiti_name,
      darta_miti,
      dalit_ghardhuri,
      perm_addr,
      curr_addr,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      sampanna,
      madhyam,
      bipanna,
      dalit_rep,
      janjati_rep,
      anya_rep,
      adhyakshya,
      adhyakshya_gender,
      sachib_gender,
      sachib,
    } = this.state;
    const payload = {
      consumergroupdetails: {
        data: {
          samudayik_upavokta_samiti_name: samudayik_upavokta_samiti_name,
          darta_no: darta_no,
          darta_miti: darta_miti,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          janjati_ghardhuri: janjati_ghardhuri,
          dalit_ghardhuri: dalit_ghardhuri,
          anya_ghardhuri: anya_ghardhuri,
          female: female,
          male: male,
          sampanna: sampanna,
          madhyam: madhyam,
          bipanna: bipanna,
          dalit_rep: dalit_rep,
          janjati_rep: janjati_rep,
          anya_rep: anya_rep,
          adhyakshya_gender: adhyakshya_gender,
          adhyakshya: adhyakshya,
          sachib_gender: sachib_gender,
          sachib: sachib,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
          showDialog: false,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const {
      darta_no,
      samudayik_upavokta_samiti_name,
      darta_miti,
      dalit_ghardhuri,
      perm_addr,
      curr_addr,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      sampanna,
      madhyam,
      bipanna,
      dalit_rep,
      janjati_rep,
      anya_rep,
      adhyakshya,
      adhyakshya_gender,
      sachib_gender,
      sachib,
      showDialog,
    } = this.state;
    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ उपभोक्ता समुह सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
                className="w-30"
                title="दर्ता नं :"
                value={darta_no}
                direction="vertical"
                onChange={(e) => this.setState({ darta_no: e })}
              />
              <Input
                className="w-65"
                title="सामुदायिक वन उपभोक्ता समितिको नाम :"
                direction="vertical"
                value={samudayik_upavokta_samiti_name}
                onChange={(e) =>
                  this.setState({ samudayik_upavokta_samiti_name: e })
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
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="साविक ठेगाना :"
                value={perm_addr}
                direction="vertical"
                onChange={(e) => this.setState({ perm_addr: e })}
              />
              <Input
                className="w-30"
                title="हाल ठेगाना :"
                direction="vertical"
                value={curr_addr}
                onChange={(e) => this.setState({ curr_addr: e })}
              />
            </div>
            <span className="dsl-b18">घरधुरी विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-30"
                title="दलित :"
                direction="vertical"
                value={dalit_ghardhuri}
                onChange={(e) => this.setState({ dalit_ghardhuri: e })}
              />
              <Input
                className="w-30"
                title="जनजाती :"
                direction="vertical"
                value={janjati_ghardhuri}
                onChange={(e) => this.setState({ janjati_ghardhuri: e })}
              />
              <Input
                className="w-30"
                title="अन्य :"
                direction="vertical"
                value={anya_ghardhuri}
                onChange={(e) => this.setState({ anya_ghardhuri: e })}
              />
            </div>

            <span className="dsl-b18">सम्पन्नता स्तरीकरण घरधुरी विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-30"
                title="सम्पन्न : "
                direction="vertical"
                value={sampanna}
                onChange={(e) => this.setState({ sampanna: e })}
              />
              <Input
                className="w-30"
                title="मध्यम : "
                direction="vertical"
                value={madhyam}
                onChange={(e) => this.setState({ madhyam: e })}
              />
              <Input
                className="w-30"
                title="विपन्न : "
                direction="vertical"
                value={bipanna}
                onChange={(e) => this.setState({ bipanna: e })}
              />
            </div>
            <span className="dsl-b18">कार्यसमितिमा प्रतिनिधित्व विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-30"
                title="दलित :"
                direction="vertical"
                value={dalit_rep}
                onChange={(e) => this.setState({ dalit_rep: e })}
              />
              <Input
                className="w-30"
                title="जनजाती :"
                direction="vertical"
                value={janjati_rep}
                onChange={(e) => this.setState({ janjati_rep: e })}
              />

              <Input
                className="w-30"
                title="अन्य :"
                direction="vertical"
                value={anya_rep}
                onChange={(e) => this.setState({ anya_rep: e })}
              />
            </div>
            <div className="section mb-4" />
            <span className="dsl-b18">जनसंख्या विवरण :</span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-45"
                title="महिला :"
                direction="vertical"
                value={female}
                onChange={(e) => this.setState({ female: e })}
              />
              <Input
                className="w-45"
                title="पुरुष : "
                direction="vertical"
                value={male}
                onChange={(e) => this.setState({ male: e })}
              />
            </div>
            <span className="dsl-b18">
              मुख्य पदाधिकारीमा प्रतिनिधित्व विवरण :
            </span>
            <div className="panel space mt-2 mb-4">
              <Input
                className="w-45"
                title="अध्यक्ष :"
                direction="vertical"
                value={adhyakshya}
                onChange={(e) => this.setState({ adhyakshya: e })}
              />
              <div className="w-45">
                <Dropdown
                  className="dropdownlabel"
                  title="लिङ्ग :"
                  direction="vertical"
                  defaultIds={[GenderTypes]}
                  data={GenderTypes}
                  getValue={(GenderTypes) => GenderTypes["value"]}
                  onChange={(e) => this.handleGender(e, "adhyakshya")}
                  value={adhyakshya_gender}
                />
              </div>
            </div>
            <div className="panel space mt-2">
              <Input
                className="w-45"
                title="सचिव :"
                direction="vertical"
                as="textarea"
                value={sachib}
                onChange={(e) => this.setState({ sachib: e })}
              />
              <div className="w-45">
                <Dropdown
                  className="dropdownlabel"
                  title="लिङ्ग :"
                  direction="vertical"
                  defaultIds={[GenderTypes]}
                  data={GenderTypes}
                  getValue={(GenderTypes) => GenderTypes["value"]}
                  onChange={(e) => this.handleGender(e, "sachib")}
                  value={sachib_gender}
                />
              </div>
            </div>
          </div>
          <div className="section" />
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
