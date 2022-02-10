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
        <Table responsive striped bordered hover id="karmacharibibaran">
          <thead>
            <tr>
              <th>क्र.सं.</th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              {officeRole > 2 &&  <th />}
            </tr>
          </thead>
          <tbody>
            {isNil(data) ? (
              <p>No data available !!!!</p>
            ) : (
              data.map((emp, index) => (
                <tr key={`${emp.emp_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>
                    {emp.emp_fname_nep} {emp.emp_lname_nep}
                  </td>
                  <td>{emp.emp_add_perm_prov} प्रदेश, {emp.emp_add_perm_dist} जिल्ला, {emp.emp_add_perm_mun}, {emp.emp_add_perm_ward},{emp.emp_add_perm_tole}  </td>
                  <td>{emp.emp_add_temp_prov} प्रदेश, {emp.emp_add_temp_dist} जिल्ला, {emp.emp_add_temp_mun}, {emp.emp_add_temp_ward},{emp.emp_add_temp_tole}  </td>
                  <td>
                    {emp.emp_phone1}  {emp.emp_phone2}
                  </td>
                  <td>{emp.emp_email} </td>
                  <td>{emp.emp_office_id} </td>
                  <td>{emp.emp_dept_id} </td>
                  <td>{emp.emp_level_id} </td>
                  <td>{emp.emp_post} </td>
                  <td>{emp.emp_rank} </td>
                  <td>{englishToNepaliNumber(emp.emp_appoint_date)}</td>
                  <td> {emp.emp_status} </td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) => onSelect(e, emp, "karmacharibibaran")}
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
