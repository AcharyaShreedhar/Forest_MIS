import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.paidawar_id,
      arthik_barsa: props.history.location.item.arthik_barsa,
      mahina: props.history.location.item.mahina,
      kaath: props.history.location.item.kaath,
      daura: props.history.location.item.daura,
      lavgrahi_sankhya: props.history.location.item.lavgrahi_sankhya,
      mulyaabhibridi_kar: props.history.location.item.mulyaabhibridi_kar,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
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
      id,
      arthik_barsa,
      mahina,
      kaath,
      daura,
      lavgrahi_sankhya,
      mulyaabhibridi_kar,
      created_by,
    } = this.state;
    const payload = {
      banpaidawar: {
        data: {
          arthik_barsa: arthik_barsa,
          mahina: mahina,
          kaath: kaath,
          daura: daura,
          lavgrahi_sankhya: lavgrahi_sankhya,
          mulyaabhibridi_kar: mulyaabhibridi_kar,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };

    this.props.onUpdate(payload, id);
  }

  render() {
    const { title } = this.props;
    const {
      arthik_barsa,
      mahina,
      kaath,
      daura,
      lavgrahi_sankhya,
      mulyaabhibridi_kar,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ वनपैदावार ओसारपसार सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
          <div className="section" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शंशोधन गर्नुहोस ।"
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
