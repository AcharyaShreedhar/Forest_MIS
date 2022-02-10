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
        <Table responsive striped bordered hover id="kabuliyatiban" size="md">
          <thead>
            <tr>
              <th>क्र.स.</th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              {officeRole > 2 &&  <th />}
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
                  <td>{englishToNepaliNumber(kban.darta_miti)}</td>
                  <td>{kban.kabuliyati_ban_samiti_name}</td>
                  <td> {englishToNepaliNumber(kban.area)}</td>
                  <td>{kban.perm_addr}</td>
                  <td>{kban.curr_addr}</td>
                  <td>{englishToNepaliNumber(kban.dalit_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(kban.janjati_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(kban.anya_ghardhuri)}</td>
                  <td>{englishToNepaliNumber(kban.female)}</td>
                  <td>{englishToNepaliNumber(kban.male)}</td>
                  <td>{englishToNepaliNumber(kban.sampanna)}</td>
                  <td>{englishToNepaliNumber(kban.madhyam)}</td>
                  <td>{englishToNepaliNumber(kban.bipanna)}</td>
                  <td>{englishToNepaliNumber(kban.dalit_rep)}</td>
                  <td>{englishToNepaliNumber(kban.janjati_rep)}</td>
                  <td>{englishToNepaliNumber(kban.anya_rep)}</td>
                  <td>{kban.adhyakshya}</td>
                  <td>{kban.adhyakshya_gender}</td>
                  <td>{kban.sachib}</td>
                  <td>{kban.sachib_gender}</td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) => onSelect(e, kban, "kabuliyati")}
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
