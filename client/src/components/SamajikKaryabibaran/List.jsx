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
        <Table responsive striped bordered hover id="samajikkaryabibaran">
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
              data.map((samajik, index) => (
                <tr key={`${samajik.samajik_karyabibaran_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{samajik.samajik_karyabibaran}</td>
                  <td>{samajik.samajik_ekai}</td>
                  <td>{samajik.samajik_parinam}</td>
                  <td>{samajik.samajik_bajetkharcha}</td>
                  <td>
                    {equals(samajik.ban_type, 1)
                      ? "बैज्ञानीक सामुदायिक वन"
                      : equals(samajik.ban_type, 2)
                      ? "अबैज्ञानीक सामुदायिक वन"
                      : equals(samajik.ban_type, 3)
                      ? "कबुलियती बन"
                      : equals(samajik.ban_type, 4)
                      ? "धार्मिक बन"
                      : equals(samajik.ban_type, 5)
                      ? "चक्ला बन"
                      : equals(samajik.ban_type, 6)
                      ? "साझेदारी बन"
                      : equals(samajik.ban_type, 7)
                      ? "व्यबसायीक कबुलियती बन"
                      : equals(samajik.ban_type, 8)
                      ? "निजी बन"
                      : "राष्ट्रिय बन"}
                  </td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) =>
                          onSelect(e, samajik, "samajikkaryabibaran")
                        }
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
          type="samajikkaryabibaran"
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
