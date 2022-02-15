import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { nepaliToEnglishNumber } from "nepali-number";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pidit_name: "",
      pidit_address: "",
      ghatana_address: "",
      balinali_noksani: "",
      anna_bhandaran: "",
      pasudhan_xeti: "",
      ghargoth_xeti: "",
      jagga_bibaran: "",
      nagarikta_no: "",
      upabhoktasamiti_name: "",
      xetigarne_animal: "",
      xeti_miti: "",
      man_injury: "",
      mag_rakam: "",
      samitiko_mulyankan_rakam: "",
      vuktani_rakam: "",
      remarks: "",
      dist_id: "",
      office_id: "",
      created_by: "",
      updated_by: "",
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
      pidit_name,
      pidit_address,
      ghatana_address,
      balinali_noksani,
      anna_bhandaran,
      pasudhan_xeti,
      ghargoth_xeti,
      jagga_bibaran,
      nagarikta_no,
      upabhoktasamiti_name,
      xetigarne_animal,
      xeti_miti,
      man_injury,
      mag_rakam,
      samitiko_mulyankan_rakam,
      vuktani_rakam,
      remarks,
    } = this.state;
    const payload = {
      banyajantuxeti: {
        data: {
          pidit_name: pidit_name,
          pidit_address: pidit_address,
          ghatana_address: ghatana_address,
          balinali_noksani: balinali_noksani,
          anna_bhandaran: anna_bhandaran,
          pasudhan_xeti: pasudhan_xeti,
          ghargoth_xeti: ghargoth_xeti,
          jagga_bibaran: jagga_bibaran,
          nagarikta_no: nepaliToEnglishNumber(nagarikta_no),
          upabhoktasamiti_name: upabhoktasamiti_name,
          xetigarne_animal: xetigarne_animal,
          xeti_miti: xeti_miti,
          man_injury: man_injury,
          mag_rakam: mag_rakam,
          samitiko_mulyankan_rakam: samitiko_mulyankan_rakam,
          vuktani_rakam: vuktani_rakam,
          remarks: remarks,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  handleDate(e) {
    this.setState({ xeti_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      pidit_name,
      pidit_address,
      ghatana_address,
      balinali_noksani,
      anna_bhandaran,
      pasudhan_xeti,
      ghargoth_xeti,
      jagga_bibaran,
      nagarikta_no,
      upabhoktasamiti_name,
      xetigarne_animal,
      xeti_miti,
      man_injury,
      mag_rakam,
      samitiko_mulyankan_rakam,
      vuktani_rakam,
      remarks,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(pidit_name) ||
      isEmpty(pidit_address) ||
      isEmpty(ghatana_address) ||
      isEmpty(balinali_noksani) ||
      isEmpty(anna_bhandaran) ||
      isEmpty(pasudhan_xeti) ||
      isEmpty(ghargoth_xeti) ||
      isEmpty(jagga_bibaran) ||
      isEmpty(nagarikta_no) ||
      isEmpty(upabhoktasamiti_name) ||
      isEmpty(xetigarne_animal) ||
      isEmpty(xeti_miti) ||
      isEmpty(man_injury) ||
      isEmpty(mag_rakam) ||
      isEmpty(samitiko_mulyankan_rakam) ||
      isEmpty(vuktani_rakam) ||
      isEmpty(remarks)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ वन्यजन्तु क्षेति राहात सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="पिडितको नाम :"
                value={pidit_name}
                direction="vertical"
                onChange={(e) => this.setState({ pidit_name: e })}
              />
              <Input
                className="w-30"
                title="नागरिकता नं :"
                direction="vertical"
                value={nagarikta_no}
                onChange={(e) => this.setState({ nagarikta_no: e })}
              />

              <Input
                className="w-30"
                title="पिडितको ठेगाना :"
                direction="vertical"
                value={pidit_address}
                onChange={(e) => this.setState({ pidit_address: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-65"
                title="सम्बन्धी उपभोक्ता समितिको नाम :"
                value={upabhoktasamiti_name}
                direction="vertical"
                onChange={(e) => this.setState({ upabhoktasamiti_name: e })}
              />
              <Input
                className="w-30"
                title="क्षती गर्ने वन्यजन्तुको नाम :"
                value={xetigarne_animal}
                direction="vertical"
                onChange={(e) => this.setState({ xetigarne_animal: e })}
              />
            </div>
            <div className="panel space mb-4">
              <div className="w-30">
                <span className="dsl-b18">क्षतिको मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={xeti_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="घटना स्थल :"
                direction="vertical"
                value={ghatana_address}
                onChange={(e) => this.setState({ ghatana_address: e })}
              />
              <Input
                className="w-30"
                title="जग्गाको विवरण :"
                value={jagga_bibaran}
                direction="vertical"
                onChange={(e) => this.setState({ jagga_bibaran: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="मानविय क्षति :"
                value={man_injury}
                direction="vertical"
                onChange={(e) => this.setState({ man_injury: e })}
              />
              <Input
                className="w-30"
                title="घरगोठ क्षेती :"
                direction="vertical"
                value={ghargoth_xeti}
                onChange={(e) => this.setState({ ghargoth_xeti: e })}
              />
              <Input
                className="w-30"
                title="पशुधन क्षेती :"
                direction="vertical"
                value={pasudhan_xeti}
                onChange={(e) => this.setState({ pasudhan_xeti: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="बालिनाली नोक्सानी :"
                direction="vertical"
                value={balinali_noksani}
                onChange={(e) => this.setState({ balinali_noksani: e })}
              />
              <Input
                className="w-30"
                title="अन्न भन्डारण :"
                direction="vertical"
                value={anna_bhandaran}
                onChange={(e) => this.setState({ anna_bhandaran: e })}
              />

              <Input
                className="w-30"
                title="माग रकम :"
                value={mag_rakam}
                direction="vertical"
                onChange={(e) => this.setState({ mag_rakam: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="समितिको मूल्यांकन रकम(रु) :"
                value={samitiko_mulyankan_rakam}
                direction="vertical"
                onChange={(e) => this.setState({ samitiko_mulyankan_rakam: e })}
              />
              <Input
                className="w-30"
                title="भुक्तानि रकम(रु) :"
                value={vuktani_rakam}
                direction="vertical"
                onChange={(e) => this.setState({ vuktani_rakam: e })}
              />
              <Input
                className="w-30"
                title="कैफियत	:"
                value={remarks}
                direction="vertical"
                onChange={(e) => this.setState({ remarks: e })}
              />
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
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

export default Add;
