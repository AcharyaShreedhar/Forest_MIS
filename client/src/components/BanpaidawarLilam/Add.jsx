import React, { Component } from "react";

import { Button, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lilam_date: "",
      banpaidawar_type: "",
      unit: "",
      quantity: "",
      minimum_price: "",
      sakaar_price: "",
      remarks: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
      lilam_date,
      banpaidawar_type,
      unit,
      quantity,
      minimum_price,
      sakaar_price,
      remarks,
    } = this.state;
    const payload = {
      banpaidawarlilam: {
        data: {
          lilam_date: lilam_date,
          banpaidawar_type: banpaidawar_type,
          unit: unit,
          quantity: quantity,
          minimum_price: minimum_price,
          sakaar_price: sakaar_price,
          remarks: remarks,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
          },
      },
    };
    this.props.onSubmit(payload);
  }
  handleDate(e) {
    this.setState({ lilam_date: e });
  }

  render() {
    const { title } = this.props;
    const {
      lilam_date,
      banpaidawar_type,
      unit,
      quantity,
      minimum_price,
      sakaar_price,
      remarks,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>

            <span className="dsl-b18">लिलाम मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={lilam_date}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="वन पैदावारको किसिम"
              value={banpaidawar_type}
              direction="vertical"
              onChange={(e) => this.setState({ banpaidawar_type: e })}
            />

            <Input
              className="mb-4"
              title="इकाई"
              direction="vertical"
              value={unit}
              onChange={(e) => this.setState({ unit: e })}
            />
            <Input
              className="mb-4"
              title="परिमाण"
              value={quantity}
              direction="vertical"
              onChange={(e) => this.setState({ quantity: e })}
            />

            <Input
              className="mb-4"
              title="न्युनतम मूल्य (रु)"
              direction="vertical"
              value={minimum_price}
              onChange={(e) => this.setState({ minimum_price: e })}
            />

            <Input
              className="mb-4"
              title="सकार रकम (रु)"
              value={sakaar_price}
              direction="vertical"
              onChange={(e) => this.setState({ sakaar_price: e })}
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
                onClick={this.handleSubmit.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Add;
