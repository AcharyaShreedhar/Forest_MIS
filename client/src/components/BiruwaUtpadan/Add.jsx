import React, { Component } from "react";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

const BiruwaTypes = [
  { id: 1, value: "बहुउदेशिय " },
  { id: 2, value: "जडिबुटी " },
  { id: 3, value: "वहुवर्षिय " },
];
const UtpadanMedium = [
  { id: 1, value: "डिभिजन बन कार्यालय " },
  { id: 2, value: "समुह मार्फत " },
  { id: 3, value: "निजी" },
  { id: 4, value: "खरिद" },
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arthik_barsa: "",
      biruwa_type: "",
      utpadan_medium: "",
      biruwa_sankhya: "",
      narsari_sankhya: "",
      barga: "",
      laxya: "",
      pragati: "",
      remarks: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleBiruwaTypes = this.handleBiruwaTypes.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUtpadanMedium = this.handleUtpadanMedium.bind(this);
  }
  handleBiruwaTypes(e) {
    this.setState({ biruwa_type: e[0] });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ arthik_barsa: e });
  }
  handleSubmit() {
    const {
      arthik_barsa,
      biruwa_type,
      utpadan_medium,
      biruwa_sankhya,
      narsari_sankhya,
      barga,
      laxya,
      pragati,
      remarks,
    } = this.state;
    const payload = {
      biruwautpadan: {
        data: {
          arthik_barsa: arthik_barsa,
          biruwa_type: biruwa_type,
          utpadan_medium: utpadan_medium,
          biruwa_sankhya: biruwa_sankhya,
          narsari_sankhya: narsari_sankhya,
          barga: barga,
          laxya: laxya,
          pragati: pragati,
          remarks: remarks,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
  handleUtpadanMedium(e) {
    this.setState({ utpadan_medium: e[0] });
  }

  render() {
    const { title } = this.props;
    const {
      arthik_barsa,
      biruwa_type,
      utpadan_medium,
      biruwa_sankhya,
      narsari_sankhya,
      barga,
      laxya,
      pragati,
      remarks,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className="card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ विरुवा उत्पादन सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
              <div className="w-30">
                <span className="dsl-b18">आर्थिक वर्ष :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={arthik_barsa}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>

              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="बिरुवाको किसिम :"
                  direction="vertical"
                  defaultIds={[biruwa_type]}
                  data={BiruwaTypes}
                  getValue={(BiruwaTypes) => BiruwaTypes["value"]}
                  onChange={(e) => this.handleBiruwaTypes(e)}
                  value={biruwa_type}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="उत्पादनको किसिम :"
                  direction="vertical"
                  defaultIds={[utpadan_medium]}
                  data={UtpadanMedium}
                  getValue={(UtpadanMedium) => UtpadanMedium["value"]}
                  onChange={(e) => this.handleUtpadanMedium(e)}
                  value={utpadan_medium}
                />
              </div>
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="बिरुवा संख्या :"
                value={biruwa_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ biruwa_sankhya: e })}
              />
              <Input
                className="w-30"
                title="नर्सरी संख्या :"
                value={narsari_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ narsari_sankhya: e })}
              />
              <Input
                className="w-30"
                title="वर्ग :"
                value={barga}
                direction="vertical"
                onChange={(e) => this.setState({ barga: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="लक्ष :"
                value={laxya}
                direction="vertical"
                onChange={(e) => this.setState({ laxya: e })}
              />
              <Input
                className="w-30"
                title="प्रगति :"
                value={pragati}
                direction="vertical"
                onChange={(e) => this.setState({ pragati: e })}
              />
              <Input
                className="w-30"
                title="कैफियत :"
                value={remarks}
                direction="vertical"
                onChange={(e) => this.setState({ remarks: e })}
              />
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
