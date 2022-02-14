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
    role,
    officeRole,
    forcePage,
  } = props;
  return (
    <Fragment>
      <div className="card">
        {officeRole > 2 && 
          <div className="button">
            <Button
              type="low"
              size="small"
              name={buttonName}
              onClick={onAdd}
            />
          </div>
        }
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="rastriyaban">
          <thead>
            <tr>
              <th>क्र.स.</th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              {officeRole > 2 &&  <th />}
            </tr>
          </thead>
          <tbody>
            {isNil(data) ? (
              <p>No data Available !!!</p>
            ) : (
              data.map((rban, index) => (
                <tr key={`${rban.rastriyabanbibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {englishToNepaliNumber(rban.darta_no)}</td>
                  <td>{englishToNepaliNumber(rban.darta_miti)}</td>
                  <td> {rban.rastriyaban_naam}</td>
                  <td> {rban.address}</td>
                  <td> {englishToNepaliNumber(rban.area)}</td>
                  <td> {rban.main_species}</td>
                  <td>{englishToNepaliNumber(rban.dalit_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(rban.janjati_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(rban.anya_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(rban.female)}</td>
                  <td>{englishToNepaliNumber(rban.male)}</td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) => onSelect(e, rban, "rastriya")}
                      />
                      </div>
                    </td>
                  }
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <Pagination
          per={per}
          forcePage={forcePage}
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
