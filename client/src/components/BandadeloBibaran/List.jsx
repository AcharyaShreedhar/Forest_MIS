import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { equals,isNil } from "ramda";
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
            name={buttonName}
            onClick={onAdd}
          />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="bandadelo">
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
              data.map((bandadelo, index) => (
                <tr key={`${bandadelo.bandadelo_bibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {bandadelo.bandadelo_address}</td>
                  <td>
                    {equals(bandadelo.ban_type, 1)
                      ? "बैज्ञानीक सामुदायिक वन"
                      : equals(bandadelo.ban_type, 2)
                      ? "अबैज्ञानीक सामुदायिक वन"
                      : equals(bandadelo.ban_type, 3)
                      ? "कबुलियती बन"
                      : equals(bandadelo.ban_type, 4)
                      ? "धार्मिक बन"
                      : equals(bandadelo.ban_type, 5)
                      ? "चक्ला बन"
                      : equals(bandadelo.ban_type, 6)
                      ? "साझेदारी बन"
                      : equals(bandadelo.ban_type, 7)
                      ? "व्यबसायीक कबुलियती बन"
                      : equals(bandadelo.ban_type, 8)
                      ? "निजी बन"
                      : "राष्ट्रिय बन"}
                  </td>
                  <td> {bandadelo.ban_prajati}</td>
                  <td> {bandadelo.xeti_area}</td>
                  <td> {bandadelo.niyantran_prayas}</td>
                  <td> {bandadelo.niyantran_karta}</td>
                  <td> {bandadelo.sahabhagi_mahila}</td>
                  <td> {bandadelo.sahabhagi_purus}</td>
                  <td> {englishToNepaliNumber(bandadelo.bandadelo_miti)}</td>
                  <td> {bandadelo.man_injured}</td>
                  <td> {bandadelo.man_dead}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, bandadelo, "bandadelo")}
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
          type="bandadelo"
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
