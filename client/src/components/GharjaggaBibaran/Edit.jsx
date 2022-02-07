import React, { Component } from "react";
import { Button, Input, Dropdown, ConfirmationDialoge } from "../../components";
import { equals, isEmpty } from "ramda";

const assetsType = [
  { id: 1, value: "घर" },
  { id: 2, value: "जग्गा" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.asset_id,
      asset_type: equals(props.history.location.item.asset_type, "घर") ? 1 : 2,
      asset_loc: props.history.location.item.asset_loc,
      kitta_no: props.history.location.item.kitta_no,
      home_area: props.history.location.item.home_area,
      land_area: props.history.location.item.land_area,
      unit: props.history.location.item.unit,
      remarks: props.history.location.item.remarks,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
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
      id,
      asset_type,
      asset_loc,
      kitta_no,
      home_area,
      land_area,
      unit,
      remarks,
      created_by,
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
          office_id: this.props.user.office_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }
  handleAssetType(e) {
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
    let disabled =
      isEmpty(asset_type) ||
      isEmpty(asset_loc) ||
      isEmpty(kitta_no) ||
      isEmpty(home_area) ||
      isEmpty(land_area) ||
      isEmpty(unit) ||
      isEmpty(remarks)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ घर जग्गा सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="किसिम (घर, जग्गा) :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[asset_type]}
                  data={assetsType}
                  getValue={(assetsType) => assetsType["value"]}
                  onChange={(e) => this.handleAssetType(e)}
                  value={asset_type}
                />
              </div>
              <Input
                className="w-30"
                title="घर/जग्गा रहेको स्थान :"
                value={asset_loc}
                direction="vertical"
                onChange={(e) => this.setState({ asset_loc: e })}
              />
              <Input
                className="w-30"
                title="कित्ता नंवर :"
                direction="vertical"
                value={kitta_no}
                onChange={(e) => this.setState({ kitta_no: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="घरले चर्चेको क्षेत्रफल :"
                value={home_area}
                direction="vertical"
                onChange={(e) => this.setState({ home_area: e })}
              />
              <Input
                className="w-30"
                title="जग्गाको क्षेत्रफल :"
                direction="vertical"
                as="textarea"
                value={land_area}
                onChange={(e) => this.setState({ land_area: e })}
              />
              <Input
                className="w-30"
                title="इकाई :"
                value={unit}
                direction="vertical"
                onChange={(e) => this.setState({ unit: e })}
              />
            </div>
            <Input
              className="w-30"
              title="कैफियत :"
              value={remarks}
              direction="vertical"
              onChange={(e) => this.setState({ remarks: e })}
            />
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
