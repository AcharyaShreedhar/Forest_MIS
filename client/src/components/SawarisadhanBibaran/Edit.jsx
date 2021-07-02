import React, { Component } from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { Button, Input } from "../../components";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.vehicle_id,
      vehicle_type: props.history.location.item.vehicle_type,
      vehicle_no: props.history.location.item.vehicle_no,
      engine_no: props.history.location.item.engine_no,
      chasis_no: props.history.location.item.chasis_no,
      acquired_source: props.history.location.item.acquired_source,
      acquired_date: props.history.location.item.acquired_date,
      acquired_price: props.history.location.item.acquired_price,
      manufacturer_country: props.history.location.item.manufacturer_country,
      manufacturer_comp: props.history.location.item.manufacturer_comp,
      model_name: props.history.location.item.model_name,
      manufactured_date: props.history.location.item.manufactured_date,
      remarks: props.history.location.item.remarks,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }
  handleDate(e) {
    this.setState({ acquired_date: e });
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
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <Input
              className="mb-4"
              title="सवारी साधनको प्रकार"
              value={vehicle_type}
              direction="vertical"
              onChange={(e) => this.setState({ vehicle_type: e })}
            />

            <Input
              className="mb-4"
              title="सवारी नम्वर
              "
              direction="vertical"
              value={vehicle_no}
              onChange={(e) => this.setState({ vehicle_no: e })}
            />
            <Input
              className="mb-4"
              title="इन्जिन नं.
              "
              value={engine_no}
              direction="vertical"
              onChange={(e) => this.setState({ engine_no: e })}
            />

            <Input
              className="mb-4"
              title="च्यासिस नं."
              direction="vertical"
              value={chasis_no}
              onChange={(e) => this.setState({ chasis_no: e })}
            />

            <Input
              className="mb-4"
              title="प्राप्ति स्रोत"
              value={acquired_source}
              direction="vertical"
              onChange={(e) => this.setState({ acquired_source: e })}
            />
            <span className="dsl-b18">प्राप्ति मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={acquired_date}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="प्राप्ति मूल्य"
              direction="vertical"
              value={acquired_price}
              onChange={(e) => this.setState({ acquired_price: e })}
            />

            <Input
              className="mb-4"
              title="निर्माता देश"
              value={manufacturer_country}
              direction="vertical"
              onChange={(e) => this.setState({ manufacturer_country: e })}
            />

            <Input
              className="mb-4"
              title="निर्माता कम्पनी"
              value={manufacturer_comp}
              direction="vertical"
              onChange={(e) => this.setState({ manufacturer_comp: e })}
            />
            <Input
              className="mb-4"
              title="मोडेलको नाम"
              direction="vertical"
              value={model_name}
              onChange={(e) => this.setState({ model_name: e })}
            />

            <Input
              className="mb-4"
              title="निर्माण वर्ष"
              value={manufactured_date}
              direction="vertical"
              onChange={(e) => this.setState({ manufactured_date: e })}
            />

            <Input
              className="mb-4"
              title="कैफियत (अवस्था)"
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
                onClick={this.handleSubmit.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit;
