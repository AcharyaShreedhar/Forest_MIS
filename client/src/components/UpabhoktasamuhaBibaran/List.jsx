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
    role
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
        <Table responsive striped bordered hover id="upabhoktasamuha" size="md">
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
              data.map((samuha, index) => (
                <tr key={`${samuha.consumer_group_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{samuha.darta_no}</td>
                  <td>{samuha.darta_miti}</td>
                  <td>{samuha.samudayik_upavokta_samiti_name}</td>
                  <td>{samuha.perm_addr}</td>
                  <td>{samuha.curr_addr}</td>
                  <td>{samuha.dalit_ghardhuri}</td>
                  <td>{samuha.janjati_ghardhuri}</td>
                  <td>{samuha.anya_ghardhuri}</td>
                  <td>{samuha.female}</td>
                  <td>{samuha.male}</td>
                  <td>{samuha.sampanna}</td>
                  <td>{samuha.madhyam}</td>
                  <td>{samuha.bipanna}</td>
                  <td>{samuha.dalit_rep}</td>
                  <td>{samuha.janjati_rep}</td>
                  <td>{samuha.anya_rep}</td>
                  <td>{samuha.adhyakshya}</td>
                  <td>{samuha.adhyakshya_gender}</td>
                  <td>{samuha.sachib}</td>
                  <td>{samuha.sachib_gender}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, samuha, "upabhoktasamuha")}
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
          type="upabhoktasamuha"
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
