import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { equals, isNil } from "ramda";
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
          <Button type="low" size="small" name={buttonName} onClick={onAdd} />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="dharmikban" size="md">
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
              data.map((dban, index) => (
                <tr key={`${dban.dharmikban_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{dban.darta_no}</td>
                  <td>{dban.dharmikban_name}</td>
                  <td>{dban.community_name}</td>
                  <td>{dban.area}</td>
                  <td>{dban.main_species}</td>
                  <td>
                    {equals(dban.forest_type, 1) ? "प्राकृतिक्" : "वृक्षरोपण"}
                  </td>
                  <td>{dban.dalit_ghardhuri}</td>
                  <td>{dban.janjati_ghardhuri}</td>
                  <td>{dban.anya_ghardhuri}</td>
                  <td>{dban.female}</td>
                  <td>{dban.male}</td>
                  <td>{englishToNepaliNumber(dban.handover_date)}</td>
                  <td>{englishToNepaliNumber(dban.renewed_date)}</td>
                  <td>{dban.nabikaran_abadhi}</td>
                  <td>{dban.forest_maujdat}</td>
                  <td>{englishToNepaliNumber(dban.renewal_date)}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, dban, "dharmik")}
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
          type="dharmikban"
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
