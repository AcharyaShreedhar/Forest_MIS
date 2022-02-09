import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil, equals } from "ramda";
import { Table } from "react-bootstrap";
import { Button, EditDropdown, Pagination } from "../../components";
import "./SamudayikbanBibaran.scss";

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
        <div className="button">
          <Button type="low" size="small" name={buttonName} onClick={onAdd} />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="samudayikban" size="md">
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
              data.map((sban, index) => (
                <tr key={`${sban.darta_no}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {sban.darta_no}</td>
                  <td> {sban.samudayikban_name}</td>
                  <td> {englishToNepaliNumber(sban.area)}</td>
                  <td> {sban.main_species}</td>
                  <td>
                    {equals(sban.forest_type, 1) ? "प्राकृतिक्" : "वृक्षरोपण"}
                  </td>
                  <td>{englishToNepaliNumber(sban.dalit_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(sban.janjati_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(sban.anya_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(sban.female)}</td>
                  <td>{englishToNepaliNumber(sban.male)}</td>
                  <td>{englishToNepaliNumber(sban.handover_date)}</td>
                  <td>{englishToNepaliNumber(sban.renewed_date)}</td>
                  <td> {sban.nabikaran_abadhi}</td>
                  <td> {englishToNepaliNumber(sban.forest_maujdat)}</td>
                  <td> {englishToNepaliNumber(sban.timber)}</td>
                  <td> {englishToNepaliNumber(sban.wood)}</td>
                  <td>
                    {" "}
                    {equals(sban.forest_type, 1)
                      ? "स्विकृत भएको"
                      : "स्विकृत नभएको"}
                  </td>
                  <td>{englishToNepaliNumber(sban.renewal_date)}</td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) => onSelect(e, sban, "samudayik")}
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
          type="samudayikban"
        />
      </div>
    </Fragment>
  );
}

List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  current: PropTypes.number.isRequired,
  per: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pers: PropTypes.arrayOf(PropTypes.any),
  size: PropTypes.oneOf(["small", "large"]),
  suffix: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onPer: PropTypes.func.isRequired,
};

List.defaultProps = {
  data: [],
  onSelect: () => {},
  current: 1,
  // Item counts per page
  per: 25,
  // Total page counts
  total: 2,
  // Steps
  pers: [25, 50, "all"],
  size: "small",
  suffix: "",
  onChange: (e) => {},
  onPer: (e) => {},
};

export default List;
