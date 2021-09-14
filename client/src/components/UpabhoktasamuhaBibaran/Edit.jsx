import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.darta_no,
      darta_no: props.history.location.item.darta_no,
      darta_miti: props.history.location.item.darta_miti,
      dalit_ghardhuri: props.history.location.item.dalit_ghardhuri,
      perm_addr: props.history.location.item.perm_addr,
      curr_addr: props.history.location.item.curr_addr,
      janjati_ghardhuri: props.history.location.item.janjati_ghardhuri,
      anya_ghardhuri: props.history.location.item.anya_ghardhuri,
      female: props.history.location.item.female,
      male: props.history.location.item.male,
      samudayik_upavokta_samiti_name:
        props.history.location.item.samudayik_upavokta_samiti_name,
      sampanna: props.history.location.item.sampanna,
      madhyam: props.history.location.item.madhyam,
      bipanna: props.history.location.item.bipanna,
      dalit_rep: props.history.location.item.dalit_rep,
      janjati_rep: props.history.location.item.janjati_rep,
      anya_rep: props.history.location.item.anya_rep,
      adhyakshya_gender: props.history.location.item.adhyakshya_gender,
      adhyakshya: props.history.location.item.adhyakshya,
      sachib_gender: props.history.location.item.sachib_gender,
      sachib: props.history.location.item.sachib,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDate = this.handleDate.bind(this);
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
      darta_no,
      samudayik_upavokta_samiti_name,
      darta_miti,
      dalit_ghardhuri,
      perm_addr,
      curr_addr,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      sampanna,
      madhyam,
      bipanna,
      dalit_rep,
      janjati_rep,
      anya_rep,
      adhyakshya,
      adhyakshya_gender,
      sachib_gender,
      sachib,
      created_by,
    } = this.state;
    const payload = {
      consumergroupdetails: {
        data: {
          samudayik_upavokta_samiti_name: samudayik_upavokta_samiti_name,
          darta_no: darta_no,
          darta_miti: darta_miti,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          janjati_ghardhuri: janjati_ghardhuri,
          dalit_ghardhuri: dalit_ghardhuri,
          anya_ghardhuri: anya_ghardhuri,
          female: female,
          male: male,
          sampanna: sampanna,
          madhyam: madhyam,
          bipanna: bipanna,
          dalit_rep: dalit_rep,
          janjati_rep: janjati_rep,
          anya_rep: anya_rep,
          adhyakshya_gender: adhyakshya_gender,
          adhyakshya: adhyakshya,
          sachib_gender: sachib_gender,
          sachib: sachib,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
  }
  handleDate(e) {
    this.setState({ darta_miti: e });
  }
  render() {
    const { title } = this.props;
    const {
      darta_no,
      samudayik_upavokta_samiti_name,
      darta_miti,
      dalit_ghardhuri,
      perm_addr,
      curr_addr,
      janjati_ghardhuri,
      anya_ghardhuri,
      female,
      male,
      sampanna,
      madhyam,
      bipanna,
      dalit_rep,
      janjati_rep,
      anya_rep,
      adhyakshya,
      adhyakshya_gender,
      sachib_gender,
      sachib,
      showDialog,
    } = this.state;
    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ उपभोक्ता समुह सम्बन्धी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <Input
              className="mb-4"
              title="दर्ता नं"
              value={darta_no}
              direction="vertical"
              onChange={(e) => this.setState({ darta_no: e })}
            />
            <span className="dsl-b18">स्विकृत मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={darta_miti}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="सामुदायिक वन उपभोक्ता समितिको नाम"
              direction="vertical"
              value={samudayik_upavokta_samiti_name}
              onChange={(e) =>
                this.setState({ samudayik_upavokta_samiti_name: e })
              }
            />
            <Input
              className="mb-4"
              title="साविक ठेगाना"
              value={perm_addr}
              direction="vertical"
              onChange={(e) => this.setState({ perm_addr: e })}
            />

            <Input
              className="mb-4"
              title="हाल ठेगाना"
              direction="vertical"
              value={curr_addr}
              onChange={(e) => this.setState({ curr_addr: e })}
            />

            <Input
              className="mb-4"
              title="दलित घरधुरी"
              direction="vertical"
              as="textarea"
              value={dalit_ghardhuri}
              onChange={(e) => this.setState({ dalit_ghardhuri: e })}
            />
            <Input
              className="mb-4"
              title="जनजाती घरधुरी"
              direction="vertical"
              as="textarea"
              value={janjati_ghardhuri}
              onChange={(e) => this.setState({ janjati_ghardhuri: e })}
            />
            <Input
              className="mb-4"
              title="अन्य घरधुरी "
              direction="vertical"
              as="textarea"
              value={anya_ghardhuri}
              onChange={(e) => this.setState({ anya_ghardhuri: e })}
            />

            <Input
              className="mb-4"
              title="महिला जनसंख्या "
              direction="vertical"
              as="textarea"
              value={female}
              onChange={(e) => this.setState({ female: e })}
            />
            <Input
              className="mb-4"
              title="पुरुष जनसंख्या "
              direction="vertical"
              as="textarea"
              value={male}
              onChange={(e) => this.setState({ male: e })}
            />

            <Input
              className="mb-4"
              title="सम्पन्नता स्तरीकरण घरधुरी (सम्पन्न) "
              direction="vertical"
              as="textarea"
              value={sampanna}
              onChange={(e) => this.setState({ sampanna: e })}
            />
            <Input
              className="mb-4"
              title="सम्पन्नता स्तरीकरण घरधुरी (मध्यम) "
              direction="vertical"
              as="textarea"
              value={madhyam}
              onChange={(e) => this.setState({ madhyam: e })}
            />
            <Input
              className="mb-4"
              title="सम्पन्नता स्तरीकरण घरधुरी (विपन्न) "
              direction="vertical"
              as="textarea"
              value={bipanna}
              onChange={(e) => this.setState({ bipanna: e })}
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा प्रतिनिधित्व (दलित)"
              direction="vertical"
              as="textarea"
              value={dalit_rep}
              onChange={(e) => this.setState({ dalit_rep: e })}
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा प्रतिनिधित्व (जनजाती)"
              direction="vertical"
              as="textarea"
              value={janjati_rep}
              onChange={(e) => this.setState({ janjati_rep: e })}
            />

            <Input
              className="mb-4"
              title="कार्यसमितिमा प्रतिनिधित्व (अन्य)"
              direction="vertical"
              as="textarea"
              value={anya_rep}
              onChange={(e) => this.setState({ anya_rep: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व अध्यक्ष (महिला) "
              direction="vertical"
              as="textarea"
              value={adhyakshya}
              onChange={(e) => this.setState({ adhyakshya: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व अध्यक्ष (पुरुष)"
              direction="vertical"
              as="textarea"
              value={adhyakshya_gender}
              onChange={(e) => this.setState({ adhyakshya_gender: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व सचिव (महिला) "
              direction="vertical"
              as="textarea"
              value={sachib}
              onChange={(e) => this.setState({ sachib: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व सचिव (पुरुष) "
              direction="vertical"
              as="textarea"
              value={sachib_gender}
              onChange={(e) => this.setState({ sachib_gender: e })}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Save"
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
  darta_no: PropTypes.number,
};

Edit.defaultProps = {
  darta_no: 1,
};

export default Edit;
