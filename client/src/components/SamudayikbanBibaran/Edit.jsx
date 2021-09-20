import React, { Component } from "react";
import PropTypes from "prop-types";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import "nepali-datepicker-reactjs/dist/index.css";
import "./SamudayikbanBibaran.scss";

const ForestTypes = [
  { id: 1, value: "प्राकृतिक्" },
  { id: 2, value: "वृक्षरोपण" },
];
const BaiganikBan = [
  { id: 1, value: "भएको" },
  { id: 2, value: "नभएको" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.darta_no,
      regno: props.history.location.item.darta_no,
      name: props.history.location.item.samudayikban_name,
      area: props.history.location.item.area,
      main_species: props.history.location.item.main_species,
      forest_type: props.history.location.item.forest_type,
      handover_date: props.history.location.item.handover_date,
      forest_maujdat: props.history.location.item.forest_maujdat,
      timber: props.history.location.item.timber,
      wood: props.history.location.item.wood,
      nabikaran_abadhi: props.history.location.item.nabikaran_abadhi,
      renewed_date: props.history.location.item.renewed_date,
      renewal_date: props.history.location.item.renewal_date,
      baiganik_ban: props.history.location.item.baiganik_ban,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };

    this.handleBaiganikBan = this.handleBaiganikBan.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleForestType = this.handleForestType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
      id,
      name,
      regno,
      area,
      main_species,
      forest_type,
      handover_date,
      forest_maujdat,
      timber,
      wood,
      baiganik_ban,
      renewed_date,
      renewal_date,
      nabikaran_abadhi,
      created_by,
    } = this.state;
    const payload = {
      samudayikban: {
        data: {
          samudayikban_name: name,
          darta_no: regno,
          area: area,
          main_species: main_species,
          forest_type: forest_type,
          handover_date: handover_date,
          forest_maujdat: forest_maujdat,
          timber: timber,
          wood: wood,
          baiganik_ban: baiganik_ban,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
      nabikarankaryayojana: {
        data: {
          darta_id: regno,
          renewed_date: renewed_date,
          renewal_date: renewal_date,
          nabikaran_abadhi: nabikaran_abadhi,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };

    this.props.onUpdate(payload, id);
  }
  handleForestType(e) {
    this.setState({ forest_type: e[0] });
  }
  handleBaiganikBan(e) {
    this.setState({ baiganik_ban: e[0] });
  }
  handleDate(e, type) {
    switch (type) {
      case "handover": {
        this.setState({ handover_date: e });
        break;
      }
      case "renewed": {
        this.setState({ renewed_date: e });
        break;
      }
      case "renewal": {
        this.setState({ renewal_date: e });
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { title } = this.props;
    const {
      name,
      regno,
      area,
      main_species,
      forest_type,
      handover_date,
      forest_maujdat,
      timber,
      wood,
      renewed_date,
      baiganik_ban,
      nabikaran_abadhi,
      renewal_date,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ सामुदायिक वनको विवरण शंसोधन गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <div className="panel mb-4">
              <Input
                className="w-25"
                title="दर्ता नं:"
                value={regno}
                direction="vertical"
                onChange={(e) => this.setState({ regno: e })}
              />

              <Input
                className="pl-5 w-75"
                title="सामुदायिक वन उपभोक्ता समितिको नाम:"
                direction="vertical"
                value={name}
                onChange={(e) => this.setState({ name: e })}
              />
            </div>
            <div className="panel">
              <Input
                className="w-25"
                title="क्षत्रफल(हे.)"
                value={area}
                direction="vertical"
                onChange={(e) => this.setState({ area: e })}
              />

              <Input
                className="pl-5 w-75"
                title="मुख्य प्रजाति"
                direction="vertical"
                as="textarea"
                value={main_species}
                onChange={(e) => this.setState({ main_species: e })}
              />
            </div>
            <div className="section mb-4" />
            <div className="panel space pt-2">
              <div className="w-25">
                <Dropdown
                  className="dropdownlabel mb-4"
                  title="वनको किसिम"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[forest_type]}
                  data={ForestTypes}
                  getValue={(ForestTypes) => ForestTypes["value"]}
                  onChange={(e) => this.handleForestType(e)}
                  value={forest_type}
                />
              </div>
              <div className="w-25">
                <span className="dsl-b18">हस्तान्तरण मिति</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  className="mb-4"
                  value={handover_date}
                  onChange={(e) => this.handleDate(e, "handover")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <div className="w-25">
                <Dropdown
                  className="dropdownlabel mb-4 w-25"
                  title="वैज्ञानीक वन व्यबस्थापन (स्विकृती अवस्था):"
                  direction="vertical"
                  width="w-25"
                  defaultIds={[baiganik_ban]}
                  data={BaiganikBan}
                  getValue={(BaiganikBan) => BaiganikBan["value"]}
                  onChange={(e) => this.handleBaiganikBan(e)}
                  value={baiganik_ban}
                />
              </div>
            </div>
            <div className="panel space">
              <Input
                className="mb-4 w-25"
                title="वनको मौज्दात:"
                value={forest_maujdat}
                direction="vertical"
                onChange={(e) => this.setState({ forest_maujdat: e })}
              />
              <Input
                className="mb-4 w-25"
                title="वार्षिक निकासी परिमाण काठ(घ. मी):"
                value={timber}
                direction="vertical"
                onChange={(e) => this.setState({ timber: e })}
              />
              <Input
                className="mb-4 w-25"
                title="वार्षिक निकासी परिमाण दाउरा(घ. मी):"
                value={wood}
                direction="vertical"
                onChange={(e) => this.setState({ wood: e })}
              />
            </div>

            <span className="dsl-b18">नविकरण सम्बन्धी विवरण:</span>
            <div className="panel space mt-2">
              <div className="w-25">
                <span className="dsl-b18">गरेको मिती:</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  className="mb-4"
                  value={renewed_date}
                  onChange={(e) => this.handleDate(e, "renewed")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="mb-4 w-25"
                title="अबधि(बर्ष):"
                value={nabikaran_abadhi}
                direction="vertical"
                onChange={(e) => this.setState({ nabikaran_abadhi: e })}
              />
              <div className="w-25">
                <span className="dsl-b18">गर्नुपर्ने आर्थिक बर्ष:</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  className="mb-4"
                  value={renewal_date}
                  onChange={(e) => this.handleDate(e, "renewal")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शंशोधन गर्नुहोस ।"
                onClick={this.handleConfirm.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Edit.propTypes = {
  regno: PropTypes.number,
  onClose: PropTypes.func,
};

Edit.defaultProps = {
  regno: 1,
  onClose: () => {},
};

export default Edit;
