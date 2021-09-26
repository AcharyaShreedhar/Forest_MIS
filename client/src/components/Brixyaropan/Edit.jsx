import React, { Component } from "react";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

const Xetra = [
  { id: 1, value: "सामुदायिक बन" },
  { id: 2, value: "राष्ट्रिय बन " },
  { id: 3, value: "निजी जग्गा" },
  { id: 4, value: "सार्वजनिक क्षेत्र " },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.brixyaropan_id,
      brixyaropan_miti: props.history.location.item.brixyaropan_miti,
      xetra: props.history.location.item.xetra,
      area: props.history.location.item.area,
      brixyaropan_thegana: props.history.location.item.brixyaropan_thegana,
      brixyaropan_kisim: props.history.location.item.brixyaropan_kisim,
      brixyaropan_laxya: props.history.location.item.brixyaropan_laxya,
      brixyaropan_prajati: props.history.location.item.brixyaropan_prajati,
      brixyaropan_pragati: props.history.location.item.brixyaropan_pragati,
      brixyaropan_sankhya: props.history.location.item.brixyaropan_sankhya,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleXetra = this.handleXetra.bind(this);
  }

  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ brixyaropan_miti: e });
  }

  handleSubmit() {
    const {
      id,
      brixyaropan_miti,
      xetra,
      area,
      brixyaropan_thegana,
      brixyaropan_kisim,
      brixyaropan_laxya,
      brixyaropan_prajati,
      brixyaropan_pragati,
      brixyaropan_sankhya,
      created_by,
    } = this.state;
    const payload = {
      brixyaropan: {
        data: {
          brixyaropan_miti: brixyaropan_miti,
          xetra: xetra,
          area: area,
          brixyaropan_thegana: brixyaropan_thegana,
          brixyaropan_kisim: brixyaropan_kisim,
          brixyaropan_laxya: brixyaropan_laxya,
          brixyaropan_prajati: brixyaropan_prajati,
          brixyaropan_pragati: brixyaropan_pragati,
          brixyaropan_sankhya: brixyaropan_sankhya,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }
  handleXetra(e) {
    this.setState({ xetra: e[0] });
  }

  render() {
    const { title } = this.props;
    const {
      brixyaropan_miti,
      xetra,
      area,
      brixyaropan_thegana,
      brixyaropan_kisim,
      brixyaropan_laxya,
      brixyaropan_prajati,
      brixyaropan_pragati,
      brixyaropan_sankhya,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ वृक्षरोपण सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                <span className="dsl-b18">वृक्षरोपण मिति:</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={brixyaropan_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वृक्षरोपण क्षेत्र:"
                  direction="vertical"
                  defaultIds={[xetra]}
                  data={Xetra}
                  getValue={(Xetra) => Xetra["value"]}
                  onChange={(e) => this.handleXetra(e)}
                  value={xetra}
                />
              </div>
              <Input
                className="w-30"
                title="क्षेत्रफल(हे.):"
                value={area}
                direction="vertical"
                onChange={(e) => this.setState({ area: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="वृक्षरोपण ठेगाना :"
                value={brixyaropan_thegana}
                direction="vertical"
                onChange={(e) => this.setState({ brixyaropan_thegana: e })}
              />

              <Input
                className="w-30"
                title="वृक्षरोपण किसिम :"
                direction="vertical"
                value={brixyaropan_kisim}
                onChange={(e) => this.setState({ brixyaropan_kisim: e })}
              />
              <Input
                className="w-30"
                title="लक्ष :"
                value={brixyaropan_laxya}
                direction="vertical"
                onChange={(e) => this.setState({ brixyaropan_laxya: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="वृक्षरोपण प्रजाति :"
                value={brixyaropan_prajati}
                direction="vertical"
                onChange={(e) => this.setState({ brixyaropan_prajati: e })}
              />

              <Input
                className="w-30"
                title="प्रगति :"
                direction="vertical"
                value={brixyaropan_pragati}
                onChange={(e) => this.setState({ brixyaropan_pragati: e })}
              />

              <Input
                className="w-30"
                title="वृक्षरोपण संख्या :"
                value={brixyaropan_sankhya}
                direction="vertical"
                onChange={(e) => this.setState({ brixyaropan_sankhya: e })}
              />
            </div>
          </div>
          <div className="section" />
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

export default Edit;
