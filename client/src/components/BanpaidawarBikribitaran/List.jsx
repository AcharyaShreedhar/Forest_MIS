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
        {officeRole > 2 && 
          <div className="button">
            <Button
              type="low"
              size="small"
              name={buttonName}
              onClick={onAdd}
            />
          </div>
        }
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="banpaidawarbikribitaran">
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
              data.map((bikri, index) => (
                <tr key={`${bikri.bikribitaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {bikri.bikri_miti}</td>
                  <td> {bikri.bandpaidawar_kisim}</td>
                  <td> {bikri.ekai}</td>
                  <td> {bikri.aantarik_dar}</td>
                  <td> {bikri.aantarik_parinam}</td>
                  <td> {bikri.aantarik_rakam}</td>
                  <td> {bikri.aaapurti_dar}</td>
                  <td> {bikri.aapurti_parinam}</td>
                  <td> {bikri.aapurti_rakam}</td>
                  <td> {bikri.bahiya_dar}</td>
                  <td> {bikri.bahiya_parinam}</td>
                  <td> {bikri.bahiya_rakam}</td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) =>
                          onSelect(e, bikri, "banpaidawarbikribitaran")
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
          type="banpaidawarbikribitaran"
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
