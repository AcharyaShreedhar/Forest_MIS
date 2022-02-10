import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { equals, isNil } from "ramda";
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
            // className="text-capitalize"
            name={buttonName}
            onClick={onAdd}
          />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="gharjagga">
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
              data.map((asset, index) => (
                <tr key={`${asset.asset_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{equals(asset.asset_type, 1) ? " घर " : " जग्गा "}</td>
                  <td> {asset.asset_loc}</td>
                  <td> {asset.kitta_no}</td>
                  <td> {asset.home_area}</td>
                  <td> {asset.land_area}</td>
                  <td> {asset.unit}</td>
                  <td> {asset.remarks}</td>
                  {officeRole > 2 && 
                  <td>
                    <div className="edit">
                      <EditDropdown
                       options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, asset)}
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
          type="gharjagga"
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
