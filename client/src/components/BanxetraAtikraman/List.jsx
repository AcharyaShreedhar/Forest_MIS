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
    onAdd,
    onSelect,
    pageCount,
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
        <Table responsive striped bordered hover id="banxetraatikraman">
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
              data.map((banxetraatikraman, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {banxetraatikraman.atikramit_area}</td>
                  <td key={index}> {banxetraatikraman.address}</td>
                  <td key={index}> {banxetraatikraman.atikraman_kisim}</td>
                  <td key={index}> {banxetraatikraman.samalagna_ghardhuri}</td>
                  <td key={index}>
                    {" "}
                    {englishToNepaliNumber(banxetraatikraman.atikraman_miti)}
                  </td>
                  <td key={index}> {banxetraatikraman.atikraman_prayojan}</td>
                  <td key={index}> {banxetraatikraman.samrachana_bibaran}</td>
                  <td key={index}> {banxetraatikraman.atikraman_abastha}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, banxetraatikraman, "banxetraatikraman")
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
          pageCount={pageCount}
          onPageClick={onPageClick}
          type="banxetraatikraman"
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
