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
    role,
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
                <tr key={`${banxetra.banxetra_anyaprayojan_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{englishToNepaliNumber(banxetra.arthik_barsa)}</td>
                  <td>{banxetra.uplabdakarta_naam}</td>
                  <td>{banxetra.upalabdha_address}</td>
                  <td>{banxetra.xetrafal_temp}</td>
                  <td>{banxetra.xetrafal_perm}</td>
                  <td>{banxetra.samaya_abadhi}</td>
                  <td>{banxetra.rukh_hataunuparne}</td>
                  <td>{banxetra.rukh_hatayeko}</td>
                  <td>{banxetra.sattajagga_area}</td>
                  <td>{banxetra.xetipurti_brixyaropan}</td>
                  <td>{banxetra.sattajagga_brixyaropan}</td>
                  <td>{banxetra.leejrakam_adhyaadhik}</td>
                  <td>{banxetra.barsik_pratibedan}</td>
                  <td>{banxetra.prapta_rajaswo}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
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
          forcePage={forcePage}
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
