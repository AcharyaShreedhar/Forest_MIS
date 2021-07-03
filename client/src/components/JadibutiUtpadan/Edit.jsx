import React, { Component } from "react";
import { Button, Input } from "../../components";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.jadibuti_id,
      dist_id: props.history.location.item.dist_id,
      jadibuti_thegana: props.history.location.item.jadibuti_thegana,
      jadibuti_kisim: props.history.location.item.jadibuti_kisim,
      jadibuti_prajati: props.history.location.item.jadibuti_prajati,
      jadibuti_laxya: props.history.location.item.jadibuti_laxya,
      jadibuti_pragati: props.history.location.item.jadibuti_pragati,
      jadibuti_sankhya: props.history.location.item.jadibuti_sankhya,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {
        id,
        jadibuti_thegana,
        jadibuti_kisim,
        jadibuti_prajati,
        jadibuti_laxya,
        jadibuti_pragati,
        jadibuti_sankhya,
        created_by,
    } = this.state;
    const payload = {
      jadibuti: {
        data: {
          jadibuti_thegana: jadibuti_thegana,
          jadibuti_kisim: jadibuti_kisim,
          jadibuti_prajati: jadibuti_prajati,
          jadibuti_laxya: jadibuti_laxya,
          jadibuti_pragati: jadibuti_pragati,
          jadibuti_sankhya: jadibuti_sankhya,
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
        jadibuti_thegana,
        jadibuti_kisim,
        jadibuti_prajati,
        jadibuti_laxya,
        jadibuti_pragati,
        jadibuti_sankhya,
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
              title="जडिबुटी उत्पादन ठेगाना"
              value={jadibuti_thegana}
              direction="vertical"
              onChange={(e) => this.setState({ jadibuti_thegana: e })}
            />

            <Input
              className="mb-4"
              title="जडिबुटीको किसिम"
              direction="vertical"
              value={jadibuti_kisim}
              onChange={(e) => this.setState({ jadibuti_kisim: e })}
            />
            <Input
              className="mb-4"
              title="जडिबुटीको प्रजाति"
              value={jadibuti_prajati}
              direction="vertical"
              onChange={(e) => this.setState({ jadibuti_prajati: e })}
            />
             <Input
              className="mb-4"
              title="लक्ष"
              value={jadibuti_laxya}
              direction="vertical"
              onChange={(e) => this.setState({ jadibuti_laxya: e })}
            />
            <Input
              className="mb-4"
              title="प्रगति"
              direction="vertical"
              value={jadibuti_pragati}
              onChange={(e) => this.setState({ jadibuti_pragati: e })}
            />

            <Input
              className="mb-4"
              title="जडिबुटीको संख्या"
              value={jadibuti_sankhya}
              direction="vertical"
              onChange={(e) => this.setState({ jadibuti_sankhya: e })}
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
