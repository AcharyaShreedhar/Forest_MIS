import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { banList } from "../../services/config";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.bandadelo_bibaran_id,
      bandadelo_address: props.history.location.item.bandadelo_address,
      ban_type: props.history.location.item.ban_type,
      ban_prajati: props.history.location.item.ban_prajati,
      xeti_area: props.history.location.item.xeti_area,
      niyantran_prayas: props.history.location.item.niyantran_prayas,
      niyantran_karta: props.history.location.item.niyantran_karta,
      sahabhagi_mahila: props.history.location.item.sahabhagi_mahila,
      sahabhagi_purus: props.history.location.item.sahabhagi_purus,
      bandadelo_miti: props.history.location.item.bandadelo_miti,
      man_injured: props.history.location.item.man_injured,
      man_dead: props.history.location.item.man_dead,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
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
      id,
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
      created_by,
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
          office_id: this.props.user.office_id,
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

    let disabled =
      isEmpty(bandadelo_address) ||
      isEmpty(ban_type) ||
      isEmpty(ban_prajati) ||
      isEmpty(xeti_area) ||
      isEmpty(niyantran_prayas) ||
      isEmpty(niyantran_karta) ||
      isEmpty(sahabhagi_mahila) ||
      isEmpty(sahabhagi_purus) ||
      isEmpty(bandadelo_miti) ||
      isEmpty(man_injured) ||
      isEmpty(man_dead)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ वनडढेलो सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                type="number"
                value={sahabhagi_mahila}
                direction="vertical"
                onChange={(e) => this.setState({ sahabhagi_mahila: e })}
              />
              <Input
                className="w-30"
                title="नियन्त्रणमा सहभागि पुरुष संख्या :"
                type="number"
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
                type="number"
                value={man_injured}
                direction="vertical"
                onChange={(e) => this.setState({ man_injured: e })}
              />
              <Input
                className="w-30"
                title="मृत्यु भएका मानिसको संख्या :"
                type="number"
                value={man_dead}
                direction="vertical"
                onChange={(e) => this.setState({ man_dead: e })}
              />
              <div className="w-30" />
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शंशोधन गर्नुहोस ।"
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

export default Edit;
