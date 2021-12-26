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
                <tr key={`${activities.activities_info_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{activities.samudayikban_naam}</td>
                  <td>{activities.fiscal_year}</td>
                  <td>{activities.area}</td>
                  <td>{activities.production_from_conservation_timber}</td>
                  <td>{activities.production_from_conservation_wood}</td>
                  <td>{activities.employment_generated_workingday}</td>
                  <td>{activities.withingroup_timber}</td>
                  <td>{activities.withingroup_wood}</td>
                  <td>{activities.outsidegroup_timber}</td>
                  <td>{activities.outsidegroup_wood}</td>
                  <td>{activities.maujdat_timber}</td>
                  <td>{activities.maujdat_wood}</td>
                  <td>{activities.annual_income}</td>
                  <td>{activities.annual_expenditure}</td>
                  <td>{activities.netannual_saving}</td>
                  <td>{activities.niyamit_rojgar_count}</td>
                  <td>{activities.community_udhyam_bibaran}</td>
                  <td>{activities.annual_bibaran}</td>
                  <td>{activities.lekha_parikshyan}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
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
