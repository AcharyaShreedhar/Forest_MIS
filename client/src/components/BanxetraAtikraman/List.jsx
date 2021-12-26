import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil,equals } from "ramda";
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
    role
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
                  <td> {equals(banxetraatikraman.atikraman_kisim, 1)
            ? "संस्थागत"
            : "व्यक्तिगत"}</td>
                  <td>{banxetraatikraman.dalit_ghardhuri}</td>
                  <td>{banxetraatikraman.janjati_ghardhuri}</td>
                  <td>{banxetraatikraman.anya_ghardhuri}</td>
                  <td>
                    {englishToNepaliNumber(banxetraatikraman.atikraman_miti)}
                  </td>
                  <td> {banxetraatikraman.atikraman_prayojan}</td>
                  <td> {banxetraatikraman.samrachana_bibaran}</td>
                  <td>
                    {equals(banxetraatikraman.atikraman_abastha, 1)
                      ? "नयाँ"
                      : "पुरानो"}
                  </td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
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
