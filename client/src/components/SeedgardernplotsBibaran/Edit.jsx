import React, { Component } from "react";
import { isEmpty } from "ramda";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { Button, Input, ConfirmationDialoge } from "../../components";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item?.plot_id,
      plot_type: props.history.location.item?.plot_type,
      prajati: props.history.location.item?.prajati,
      area: props.history.location.item?.area,
      location: props.history.location.item?.location,
      established_date: props.history.location.item?.established_date,
      status: props.history.location.item?.status,
      dist_id: props.history.location.item?.dist_id,
      office_id: props.history.location.item?.office_id,
      created_by: props.history.location.item?.created_by,
      updated_by: props.history.location.item?.updated_by,
      showDialog: false,
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleDate(e) {
    this.setState({ established_date: e });
  }
  handleSubmit() {
    const {
      id,
      plot_type,
      prajati,
      area,
      location,
      established_date,
      status,
      created_by,
    } = this.state;
    const payload = {
      plotbibaran: {
        data: {
          plot_type: plot_type,
          prajati: prajati,
          area: area,
          location: location,
          established_date: established_date,
          status: status,
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
      plot_type,
      prajati,
      area,
      location,
      established_date,
      status,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(plot_type) ||
      isEmpty(prajati) ||
      isEmpty(area) ||
      isEmpty(location) ||
      isEmpty(established_date) ||
      isEmpty(status)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ बन बीउ बगैच/समबर्धन प्लटहरु सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                title="प्लटको किसिम :"
                value={plot_type}
                direction="vertical"
                onChange={(e) => this.setState({ plot_type: e })}
              />
              <Input
                className="w-30"
                title="प्रजातिहरु :"
                direction="vertical"
                value={prajati}
                as="textarea"
                onChange={(e) => this.setState({ prajati: e })}
              />
              <Input
                className="w-30"
                title="क्षेत्रफल :"
                value={area}
                direction="vertical"
                onChange={(e) => this.setState({ area: e })}
              />
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="ठेगाना :"
                direction="vertical"
                value={location}
                onChange={(e) => this.setState({ location: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">स्थापना मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={established_date}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="अवस्था :"
                value={status}
                direction="vertical"
                onChange={(e) => this.setState({ status: e })}
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
