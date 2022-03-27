import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { equals, isNil } from 'ramda'
import {
  BudgetEntryBibaran,
  ReportGenerator,
  ConfirmationDialoge,
  Filter,
} from '../../../components'
import BudgetbibaranActions from '../../../actions/budgetbibaran'
import { budgetentryHeadings, districtList } from '../../../services/config'
import AppActions from '../../../actions/app'
import { Fragment } from 'react'

class BudgetEntry extends Component {
  constructor(props) {
    super(props)
    const { districtId, officeId, officeRole } = this.props
    this.state = {
      loc: 'budgetentrylist',
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: 'budgetentry',
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handlePer = this.handlePer.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleSelectMenu = this.handleSelectMenu.bind(this)
    this.handleDistrict = this.handleDistrict.bind(this)
    this.handleOffice = this.handleOffice.bind(this)
    this.fetchResults = this.fetchResults.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handlePerCallback = this.handlePerCallback.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split('/')[2]

    var budgetentryList = []
    var officeList = []

    if (nextProps !== prevState) {
      budgetentryList = nextProps.budgetentryDataList.data
      officeList = nextProps.officeDataList.data
    }

    return { loc, budgetentryList, officeList }
  }

  handlePer(e) {
    this.setState({ page: 0 }, () => this.handlePerCallback(e))
  }
  handlePerCallback(e) {
    const { distId, officeId, page } = this.state
    this.setState({
      perPage: e,
    })
    this.fetchResults(distId, officeId, page, e)
  }

  handleDistrict(e) {
    const { perPage } = this.state
    this.setState({
      distId: e,
      officeId: '%', // office reset
      page: 0,
    })
    this.fetchResults(e, '%', 0, perPage)

    //O-DDL
    this.fetchOffice(e)
  }
  handleOffice(e) {
    const { perPage, distId } = this.state
    this.setState({
      officeId: e,
      page: 0,
    })
    this.fetchResults(distId, e, 0, perPage)
  }

  // O-DDL
  fetchOffice(distId) {
    this.props.fetchOfficedropdown({
      distId,
      name: 'value',
    })
  }

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallbudgetentry({
      distId,
      officeId,
      name: 'createdAt',
      page: page,
      perPage,
    })
  }

  handlePageChange(data) {
    const { distId, officeId, perPage } = this.state
    this.setState({ page: data.selected })
    this.fetchResults(distId, officeId, data.selected * perPage, perPage)
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item })
    this.setState({ path: path })
    switch (event) {
      case 'edit': {
        this.props.history.push({
          pathname: `/budget/budgetentryedit/${item.budget_karmacharidetail_id}`,
          item,
        })
        break
      }

      case 'delete': {
        this.setState({ showDialog: !this.state.showDialog })
        break
      }
      default:
        break
    }
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog })
  }
  handleDelete() {
    const { item } = this.state

    this.props.deletebudgetentry(item.budget_karmacharidetail_id)
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    })
  }

  handleAdd() {
    this.props.history.push('/budget/budgetentryadd/new')
  }
  render() {
    const { loc, perPage, budgetentryList, officeList, showDialog } = this.state
    const { user, role, officeRole } = this.props
    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title='Delete'
          body={'के तपाईँ सम्पती सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?'}
          confirmLabel='चाहन्छु '
          cancelLabel='चाहंदिन '
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, 'budgetentrylist') && (
          <Fragment>
            <div className='report-filter'>
              <Filter
                id='budgetentry'
                districtsList={districtList}
                officesList={!isNil(officeList) ? officeList : []}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
                yesDate={false}
              />
              <ReportGenerator id='budgetentry' />
            </div>
            <BudgetEntryBibaran.List
              buttonName='+ बजेट खर्च'
              title=' बजेट खर्च सम्बन्धी विवरण'
              pageCount={
                !isNil(budgetentryList)
                  ? Math.ceil(budgetentryList.total / perPage)
                  : 0
              }
              data={!isNil(budgetentryList) ? budgetentryList.list : []}
              per={perPage}
              pers={[10, 25, 50, 'all']}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={budgetentryHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, 'budgetentryadd') && (
          <BudgetEntryBibaran.Add
            title='+ कार्यक्रम शिर्षक विवरण'
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addbudgetentry(e)}
          />
        )}
        {equals(loc, 'budgetentryedit') && (
          <BudgetEntryBibaran.Edit
            title='कार्यक्रम शिर्षक सम्बन्धी विवरण शंसोधन'
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updatebudgetentry(e, id)}
          />
        )}
      </div>
    )
  }
}

BudgetEntry.propTypes = {
  budgetentryDataList: PropTypes.any,
}

BudgetEntry.defaultProps = {
  budgetentryDataList: {},
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeRole: state.app.user.office_type,
  officeDataList: state.app.officesDropdownData,
  budgetentryDataList: state.budgetbibaran.allbudgetentryData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchallbudgetentry: (payload) =>
    dispatch(BudgetbibaranActions.fetchallbudgetentryRequest(payload)),
  addbudgetentry: (payload) =>
    dispatch(BudgetbibaranActions.addbudgetentryRequest(payload)),

  updatebudgetentry: (payload, budgetkarmacharidetailId) =>
    dispatch(
      BudgetbibaranActions.updatebudgetentryRequest(
        payload,
        budgetkarmacharidetailId
      )
    ),

  deletebudgetentry: (budgetkarmacharidetailId) =>
    dispatch(
      BudgetbibaranActions.deletebudgetentryRequest(budgetkarmacharidetailId)
    ),
  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BudgetEntry)
