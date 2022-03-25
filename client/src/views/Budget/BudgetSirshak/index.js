import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { equals, isNil } from 'ramda'
import {
  BudgetSirshakBibaran,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from '../../../components'
import BudgetbibaranActions from '../../../actions/budgetbibaran'
import AppActions from '../../../actions/app'
import { budgetsirshakHeadings, districtList } from '../../../services/config'
import { Fragment } from 'react'

class BudgetSirshak extends Component {
  constructor(props) {
    super(props)
    const { officeRole, districtId, officeId } = this.props
    this.state = {
      loc: 'budgetsirshaklist',
      fromDate: '2075-01-01',
      toDate: '2090-12-30',
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: 'budgetsirshak',
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

    var budgetSirshakList = []
    var officeList = []

    if (nextProps !== prevState) {
      budgetSirshakList = nextProps.budgetsirshakDataList.data
      officeList = nextProps.officeDataList.data
    }
    return { loc, budgetSirshakList, officeList }
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
    this.props.fetchallBudgetsirshak({
      fromDate,
      toDate,
      distId,
      officeId,
      name: 'sirshak_id',
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
          pathname: `/budget/budgetsirshakedit/${item.sirshak_id}`,
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

    this.props.deleteBudgetsirshak(item.sirshak_id)
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    })
  }

  handleAdd() {
    this.props.history.push('/budget/budgetsirshakadd/new')
  }
  render() {
    const { loc, perPage, budgetSirshakList, officeList, showDialog } =
      this.state
    const { user, role, officeRole } = this.props

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={'के तपाईँ बजेट शिर्षक सम्बन्धी विवरण हटाउन चाहनुहुन्छ ?'}
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, 'budgetsirshaklist') && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="budgetsirshak"
                title="प्राप्ति मिति"
                districtsList={districtList}
                officesList={!isNil(officeList) ? officeList : []}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id="budgetsirshak" />
            </div>
            <BudgetSirshakBibaran.List
              buttonName="+ बजेट शिर्षक"
              title="बजेट शिर्षक सम्बन्धी विवरण"
              pageCount={
                !isNil(budgetSirshakList)
                  ? Math.ceil(budgetSirshakList.total / perPage)
                  : 10
              }
              data={!isNil(budgetSirshakList) ? budgetSirshakList.list : []}
              per={perPage}
              pers={[10, 25, 50, 'all']}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={budgetsirshakHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, 'budgetsirshakadd') && (
          <BudgetSirshakBibaran.Add
            title="+ बजेट शिर्षक विवरण"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addBudgetsirshak(e)}
          />
        )}
        {equals(loc, 'budgetsirshakedit') && (
          <BudgetSirshakBibaran.Edit
            title="बजेट शिर्षक सम्बन्धी विवरण शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateBudgetsirshak(e, id)}
          />
        )}
      </div>
    )
  }
}

BudgetSirshak.propTypes = {
  budgetsirshakDataList: PropTypes.any,
  officeDataList: PropTypes.any,
}

BudgetSirshak.defaultProps = {
  budgetsirshakDataList: {},
  officeDataList: {},
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  budgetsirshakDataList: state.budgetbibaran.allbudgetsirshakData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchallBudgetsirshak: (payload) =>
    dispatch(BudgetbibaranActions.fetchallbudgetsirshakRequest(payload)),
  addBudgetsirshak: (payload) =>
    dispatch(BudgetbibaranActions.addbudgetsirshakRequest(payload)),

  updateBudgetsirshak: (payload, budgetsirshakId) =>
    dispatch(
      BudgetbibaranActions.updatebudgetsirshakRequest(payload, budgetsirshakId)
    ),

  deleteBudgetsirshak: (budgetsirshakId) =>
    dispatch(BudgetbibaranActions.deletebudgetsirshakRequest(budgetsirshakId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BudgetSirshak)
