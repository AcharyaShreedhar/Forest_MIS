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
        <Table responsive striped bordered hover id="banpaidawar">
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
              data.map((osarpasar, index) => (
                <tr key={`${osarpasar.paidawar_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {osarpasar.arthik_barsa}</td>
                  <td> {osarpasar.kaath}</td>
                  <td> {osarpasar.daura}</td>
                  <td> {osarpasar.lavgrahi_sankhya}</td>
                  <td> {osarpasar.mulyaabhibridi_kar}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, osarpasar, "banpaidawarosarpasar")
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
          onPageClick={onPageClick}
          pageCount={pageCount}
          type="banpaidawar"
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
