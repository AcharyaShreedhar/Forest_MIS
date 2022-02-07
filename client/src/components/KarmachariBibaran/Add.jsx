import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp_fname_eng: "",
      emp_lname_eng: "",
      emp_fname_nep: "",
      emp_lname_nep: "",
      emp_add_perm_prov: "",
      emp_add_perm_dist: "",
      emp_add_perm_mun: "",
      emp_add_perm_ward: "",
      emp_add_perm_tole: "",
      emp_add_temp_prov: "",
      emp_add_temp_dist: "",
      emp_add_temp_mun: "",
      emp_add_temp_ward: "",
      emp_add_temp_tole: "",
      emp_phone1: "",
      emp_phone2: "",
      emp_email: "",
      emp_office_id: "",
      emp_dept_id: "",
      emp_level_id: "",
      emp_post: "",
      emp_rank: "",
      emp_appoint_date: "",
      emp_status: "",
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
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
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
            title="थप"
            body="के तपाईँ कर्मचारी विवरण थप गर्न चाहनुहुन्छ ?"
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
              type="number"
              direction="vertical"
              value={emp_add_perm_prov}
              onChange={(e) => this.setState({ emp_add_perm_prov: e })}
            />

            <Input
              className="mb-4"
              title="स्थायी जिल्ला"
              type="number"
              value={emp_add_perm_dist}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_perm_dist: e })}
            />
             <Input
              className="mb-4"
              title="स्थायी नगरपालिका"
              type="number"
              value={emp_add_perm_mun}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_perm_mun: e })}
            />

            <Input
              className="mb-4"
              title="स्थायी वडा न."
              type="number"
              direction="vertical"
              value={emp_add_perm_ward}
              onChange={(e) => this.setState({ emp_add_perm_ward: e })}
            />
            <Input
              className="mb-4"
              title="स्थायी टोल"
              type="number"
              value={emp_add_perm_tole}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_perm_tole: e })}
            />
            <Input
              className="mb-4"
              title="अस्थायी प्रदेश"
              type="number"
              value={emp_add_temp_prov}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_temp_prov: e })}
            />

            <Input
              className="mb-4"
              title="अस्थायी जिल्ला"
              type="number"
              direction="vertical"
              value={emp_add_temp_dist}
              onChange={(e) => this.setState({ emp_add_temp_dist: e })}
            />

            <Input
              className="mb-4"
              title="अस्थायी नगरपालिका"
              type="number"
              value={emp_add_temp_mun}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_temp_mun: e })}
            />
             <Input
              className="mb-4"
              title="अस्थायी वडा न."
              type="number"
              value={emp_add_temp_ward}
              direction="vertical"
              onChange={(e) => this.setState({ emp_add_temp_ward: e })}
            />

            <Input
              className="mb-4"
              title="अस्थायी टोल"
              type="number"
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
              type="number"
              value={emp_office_id}
              direction="vertical"
              onChange={(e) => this.setState({ emp_office_id: e })}
            />
             <Input
              className="mb-4"
              title="विभाग"
              type="number"
              value={emp_dept_id}
              direction="vertical"
              onChange={(e) => this.setState({ emp_dept_id: e })}
            />

            <Input
              className="mb-4"
              title="स्तर"
              type="number"
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
              type="number"
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


export default Add;
