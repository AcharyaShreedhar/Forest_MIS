import React, { Component } from "react";
import { Button, Input } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandadelo_address: "",
      ban_type: "",
      ban_prajati: "",
      xeti_area: "",
      niyantran_prayas: "",
      niyantran_karta: "",
      sahabhagi_mahila: "",
      sahabhagi_purus: "",
      bandadelo_miti: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
      bandadelo_address,
      ban_type,
      ban_prajati,
      xeti_area,
      niyantran_prayas,
      niyantran_karta,
      sahabhagi_mahila,
      sahabhagi_purus,
      bandadelo_miti,
    } = this.state;
    const payload = {
      bandadelo: {
        data: {
          bandadelo_address: bandadelo_address,
          ban_type: ban_type,
          ban_prajati: ban_prajati,
          xeti_area: xeti_area,
          niyantran_prayas: niyantran_prayas,
          niyantran_karta: niyantran_karta,
          sahabhagi_mahila: sahabhagi_mahila,
          sahabhagi_purus: sahabhagi_purus,
          bandadelo_miti: bandadelo_miti,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleDate(e) {
    this.setState({ bandadelo_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      bandadelo_address,
      ban_type,
      ban_prajati,
      xeti_area,
      niyantran_prayas,
      niyantran_karta,
      sahabhagi_mahila,
      sahabhagi_purus,
      bandadelo_miti,
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
              title="वन डढेलो लागेको ठेगाना"
              value={bandadelo_address}
              direction="vertical"
              onChange={(e) => this.setState({ bandadelo_address: e })}
            />

            <Input
              className="mb-4"
              title="राष्ट्रिय/सामुदायिक वन/धार्मिक वन"
              direction="vertical"
              value={ban_type}
              onChange={(e) => this.setState({ ban_type: e })}
            />
            <Input
              className="mb-4"
              title="वनको मुख्य प्रजाति"
              value={ban_prajati}
              direction="vertical"
              onChange={(e) => this.setState({ ban_prajati: e })}
            />

            <Input
              className="mb-4"
              title="क्षति क्षेत्रफल (हे.)"
              direction="vertical"
              value={xeti_area}
              onChange={(e) => this.setState({ xeti_area: e })}
            />

            <Input
              className="mb-4"
              title="समूहबाट नियन्त्रणका लागि भएका प्रयासहरु"
              value={niyantran_prayas}
              direction="vertical"
              onChange={(e) => this.setState({ niyantran_prayas: e })}
            />
            <Input
              className="mb-4"
              title="समूह तथा डिभिजन वन कार्यलय/प्रहरी/अन्य क्षेत्रबाट भएका प्रयासहरु"
              value={niyantran_karta}
              direction="vertical"
              onChange={(e) => this.setState({ niyantran_karta: e })}
            />
            <Input
              className="mb-4"
              title="नियन्त्रणमा सहभागि महिला संख्या"
              value={sahabhagi_mahila}
              direction="vertical"
              onChange={(e) => this.setState({ sahabhagi_mahila: e })}
            />
            <Input
              className="mb-4"
              title="नियन्त्रणमा सहभागि पुरुष संख्या"
              value={sahabhagi_purus}
              direction="vertical"
              onChange={(e) => this.setState({ sahabhagi_purus: e })}
            />
            <span className="dsl-b18">डढेलो लागेको मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={bandadelo_miti}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
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
