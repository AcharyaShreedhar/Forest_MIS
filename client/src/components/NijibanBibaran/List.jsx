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
        <Table responsive striped bordered id="nijiban">
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
              data.map((nban, index) => (
                <tr key={`${nban.nijiban_bibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{nban.darta_no}</td>
                  <td>{nban.swikrit_miti}</td>
                  <td>{nban.nijiban_dhaniko_naam}</td>
                  <td>{nban.perm_addr}</td>
                  <td>{nban.curr_addr}</td>
                  <td> {englishToNepaliNumber(nban.area)}</td>
                  <td>{englishToNepaliNumber(nban.dalit_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(nban.janjati_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(nban.anya_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(nban.female)}</td>
                  <td>{englishToNepaliNumber(nban.male)}</td>
                  <td>{nban.main_species}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, nban, "niji")}
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
          type="nijiban"
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
