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
              data.map((banxetra, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {banxetra.arthik_barsa}</td>
                  <td key={index}> {banxetra.upalabdakarta_naam}</td>
                  <td key={index}> {banxetra.upalabdha_address}</td>
                  <td key={index}> {banxetra.xetrafal_temp}</td>
                  <td key={index}> {banxetra.xetrafal_perm}</td>
                  <td key={index}> {banxetra.samaya_abadhi}</td>
                  <td key={index}> {banxetra.rukh_hataunuparne}</td>
                  <td key={index}> {banxetra.rukh_hatayeko}</td>
                  <td key={index}> {banxetra.sattajagga_area}</td>
                  <td key={index}> {banxetra.xetipurti_brixyaropan}</td>
                  <td key={index}> {banxetra.sattajagga_brixyaropan}</td>
                  <td key={index}> {banxetra.leejrakam_adhyaadhik}</td>
                  <td key={index}> {banxetra.barsik_partibedan}</td>
                  <td key={index}> {banxetra.prapta_rajaswo}</td>
                  <td key={index}> {banxetra.created_by}</td>
                  <td key={index}> {banxetra.updated_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, banxetra)}
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
