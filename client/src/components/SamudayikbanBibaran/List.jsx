import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import { Table } from "react-bootstrap";
import { Button, EditDropdown, Pagination } from "../../components";
import "./SamudayikbanBibaran.scss";

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
        <Table responsive striped bordered hover id="samudayikban">
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
              data.map((sban, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {sban.darta_no}</td>
                  <td key={index}> {sban.samudayikban_name}</td>
                  <td key={index}> {sban.area}</td>
                  <td key={index}> {sban.main_species}</td>
                  <td key={index}> {sban.forest_type}</td>
                  <td key={index}>
                    {englishToNepaliNumber(sban.handover_date)}
                  </td>
                  <td key={index}>
                    {englishToNepaliNumber(sban.renewed_date)}
                  </td>
                  <td key={index}> {sban.nabikaran_abadhi}</td>
                  <td key={index}> {sban.forest_maujdat}</td>
                  <td key={index}> {sban.nikasi_timber}</td>
                  <td key={index}> {sban.nikasi_wood}</td>
                  <td key={index}>
                    {englishToNepaliNumber(sban.renewal_date)}
                  </td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, sban, "samudayik")}
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
          type="samudayikban"
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
