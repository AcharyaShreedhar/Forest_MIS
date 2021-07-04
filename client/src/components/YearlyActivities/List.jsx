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
        <Table responsive striped bordered hover id="yearlyactivities">
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
              data.map((activities, index) => (
                <tr>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td key={index}> {activities.samudayikban_naam}</td>
                  <td key={index}> {activities.fiscal_year}</td>
                  <td key={index}> {activities.area}</td>
                  <td key={index}>
                    {" "}
                    {activities.production_from_conservation_timber}
                  </td>
                  <td key={index}>
                    {" "}
                    {activities.production_from_conservation_wood}
                  </td>
                  <td key={index}>
                    {" "}
                    {activities.employment_generated_workingday}
                  </td>
                  <td key={index}> {activities.withingroup_timber}</td>
                  <td key={index}> {activities.withingroup_wood}</td>
                  <td key={index}> {activities.outsidegroup_timber}</td>
                  <td key={index}> {activities.outsidegroup_wood}</td>
                  <td key={index}> {activities.maujdat_timber}</td>
                  <td key={index}> {activities.maujdat_wood}</td>
                  <td key={index}> {activities.annual_income}</td>
                  <td key={index}> {activities.annual_expenditure}</td>
                  <td key={index}> {activities.netannual_saving}</td>
                  <td key={index}> {activities.niyamit_rojgar_count}</td>
                  <td key={index}> {activities.community_udhyam_bibaran}</td>
                  <td key={index}> {activities.annual_bibaran}</td>
                  <td key={index}> {activities.lekha_parikshyan}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, activities, "yearlyactivities")
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
          type="bandadelo"
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
