import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Button, EditDropdown } from "..";

function List(props) {
  const { buttonName, headings, data, title,onPageClick,pageCount, onAdd, onSelect } = props;
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
              data.map((uddar, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}>
                    {englishToNepaliNumber(uddar.miti)}
                  </td>
                  <td key={index}> {uddar.sthaniya_taha}</td>
                  <td key={index}> {uddar.samaya}</td>
                  <td key={index}> {uddar.samraxit_xetra}</td>
                  <td key={index}> {uddar.banyajantuko_naam}</td>   
                  <td key={index}> {uddar.banyajantuko_umer}</td>
                  <td key={index}> {uddar.banyajantuko_abastha}</td>
                  <td key={index}> {uddar.mareko_karan}</td>
                  <td key={index}> {uddar.banxetra_duri}</td>
                  <td key={index}> {uddar.anya_bibaran}</td>
                  <td key={index}> {uddar.remarks}</td>
                  <td key={index}> {uddar.created_by}</td>
                  <td key={index}> {uddar.updated_by}</td>
            
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, uddar, "banyajantuuddar")}
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
