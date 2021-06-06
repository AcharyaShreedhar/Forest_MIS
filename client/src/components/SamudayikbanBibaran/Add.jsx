import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "../../components";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regno: "",
      name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    const {} = this.props;
    const { name, regno } = this.state;

    return (
      <React.Fragment>
        <div className="border-5">
          <div className="detail-content">
            <div className="d-flex justify-content-between mb-3">
              <span className="dsl-b22 bold">Add Samudayikban</span>
            </div>
            <Input
              className="mb-3"
              title="Registration no"
              value={regno}
              placeholder="Type here..."
              direction="vertical"
              onChange={(e) => this.setState({ regno: e })}
            />

            <Input
              title="Name"
              placeholder="Type here..."
              direction="vertical"
              as="textarea"
              value={name}
              onChange={(e) => this.setState({ name: e })}
            />
          </div>
        </div>

        <div className="mt-2 border-5">
          <div className="d-flex justify-content-end align-items-center">
            <Button
              className="mr-3"
              name="Save"
              onClick={this.handleSubmit.bind(this, 0)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Add.propTypes = {
  regno: PropTypes.number,
};

Add.defaultProps = {
  regno: 1,
};

export default Add;
