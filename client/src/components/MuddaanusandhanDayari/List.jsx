import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import ReactPaginate from "react-paginate";
import { Table } from "react-bootstrap";
import { Button, EditDropdown } from "../../components";

function List(props) {
  const { buttonName, headings, data, title, onAdd, onSelect,pageCount, onPageClick  } = props;
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
              data.map((mudda, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {mudda.jaheri_partibedan_miti}</td>
                  <td key={index}> {mudda.kasurko_kisim}</td>
                  <td key={index}> {mudda.bigo_pariman	}</td>
                  <td key={index}> {mudda.jaggako_area}</td>
                  <td key={index}> {mudda.jaggako_thegana}</td>
                  <td key={index}> {mudda.abhiyog_miti}</td>
                  <td key={index}> {mudda.abhiyog_nikaya}</td>
                  <td key={index}> {mudda.abhiyog_jariwana}</td>
                  <td key={index}> {mudda.kaid}</td>
                  <td key={index}> {mudda.bojbahak_jafat_maagdabi}</td>
                  <td key={index}> {mudda.pratibadi_sankhya}</td>
                  <td key={index}> {mudda.thunchek_dharauti}</td>
                  <td key={index}> {mudda.sadharan_tarekh}</td>
                  <td key={index}> {mudda.thuna_aadhes}</td>
                  <td key={index}> {mudda.faisala_miti}</td>
                  <td key={index}> {mudda.faisala_jariwana}</td>
                  <td key={index}> {mudda.faisala_kaid}</td>
                  <td key={index}> {mudda.bojbahak_jafat}</td>
                  <td key={index}> {mudda.created_by}</td>
                  <td key={index}> {mudda.updated_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, mudda, "muddaanusandhandayari")}
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <div className="paginationStyle">
        <ReactPaginate
          previousLabel={"PREV"}
          nextLabel={"NEXT"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onPageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
        </div>
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
