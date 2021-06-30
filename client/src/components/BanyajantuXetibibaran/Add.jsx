import React, { Component } from "react";
import { Button, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pidit_name: "",
      pidit_address: "",
      jagga_bibaran: "",
      nagarikta_no: "",
      upabhoktasamiti_name: "",
      xetigarne_animal: "",
      xeti_miti: "",
      pasudhan_ghargoth: "",
      man_injury: "",
      mag_rakam: "",
      samitiko_mulyankan_rakam: "",
      vuktani_rakam: "",
      remarks: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
      pidit_name,
      pidit_address,
      jagga_bibaran,
      nagarikta_no,
      upabhoktasamiti_name,
      xetigarne_animal,
      xeti_miti,
      pasudhan_ghargoth,
      man_injury,
      mag_rakam,
      samitiko_mulyankan_rakam,
      vuktani_rakam,
      remarks,
    } = this.state;
    const payload = {
      banyajantuxeti: {
        data: {
          pidit_name: pidit_name,
          pidit_address: pidit_address,
          jagga_bibaran: jagga_bibaran,
          nagarikta_no: nagarikta_no,
          upabhoktasamiti_name: upabhoktasamiti_name,
          xetigarne_animal: xetigarne_animal,
          xeti_miti: xeti_miti,
          pasudhan_ghargoth: pasudhan_ghargoth,
          man_injury: man_injury,
          mag_rakam: mag_rakam,
          samitiko_mulyankan_rakam: samitiko_mulyankan_rakam,
          vuktani_rakam: vuktani_rakam,
          remarks: remarks,
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  handleDate(e) {
    this.setState({ xeti_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      pidit_name,
      pidit_address,
      jagga_bibaran,
      nagarikta_no,
      upabhoktasamiti_name,
      xetigarne_animal,
      xeti_miti,
      pasudhan_ghargoth,
      man_injury,
      mag_rakam,
      samitiko_mulyankan_rakam,
      vuktani_rakam,
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
              title="पिडितको नाम"
              value={pidit_name}
              direction="vertical"
              onChange={(e) => this.setState({ pidit_name: e })}
            />

            <Input
              className="mb-4"
              title="पिडितको ठेगाना"
              direction="vertical"
              value={pidit_address}
              onChange={(e) => this.setState({ pidit_address: e })}
            />
            <Input
              className="mb-4"
              title="जग्गाको विवरण"
              value={jagga_bibaran}
              direction="vertical"
              onChange={(e) => this.setState({ jagga_bibaran: e })}
            />

            <Input
              className="mb-4"
              title="नागरिकता न."
              direction="vertical"
              value={nagarikta_no}
              onChange={(e) => this.setState({ nagarikta_no: e })}
            />

            <Input
              className="mb-4"
              title="सम्बन्धी उपभोक्ता समितिको नाम"
              value={upabhoktasamiti_name}
              direction="vertical"
              onChange={(e) => this.setState({ upabhoktasamiti_name: e })}
            />
            <Input
              className="mb-4"
              title="क्षती गर्ने वन्यजन्तुको नाम"
              value={xetigarne_animal}
              direction="vertical"
              onChange={(e) => this.setState({ xetigarne_animal: e })}
            />
            <span className="dsl-b18">क्षतिको मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={xeti_miti}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="पशुधन/घरगोठ"
              value={pasudhan_ghargoth}
              direction="vertical"
              onChange={(e) => this.setState({ pasudhan_ghargoth: e })}
            />
            <Input
              className="mb-4"
              title="मानविय क्षति"
              value={man_injury}
              direction="vertical"
              onChange={(e) => this.setState({ man_injury: e })}
            />
            <Input
              className="mb-4"
              title="माग रकम"
              value={mag_rakam}
              direction="vertical"
              onChange={(e) => this.setState({ mag_rakam: e })}
            />
            <Input
              className="mb-4"
              title="समितिको मूल्यांकन रकम(रु)"
              value={samitiko_mulyankan_rakam}
              direction="vertical"
              onChange={(e) => this.setState({ samitiko_mulyankan_rakam: e })}
            />
            <Input
              className="mb-4"
              title="भुक्तानि रकम(रु)"
              value={vuktani_rakam}
              direction="vertical"
              onChange={(e) => this.setState({ vuktani_rakam: e })}
            />
            <Input
              className="mb-4"
              title="कैफियत	"
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
