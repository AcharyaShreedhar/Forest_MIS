import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";


class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.emp_id,  
      emp_fname_eng: props.history.location.item.emp_fname_eng,
      emp_lname_eng: props.history.location.item.emp_lname_eng,
      emp_fname_nep: props.history.location.item.emp_fname_nep,
      emp_lname_nep: props.history.location.item.emp_lname_nep,
      emp_add_perm_prov: props.history.location.item.emp_add_perm_prov,
      emp_add_perm_dist: props.history.location.item.emp_add_perm_dist,
      emp_add_perm_mun: props.history.location.item.emp_add_perm_mun,
      emp_add_perm_ward: props.history.location.item.emp_add_perm_ward,
      emp_add_perm_tole: props.history.location.item.emp_add_temp_tole,
      emp_add_temp_prov: props.history.location.item.emp_add_perm_prov,
      emp_add_temp_dist: props.history.location.item.emp_add_perm_dist,
      emp_add_temp_mun: props.history.location.item.emp_add_perm_mun,
      emp_add_temp_ward: props.history.location.item.emp_add_perm_ward,
      emp_add_temp_tole: props.history.location.item.emp_add_perm_tole,
      emp_phone1: props.history.location.item.emp_phone1,
      emp_phone2: props.history.location.item.emp_phone2,
      emp_email: props.history.location.item.emp_email,
      emp_office_id: props.history.location.item.emp_office_id,
      emp_dept_id: props.history.location.item.emp_dept_id,
      emp_level_id: props.history.location.item.emp_level_id,
      emp_post: props.history.location.item.emp_post,
      emp_rank: props.history.location.item.emp_rank,
      emp_appoint_date: props.history.location.item.emp_appoint_date,
      emp_status: props.history.location.item.emp_status,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
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
      id,
      emp_fname_eng,
      emp_lname_eng,
      emp_fname_nep,
      emp_lname_nep,
      emp_add_perm_prov,
      emp_add_perm_dist,
      emp_add_perm_mun,
      emp_add_perm_ward,
      emp_add_perm_tole,
      emp_add_temp_prov,
      emp_add_temp_dist,
      emp_add_temp_mun,
      emp_add_temp_ward,
      emp_add_temp_tole,
      emp_phone1,
      emp_phone2,
      emp_email,
      emp_office_id,
      emp_dept_id,
      emp_level_id,
      emp_post,
      emp_rank,
      emp_appoint_date,
      emp_status,
      created_by,
    } = this.state;
    const payload = {
      employees: {
        data: {
          emp_fname_eng:emp_fname_eng,
          emp_lname_eng:emp_lname_eng,
          emp_fname_nep:emp_fname_nep,
          emp_lname_nep:emp_lname_nep,
          emp_add_perm_prov:emp_add_perm_prov,
          emp_add_perm_dist:emp_add_perm_dist,
          emp_add_perm_mun:emp_add_perm_mun,
          emp_add_perm_ward:emp_add_perm_ward,
          emp_add_perm_tole:emp_add_perm_tole,
          emp_add_temp_prov:emp_add_temp_prov,
          emp_add_temp_dist:emp_add_temp_dist,
          emp_add_temp_mun:emp_add_temp_mun,
          emp_add_temp_ward:emp_add_temp_ward,
          emp_add_temp_tole:emp_add_temp_tole,
          emp_phone1:emp_phone1,
          emp_phone2:emp_phone2,
          emp_email:emp_email,
          emp_office_id:emp_office_id,
          emp_dept_id:emp_dept_id,
          emp_level_id:emp_level_id,
          emp_post:emp_post,
          emp_rank:emp_rank,
          emp_appoint_date:emp_appoint_date,
          emp_status: emp_status,
          dist_id: this.props.user.dist_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload,id);
  }

  handleDate(e) {
    this.setState({ emp_appoint_date: e });
  }

  render() {
    const { title } = this.props;
    const {
        emp_fname_eng,
        emp_lname_eng,
        emp_fname_nep,
        emp_lname_nep,
        emp_add_perm_prov,
        emp_add_perm_dist,
        emp_add_perm_mun,
        emp_add_perm_ward,
        emp_add_perm_tole,
        emp_add_temp_prov,
        emp_add_temp_dist,
        emp_add_temp_mun,
        emp_add_temp_ward,
        emp_add_temp_tole,
        emp_phone1,
        emp_phone2,
        emp_email,
        emp_office_id,
        emp_dept_id,
        emp_level_id,
        emp_post,
        emp_rank,
        emp_appoint_date,
        emp_status,
        showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
        <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ कर्मचारी विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
              title="नाम(अंग्रेजी)"
              value={emp_fname_eng}
              direction="vertical"
              onChange={(e) => this.setState({ emp_fname_eng: e })}
            />

            <Input
              className="mb-4"
              title="थर(अंग्रेजी)"
              direction="vertical"
              value={emp_lname_eng}
              onChange={(e) => this.setState({ emp_lname_eng: e })}
            />
            <Input
              className="mb-4"
              title="नाम(नेपाली)"
              value={emp_fname_nep}
              direction="vertical"
              onChange={(e) => this.setState({ emp_fname_nep: e })}
            />
            <Input
              className="mb-4"
              title="थर(नेपाली)"
              value={emp_lname_nep}
              direction="vertical"
              onChange={(e) => this.setState({ emp_lname_nep: e })}
            />

            <Input
              className="mb-4"
              title="स्थायी प्रदेश"
              direction="vertical"
              value={emp_add_perm_prov}
              onChange={(e) => this.setState({ emp_add_perm_prov: e })}
            />

            <Input
              className="mb-4"
              title="स्थायी जिल्ला"
              value={emp_add_perm_dist}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_perm_dist: e })}
            />
             <Input
              className="mb-4"
              title="स्थायी नगरपालिका"
              value={emp_add_perm_mun}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_perm_mun: e })}
            />

            <Input
              className="mb-4"
              title="स्थायी वडा न."
              direction="vertical"
              value={emp_add_perm_ward}
              onChange={(e) => this.setState({ emp_add_perm_ward: e })}
            />
            <Input
              className="mb-4"
              title="स्थायी टोल"
              value={emp_add_perm_tole}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_perm_tole: e })}
            />
            <Input
              className="mb-4"
              title="अस्थायी प्रदेश"
              value={emp_add_temp_prov}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_temp_prov: e })}
            />

            <Input
              className="mb-4"
              title="अस्थायी जिल्ला"
              direction="vertical"
              value={emp_add_temp_dist}
              onChange={(e) => this.setState({ emp_add_temp_dist: e })}
            />

            <Input
              className="mb-4"
              title="अस्थायी नगरपालिका"
              value={emp_add_temp_mun}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_temp_mun: e })}
            />
             <Input
              className="mb-4"
              title="अस्थायी वडा न."
              value={emp_add_temp_ward}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_temp_ward: e })}
            />

            <Input
              className="mb-4"
              title="अस्थायी टोल"
              direction="vertical"
              value={emp_add_temp_tole}
              onChange={(e) => this.setState({ emp_add_temp_tole: e })}
            />
            <Input
              className="mb-4"
              title="सम्पर्क न.(पहिलो)"
              value={emp_phone1}
              direction="vertical"
              onChange={(e) => this.setState({ emp_phone1: e })}
            />
            <Input
              className="mb-4"
              title="सम्पर्क न.(दोस्रो)"
              value={emp_phone2}
              direction="vertical"
              onChange={(e) => this.setState({ emp_phone2: e })}
            />

            <Input
              className="mb-4"
              title="इमेल"
              direction="vertical"
              value={emp_email}
              onChange={(e) => this.setState({ emp_email: e })}
            />

            <Input
              className="mb-4"
              title="कार्यालय"
              value={emp_office_id}
              direction="vertical"
              onChange={(e) => this.setState({ emp_office_id: e })}
            />
             <Input
              className="mb-4"
              title="विभाग"
              value={emp_dept_id}
              direction="vertical"
              onChange={(e) => this.setState({ emp_dept_id: e })}
            />

            <Input
              className="mb-4"
              title="स्तर"
              direction="vertical"
              value={emp_level_id}
              onChange={(e) => this.setState({ emp_level_id: e })}
            />
            <Input
              className="mb-4"
              title="पोष्ट"
              value={emp_post}
              direction="vertical"
              onChange={(e) => this.setState({ emp_post: e })}
            />
            <Input
              className="mb-4"
              title="श्रेणी"
              value={emp_rank}
              direction="vertical"
              onChange={(e) => this.setState({ emp_rank: e })}
            />
           <span className="dsl-b18">अपोइन्ट मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={emp_appoint_date}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="स्थिति"
              value={emp_status}
              direction="vertical"
              onChange={(e) => this.setState({ emp_status: e })}
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
  onClose: PropTypes.func,
};

Edit.defaultProps = {
  darta_no: 1,
  onClose: () => {},
};

export default Edit;
