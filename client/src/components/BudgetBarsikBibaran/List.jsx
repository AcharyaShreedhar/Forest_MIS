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
    forcePage,
  } = props
  return (
    <Fragment>
      <div className='card'>
        <div className='button'>
          <Button type='low' size='small' name={buttonName} onClick={onAdd} />
        </div>
        <div className='titlebar'>{title} </div>
        <Table responsive striped bordered hover id='vehicle'>
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
              data.map((budgetbarsik, index) => (
                <tr key={`${budgetbarsik.budget_barsik_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{budgetbarsik.fiscal_year}</td>
                  <td>{budgetbarsik.sirshak_name}</td>
                  <td>{budgetbarsik.karyakram_name}</td>
                  <td>
                    {englishToNepaliNumber(
                      budgetbarsik.pratham_chaumasik_amount
                    )}
                  </td>
                  <td>
                    {englishToNepaliNumber(
                      budgetbarsik.doshro_chaumasik_amount
                    )}
                  </td>
                  <td>
                    {englishToNepaliNumber(
                      budgetbarsik.teshro_chaumasik_amount
                    )}
                  </td>
                  <td>
                    {englishToNepaliNumber(budgetbarsik.barsik_lakshay_amount)}
                  </td>
                  <td>
                    <div className='edit'>
                      <EditDropdown
                        options={role < 3 ? ['Edit'] : ['Edit', 'Delete']}
                        onChange={(e) =>
                          onSelect(e, budgetbarsik, 'yearlysawarisadhan')
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
          type='vehicle'
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
