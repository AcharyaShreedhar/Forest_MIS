import React, { Component } from 'react';
import { isEmpty } from 'ramda';
import { Button, Input, ConfirmationDialoge } from '../../components';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sirshak_no: '',
      sirshak_name: '',
      showDialog: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleDate(e, type) {
    switch (type) {
      case 'prapti': {
        this.setState({ createdAt: e });
        break;
      }
      case 'nirman': {
        this.setState({ manufactured_date: e });
        break;
      }
      default:
        break;
    }
  }

  handleSubmit() {
    const { sirshak_no, sirshak_name } = this.state;
    const payload = {
      budgetsirshak: {
        data: {
          sirshak_no: sirshak_no,
          sirshak_name: sirshak_name,
          created_by: this.props.user.user_name,
          updated_by: this.props.user.user_name,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          user_id: this.props.user.user_id,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const { sirshak_no, sirshak_name, showDialog } = this.state;

    let disabled = isEmpty(sirshak_no) || isEmpty(sirshak_name) ? true : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ बजेट शिर्षक सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="शिर्षक नम्बर :"
                value={sirshak_no}
                direction="vertical"
                onChange={(e) => this.setState({ sirshak_no: e })}
              />
              <Input
                className="w-30"
                title="शिर्षकको नाम :"
                direction="vertical"
                value={sirshak_name}
                onChange={(e) => this.setState({ sirshak_name: e })}
              />
              <div className="w-30"></div>
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
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

export default Add;
