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
        <Table responsive striped bordered hover id="rojgarsrijana">
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
              data.map((rojgar, index) => (
                <tr key={`${rojgar.rojgar_srijana_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>
                    {equals(rojgar.karya, 1)
                      ? "वन संबर्धन"
                      : equals(rojgar.karya, 2)
                      ? "वन संरक्षण"
                      : equals(rojgar.karya, 3)
                      ? "वन पैदावार संकलन"
                      : "वन उद्धम"}
                  </td>
                  <td> {rojgar.ekai}</td>
                  <td>
                    {equals(rojgar.banka_prakar, 1)
                      ? "बैज्ञानीक सामुदायिक वन"
                      : equals(rojgar.banka_prakar, 2)
                      ? "अबैज्ञानीक सामुदायिक वन"
                      : equals(rojgar.banka_prakar, 3)
                      ? "कबुलियती बन"
                      : equals(rojgar.banka_prakar, 4)
                      ? "धार्मिक बन"
                      : equals(rojgar.banka_prakar, 5)
                      ? "चक्ला बन"
                      : equals(rojgar.banka_prakar, 6)
                      ? "साझेदारी बन"
                      : equals(rojgar.banka_prakar, 7)
                      ? "व्यबसायीक कबुलियती बन"
                      : equals(rojgar.banka_prakar, 8)
                      ? "निजी बन"
                      : "राष्ट्रिय बन"}
                  </td>
                  <td> {englishToNepaliNumber(rojgar.mahila)}</td>
                  <td> {englishToNepaliNumber(rojgar.purus)}</td>
                  <td> {englishToNepaliNumber(rojgar.mahila + rojgar.purus)}</td>
                  <td> {rojgar.kaifiyat}</td>
                  {officeRole > 2 && 
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={ role < 3 ? ["Edit"] : ["Edit", "Delete"] }
                          onChange={(e) => onSelect(e, rojgar, "rojgarsrijana")}
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
          type="rojgarsrijana"
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
