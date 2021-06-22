import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Button, EditDropdown } from "../../components";

function List(props) {
  const {
    buttonName,
    headings,
    data,
    title,
    pageCount,
    user,
    onAdd,
    onSelect,
    onPageClick,
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
              data.map((sawarisadhan, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {sawarisadhan.vehicle_type}</td>
                  <td key={index}> {sawarisadhan.vehicle_no}</td>
                  <td key={index}> {sawarisadhan.engine_no}</td>
                  <td key={index}> {sawarisadhan.chasis_no}</td>
                  <td key={index}> {sawarisadhan.acquired_source}</td>
                  <td key={index}> {sawarisadhan.acquired_date}</td>
                  <td key={index}> {sawarisadhan.acquired_price}</td>
                  <td key={index}> {sawarisadhan.manufacturer_country}</td>
                  <td key={index}> {sawarisadhan.manufacturer_comp}</td>
                  <td key={index}> {sawarisadhan.model_name}</td>
                  <td key={index}> {sawarisadhan.manufactured_date}</td>
                  <td key={index}> {sawarisadhan.remarks}</td>
                  <td key={index}> {sawarisadhan.created_by}</td>
                  <td key={index}> {sawarisadhan.updated_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, sawarisadhan, "yearlysawarisadhan")
                        }
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
