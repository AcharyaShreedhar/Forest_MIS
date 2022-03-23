import React, { Fragment } from 'react';
import { englishToNepaliNumber } from 'nepali-number';
import { PropTypes } from 'prop-types';
import { isNil } from 'ramda';
import { Table } from 'react-bootstrap';
import { Button, EditDropdown, Pagination } from '../../components';

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
        <Table responsive striped bordered hover id="vehicle">
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
              data.map((budgetsirshak, index) => (
                <tr key={`${budgetsirshak.sirshak_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{budgetsirshak.sirshak_no}</td>
                  <td>{budgetsirshak.sirshak_name}</td>
                  <td>{budgetsirshak.created_by}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ['Edit'] : ['Edit', 'Delete']}
                        onChange={(e) =>
                          onSelect(e, budgetsirshak, 'yearlysawarisadhan')
                        }
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
          forcePage={forcePage}
          pers={pers}
          onPer={onPer}
          onPageClick={onPageClick}
          pageCount={pageCount}
          type="vehicle"
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
