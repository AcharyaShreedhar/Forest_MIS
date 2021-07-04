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
            // className="text-capitalize"
            name={buttonName}
            onClick={onAdd}
          />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="banxetraanyaprayojan">
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
              data.map((banxetra, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}>
                    {" "}
                    {englishToNepaliNumber(banxetra.arthik_barsa)}
                  </td>
                  <td key={index}> {banxetra.uplabdakarta_naam}</td>
                  <td key={index}> {banxetra.upalabdha_address}</td>
                  <td key={index}> {banxetra.xetrafal_temp}</td>
                  <td key={index}> {banxetra.xetrafal_perm}</td>
                  <td key={index}> {banxetra.samaya_abadhi}</td>
                  <td key={index}> {banxetra.rukh_hataunuparne}</td>
                  <td key={index}> {banxetra.rukh_hatayeko}</td>
                  <td key={index}> {banxetra.sattajagga_area}</td>
                  <td key={index}> {banxetra.xetipurti_brixyaropan}</td>
                  <td key={index}> {banxetra.sattajagga_brixyaropan}</td>
                  <td key={index}> {banxetra.leejrakam_adhyaadhik}</td>
                  <td key={index}> {banxetra.barsik_pratibedan}</td>
                  <td key={index}> {banxetra.prapta_rajaswo}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, banxetra, "banxetraanyaprayojan")
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
          type="banxetraanyaprayojan"
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
