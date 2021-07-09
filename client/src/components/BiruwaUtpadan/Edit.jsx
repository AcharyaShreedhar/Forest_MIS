import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.biruwa_utpadan_id,
      arthik_barsa: props.history.location.item.arthik_barsa,
      narsari_sankhya: props.history.location.item.narsari_sankhya,
      barga: props.history.location.item.barga,
      laxya: props.history.location.item.laxya,
      pragati: props.history.location.item.pragati,
      brixyaropan: props.history.location.item.brixyaropan,
      remarks: props.history.location.item.remarks,
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
      narsari_sankhya,
      barga,
      laxya,
      pragati,
      brixyaropan,
      remarks,
      created_by,
      
    } = this.state;
    const payload = {
      biruwautpadan: {
        data: {
          arthik_barsa: arthik_barsa,
          narsari_sankhya: narsari_sankhya,
          barga: barga,
          laxya: laxya,
          pragati: pragati,
          brixyaropan: brixyaropan,
          remarks: remarks,
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
      narsari_sankhya,
      barga,
      laxya,
      pragati,
      brixyaropan,
      remarks,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
        <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ विरुवा उत्पादन सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
              title="आर्थिक वर्ष"
              value={arthik_barsa}
              direction="vertical"
              onChange={(e) => this.setState({ arthik_barsa: e })}
            />

            <Input
              className="mb-4"
              title="नर्सरी संख्या"
              direction="vertical"
              value={narsari_sankhya}
              onChange={(e) => this.setState({ narsari_sankhya: e })}
            />
            <Input
              className="mb-4"
              title="वर्ग"
              value={barga}
              direction="vertical"
              onChange={(e) => this.setState({ barga: e })}
            />

            <Input
              className="mb-4"
              title="लक्ष"
              direction="vertical"
              value={laxya}
              onChange={(e) => this.setState({ laxya: e })}
            />

            <Input
              className="mb-4"
              title="प्रगति"
              value={pragati}
              direction="vertical"
              onChange={(e) => this.setState({ pragati: e })}
            />
            <Input
              className="mb-4"
              title="वृक्षरोपण"
              value={brixyaropan}
              direction="vertical"
              onChange={(e) => this.setState({ brixyaropan: e })}
            />
            <Input
              className="mb-4"
              title="कैफियत"
              value={remarks}
              direction="vertical"
              onChange={(e) => this.setState({ remarks: e })}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Update"
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
