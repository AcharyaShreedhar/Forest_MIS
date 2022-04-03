import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { equals, isNil } from 'ramda'
import {
  BudgetBarsikBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from '../../../components'
import BudgetbibaranActions from '../../../actions/budgetbibaran'
import AppActions from '../../../actions/app'
import { budgetbarsikHeadings, districtList } from '../../../services/config'
import { Fragment } from 'react'

export class BudgetBarsik extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loc: 'budgetbarsiklist',
      fromDate: '2075-01-01',
      toDate: '2090-12-30',
      distId: '%',
      officeId: '%',
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: 'budgetbarsik',
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handlePer = this.handlePer.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleToDate = this.handleToDate.bind(this)
    this.fetchResults = this.fetchResults.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDistrict = this.handleDistrict.bind(this)
    this.handleOffice = this.handleOffice.bind(this)
    this.handleFromDate = this.handleFromDate.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleSelectMenu = this.handleSelectMenu.bind(this)
    this.handlePerCallback = this.handlePerCallback.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split('/')[2]

    var budgetbarsikList = []
    var officeList = []

    if (nextProps !== prevState) {
      budgetbarsikList = nextProps.budgetbarsikDataList.data
      officeList = nextProps.officeDataList.data
    }
    return { loc, budgetbarsikList, officeList }
  }

  handlePer(e) {
    this.setState({ page: 0 }, () => this.handlePerCallback(e))
  }

  handlePerCallback(e) {
    const { fromDate, toDate, distId, officeId, page } = this.state
    this.setState({ perPage: e })
    this.fetchResults(fromDate, toDate, distId, officeId, page, e)
  }

  handleFromDate(e) {
    const { distId, officeId, perPage, toDate } = this.state
    this.setState({
      fromDate: e,
      page: 0,
    })
    this.fetchResults(e, toDate, distId, officeId, 0, perPage)
  }
  handleToDate(e) {
    const { distId, officeId, fromDate, perPage } = this.state
    this.setState({
      toDate: e,
      page: 0,
    })
    this.fetchResults(fromDate, e, distId, officeId, 0, perPage)
  }
  handleDistrict(e) {
    const { fromDate, perPage, toDate } = this.state
    this.setState({
      distId: e,
      officeId: '%', // office reset
      page: 0,
    })
    this.fetchResults(fromDate, toDate, e, '%', 0, perPage)

    //O-DDL
    this.fetchOffice(e)
  }
  handleOffice(e) {
    const { fromDate, perPage, toDate, distId } = this.state
    this.setState({
      officeId: e,
      page: 0,
    })
    this.fetchResults(fromDate, toDate, distId, e, 0, perPage)
  }

  // O-DDL
  fetchOffice(distId) {
    this.props.fetchOfficedropdown({
      distId,
      // name: "value", //"office_name"
    })
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage) {
    this.props.fetchallBudgetbarsik({
      fromDate,
      toDate,
      distId,
      officeId,
      name: 'vehicle_type',
      page: page,
      perPage,
    })
  }

  handlePageChange(data) {
    const { fromDate, toDate, distId, officeId, perPage } = this.state
    this.setState({ page: data.selected })
    this.fetchResults(
      fromDate,
      toDate,
      distId,
      officeId,
      data.selected * perPage,
      perPage
    )
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item })
    this.setState({ path: path })

    switch (event) {
      case 'edit': {
        this.props.history.push({
          pathname: `/budget/budgetbarsikedit/${item.budget_barsik_id}`,
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

    this.props.deleteBudgetbarsik(item.budget_barsik_id)
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    })
  }

  handleAdd() {
    this.props.history.push('/budget/budgetbarsikadd/new')
  }
  render() {
    const { loc, perPage, budgetbarsikList, officeList, showDialog } =
      this.state
    const { user, role, officeRole } = this.props

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={'के तपाईँ बजेट वार्षिक सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?'}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, 'budgetbarsiklist') && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="vehicle"
                title="प्राप्ति मिति"
                districtsList={districtList}
                officesList={!isNil(officeList) ? officeList : []}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesDate={false}
                yesOffice={false}
                yesDistrict={false}
              />
              <ReportGenerator id="vehicle" />
            </div>
            <BudgetBarsikBibaran.List
              buttonName="+ बजेट वार्षिक"
              title="बजेट वार्षिक सम्बन्धी विवरण"
              pageCount={
                !isNil(budgetbarsikList)
                  ? Math.ceil(budgetbarsikList.total / perPage)
                  : 10
              }
              data={!isNil(budgetbarsikList) ? budgetbarsikList.list : []}
              per={perPage}
              pers={[10, 25, 50, 'all']}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={budgetbarsikHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, 'budgetbarsikadd') && (
          <BudgetBarsikBibaran.Add
            title="+ बजेट वार्षिक विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBudgetbarsik(e)}
          />
        )}
        {equals(loc, 'budgetbarsikedit') && (
          <BudgetBarsikBibaran.Edit
            title="बजेट वार्षिक सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBudgetbarsik(e, id)}
          />
        )}
      </div>
    )
  }
}

BudgetBarsik.propTypes = {
  budgetbarsikDataList: PropTypes.any,
  officeDataList: PropTypes.any,
}

BudgetBarsik.defaultProps = {
  budgetbarsikDataList: {},
  officeDataList: {},
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  budgetbarsikDataList: state.budgetbibaran.allbudgetbarsikData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchallBudgetbarsik: (payload) =>
    dispatch(BudgetbibaranActions.fetchallbudgetbarsikRequest(payload)),
  addBudgetbarsik: (payload) =>
    dispatch(BudgetbibaranActions.addbudgetbarsikRequest(payload)),

  updateBudgetbarsik: (payload, budgetbarsikId) =>
    dispatch(
      BudgetbibaranActions.updatebudgetbarsikRequest(payload, budgetbarsikId)
    ),

  deleteBudgetbarsik: (budgetbarsikId) =>
    dispatch(BudgetbibaranActions.deletebudgetbarsikRequest(budgetbarsikId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BudgetBarsik)
