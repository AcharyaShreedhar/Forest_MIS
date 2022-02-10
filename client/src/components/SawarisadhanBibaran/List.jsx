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
            name={buttonName}
            onClick={onAdd}
          />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="vehicle">
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
              data.map((sawarisadhan, index) => (
                <tr key={`${sawarisadhan.vehicle_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{sawarisadhan.vehicle_type}</td>
                  <td>{sawarisadhan.vehicle_no}</td>
                  <td>{sawarisadhan.engine_no}</td>
                  <td>{sawarisadhan.chasis_no}</td>
                  <td>{sawarisadhan.acquired_source}</td>
                  <td>{sawarisadhan.acquired_date}</td>
                  <td>{sawarisadhan.acquired_price}</td>
                  <td>{sawarisadhan.manufacturer_country}</td>
                  <td>{sawarisadhan.manufacturer_comp}</td>
                  <td>{sawarisadhan.model_name}</td>
                  <td>{sawarisadhan.manufactured_date}</td>
                  <td>{sawarisadhan.remarks}</td>                  
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) =>
                            onSelect(e, sawarisadhan, "yearlysawarisadhan")
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
          type="vehicle"
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
