import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dist_id: "",
      jadibuti_thegana: "",
      jadibuti_kisim: "",
      jadibuti_prajati: "",
      jadibuti_laxya: "",
      jadibuti_pragati: "",
      jadibuti_sankhya: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
      jadibuti_thegana,
      jadibuti_kisim,
      jadibuti_prajati,
      jadibuti_laxya,
      jadibuti_pragati,
      jadibuti_sankhya,
    } = this.state;
    const payload = {
      jadibuti: {
        data: {
          jadibuti_thegana: jadibuti_thegana,
          jadibuti_kisim: jadibuti_kisim,
          jadibuti_prajati: jadibuti_prajati,
          jadibuti_laxya: jadibuti_laxya,
          jadibuti_pragati: jadibuti_pragati,
          jadibuti_sankhya: jadibuti_sankhya,
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
      jadibuti_thegana,
      jadibuti_kisim,
      jadibuti_prajati,
      jadibuti_laxya,
      jadibuti_pragati,
      jadibuti_sankhya,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(jadibuti_thegana) ||
      isEmpty(jadibuti_kisim) ||
      isEmpty(jadibuti_prajati) ||
      isEmpty(jadibuti_laxya) ||
      isEmpty(jadibuti_pragati) ||
      isEmpty(jadibuti_sankhya)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ जडिबुटी उत्पादन सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="जडिबुटी उत्पादन ठेगाना :"
                value={jadibuti_thegana}
                direction="vertical"
                onChange={(e) => this.setState({ jadibuti_thegana: e })}
              />

              <Input
                className="w-30"
                title="जडिबुटीको किसिम :"
                direction="vertical"
                value={jadibuti_kisim}
                onChange={(e) => this.setState({ jadibuti_kisim: e })}
              />
              <Input
                className="w-30"
                title="जडिबुटीको प्रजाति :"
                value={jadibuti_prajati}
                direction="vertical"
                onChange={(e) => this.setState({ jadibuti_prajati: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="लक्ष :"
                value={jadibuti_laxya}
                direction="vertical"
                onChange={(e) => this.setState({ jadibuti_laxya: e })}
              />
              <Input
                className="w-30"
                title="प्रगति :"
                direction="vertical"
                value={jadibuti_pragati}
                onChange={(e) => this.setState({ jadibuti_pragati: e })}
              />
              <Input
                className="w-30"
                title="जडिबुटीको संख्या :"
                value={jadibuti_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ jadibuti_sankhya: e })}
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
