import React, { Fragment } from "react";
import moment from "moment";
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
  } = props;
  return (
    <Fragment>
      <div className="card">
        <div className="button">
          <Button type="low" size="small" name={buttonName} onClick={onAdd} />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="office">
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
              data.map((office, index) => (
                <tr key={`${office.office_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {office.office_name}</td>
                  <td> {office.office_location}</td>
                  <td>
                    {" "}
                    {equals(office.dist_id, 0)
                      ? "सबै"
                      : equals(office.dist_id, 1)
                      ? "कास्की"
                      : equals(office.dist_id, 2)
                      ? "गोरखा"
                      : equals(office.dist_id, 3)
                      ? "तनहुँ"
                      : equals(office.dist_id, 4)
                      ? "नवलपरासी (बर्दघाट सुस्ता पूर्व)"
                      : equals(office.dist_id, 5)
                      ? "पर्वत"
                      : equals(office.dist_id, 6)
                      ? "बाग्लुङ"
                      : equals(office.dist_id, 7)
                      ? "मनाङ"
                      : equals(office.dist_id, 8)
                      ? "मुस्ताङ"
                      : equals(office.dist_id, 9)
                      ? "म्याग्दी"
                      : equals(office.dist_id, 10)
                      ? "लमजुङ"
                      : "स्याङजा"}
                  </td>
                  {/* <td> {moment(office.createdAt).format("MM/DD/YYYY")}</td> */}
                  <td> {office.created_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
                        onChange={(e) => onSelect(e, office, "office")}
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
          type="office"
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
