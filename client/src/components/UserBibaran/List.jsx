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
        <Table responsive striped bordered hover id="user">
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
              data.map((user, index) => (
                <tr key={`${user.user_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td> {user.user_name}</td>
                  <td>
                    {equals(user.user_type, 1)
                      ? "युजर"
                      : equals(user.user_type, 2)
                      ? "एडमिन"
                      : "सुपर एडमिन"}
                  </td>
                  <td>
                    {" "}
                    {equals(user.dist_id, 0)
                      ? "सबै"
                      : equals(user.dist_id, 1)
                      ? "कास्की"
                      : equals(user.dist_id, 2)
                      ? "गोरखा"
                      : equals(user.dist_id, 3)
                      ? "तनहुँ"
                      : equals(user.dist_id, 4)
                      ? "नवलपरासी (बर्दघाट सुस्ता पूर्व)"
                      : equals(user.dist_id, 5)
                      ? "पर्वत"
                      : equals(user.dist_id, 6)
                      ? "बाग्लुङ"
                      : equals(user.dist_id, 7)
                      ? "मनाङ"
                      : equals(user.dist_id, 8)
                      ? "मुस्ताङ"
                      : equals(user.dist_id, 9)
                      ? "म्याग्दी"
                      : equals(user.dist_id, 10)
                      ? "लमजुङ"
                      : "स्याङजा"}
                  </td>
                  <td> {user.user_office}</td>
                  <td>
                  {" "}
                    {equals(user.office_type, 1)
                      ? "मन्त्रालय"
                      : equals(user.office_type, 2)
                      ? "निर्देशनालय"
                      : equals(user.office_type, 3)
                      ? "कार्यलय"
                      : "सब डिभिजन"
                    }
                  </td>
                  <td> {moment(user.createdAt).format("MM/DD/YYYY")}</td>
                  <td> {user.created_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={
                          role < 3
                            ? ["Edit Profile", "Change Password"]
                            : ["Edit Profile", "Change Password", "Delete"]
                        }
                        onChange={(e) => onSelect(e, user, "user")}
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
          type="uddham"
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
