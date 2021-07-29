import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikri_miti: "",
      banpaidawar_kisim: "",
      ekai: "",
      aantarik_dar: "",
      aantarik_parinam: "",
      aantarik_rakam: "",
      aapurti_dar: "",
      aapurti_parinam: "",
      aapurti_rakam: "",
      bahiya_dar: "",
      bahiya_parinam: "",
      bahiya_rakam: "",
      jamma_parinam: "",
      jamma_rakam: "",
      kul_jamma: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
        bikri_miti,
        banpaidawar_kisim,
        ekai,
        aantarik_dar,
        aantarik_parinam,
        aantarik_rakam,
        aapurti_dar,
        aapurti_parinam,
        aapurti_rakam,
        bahiya_dar,
        bahiya_parinam,
        bahiya_rakam,
        jamma_parinam,
        jamma_rakam,
        kul_jamma,
    } = this.state;
    const payload = {
      banpaidawarbikribitaran: {
        data: {
            bikri_miti: bikri_miti,
            banpaidawar_kisim: banpaidawar_kisim,
            ekai: ekai,
            aantarik_dar: aantarik_dar,
            aantarik_parinam: aantarik_parinam,
            aantarik_rakam: aantarik_rakam,
            aapurti_dar: aapurti_dar,
            aapurti_parinam: aapurti_parinam,
            aapurti_rakam: aapurti_rakam,
            bahiya_dar: bahiya_dar,
            bahiya_parinam: bahiya_parinam,
            bahiya_rakam: bahiya_rakam,
            jamma_parinam: jamma_parinam,
            jamma_rakam: jamma_rakam,
            kul_jamma: kul_jamma,
            dist_id: this.props.user.dist_id,
            created_by: this.props.user.user_name,
          
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleDate(e) {
    this.setState({ bikri_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
        bikri_miti,
        banpaidawar_kisim,
        ekai,
        aantarik_dar,
        aantarik_parinam,
        aantarik_rakam,
        aapurti_dar,
        aapurti_parinam,
        aapurti_rakam,
        bahiya_dar,
        bahiya_parinam,
        bahiya_rakam,
        jamma_parinam,
        jamma_rakam,
        kul_jamma,
        showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
        <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ वनपैदावार बिक्रिवितरण सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <span className="dsl-b18">बिक्रि मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={bikri_miti}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />

            <Input
              className="mb-4"
              title="वनपैदावार किसिम"
              value={banpaidawar_kisim}
              direction="vertical"
              onChange={(e) => this.setState({ banpaidawar_kisim: e })}
            />

            <Input
              className="mb-4"
              title="इकाई"
              direction="vertical"
              value={ekai}
              onChange={(e) => this.setState({ ekai: e })}
            />
            <Input
              className="mb-4"
              title="आन्तरीक दर"
              value={aantarik_dar}
              direction="vertical"
              onChange={(e) => this.setState({ aantarik_dar: e })}
            />

            <Input
              className="mb-4"
              title="आन्तरीक पारिमाण"
              direction="vertical"
              value={aantarik_parinam}
              onChange={(e) => this.setState({ aantarik_parinam: e })}
            />

            <Input
              className="mb-4"
              title="आन्तरीक रकम"
              value={aantarik_rakam}
              direction="vertical"
              onChange={(e) => this.setState({ aantarik_rakam: e })}
            />
            <Input
              className="mb-4"
              title="आपुर्ती दर"
              value={aapurti_dar}
              direction="vertical"
              onChange={(e) => this.setState({ aapurti_dar: e })}
            />
            <Input
              className="mb-4"
              title="आपुर्ती पारिमाण"
              value={aapurti_parinam}
              direction="vertical"
              onChange={(e) => this.setState({ aapurti_parinam: e })}
            />
            <Input
              className="mb-4"
              title="आपुर्ती रकम"
              value={aapurti_rakam}
              direction="vertical"
              onChange={(e) => this.setState({ aapurti_rakam: e })}
            />
            <Input
              className="mb-4"
              title="वाह्य दर"
              value={bahiya_dar}
              direction="vertical"
              onChange={(e) => this.setState({ bahiya_dar: e })}
            />
            <Input
              className="mb-4"
              title="वाह्य परिमाण"
              value={bahiya_parinam}
              direction="vertical"
              onChange={(e) => this.setState({ bahiya_parinam: e })}
            />
            <Input
              className="mb-4"
              title="वाह्य रकम"
              value={bahiya_rakam}
              direction="vertical"
              onChange={(e) => this.setState({ bahiya_rakam: e })}
            />
            <Input
              className="mb-4"
              title="जम्मा परिमाण"
              value={jamma_parinam}
              direction="vertical"
              onChange={(e) => this.setState({ jamma_parinam: e })}
            />
            <Input
              className="mb-4"
              title="जम्मा रकम"
              value={jamma_rakam}
              direction="vertical"
              onChange={(e) => this.setState({ jamma_rakam: e })}
            />
            <Input
              className="mb-4"
              title="कुल जम्मा"
              value={kul_jamma}
              direction="vertical"
              onChange={(e) => this.setState({ kul_jamma: e })}
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

export default Add;
