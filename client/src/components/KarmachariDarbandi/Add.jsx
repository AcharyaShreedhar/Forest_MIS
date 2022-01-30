import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      karyalaya: "",
      thegana: "",
      kayam_darbandi_sankhya: "",
      padpurti_sankhya: "",
      khali_sankhya: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
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
      post,
      karyalaya,
      thegana,
      kayam_darbandi_sankhya,
      padpurti_sankhya,
      khali_sankhya,
    } = this.state;
    const payload = {
      karmacharidarbandi: {
        data: {
          post: post,
          karyalaya: karyalaya,
          thegana: thegana,
          kayam_darbandi_sankhya: kayam_darbandi_sankhya,
          padpurti_sankhya: padpurti_sankhya,
          khali_sankhya: khali_sankhya,
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
      post,
      karyalaya,
      thegana,
      kayam_darbandi_sankhya,
      padpurti_sankhya,
      khali_sankhya,
      showDialog,
    } = this.state;
    let disabled =
      isEmpty(post) ||
      isEmpty(karyalaya) ||
      isEmpty(thegana) ||
      isEmpty(kayam_darbandi_sankhya) ||
      isEmpty(padpurti_sankhya) ||
      isEmpty(khali_sankhya)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ कर्मचारी दरबन्दी थप गर्न चाहनुहुन्छ ?"
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
                title="पद :"
                value={post}
                direction="vertical"
                onChange={(e) => this.setState({ post: e })}
              />
              <Input
                className="w-30"
                title="कार्यालय :"
                value={karyalaya}
                direction="vertical"
                onChange={(e) => this.setState({ karyalaya: e })}
              />
              <Input
                className="w-30"
                title="स्थान :"
                value={thegana}
                direction="vertical"
                onChange={(e) => this.setState({ thegana: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="कायम दरबन्दी संख्या :"
                direction="vertical"
                value={kayam_darbandi_sankhya}
                onChange={(e) => this.setState({ kayam_darbandi_sankhya: e })}
              />
              <Input
                className="w-30"
                title="पदपुर्ति संख्या :"
                value={padpurti_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ padpurti_sankhya: e })}
              />
              <Input
                className="w-30"
                title="खाली संख्या :"
                value={khali_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ khali_sankhya: e })}
              />
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
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

export default Add;
