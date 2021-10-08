import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arthik_barsa: "",
      kaath: "",
      daura: "",
      lavgrahi_sankhya: "",
      mulyaabhibridi_kar: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      arthik_barsa,
      kaath,
      daura,
      lavgrahi_sankhya,
      mulyaabhibridi_kar,
    } = this.state;
    const payload = {
      banpaidawar: {
        data: {
          arthik_barsa: arthik_barsa,
          kaath: kaath,
          daura: daura,
          lavgrahi_sankhya: lavgrahi_sankhya,
          mulyaabhibridi_kar: mulyaabhibridi_kar,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const {
      arthik_barsa,
      kaath,
      daura,
      lavgrahi_sankhya,
      mulyaabhibridi_kar,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(arthik_barsa) ||
      isEmpty(kaath) ||
      isEmpty(daura) ||
      isEmpty(lavgrahi_sankhya) ||
      isEmpty(mulyaabhibridi_kar)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ वनपैदावार ओसारपसार सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="आर्थिक वर्ष"
                value={arthik_barsa}
                direction="vertical"
                onChange={(e) => this.setState({ arthik_barsa: e })}
              />
              <Input
                className="w-30"
                title="काठ (क्यू. फि.)"
                value={kaath}
                direction="vertical"
                onChange={(e) => this.setState({ kaath: e })}
              />
              <Input
                className="w-30"
                title="दाउरा (भारी)"
                direction="vertical"
                value={daura}
                onChange={(e) => this.setState({ daura: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="लाभग्राही संख्या"
                value={lavgrahi_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ lavgrahi_sankhya: e })}
              />
              <Input
                className="w-30"
                title="प्राप्त मुल्य अभिवृध्दि कर (रु)"
                value={mulyaabhibridi_kar}
                direction="vertical"
                onChange={(e) => this.setState({ mulyaabhibridi_kar: e })}
              />
              <div className="w-30" />
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
