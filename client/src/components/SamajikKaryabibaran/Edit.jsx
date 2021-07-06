import React, { Component } from "react";
import { Button, Input, Dropdown } from "../../components";
import { equals } from "ramda";


class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.samajik_karyabibaran_id,
      samajik_karyabibaran: props.history.location.item.samajik_karyabibaran,
      samajik_ekai: props.history.location.item.samajik_ekai,
      samajik_parinam: props.history.location.item.samajik_parinam,
      samajik_bajetkharcha: props.history.location.item.samajik_bajetkharcha,
      ban_type: props.history.location.item.ban_type,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {
        id,
        samajik_karyabibaran,
        samajik_ekai,
        samajik_parinam,
        samajik_bajetkharcha,
        ban_type,
        created_by,
    } = this.state;
    const payload = {
      samajikkaryabibaran: {
        data: {
          samajik_karyabibaran: samajik_karyabibaran,
          samajik_ekai: samajik_ekai,
          samajik_parinam: samajik_parinam,
          samajik_bajetkharcha: samajik_bajetkharcha,
          ban_type: ban_type,
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
        samajik_karyabibaran,
        samajik_ekai,
        samajik_parinam,
        samajik_bajetkharcha,
        ban_type,
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
              title="सामाजिक कार्याविवरण"
              value={samajik_karyabibaran}
              direction="vertical"
              as="textarea"
              onChange={(e) => this.setState({ samajik_karyabibaran: e })}
            />
            <Input
              className="mb-4"
              title="ईकाइ"
              direction="vertical"
              value={samajik_ekai}
              onChange={(e) => this.setState({ samajik_ekai: e })}
            />

            <Input
              className="mb-4"
              title="परिणाम"
              direction="vertical"
              value={samajik_parinam}
              onChange={(e) => this.setState({ samajik_parinam: e })}
            />
            <Input
              className="mb-4"
              title="बजेटखर्च"
              value={samajik_bajetkharcha}
              direction="vertical"
              onChange={(e) => this.setState({ samajik_bajetkharcha: e })}
            />

            <Input
              className="mb-4"
              title="वनको किसिम"
              direction="vertical"
              value={ban_type}
              onChange={(e) => this.setState({ ban_type: e })}
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
