import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./KabuliyatibanBibaran.scss";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regno: "",
      name: "",
      darta_miti: "",
      perm_addr: "",
      curr_addr: "",
      dalit_ghardhuri: "",
      janjati_ghardhuri: "",
      anya_ghardhuri: "",
      female: "",
      male: "",
      sampanna: "",
      madhyam: "",
      bipanna: "",
      dalit_rep: "",
      janjati_rep: "",
      anya_rep: "",
      adhyakshya: "",
      adhyakshya_gender: "",
      sachib: "",
      sachib_gender: "",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
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
      regno,
      name,
      darta_miti,
      perm_addr,
      curr_addr,
      dalit_ghardhuri,
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
      sachib,
      sachib_gender,
    } = this.state;
    const payload = {
      kabuliyatiban: {
        data: {
          darta_no: regno,
          samudayik_upavokta_samiti_name: name,
          darta_miti: darta_miti,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          dalit_ghardhuri: dalit_ghardhuri,
          janjati_ghardhuri: janjati_ghardhuri,
          anya_ghardhuri: anya_ghardhuri,

          female: female,
          male: male,

          sampanna: sampanna,
          madhyam: madhyam,
          bipanna: bipanna,
          dalit_rep: dalit_rep,
          janjati_rep: janjati_rep,
          anya_rep: anya_rep,
          adhyakshya: adhyakshya,
          adhyakshya_gender: adhyakshya_gender,
          sachib: sachib,
          sachib_gender: sachib_gender,
          dist_id: this.props.user.user_name,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  handleDate(e) {
    this.setState({ darta_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      regno,
      name,
      darta_miti,
      perm_addr,
      curr_addr,
      dalit_ghardhuri,
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
      sachib,
      sachib_gender,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ कवुलियती  वन थप गर्न चाहनुहुन्छ ?"
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
              value={regno}
              direction="vertical"
              onChange={(e) => this.setState({ regno: e })}
            />
            <span className="dsl-b18">दर्ता मिति</span>
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
              value={name}
              onChange={(e) => this.setState({ name: e })}
            />
            <Input
              className="mb-4"
              title="ठेगाना साविक"
              value={perm_addr}
              direction="vertical"
              onChange={(e) => this.setState({ perm_addr: e })}
            />
            <Input
              className="mb-4"
              title="ठेगाना हाल"
              value={curr_addr}
              direction="vertical"
              onChange={(e) => this.setState({ curr_addr: e })}
            />
            <Input
              className="mb-4"
              title="दलित घरधुरी"
              value={dalit_ghardhuri}
              direction="vertical"
              onChange={(e) => this.setState({ dalit_ghardhuri: e })}
            />
            <Input
              className="mb-4"
              title="जनजाति घरधुरी"
              value={janjati_ghardhuri}
              direction="vertical"
              onChange={(e) => this.setState({ janjati_ghardhuri: e })}
            />
            <Input
              className="mb-4"
              title="अन्य घरधुरी"
              value={anya_ghardhuri}
              direction="vertical"
              onChange={(e) => this.setState({ anya_ghardhuri: e })}
            />

            <Input
              className="mb-4"
              title="महिला जनसंख्या"
              value={female}
              direction="vertical"
              onChange={(e) => this.setState({ female: e })}
            />
            <Input
              className="mb-4"
              title="पुरुष जनसंख्या"
              value={male}
              direction="vertical"
              onChange={(e) => this.setState({ male: e })}
            />

            <Input
              className="mb-4"
              title="सम्पन्न"
              value={sampanna}
              direction="vertical"
              onChange={(e) => this.setState({ sampanna: e })}
            />
            <Input
              className="mb-4"
              title="मध्यम"
              value={madhyam}
              direction="vertical"
              onChange={(e) => this.setState({ madhyam: e })}
            />
            <Input
              className="mb-4"
              title="विपन्न"
              value={bipanna}
              direction="vertical"
              onChange={(e) => this.setState({ bipanna: e })}
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा दलित प्रतिनिधित्व"
              value={dalit_rep}
              direction="vertical"
              onChange={(e) => this.setState({ dalit_rep: e })}
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा जनजाति प्रतिनिधित्व"
              value={janjati_rep}
              direction="vertical"
              onChange={(e) => this.setState({ janjati_rep: e })}
            />
            <Input
              className="mb-4"
              title="कार्यसमितिमा अन्य प्रतिनिधित्व"
              value={anya_rep}
              direction="vertical"
              onChange={(e) => this.setState({ anya_rep: e })}
            />

            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(महिला अध्यक्ष)"
              direction="vertical"
              value={adhyakshya}
              onChange={(e) => this.setState({ adhyakshya: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(पुरुष अध्यक्ष)"
              direction="vertical"
              value={adhyakshya_gender}
              onChange={(e) => this.setState({ adhyakshya_gender: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(महिला सचिव)"
              direction="vertical"
              value={sachib}
              onChange={(e) => this.setState({ sachib: e })}
            />
            <Input
              className="mb-4"
              title="मुख्य पदाधिकारीमा प्रतिनिधित्व(पुरुष सचिव)"
              direction="vertical"
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

Add.propTypes = {
  regno: PropTypes.number,
};

Add.defaultProps = {
  regno: 1,
};

export default Add;
