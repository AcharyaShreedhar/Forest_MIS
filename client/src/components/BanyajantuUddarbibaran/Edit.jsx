import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, Dropdown, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

const BanyajantukoAbastha = [
  { id: 1, value: "मृत" },
  { id: 2, value: "जिउॅदो" },
];

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.banyajantu_uddar_id,
      miti: props.history.location.item.miti,
      sthaniya_taha: props.history.location.item.sthaniya_taha,
      samaya: props.history.location.item.samaya,
      samraxit_xetra: props.history.location.item.samraxit_xetra,
      banyajantuko_naam: props.history.location.item.banyajantuko_naam,
      banyajantuko_umer: props.history.location.item.banyajantuko_umer,
      banyajantuko_abastha: props.history.location.item.banyajantuko_abastha,
      mareko_karan: props.history.location.item.mareko_karan,
      banxetra_duri: props.history.location.item.banxetra_duri,
      anya_bibaran: props.history.location.item.anya_bibaran,
      remarks: props.history.location.item.remarks,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleBanyajantukoAbastha = this.handleBanyajantukoAbastha.bind(this);
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
      miti,
      sthaniya_taha,
      samaya,
      samraxit_xetra,
      banyajantuko_naam,
      banyajantuko_umer,
      banyajantuko_abastha,
      mareko_karan,
      banxetra_duri,
      anya_bibaran,
      remarks,
      created_by,
    } = this.state;
    const payload = {
      banyajantuuddar: {
        data: {
          miti: miti,
          sthaniya_taha: sthaniya_taha,
          samaya: samaya,
          samraxit_xetra: samraxit_xetra,
          banyajantuko_naam: banyajantuko_naam,
          banyajantuko_umer: banyajantuko_umer,
          banyajantuko_abastha: banyajantuko_abastha,
          mareko_karan: mareko_karan,
          banxetra_duri: banxetra_duri,
          anya_bibaran: anya_bibaran,
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
  handleBanyajantukoAbastha(e) {
    this.setState({ banyajantuko_abastha: e[0] });
  }
  handleDate(e) {
    this.setState({ miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      miti,
      sthaniya_taha,
      samaya,
      samraxit_xetra,
      banyajantuko_naam,
      banyajantuko_umer,
      banyajantuko_abastha,
      mareko_karan,
      banxetra_duri,
      anya_bibaran,
      remarks,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(miti) ||
      isEmpty(sthaniya_taha) ||
      isEmpty(samaya) ||
      isEmpty(samraxit_xetra) ||
      isEmpty(banyajantuko_naam) ||
      isEmpty(banyajantuko_umer) ||
      isEmpty(banyajantuko_abastha) ||
      isEmpty(mareko_karan) ||
      isEmpty(banxetra_duri) ||
      isEmpty(anya_bibaran) ||
      isEmpty(remarks)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ चक्ला वन्यजन्तु उद्दार सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
                <span className="dsl-b18"> मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="समय :"
                value={samaya}
                direction="vertical"
                onChange={(e) => this.setState({ samaya: e })}
              />
              <Input
                className="w-30"
                title="स्थानिय तह :"
                direction="vertical"
                value={sthaniya_taha}
                onChange={(e) => this.setState({ sthaniya_taha: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-65"
                title="संरक्षित क्षेत्र/सा.व.क्षेत्र :"
                direction="vertical"
                value={samraxit_xetra}
                onChange={(e) => this.setState({ samraxit_xetra: e })}
              />
              <Input
                className="w-30"
                title="नजिकको वन क्षेत्रबाट दुरी(मि.) :"
                value={banxetra_duri}
                direction="vertical"
                onChange={(e) => this.setState({ banxetra_duri: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="वन्यजन्तुको नाम :"
                value={banyajantuko_naam}
                direction="vertical"
                onChange={(e) => this.setState({ banyajantuko_naam: e })}
              />
              <Input
                className="w-30"
                title="उमेर :"
                value={banyajantuko_umer}
                direction="vertical"
                onChange={(e) => this.setState({ banyajantuko_umer: e })}
              />
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="अवस्था :"
                  direction="vertical"
                  width="fit-content"
                  defaultIds={[banyajantuko_abastha]}
                  data={BanyajantukoAbastha}
                  getValue={(BanyajantukoAbastha) =>
                    BanyajantukoAbastha["value"]
                  }
                  onChange={(e) => this.handleBanyajantukoAbastha(e)}
                  value={banyajantuko_abastha}
                />
              </div>
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="मरेको भए कारण :"
                value={mareko_karan}
                direction="vertical"
                onChange={(e) => this.setState({ mareko_karan: e })}
              />
              <Input
                className="w-30"
                title="अन्य विवरण :"
                value={anya_bibaran}
                direction="vertical"
                as="textarea"
                onChange={(e) => this.setState({ anya_bibaran: e })}
              />
              <Input
                className="w-30"
                title="कैफियत	:"
                value={remarks}
                as="textarea"
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
