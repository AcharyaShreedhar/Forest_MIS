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
    onPageClick,
    pageCount,
    onAdd,
    onSelect,
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
        <Table responsive striped bordered hover id="banyajantuxetirahat">
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
              data.map((xeti, index) => (
                <tr key={`${xeti.banyajantuxeti_bibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{xeti.pidit_name}</td>
                  <td>{xeti.nagarikta_no}</td>
                  <td>{xeti.pidit_address}</td>
                  <td>{xeti.upabhoktasamiti_name}</td>
                  <td>{xeti.xetigarne_animal}</td>
                  <td>{englishToNepaliNumber(xeti.xeti_miti)}</td>
                  <td>{xeti.ghatana_address}</td>
                  <td>{xeti.jagga_bibaran}</td>
                  <td>{xeti.man_injury}</td>
                  <td>{xeti.ghargoth_xeti}</td>
                  <td>{xeti.pasudhan_xeti}</td>
                  <td>{xeti.balinali_noksani}</td>
                  <td>{xeti.anna_bhandaran}</td>
                  <td>{xeti.mag_rakam}</td>
                  <td>{xeti.samitiko_mulyankan_rakam}</td>
                  <td>{xeti.vuktani_rakam}</td>
                  <td>{xeti.remarks}</td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) =>
                          onSelect(e, xeti, "banyajantuxetirahat")
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
          type="banyajantuxetirahat"
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
