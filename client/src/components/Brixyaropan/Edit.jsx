import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.brixyaropan_id,
      brixyaropan_thegana: props.history.location.item.brixyaropan_thegana,
      brixyaropan_kisim: props.history.location.item.brixyaropan_kisim,
      brixyaropan_laxya: props.history.location.item.brixyaropan_laxya,
      brixyaropan_prajati: props.history.location.item.brixyaropan_prajati,
      brixyaropan_pragati: props.history.location.item.brixyaropan_pragati,
      brixyaropan_sankhya: props.history.location.item.brixyaropan_sankhya,
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
        brixyaropan_thegana,
        brixyaropan_kisim,
        brixyaropan_laxya,
        brixyaropan_prajati,
        brixyaropan_pragati,
        brixyaropan_sankhya,
        created_by,
    } = this.state;
    const payload = {
      brixyaropan: {
        data: {
          brixyaropan_thegana: brixyaropan_thegana,
          brixyaropan_kisim: brixyaropan_kisim,
          brixyaropan_laxya: brixyaropan_laxya,
          brixyaropan_prajati: brixyaropan_prajati,
          brixyaropan_pragati: brixyaropan_pragati,
          brixyaropan_sankhya: brixyaropan_sankhya,
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
        brixyaropan_thegana,
        brixyaropan_kisim,
        brixyaropan_laxya,
        brixyaropan_prajati,
        brixyaropan_pragati,
        brixyaropan_sankhya,
        showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
        <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ वृक्षरोपण सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
              title="वृक्षरोपण ठेगाना"
              value={brixyaropan_thegana}
              direction="vertical"
              onChange={(e) => this.setState({ brixyaropan_thegana: e })}
            />

            <Input
              className="mb-4"
              title="वृक्षरोपण किसिम"
              direction="vertical"
              value={brixyaropan_kisim}
              onChange={(e) => this.setState({ brixyaropan_kisim: e })}
            />
             <Input
              className="mb-4"
              title="लक्ष"
              value={brixyaropan_laxya}
              direction="vertical"
              onChange={(e) => this.setState({ brixyaropan_laxya: e })}
            />
            <Input
              className="mb-4"
              title="वृक्षरोपण प्रजाति"
              value={brixyaropan_prajati}
              direction="vertical"
              onChange={(e) => this.setState({ brixyaropan_prajati: e })}
            />

            <Input
              className="mb-4"
              title="प्रगति"
              direction="vertical"
              value={brixyaropan_pragati}
              onChange={(e) => this.setState({ brixyaropan_pragati: e })}
            />

            <Input
              className="mb-4"
              title="वृक्षरोपण संख्या"
              value={brixyaropan_sankhya}
              direction="vertical"
              onChange={(e) => this.setState({ brixyaropan_sankhya: e })}
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
