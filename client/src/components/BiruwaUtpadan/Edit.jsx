import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number";

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
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item?.biruwa_utpadan_id,
      arthik_barsa: englishToNepaliNumber(props.history.location.item?.arthik_barsa),
      biruwa_type: props.history.location.item?.biruwa_type,
      utpadan_medium: props.history.location.item?.utpadan_medium,
      biruwa_sankhya: englishToNepaliNumber(props.history.location.item?.biruwa_sankhya),
      narsari_sankhya: englishToNepaliNumber(props.history.location.item?.narsari_sankhya),
      barga: props.history.location.item?.barga,
      laxya: props.history.location.item?.laxya,
      pragati: props.history.location.item?.pragati,
      remarks: props.history.location.item?.remarks,
      dist_id: props.history.location.item?.dist_id,
      office_id: props.history.location.item?.office_id,
      created_by: props.history.location.item?.created_by,
      updated_by: props.history.location.item?.updated_by,
      showDialog: false,
    };

    this.handleBiruwaTypes = this.handleBiruwaTypes.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUtpadanMedium = this.handleUtpadanMedium.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
  }

  handleBiruwaTypes(e) {
    this.setState({ biruwa_type: e[0] });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleInputKeyPress(e) {
    if (!/[0-9०-९]/.test(e.key)) {
      e.preventDefault();
    }
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
      id,
      arthik_barsa,
      biruwa_type,
      utpadan_medium,
      biruwa_sankhya,
      narsari_sankhya,
      barga,
      laxya,
      pragati,
      remarks,
      created_by,
    } = this.state;
    const payload = {
      biruwautpadan: {
        data: {
          arthik_barsa: nepaliToEnglishNumber(arthik_barsa),
          biruwa_type: biruwa_type,
          utpadan_medium: utpadan_medium,
          biruwa_sankhya: nepaliToEnglishNumber(biruwa_sankhya),
          narsari_sankhya: nepaliToEnglishNumber(narsari_sankhya),
          barga: barga,
          laxya: laxya,
          pragati: pragati,
          remarks: remarks,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };

    this.props.onUpdate(payload, id);
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

    let disabled =
      isEmpty(arthik_barsa) ||
      isEmpty(biruwa_type) ||
      isEmpty(utpadan_medium) ||
      isEmpty(biruwa_sankhya) ||
      isEmpty(narsari_sankhya) ||
      isEmpty(barga) ||
      isEmpty(laxya) ||
      isEmpty(pragati) ||
      isEmpty(remarks)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ विरुवा उत्पादन सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                title="आर्थिक वर्ष :"
                value={arthik_barsa}
                direction="vertical"
                onChange={(e) => this.setState({ arthik_barsa: e })}
              />
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
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
                value={biruwa_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ biruwa_type: e })}
              />
              <Input
                className="w-30"
                title="नर्सरी संख्या :"
                onKeyPressInput={(e) => this.handleInputKeyPress(e)}
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
