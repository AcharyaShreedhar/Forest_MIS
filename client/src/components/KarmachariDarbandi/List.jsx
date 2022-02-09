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
        <Table responsive striped bordered hover id="karmacharidarbandi">
          <thead>
            <tr>
              <th>क्र.सं.</th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {isNil(data) ? (
              <p>No data available !!!!</p>
            ) : (
              data.map((karmachari, index) => (
                <tr key={`${karmachari.karmachari_darbandi_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {karmachari.post} </td>
                  <td> {karmachari.karyalaya} </td>
                  <td> {karmachari.thegana} </td>
                  <td> {karmachari.kayam_darbandi_sankhya} </td>
                  <td> {karmachari.padpurti_sankhya} </td>
                  <td> {karmachari.khali_sankhya} </td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) =>
                          onSelect(e, karmachari, "karmacharidarbandi")
                        }
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
          type="karmacharidarbandi"
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
