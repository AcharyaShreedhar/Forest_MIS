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
    onPageClick,
    pageCount,
    pers,
    per,
    onPer,
    onAdd,
    onSelect,
    role,
    officeRole,
    forcePage,
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
        <Table responsive striped bordered hover id="banyajantuuddar">
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
              data.map((uddar, index) => (
                <tr key={`${uddar.banyajantu_uddar_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{englishToNepaliNumber(uddar.miti)}</td>
                  <td> {uddar.sthaniya_taha}</td>
                  <td> {uddar.samaya}</td>
                  <td> {uddar.samraxit_xetra}</td>
                  <td> {uddar.banyajantuko_naam}</td>
                  <td> {uddar.banyajantuko_umer}</td>
                  <td>
                    {equals(uddar.banyajantuko_abastha, 1) ? "मृत" : "जिउॅदो"}
                  </td>
                  <td> {uddar.mareko_karan}</td>
                  <td> {uddar.banxetra_duri}</td>
                  <td> {uddar.anya_bibaran}</td>
                  <td> {uddar.remarks}</td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) => onSelect(e, uddar, "banyajantuuddar")}
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
          type="banyajantuuddar"
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
