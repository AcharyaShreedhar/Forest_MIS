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
            //className="text-capitalize"
            name={buttonName}
            onClick={onAdd}
          />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="nursery">
          <thead>
            <tr>
              <th>क्र.सं.</th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              {officeRole > 2 &&  <th />}
            </tr>
          </thead>
          <tbody>
            {isNil(data) ? (
              <p>No data available !!!!</p>
            ) : (
              data.map((biruwa, index) => (
                <tr key={`${biruwa.biruwa_utpadan_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {biruwa.arthik_barsa} </td>
                  <td>
                    {equals(biruwa.biruwa_type, 1)
                      ? "बहुउदेशिय"
                      : equals(biruwa.biruwa_type, 2)
                      ? "जडिबुटी"
                      : "वहुवर्षिय"}
                  </td>
                  <td>
                    {equals(biruwa.utpadan_medium, 1)
                      ? "डिभिजन बन कार्यालय "
                      : equals(biruwa.utpadan_medium, 2)
                      ? "समुह मार्फत "
                      : equals(biruwa.utpadan_medium, 3)
                      ? "निजी"
                      : "खरिद"}
                  </td>
                  <td> {biruwa.biruwa_sankhya} </td>
                  <td> {biruwa.narsari_sankhya} </td>
                  <td> {biruwa.barga} </td>
                  <td> {biruwa.laxya} </td>
                  <td> {biruwa.pragati} </td>
                  <td> {biruwa.remarks} </td>
                  {console.log("off", officeRole)}
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) => onSelect(e, biruwa, "biruwautpadan")}
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
          type="nursery"
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
