import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { SamudayikbanBibaran } from "../../../components";
import "./SamudayikbanList.scss";

const headings = [
  "दर्ता नं",
  "सामुदायिक वन उपभोक्ता समितिको नाम",
  "क्षत्रफल(हे.)",
  "मुख्य प्रजाति",
  "वनको किसिम(प्राकृतिक्/वृक्षरोपण)",
  "हस्तान्तरण मिति",
  "वनको मौज्दात",
  "वार्षिक निकासी परिमाण (घ. मी)काठ",
  "वार्षिक निकासी परिमाण (घ. मी)दाउरा",
  "सिर्जना गर्ने",
  "परिमार्जन गर्ने",
];

class Samudayikban extends Component {
  constructor(props) {
    super(props);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
  }

  handleSelectMenu(event, item) {
    switch (event) {
      case "edit": {
        alert("this is edit menu");
      }
      case "delete": {
        alert("this is delete menu");
      }
    }
  }
  render() {
    const samudayikbanList = this.props.samudayikbanbibaranDataList.data;

    return (
      <div>
        <SamudayikbanBibaran.List
          buttonName="+ सामुदायिक वन "
          title="सामुदायिक वन"
          data={samudayikbanList}
          headings={headings}
          onSelect={this.handleSelectMenu}
        />
      </div>
    );
  }
}

Samudayikban.propTypes = {
  samudayikbanbibaranDataList: PropTypes.any,
};

Samudayikban.defaultProps = {
  samudayikbanbibaranDataList: {},
};

const mapStateToProps = (state) => ({
  samudayikbanbibaranDataList: state.banbibaran.allsamudayikbanbibaranData,
});

export default connect(mapStateToProps, null)(Samudayikban);
