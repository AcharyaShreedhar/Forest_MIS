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
                <tr key={`${banxetraatikraman.banxetra_atikraman_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {banxetraatikraman.atikramit_area}</td>
                  <td> {banxetraatikraman.address}</td>
                  <td> {banxetraatikraman.atikraman_kisim}</td>
                  <td>{banxetraatikraman.dalit_ghardhuri}</td>
                  <td>{banxetraatikraman.janjati_ghardhuri}</td>
                  <td>{banxetraatikraman.anya_ghardhuri}</td>
                  <td>
                    {" "}
                    {englishToNepaliNumber(banxetraatikraman.atikraman_miti)}
                  </td>
                  <td> {banxetraatikraman.atikraman_prayojan}</td>
                  <td> {banxetraatikraman.samrachana_bibaran}</td>
                  <td> {banxetraatikraman.atikraman_abastha}</td>
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
