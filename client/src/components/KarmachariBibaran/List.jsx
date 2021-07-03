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
    user,
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
        <Table responsive striped bordered hover id="karmacharibibaran">
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
              data.map((karmacharibibaran, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}>
                    {" "}
                    {karmacharibibaran.emp_fname_nep}{" "}
                    {karmacharibibaran.emp_lname_nep}
                  </td>
                  <td key={index}> {karmacharibibaran.emp_add_perm_prov} </td>
                  <td key={index}> {karmacharibibaran.emp_add_perm_dist} </td>
                  <td key={index}> {karmacharibibaran.emp_add_perm_mun} </td>
                  <td key={index}> {karmacharibibaran.emp_add_perm_ward} </td>
                  <td key={index}> {karmacharibibaran.emp_add_perm_tole} </td>
                  <td key={index}> {karmacharibibaran.emp_add_temp_prov} </td>
                  <td key={index}> {karmacharibibaran.emp_add_temp_dist} </td>
                  <td key={index}> {karmacharibibaran.emp_add_temp_mun} </td>
                  <td key={index}> {karmacharibibaran.emp_add_temp_ward} </td>
                  <td key={index}> {karmacharibibaran.emp_add_temp_tole} </td>
                  <td key={index}>
                    {" "}
                    {karmacharibibaran.emp_phone1}{" "}
                    {karmacharibibaran.emp_phone2}{" "}
                  </td>
                  <td key={index}> {karmacharibibaran.emp_email} </td>
                  <td key={index}> {karmacharibibaran.emp_office_id} </td>
                  <td key={index}> {karmacharibibaran.emp_dept_id} </td>
                  <td key={index}> {karmacharibibaran.emp_level_id} </td>
                  <td key={index}> {karmacharibibaran.emp_post} </td>
                  <td key={index}> {karmacharibibaran.emp_rank} </td>
                  <td key={index}>
                    {englishToNepaliNumber(karmacharibibaran.emp_appoint_date)}
                  </td>
                  <td key={index}> {karmacharibibaran.emp_status} </td>
                  <td key={index}> {karmacharibibaran.created_by} </td>
                  <td key={index}> {karmacharibibaran.updated_by} </td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, karmacharibibaran, "karmacharibibaran")
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
          type="karmacharibibaran"
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
