import React, { Component } from "react";
import { Button, Input } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badhi_aayeko_sthan: "",
      manab_ghaite: "",
      manab_mareko: "",
      uddar_sankhya: "",
      badhi_aayeko_miti: "",
      xeti_bibaran: "",
      banyajantu_mareko: "",
      botbiruwa_xeti: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
        badhi_aayeko_sthan,
        manab_ghaite,
        manab_mareko,
        uddar_sankhya,
        badhi_aayeko_miti,
        xeti_bibaran,
        banyajantu_mareko,
        botbiruwa_xeti,
    } = this.state;
    const payload = {
        badhibibaran: {
        data: {
          badhi_aayeko_sthan: badhi_aayeko_sthan,
          manab_ghaite: manab_ghaite,
          manab_mareko: manab_mareko,
          uddar_sankhya: uddar_sankhya,
          badhi_aayeko_miti: badhi_aayeko_miti,
          xeti_bibaran: xeti_bibaran,
          banyajantu_mareko: banyajantu_mareko,
          botbiruwa_xeti: botbiruwa_xeti,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleDate(e) {
    this.setState({ badhi_aayeko_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
        badhi_aayeko_sthan,
        manab_ghaite,
        manab_mareko,
        uddar_sankhya,
        badhi_aayeko_miti,
        xeti_bibaran,
        banyajantu_mareko,
        botbiruwa_xeti,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <span className="dsl-b18">बाढी आएको मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={badhi_aayeko_miti}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="बाढी आएको स्थान"
              value={badhi_aayeko_sthan}
              direction="vertical"
              onChange={(e) => this.setState({ badhi_aayeko_sthan: e })}
            />

            <Input
              className="mb-4"
              title="उद्दार संख्या	"
              direction="vertical"
              value={uddar_sankhya}
              onChange={(e) => this.setState({ uddar_sankhya: e })}
            />
            <Input
              className="mb-4"
              title="घाइते मानव संख्या"
              value={manab_ghaite}
              direction="vertical"
              onChange={(e) => this.setState({ manab_ghaite: e })}
            />

            <Input
              className="mb-4"
              title="मृत मानव संख्या"
              direction="vertical"
              value={manab_mareko}
              onChange={(e) => this.setState({ manab_mareko: e })}
            />

            <Input
              className="mb-4"
              title="क्षेति विवरण"
              value={xeti_bibaran}
              direction="vertical"
              onChange={(e) => this.setState({ xeti_bibaran: e })}
            />
            <Input
              className="mb-4"
              title="मर्ने वन्यजन्तु संख्या"
              value={banyajantu_mareko}
              direction="vertical"
              onChange={(e) => this.setState({ banyajantu_mareko: e })}
            />
            
            <Input
              className="mb-4"
              title="बोटविरुवा क्षेति संख्या"
              value={botbiruwa_xeti}
              direction="vertical"
              onChange={(e) => this.setState({ botbiruwa_xeti: e })}
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
