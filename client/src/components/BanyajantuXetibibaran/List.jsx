import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import { Table } from "react-bootstrap";
import { Button, EditDropdown, Pagination } from "../../components";

function List(props) {
  const {
    buttonName,
    headings,
    data,
    title,
    onPageClick,
    pageCount,
    onAdd,
    onSelect,
    pers,
    per,
    onPer,
  } = props;
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
        <Table responsive striped bordered hover id="banyajantuxetirahat">
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
              data.map((xeti, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {xeti.pidit_name}</td>
                  <td key={index}> {xeti.pidit_address}</td>
                  <td key={index}> {xeti.jagga_bibaran}</td>
                  <td key={index}> {xeti.nagarikta_no}</td>
                  <td key={index}> {xeti.upabhoktasamiti_name}</td>
                  <td key={index}> {xeti.xetigarne_animal}</td>
                  <td key={index}>{englishToNepaliNumber(xeti.xeti_miti)}</td>
                  <td key={index}> {xeti.pasudhan_ghargoth}</td>
                  <td key={index}> {xeti.man_injury}</td>
                  <td key={index}> {xeti.mag_rakam}</td>
                  <td key={index}> {xeti.samitiko_mulyankan_rakam}</td>
                  <td key={index}> {xeti.vuktani_rakam}</td>
                  <td key={index}> {xeti.remarks}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, xeti, "banyajantuxetirahat")
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <Pagination
          per={per}
          pers={pers}
          onPer={onPer}
          onPageClick={onPageClick}
          pageCount={pageCount}
          type="banyajantuxetirahat"
        />
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
