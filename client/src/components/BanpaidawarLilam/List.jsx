import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import { Table } from "react-bootstrap";
import { Button, EditDropdown } from "../../components";

function List(props) {
  const { buttonName, headings, data, title, onAdd, onSelect } = props;
  return (
    <Fragment>
      <div className="card">
        <div className="button">
          <Button
            type="low"
            size="small"
            // className="text-capitalize"
            name={buttonName}
            onClick={onAdd}
          />
        </div>
        <div className="titlebar">{title} </div>
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
            {isNil(data) ? (
              <p>No data Available !!!</p>
            ) : (
              data.map((lilam, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}>
                    {englishToNepaliNumber(lilam.lilam_date)}
                  </td>
                  <td key={index}> {lilam.banpaidawar_type}</td>
                  <td key={index}> {lilam.unit}</td>
                  <td key={index}> {lilam.quantity}</td>
                  <td key={index}> {lilam.minimum_price}</td>   
                  <td key={index}> {lilam.sakaar_price}</td>
                  <td key={index}> {lilam.remarks}</td>
                  <td key={index}> {lilam.created_by}</td>
                  <td key={index}> {lilam.updated_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, lilam, "banpaidawarlilam")}
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
};

List.defaultProps = {
  data: [],
  onSelect: () => {},
};

export default List;
