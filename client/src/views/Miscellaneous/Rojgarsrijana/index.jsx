import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { equals, isNil } from 'ramda'
import {
  RojgarSrijana,
  Filter,
  ReportGenerator,
  ConfirmationDialoge,
} from '../../../components'
import MiscellaneousActions from '../../../actions/miscellaneous'
import AppActions from '../../../actions/app'
import { rojgarsrijanaHeadings, districtList } from '../../../services/config'

class Rojgarsrijana extends Component {
  constructor(props) {
    super(props)
    const { officeRole, districtId, officeId } = this.props
    this.state = {
      loc: 'rojgarsrijanalist',
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: 'rojgarsrijana',
    }
    this.handleSelectMenu = this.handleSelectMenu.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDistrict = this.handleDistrict.bind(this)
    this.handleOffice = this.handleOffice.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handlePer = this.handlePer.bind(this)
    this.fetchResults = this.fetchResults.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handlePerCallback = this.handlePerCallback.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split('/')[2]
    var rojgarsrijanaList = []
    var officeList = []
    if (nextProps !== prevState) {
      rojgarsrijanaList = nextProps.rojgarsrijanaDataList.data
      officeList = nextProps.officeDataList.data
    }

    return {
      loc,
      officeList,
      rojgarsrijanaList,
    }
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
      // name: "value", //"office_name"
    })
  }

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallRojgarsrijana({
      distId,
      officeId,
      name: 'banka_prakar',
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
          pathname: `/miscellaneous/rojgarsrijanaedit/${item.rojgar_srijana_id}`,
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

    this.props.deleteRojgarsrijana(item.rojgar_srijana_id)
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    })
  }

  handleAdd() {
    this.props.history.push('/miscellaneous/rojgarsrijanaadd/new')
  }

  render() {
    const { loc, perPage, rojgarsrijanaList, officeList, showDialog } =
      this.state
    const { user, role, officeRole } = this.props

    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title='Delete'
          body={'के तपाईँ रोजगार सिर्जना सम्बन्धि विवरण हटाउन चाहनुहुन्छ ?'}
          confirmLabel='चाहन्छु '
          cancelLabel='चाहंदिन '
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, 'rojgarsrijanalist') && (
          <Fragment>
            <div className='report-filter'>
              <Filter
                id='rojgarsrijana'
                districtsList={districtList}
                officesList={!isNil(officeList) ? officeList : []}
                onSelect={this.handleDistrict}
                onSelectOffice={this.handleOffice}
                yesOffice={officeRole < 3 ? true : false}
                yesDate={false}
                yesDistrict={officeRole < 3 ? true : false}
              />
              <ReportGenerator id='rojgarsrijana' />
            </div>
            <RojgarSrijana.List
              buttonName='+ रोजगार सिर्जना'
              title='रोजगार सिर्जना सम्बन्धि विवरण'
              pageCount={
                !isNil(rojgarsrijanaList)
                  ? Math.ceil(rojgarsrijanaList.total / perPage)
                  : 10
              }
              data={!isNil(rojgarsrijanaList) ? rojgarsrijanaList.list : []}
              per={perPage}
              pers={[10, 25, 50, 'all']}
              onPer={this.handlePer}
              headings={rojgarsrijanaHeadings}
              user={user}
              role={role}
              officeRole={officeRole}
              onAdd={() => this.handleAdd('rojgarsrijana')}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, 'rojgarsrijanaadd') && (
          <RojgarSrijana.Add
            title='+ रोजगार सिर्जना'
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addRojgarsrijana(e)}
          />
        )}
        {equals(loc, 'rojgarsrijanaedit') && (
          <RojgarSrijana.Edit
            title='रोजगार सिर्जना सम्बन्धी विवरण शंसोधन'
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateRojgarsrijana(e, id)}
          />
        )}
      </div>
    )
  }
}

Rojgarsrijana.propsTypes = {
  rojgarsrijanaDataList: PropTypes.any,
  officeDataList: PropTypes.any,
}

Rojgarsrijana.defaultProps = {
  rojgarsrijanaDataList: {},
  officeDataList: {},
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  role: state.app.user.user_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
  officeDataList: state.app.officesDropdownData,
  officeRole: state.app.user.office_type,
  rojgarsrijanaDataList: state.miscellaneous.allrojgarsrijanaData,
})

const mapDispatchToProps = (dispatch) => ({
  fetchallRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.fetchallrojgarsrijanaRequest(payload)),

  addRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.addrojgarsrijanaRequest(payload)),

  updateRojgarsrijana: (payload, rojgarsrijanaId) =>
    dispatch(
      MiscellaneousActions.updaterojgarsrijanaRequest(payload, rojgarsrijanaId)
    ),

  deleteRojgarsrijana: (rojgarsrijanaId) =>
    dispatch(MiscellaneousActions.deleterojgarsrijanaRequest(rojgarsrijanaId)),

  // O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Rojgarsrijana)
