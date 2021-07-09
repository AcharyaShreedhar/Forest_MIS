import React, { Component } from "react";
import { Button, Input, Dropdown, ConfirmationDialoge } from "../../components";
import { equals } from "ramda";

const assetsType = [
  { id: 1, value: "घर" },
  { id: 2, value: "जग्गा" },
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset_type: "",
      asset_loc: "",
      kitta_no: "",
      home_area: "",
      land_area: "",
      unit: "",
      remarks: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAssetType = this.handleAssetType.bind(this);
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
      asset_type,
      asset_loc,
      kitta_no,
      home_area,
      land_area,
      unit,
      remarks,
    } = this.state;
    const payload = {
      assets: {
        data: {
          asset_type: equals(asset_type, 1) ? "घर" : "जग्गा",
          asset_loc: asset_loc,
          kitta_no: kitta_no,
          home_area: home_area,
          land_area: land_area,
          unit: unit,
          remarks: remarks,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleAssetType(e) {
    console.log("message", e);
    this.setState({ asset_type: e[0] });
  }

  render() {
    const { title } = this.props;
    const {
      asset_type,
      asset_loc,
      kitta_no,
      home_area,
      land_area,
      unit,
      remarks,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
        <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ घर जग्गा सम्बन्धी विवरण गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <Dropdown
              className="dropdownlabel mb-4"
              title="किसिम (घर, जग्गा, सवारी साधानहरु)"
              direction="vertical"
              width="fit-content"
              defaultIds={[asset_type]}
              data={assetsType}
              getValue={(assetsType) => assetsType["value"]}
              onChange={(e) => this.handleAssetType(e)}
              value={asset_type}
            />
            <Input
              className="mb-4"
              title="घर/जग्गा रहेको स्थान"
              value={asset_loc}
              direction="vertical"
              onChange={(e) => this.setState({ asset_loc: e })}
            />

            <Input
              className="mb-4"
              title="कित्ता नंवर
              "
              direction="vertical"
              value={kitta_no}
              onChange={(e) => this.setState({ kitta_no: e })}
            />
            <Input
              className="mb-4"
              title="घरले चर्चेको क्षेत्रफल
              "
              value={home_area}
              direction="vertical"
              onChange={(e) => this.setState({ home_area: e })}
            />

            <Input
              className="mb-4"
              title="जग्गाको क्षेत्रफल"
              direction="vertical"
              as="textarea"
              value={land_area}
              onChange={(e) => this.setState({ land_area: e })}
            />

            <Input
              className="mb-4"
              title="इकाई"
              value={unit}
              direction="vertical"
              onChange={(e) => this.setState({ unit: e })}
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
