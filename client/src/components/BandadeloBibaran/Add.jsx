import React, { Component } from "react";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { banList } from "../../services/config";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandadelo_address: "",
      ban_type: 1,
      ban_prajati: "",
      xeti_area: "",
      niyantran_prayas: "",
      niyantran_karta: "",
      sahabhagi_mahila: "",
      sahabhagi_purus: "",
      bandadelo_miti: "",
      man_injured: "",
      man_dead: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleBanType = this.handleBanType.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBanType(e) {
    this.setState({ ban_type: e[0] });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ bandadelo_miti: e });
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
      man_injured,
      man_dead,
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
          man_injured: man_injured,
          man_dead: man_dead,
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
      bandadelo_address,
      ban_type,
      ban_prajati,
      xeti_area,
      niyantran_prayas,
      niyantran_karta,
      sahabhagi_mahila,
      sahabhagi_purus,
      bandadelo_miti,
      man_injured,
      man_dead,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ वनडढेलो सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <div className="panel mb-4 space">
              <Input
                className="w-30"
                title="वन डढेलो लागेको ठेगाना :"
                value={bandadelo_address}
                direction="vertical"
                onChange={(e) => this.setState({ bandadelo_address: e })}
              />
              <div className="w-30">
                <Dropdown
                  title="वनको किसिम :"
                  direction="vertical"
                  defaultIds={[ban_type]}
                  data={banList}
                  getValue={(banList) => banList["value"]}
                  onChange={(e) => this.handleBanType(e)}
                  value={ban_type}
                />
              </div>
              <Input
                className="w-30"
                title="वनको मुख्य प्रजाति :"
                value={ban_prajati}
                direction="vertical"
                onChange={(e) => this.setState({ ban_prajati: e })}
              />
            </div>
            <div className="panel mb-4 space">
              <Input
                className="w-30"
                title="क्षति क्षेत्रफल (हे.):"
                direction="vertical"
                value={xeti_area}
                onChange={(e) => this.setState({ xeti_area: e })}
              />
              <Input
                className="w-30"
                title="समूहबाट नियन्त्रणका लागि भएका प्रयासहरु :"
                value={niyantran_prayas}
                direction="vertical"
                onChange={(e) => this.setState({ niyantran_prayas: e })}
              />
              <Input
                className="w-30"
                title="डिभिजन वन कार्यलय/प्रहरी/अन्य क्षेत्रबाट भएका प्रयासहरु :"
                value={niyantran_karta}
                direction="vertical"
                onChange={(e) => this.setState({ niyantran_karta: e })}
              />
            </div>
            <div className="panel mb-4 space">
              <Input
                className="w-30"
                title="नियन्त्रणमा सहभागि महिला संख्या :"
                value={sahabhagi_mahila}
                direction="vertical"
                onChange={(e) => this.setState({ sahabhagi_mahila: e })}
              />
              <Input
                className="w-30"
                title="नियन्त्रणमा सहभागि पुरुष संख्या :"
                value={sahabhagi_purus}
                direction="vertical"
                onChange={(e) => this.setState({ sahabhagi_purus: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">डढेलो लागेको मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={bandadelo_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="घाईते भएका मानिसको संख्या :"
                value={man_injured}
                direction="vertical"
                onChange={(e) => this.setState({ man_injured: e })}
              />
              <Input
                className="w-30"
                title="मृत्यु भएका मानिसको संख्या :"
                value={man_dead}
                direction="vertical"
                onChange={(e) => this.setState({ man_dead: e })}
              />
              <div className="w-30" />
            </div>
          </div>
          <div className="section" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
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
