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
        <Table responsive striped bordered hover id="brixyaropan">
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
              data.map((brixyaropan, index) => (
                <tr key={`${brixyaropan.birxyaropan_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{englishToNepaliNumber(brixyaropan.brixyaropan_miti)} </td>
                  <td>
                    {equals(brixyaropan.xetra, 1)
                      ? "सामुदायिक बन"
                      : equals(brixyaropan.xetra, 2)
                      ? "राष्ट्रिय बन "
                      : equals(brixyaropan.xetra, 3)
                      ? "निजी जग्गा"
                      : "सार्वजनिक क्षेत्र "}{" "}
                  </td>
                  <td>{brixyaropan.area} </td>
                  <td>{brixyaropan.brixyaropan_thegana} </td>
                  <td>{brixyaropan.brixyaropan_kisim} </td>
                  <td>{brixyaropan.brixyaropan_laxya} </td>
                  <td>{brixyaropan.brixyaropan_prajati} </td>
                  <td>{brixyaropan.brixyaropan_pragati} </td>
                  <td>{brixyaropan.brixyaropan_sankhya} </td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) =>
                          onSelect(e, brixyaropan, "brixyaropan")
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
          type="brixyaropan"
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
