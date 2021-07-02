import React, { Component } from "react";
import { Button, Input } from "../../components";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.karmachari_darbandi_id,
      post: props.history.location.item.post,
      kayam_darbandi_sankhya: props.history.location.item.kayam_darbandi_sankhya,
      padpurti_sankhya: props.history.location.item.padpurti_sankhya,
      khali_sankhya: props.history.location.item.khali_sankhya,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {
      id,
      post,
      kayam_darbandi_sankhya,
      padpurti_sankhya,
      khali_sankhya,
      created_by,
    } = this.state;
    const payload = {
        karmacharidarbandi: {
        data: {
          post: post,
          kayam_darbandi_sankhya: kayam_darbandi_sankhya,
          padpurti_sankhya: padpurti_sankhya,
          khali_sankhya: khali_sankhya,
          dist_id: this.props.user.dist_id,
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
      post,
      kayam_darbandi_sankhya,
      padpurti_sankhya,
      khali_sankhya,
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
              title="पद"
              value={post}
              direction="vertical"
              onChange={(e) => this.setState({ post: e })}
            />

            <Input
              className="mb-4"
              title="कायम दरबन्दी संख्या"
              direction="vertical"
              value={kayam_darbandi_sankhya}
              onChange={(e) => this.setState({ kayam_darbandi_sankhya: e })}
            />
             <Input
              className="mb-4"
              title="पदपुर्ति संख्या"
              value={padpurti_sankhya}
              direction="vertical"
              onChange={(e) => this.setState({ padpurti_sankhya: e })}
            />
            <Input
              className="mb-4"
              title="खाली संख्या"
              value={khali_sankhya}
              direction="vertical"
              onChange={(e) => this.setState({ khali_sankhya: e })}
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
