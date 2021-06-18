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
              data.map((bandadelo, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {bandadelo.bandadelo_address}</td>
                  <td key={index}> {bandadelo.ban_type}</td>
                  <td key={index}> {bandadelo.ban_prajati}</td>
                  <td key={index}> {bandadelo.xeti_area}</td>
                  <td key={index}> {bandadelo.niyantran_prayas}</td>   
                  <td key={index}> {bandadelo.niyantran_karta}</td>
                  <td key={index}> {bandadelo.sahabhagi_mahila}</td>
                  <td key={index}> {bandadelo.sahabhagi_purus}</td>
                  <td key={index}> {bandadelo.created_by}</td>
                  <td key={index}> {bandadelo.updated_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, bandadelo, "bandadelo")}
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
