import React, { Component } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { isNil } from "ramda";

import { Table } from "react-bootstrap";
import { EditDropdown, Icon } from "../../../components";
import "./Samudayikban.scss";

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
        <div className="titlebar">सामुदायिक वन </div>
        <div className="card">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>क्र.स.</th>
                {headings.map((heading, index) => (
                  <th key={index}>{heading}</th>
                ))}
                <th />
              </tr>
            </thead>
            <tbody>
              {isNil(samudayikbanList) ? (
                <p>No data Available !!!</p>
              ) : (
                samudayikbanList.map((sban, index) => (
                  <tr>
                    <td>{englishToNepaliNumber(index + 1)}</td>
                    <td key={index}> {sban.samudayikban_id}</td>
                    <td key={index}> {sban.samudayikban_name}</td>
                    <td key={index}> {sban.area}</td>
                    <td key={index}> {sban.main_species}</td>
                    <td key={index}> {sban.forest_type}</td>
                    <td key={index}> {sban.handover_date}</td>
                    <td key={index}> {sban.forest_maujdat}</td>
                    <td key={index}> {sban.nikasi_timber}</td>
                    <td key={index}> {sban.nikasi_wood}</td>
                    <td key={index}> {sban.created_by}</td>
                    <td key={index}> {sban.updated_by}</td>
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={["Edit", "Delete"]}
                          onChange={this.handleSelectMenu}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
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
