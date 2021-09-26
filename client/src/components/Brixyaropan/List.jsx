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
        <Table responsive striped bordered hover id="brixyaropan">
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
              data.map((brixyaropan, index) => (
                <tr key={`${brixyaropan.birxyaropan_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{brixyaropan.brixyaropan_miti} </td>
                  <td>{brixyaropan.xetra} </td>
                  <td>{brixyaropan.area} </td>
                  <td>{brixyaropan.brixyaropan_thegana} </td>
                  <td>{brixyaropan.brixyaropan_kisim} </td>
                  <td>{brixyaropan.brixyaropan_laxya} </td>
                  <td>{brixyaropan.brixyaropan_prajati} </td>
                  <td>{brixyaropan.brixyaropan_pragati} </td>
                  <td>{brixyaropan.brixyaropan_sankhya} </td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, brixyaropan, "brixyaropan")
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
          type="brixyaropan"
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
