import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle_type: "",
      vehicle_no: "",
      engine_no: "",
      chasis_no: "",
      acquired_source: "",
      acquired_date: "",
      acquired_price: "",
      manufacturer_country: "",
      manufacturer_comp: "",
      model_name: "",
      manufactured_date: "",
      remarks: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
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
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
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

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ सवारी साधन सम्बन्धी विवरण गर्न चाहनुहुन्छ ?"
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
                name="शेभ गर्नुहोस ।"
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
