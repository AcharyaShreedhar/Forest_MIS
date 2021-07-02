import React, { Component } from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { Button, Input } from "../../components";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plot_type: "",
      prajati: "",
      area: "",
      location: "",
      established_date: "",
      status: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDate(e) {
    this.setState({ established_date: e });
  }
  handleSubmit() {
    const {
      plot_type,
      prajati,
      area,
      location,
      established_date,
      status,
    } = this.state;
    const payload = {
      plotbibaran: {
        data: {
          plot_type: plot_type,
          prajati: prajati,
          area: area,
          location: location,
          established_date: established_date,
          status: status,
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
      plot_type,
      prajati,
      area,
      location,
      established_date,
      status,
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
              title="प्लटको किसिम"
              value={plot_type}
              direction="vertical"
              onChange={(e) => this.setState({ plot_type: e })}
            />

            <Input
              className="mb-4"
              title="प्रजातिहरु
              "
              direction="vertical"
              value={prajati}
              onChange={(e) => this.setState({ prajati: e })}
            />
            <Input
              className="mb-4"
              title="क्षत्रफल
              "
              value={area}
              direction="vertical"
              onChange={(e) => this.setState({ area: e })}
            />

            <Input
              className="mb-4"
              title="ठेगाना"
              direction="vertical"
              value={location}
              onChange={(e) => this.setState({ location: e })}
            />

            <span className="dsl-b18">स्थापना मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={established_date}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />

            <Input
              className="mb-4"
              title="अवस्था"
              value={status}
              direction="vertical"
              onChange={(e) => this.setState({ status: e })}
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
