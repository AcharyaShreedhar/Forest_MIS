import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { equals, isNil } from 'ramda'
import {
  KaryakramSirshakBibaran,
  ReportGenerator,
  ConfirmationDialoge,
  Filter,
} from '../../../components'
import BudgetbibaranActions from '../../../actions/budgetbibaran'
import { karyakramsirshakHeadings } from '../../../services/config'
import { Fragment } from 'react'

class KaryakramSirshak extends Component {
  constructor(props) {
    super(props)
    const { districtId, officeId } = this.props
    this.state = {
      loc: 'karyakramsirshaklist',
      distId: districtId,
      officeId: officeId,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: 'karyakramsirshak',
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handlePer = this.handlePer.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleSelectMenu = this.handleSelectMenu.bind(this)
    this.fetchResults = this.fetchResults.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handlePerCallback = this.handlePerCallback.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split('/')[2]

    var karyakramsirshakList = []
    if (nextProps !== prevState) {
      karyakramsirshakList = nextProps.karyakramsirshakDataList.data
    }

    return { loc, karyakramsirshakList }
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

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallkaryakramsirshak({
      distId,
      officeId,
      name: 'karyakram_name',
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
          pathname: `/budget/karyakramsirshakedit/${item.karyakram_sirshak_id}`,
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

    this.props.deletekaryakramsirshak(item.karyakram_sirshak_id)
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    })
  }

  handleAdd() {
    this.props.history.push('/budget/karyakramsirshakadd/new')
  }
  render() {
    const { loc, perPage, karyakramsirshakList, showDialog } = this.state
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
        {equals(loc, 'karyakramsirshaklist') && (
          <Fragment>
            <div className='report-filter'>
              <Filter
                id='karyakramsirshak'
                title='महिना'
                yesOffice={false}
                yesDistrict={false}
                yesDate={false}
              />
              <ReportGenerator id='karyakramsirshak' />
            </div>
            <KaryakramSirshakBibaran.List
              buttonName='+ कार्यक्रम शिर्षक'
              title='कार्यक्रम शिर्षक सम्बन्धी विवरण'
              pageCount={
                !isNil(karyakramsirshakList)
                  ? Math.ceil(karyakramsirshakList.total / perPage)
                  : 0
              }
              data={
                !isNil(karyakramsirshakList) ? karyakramsirshakList.list : []
              }
              per={perPage}
              pers={[10, 25, 50, 'all']}
              onPer={this.handlePer}
              user={user}
              role={role}
              officeRole={officeRole}
              headings={karyakramsirshakHeadings}
              onAdd={this.handleAdd}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, 'karyakramsirshakadd') && (
          <KaryakramSirshakBibaran.Add
            title='+ कार्यक्रम शिर्षक विवरण'
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addkaryakramsirshak(e)}
          />
        )}
        {equals(loc, 'karyakramsirshakedit') && (
          <KaryakramSirshakBibaran.Edit
            title='कार्यक्रम शिर्षक सम्बन्धी विवरण शंसोधन'
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updatekaryakramsirshak(e, id)}
          />
        )}
      </div>
    )
  }
}

KaryakramSirshak.propTypes = {
  karyakramsirshakDataList: PropTypes.any,
}

KaryakramSirshak.defaultProps = {
  karyakramsirshakDataList: {},
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  officeRole: state.app.user.office_type,
  karyakramsirshakDataList: state.budgetbibaran.allkaryakramsirshakData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchallkaryakramsirshak: (payload) =>
    dispatch(BudgetbibaranActions.fetchallkaryakramsirshakRequest(payload)),
  addkaryakramsirshak: (payload) =>
    dispatch(BudgetbibaranActions.addkaryakramsirshakRequest(payload)),

  updatekaryakramsirshak: (payload, assetId) =>
    dispatch(
      BudgetbibaranActions.updatekaryakramsirshakRequest(payload, assetId)
    ),

  deletekaryakramsirshak: (assetId) =>
    dispatch(BudgetbibaranActions.deletekaryakramsirshakRequest(assetId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(KaryakramSirshak)
