import React, { Fragment } from 'react'
import { englishToNepaliNumber } from 'nepali-number'
import { PropTypes } from 'prop-types'
import { isNil } from 'ramda'
import { Table } from 'react-bootstrap'
import { Button, EditDropdown, Pagination } from '../../components'

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
  } = props
  return (
    <Fragment>
      <div className="card">
        {officeRole > 2 && (
          <div className="button">
            <Button type="low" size="small" name={buttonName} onClick={onAdd} />
          </div>
        )}
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover id="budgetentry">
          <thead>
            <tr>
              <th>क्र.स.</th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              {officeRole > 2 && <th />}
            </tr>
          </thead>
          <tbody>
            {isNil(data) ? (
              <p>No data Available !!!</p>
            ) : (
              data.map((budgetentry, index) => (
                <tr key={`${budgetentry.budget_karmacharidetail_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{budgetentry.fiscal_year}</td>
                  <td>{budgetentry.sirshak_name}</td>
                  <td>{budgetentry.karyakram_name}</td>
                  <td>{budgetentry.expense_year}</td>
                  <td>{budgetentry.expense_month}</td>
                  <td>{budgetentry.expense_amount}</td>
                  <td>{budgetentry.created_by}</td>
                  {officeRole > 2 && (
                    <td>
                      <div className="edit">
                        <EditDropdown
                          options={role < 3 ? ['Edit'] : ['Edit', 'Delete']}
                          onChange={(e) =>
                            onSelect(e, budgetentry, 'budgetentry')
                          }
                        />
                      </div>
                    </td>
                  )}
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
          type="budgetentry"
        />
      </div>
    </Fragment>
  )
}

List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
}

List.defaultProps = {
  data: [],
  onSelect: () => {},
}

export default List
