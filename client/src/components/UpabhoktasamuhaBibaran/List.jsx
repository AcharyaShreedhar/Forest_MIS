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
            // className="text-capitalize"
            name={buttonName}
            onClick={onAdd}
          />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="upabhoktasamuha">
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
                  <td>{samuha.registration_no}</td>
                  <td>{samuha.registration_date}</td>
                  <td>{samuha.samudayik_upavokta_samiti_name}</td>
                  <td>{samuha.perm_addr}</td>
                  <td>{samuha.curr_addr}</td>
                  <td>{samuha.ghardhuri_dalit}</td>
                  <td>{samuha.ghardhuri_janjati}</td>
                  <td>{samuha.ghardhuri_anya}</td>
                  <td>{samuha.ghardhuri_total}</td>
                  <td>{samuha.population_female}</td>
                  <td>{samuha.population_male}</td>
                  <td>{samuha.population_total}</td>
                  <td>{samuha.sampannata_starikaran_sampanna}</td>
                  <td>{samuha.sampannata_starikaran_madhyam}</td>
                  <td>{samuha.sampannata_starikaran_bipanna}</td>
                  <td>{samuha.karyasamiti_representation_dalit}</td>
                  <td>{samuha.karyasamiti_representation_janjati}</td>
                  <td>{samuha.karyasamiti_representation_anya}</td>
                  <td>{samuha.adhyakshya_female}</td>
                  <td>{samuha.adhyakshya_male}</td>
                  <td>{samuha.sachib_female}</td>
                  <td>{samuha.sachib_male}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
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
