import React, { Component } from "react";
import { Button, Input, Dropdown, ConfirmationDialoge } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import { equals,isEmpty } from "ramda";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

const AtikramanKisim = [
  { id: 1, value: "संस्थागत" },
  { id: 2, value: "व्यक्तिगत" },
];

const AtikramanAbasta = [
  { id: 1, value: "नयाँ" },
  { id: 2, value: "पुरानो" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.banxetra_atikraman_id,
      atikramit_area: props.history.location.item.atikramit_area,
      address: props.history.location.item.address,
      atikraman_kisim: 
        props.history.location.item.atikraman_kisim,
      dalit_ghardhuri: props.history.location.item.dalit_ghardhuri,
      janjati_ghardhuri: props.history.location.item.janjati_ghardhuri,
      anya_ghardhuri: props.history.location.item.anya_ghardhuri,
      atikraman_miti: props.history.location.item.atikraman_miti,
      atikraman_prayojan: props.history.location.item.atikraman_prayojan,
      samrachana_bibaran: props.history.location.item.samrachana_bibaran,
      atikraman_abastha:
        props.history.location.item.atikraman_abastha,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAtikramanKisim = this.handleAtikramanKisim.bind(this);
    this.handleAtikramanAbastha = this.handleAtikramanAbastha.bind(this);
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
      atikramit_area,
      address,
      atikraman_kisim,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      atikraman_miti,
      atikraman_prayojan,
      samrachana_bibaran,
      atikraman_abastha,
      created_by,
    } = this.state;
    const payload = {
      banxetraatikraman: {
        data: {
          atikramit_area: atikramit_area,
          address: address,
          atikraman_kisim: atikraman_kisim,
          dalit_ghardhuri: dalit_ghardhuri,
          janjati_ghardhuri: janjati_ghardhuri,
          anya_ghardhuri: anya_ghardhuri,
          atikraman_miti: atikraman_miti,
          atikraman_prayojan: atikraman_prayojan,
          samrachana_bibaran: samrachana_bibaran,
          atikraman_abastha: atikraman_abastha,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }

  handleDate(e) {
    this.setState({ atikraman_miti: e });
  }
  handleAtikramanKisim(e) {
    this.setState({ atikraman_kisim: e[0] });
  }
  handleAtikramanAbastha(e) {
    this.setState({ atikraman_abastha: e[0] });
  }

  render() {
    const { title } = this.props;
    const {
      atikramit_area,
      address,
      atikraman_kisim,
      dalit_ghardhuri,
      janjati_ghardhuri,
      anya_ghardhuri,
      atikraman_miti,
      atikraman_prayojan,
      samrachana_bibaran,
      atikraman_abastha,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(atikramit_area) ||
      isEmpty(address) ||
      isEmpty(atikraman_kisim) ||
      isEmpty(dalit_ghardhuri) ||
      isEmpty(janjati_ghardhuri) ||
      isEmpty(anya_ghardhuri) ||
      isEmpty(atikraman_miti) ||
      isEmpty(atikraman_prayojan) ||
      isEmpty(samrachana_bibaran) ||
      isEmpty(atikraman_abastha)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ वनक्षेत्र अतिक्रमण सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                title="अतिक्रमित वनको क्षेत्रफल :"
                value={atikramit_area}
                direction="vertical"
                onChange={(e) => this.setState({ atikramit_area: e })}
              />
              <Input
                className="w-30"
                title="ठेगाना :"
                direction="vertical"
                value={address}
                onChange={(e) => this.setState({ address: e })}
              />
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="किसिम :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[atikraman_kisim]}
                  data={AtikramanKisim}
                  getValue={(AtikramanKisim) => AtikramanKisim["value"]}
                  onChange={(e) => this.handleAtikramanKisim(e)}
                  value={atikraman_kisim}
                />
              </div>
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
              <div className="w-45">
                <span className="dsl-b18">अतिक्रमण मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={atikraman_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <div className="w-45">
                <Dropdown
                  className="dropdownlabel"
                  title="अतिक्रमित अवस्था :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[atikraman_abastha]}
                  data={AtikramanAbasta}
                  getValue={(AtikramanAbasta) => AtikramanAbasta["value"]}
                  onChange={(e) => this.handleAtikramanAbastha(e)}
                  value={atikraman_abastha}
                />
              </div>
            </div>
            <div className="panel space pt-2">
              <Input
                className="w-45"
                title="अतिक्रमण प्रयोजन (घरछाप्रो, खेती, पूर्वाधार निर्माण):"
                direction="vertical"
                as="textarea"
                value={atikraman_prayojan}
                onChange={(e) => this.setState({ atikraman_prayojan: e })}
              />
              <Input
                className="w-45"
                title="संरचना वनेको भए संरचना विवरण :"
                value={samrachana_bibaran}
                direction="vertical"
                onChange={(e) => this.setState({ samrachana_bibaran: e })}
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

export default Edit;
