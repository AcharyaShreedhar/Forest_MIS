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
        <Table responsive striped bordered hover id="kabuliyatiban">
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
              data.map((kban, index) => (
                <tr key={`${kban.kabuliyatiban_bibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{kban.darta_no}</td>
                  <td>{englishToNepaliNumber(kban.entry_date)}</td>
                  <td>{kban.samudayik_upavokta_samiti_name}</td>
                  <td>{kban.perm_addr}</td>
                  <td>{kban.curr_addr}</td>
                  <td>{kban.ghardhuri_dalit}</td>
                  <td>{kban.ghardhuri_janjati}</td>
                  <td>{kban.ghardhuri_anya}</td>
                  <td>{kban.ghardhuri_total}</td>
                  <td>{kban.population_female}</td>
                  <td>{kban.population_male}</td>
                  <td>{kban.population_total}</td>
                  <td>{kban.sampannata_starikaran_sampanna}</td>
                  <td>{kban.sampannata_starikaran_madhyam}</td>
                  <td>{kban.sampannata_starikaran_bipanna}</td>
                  <td>{kban.karyasamiti_representation_dalit}</td>
                  <td>{kban.karyasamiti_representation_janjati}</td>
                  <td>{kban.karyasamiti_representation_anya}</td>
                  <td>{kban.adhyakshya_female}</td>
                  <td>{kban.adhyakshya_male}</td>
                  <td>{kban.sachib_female}</td>
                  <td>{kban.sachib_male}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, kban, "kabuliyati")}
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
          type="kabuliyatiban"
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
