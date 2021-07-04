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
        <Table responsive striped bordered hover id="dharmikban">
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
              data.map((dban, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {dban.darta_no}</td>
                  <td key={index}> {dban.dharmikban_name}</td>
                  <td key={index}> {dban.community_name}</td>
                  <td key={index}> {dban.area}</td>
                  <td key={index}> {dban.main_species}</td>
                  <td key={index}> {dban.forest_type}</td>
                  <td key={index}>
                    {" "}
                    {englishToNepaliNumber(dban.handover_date)}
                  </td>
                  <td key={index}>
                    {" "}
                    {englishToNepaliNumber(dban.renewed_date)}
                  </td>
                  <td key={index}> {dban.nabikaran_abadhi}</td>
                  <td key={index}> {dban.forest_maujdat}</td>
                  <td key={index}>
                    {" "}
                    {englishToNepaliNumber(dban.renewaldate)}
                  </td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, dban, "dharmik")}
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
          type="dharmikban"
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
