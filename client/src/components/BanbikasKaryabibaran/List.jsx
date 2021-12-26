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
    pageCount,
    onAdd,
    onSelect,
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
        <Table responsive striped bordered hover id="banbikas">
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
              data.map((bkas, index) => (
                <tr key={`${bkas.banbikas_karyabibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {bkas.banbikas_karyabibaran}</td>
                  <td> {bkas.banbikas_ikai}</td>
                  <td> {bkas.banbikas_parinam}</td>
                  <td> {bkas.banbikas_bajetkharcha}</td>
                  <td>
                    {equals(bkas.ban_type, 1)
                      ? "बैज्ञानीक सामुदायिक वन"
                      : equals(bkas.ban_type, 2)
                      ? "अबैज्ञानीक सामुदायिक वन"
                      : equals(bkas.ban_type, 3)
                      ? "कबुलियती बन"
                      : equals(bkas.ban_type, 4)
                      ? "धार्मिक बन"
                      : equals(bkas.ban_type, 5)
                      ? "चक्ला बन"
                      : equals(bkas.ban_type, 6)
                      ? "साझेदारी बन"
                      : equals(bkas.ban_type, 7)
                      ? "व्यबसायीक कबुलियती बन"
                      : equals(bkas.ban_type, 8)
                      ? "निजी बन"
                      : "राष्ट्रिय बन"}
                  </td>

                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, bkas)}
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
          type="banbikas"
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
