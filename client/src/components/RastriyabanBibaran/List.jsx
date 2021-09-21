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
    pageCount,
    onAdd,
    onSelect,
    onPageClick,
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
        <Table responsive striped bordered hover id="rastriyaban">
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
              data.map((rban, index) => (
                <tr key={`${rban.rastriyabanbibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {rban.darta_no}</td>
                  <td>{englishToNepaliNumber(rban.darta_miti)}</td>
                  <td> {rban.rastriyaban_naam}</td>
                  <td> {rban.address}</td>
                  <td> {rban.area}</td>
                  <td> {rban.main_species}</td>
                  <td>{rban.dalit_ghardhuri}</td>
                  <td>{rban.janjati_ghardhuri}</td>
                  <td>{rban.anya_ghardhuri}</td>
                  <td>{rban.female}</td>
                  <td>{rban.male}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, rban, "rastriya")}
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
          type="rastriyaban"
        />
      </div>
    </Fragment>
  );
}

List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  current: PropTypes.number.isRequired,
  per: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pers: PropTypes.arrayOf(PropTypes.any),
  size: PropTypes.oneOf(["small", "large"]),
  suffix: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onPer: PropTypes.func.isRequired,
};

List.defaultProps = {
  data: [],
  onSelect: () => {},
  current: 1,
  // Item counts per page
  per: 25,
  // Total page counts
  total: 2,
  // Steps
  pers: [25, 50, "all"],
  size: "small",
  suffix: "",
  onChange: (e) => {},
  onPer: (e) => {},
};

export default List;
