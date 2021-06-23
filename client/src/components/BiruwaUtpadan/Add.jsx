import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, DatePicker, Dropdown } from "../../components";
import { equals } from "ramda";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arthik_barsa: "",
      narsari_sankhya: "",
      barga: "",
      laxya: "",
      pragati: "",
      brixyaropan: "",
      remarks: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {
      arthik_barsa,
      narsari_sankhya,
      barga,
      laxya,
      pragati,
      brixyaropan,
      remarks,
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
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
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
    } = this.state;

    return (
      <React.Fragment>
        <div className="card p-5 border-5">
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
              value={narsari_sankhya}
              direction="vertical"
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
              value={laxya}
              direction="vertical"
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
