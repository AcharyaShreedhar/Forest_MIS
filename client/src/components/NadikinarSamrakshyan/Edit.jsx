import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.nadikinarsamrakshyan_id,  
      dist_id: props.history.location.item.dist_id,
      sthan:  props.history.location.item.sthan,
      qty: props.history.location.item.qty,
      karyakram_miti:  props.history.location.item.karyakram_miti,
      conservation_area:  props.history.location.item.conservation_area,
      affected_area:  props.history.location.item.affected_area,
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
    const { id,sthan, qty, karyakram_miti, conservation_area, affected_area, created_by } =
      this.state;
    const payload = {
      nadikinar: {
        data: {
          sthan: sthan,
          qty: qty,
          karyakram_miti: karyakram_miti,
          conservation_area: conservation_area,
          affected_area: affected_area,
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
      sthan,
      qty,
      karyakram_miti,
      conservation_area,
      affected_area,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ नदिकिनार संरक्षण सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>

            <Input
              className="mb-4"
              title="स्थान"
              value={sthan}
              direction="vertical"
              onChange={(e) => this.setState({ sthan: e })}
            />

            <Input
              className="mb-4"
              title="मात्रा"
              direction="vertical"
              value={qty}
              onChange={(e) => this.setState({ qty: e })}
            />
            <Input
              className="mb-4"
              title="कार्यक्रम मिति"
              value={karyakram_miti}
              direction="vertical"
              onChange={(e) => this.setState({ karyakram_miti: e })}
            />
            <Input
              className="mb-4"
              title="संरक्षण क्षेत्र"
              value={conservation_area}
              direction="vertical"
              onChange={(e) => this.setState({ conservation_area: e })}
            />
            <Input
              className="mb-4"
              title="प्रभावित क्षेत्र"
              direction="vertical"
              value={affected_area}
              onChange={(e) => this.setState({ affected_area: e })}
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

export default Edit;
