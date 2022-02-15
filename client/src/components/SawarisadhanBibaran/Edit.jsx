import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item?.vehicle_id,
      vehicle_type: props.history.location.item?.vehicle_type,
      vehicle_no: props.history.location.item?.vehicle_no,
      engine_no: props.history.location.item?.engine_no,
      chasis_no: props.history.location.item?.chasis_no,
      acquired_source: props.history.location.item?.acquired_source,
      acquired_date: props.history.location.item?.acquired_date,
      acquired_price: props.history.location.item?.acquired_price,
      manufacturer_country: props.history.location.item?.manufacturer_country,
      manufacturer_comp: props.history.location.item?.manufacturer_comp,
      model_name: props.history.location.item?.model_name,
      manufactured_date: props.history.location.item?.manufactured_date,
      remarks: props.history.location.item?.remarks,
      dist_id: props.history.location.item?.dist_id,
      office_id: props.history.location.item?.office_id,
      created_by: props.history.location.item?.created_by,
      updated_by: props.history.location.item?.updated_by,
      showDialog: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleDate(e, type) {
    switch (type) {
      case "prapti": {
        this.setState({ acquired_date: e });
        break;
      }
      case "nirman": {
        this.setState({ manufactured_date: e });
        break;
      }
      default:
        break;
    }
  }
  handleSubmit() {
    const {
      id,
      vehicle_type,
      vehicle_no,
      engine_no,
      chasis_no,
      acquired_source,
      acquired_date,
      acquired_price,
      manufacturer_comp,
      manufacturer_country,
      model_name,
      manufactured_date,
      remarks,
      created_by,
    } = this.state;
    const payload = {
      vehicles: {
        data: {
          vehicle_type: vehicle_type,
          vehicle_no: vehicle_no,
          engine_no: engine_no,
          chasis_no: chasis_no,
          acquired_source: acquired_source,
          acquired_price: acquired_price,
          acquired_date: acquired_date,
          manufacturer_country: manufacturer_country,
          manufacturer_comp: manufacturer_comp,
          model_name: model_name,
          manufactured_date: manufactured_date,
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

  render() {
    const { title } = this.props;
    const {
      vehicle_type,
      vehicle_no,
      engine_no,
      chasis_no,
      acquired_source,
      acquired_date,
      acquired_price,
      manufacturer_comp,
      manufacturer_country,
      model_name,
      manufactured_date,
      remarks,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(vehicle_type) ||
      isEmpty(vehicle_no) ||
      isEmpty(engine_no) ||
      isEmpty(chasis_no) ||
      isEmpty(acquired_source) ||
      isEmpty(acquired_date) ||
      isEmpty(acquired_price) ||
      isEmpty(manufacturer_comp) ||
      isEmpty(manufacturer_country) ||
      isEmpty(model_name) ||
      isEmpty(manufactured_date) ||
      isEmpty(remarks)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ सवारी साधन सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                title="सवारी साधनको प्रकार :"
                value={vehicle_type}
                direction="vertical"
                onChange={(e) => this.setState({ vehicle_type: e })}
              />
              <Input
                className="w-30"
                title="सवारी नम्वर :"
                direction="vertical"
                value={vehicle_no}
                onChange={(e) => this.setState({ vehicle_no: e })}
              />
              <Input
                className="w-30"
                title="इन्जिन नं. :"
                value={engine_no}
                direction="vertical"
                onChange={(e) => this.setState({ engine_no: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="च्यासिस नं. :"
                direction="vertical"
                value={chasis_no}
                onChange={(e) => this.setState({ chasis_no: e })}
              />
              <Input
                className="w-30"
                title="मोडेलको नाम :"
                direction="vertical"
                value={model_name}
                onChange={(e) => this.setState({ model_name: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">प्राप्ति मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={acquired_date}
                  onChange={(e) => this.handleDate(e, "prapti")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="निर्माता देश :"
                value={manufacturer_country}
                direction="vertical"
                onChange={(e) => this.setState({ manufacturer_country: e })}
              />
              <Input
                className="w-30"
                title="निर्माता कम्पनी :"
                value={manufacturer_comp}
                direction="vertical"
                onChange={(e) => this.setState({ manufacturer_comp: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">निर्माण वर्ष :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={manufactured_date}
                  onChange={(e) => this.handleDate(e, "nirman")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="प्राप्ति स्रोत :"
                value={acquired_source}
                direction="vertical"
                onChange={(e) => this.setState({ acquired_source: e })}
              />
              <Input
                className="w-30"
                title="प्राप्ति मूल्य :"
                direction="vertical"
                value={acquired_price}
                onChange={(e) => this.setState({ acquired_price: e })}
              />
              <Input
                className="w-30"
                title="कैफियत (अवस्था) :"
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
