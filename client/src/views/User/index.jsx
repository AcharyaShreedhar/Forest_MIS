import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { equals, isNil } from 'ramda'
import { Filter, UserBibaran, ConfirmationDialoge } from '../../components'
import AppActions from '../../actions/app'
import { districtList, userHeadings } from '../../services/config'

export class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loc: 'userlist',
      distId: '%',
      officeId: '%',
      perPage: 10,
      page: 0,
      path: 'user',
    }
    this.handleSelectMenu = this.handleSelectMenu.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDistrict = this.handleDistrict.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handlePer = this.handlePer.bind(this)
    this.fetchResults = this.fetchResults.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handlePerCallback = this.handlePerCallback.bind(this)
  }
  componentDidMount() {
    const { districtId, officeRole, officeId } = this.props

    this.props.fetchallUser({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
      name: 'user_name',
      page: 0,
      perPage: 10,
    })
    this.props.fetchOfficedropdown({
      distId: '%',
      name: 'value', //"office_name"
    })
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split('/')[1]
    var userList = []
    if (nextProps !== prevState) {
      userList = nextProps.userDataList.data
    }

    return {
      loc,
      userList,
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
    const { officeId, perPage } = this.state
    this.setState({
      distId: e,
      page: 0,
    })
    this.fetchResults(e, officeId, 0, perPage)
  }

  fetchResults(distId, officeId, page, perPage) {
    this.props.fetchallUser({
      distId,
      officeId,
      name: 'user_name',
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
      case 'edit profile': {
        this.props.history.push({
          pathname: `useredit/${item.user_id}`,
          item,
        })

        break
      }
      case 'change password': {
        this.props.history.push({
          pathname: `userpassedit/${item.user_id}`,
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

    this.props.deleteUser(item.user_id)
    this.setState({
      showDialog: !this.state.showDialog,
      page: 0,
      perPage: 10,
    })
  }

  handleAdd() {
    this.props.history.push('/useradd/new')
  }

  render() {
    const { loc, perPage, userList, showDialog } = this.state
    const { user } = this.props
    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title='Delete'
          body={'के तपाईँ  प्रयोगकर्ता हटाउन चाहनुहुन्छ ?'}
          confirmLabel='चाहन्छु '
          cancelLabel='चाहंदिन '
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, 'userlist') && (
          <Fragment>
            <div className='report-filter'>
              <Filter
                id='user'
                districtsList={districtList}
                onSelect={this.handleDistrict}
                yesDate={false}
                yesOffice={false}
              />
            </div>
            <UserBibaran.List
              buttonName='+ नयाँ प्रयोगकर्ता '
              title='प्रयोगकर्ता सम्बन्धि विवरण'
              pageCount={
                !isNil(userList) ? Math.ceil(userList.total / perPage) : 10
              }
              data={!isNil(userList) ? userList.list : []}
              per={perPage}
              pers={[10, 25, 50, 'all']}
              onPer={this.handlePer}
              headings={userHeadings}
              user={user}
              onAdd={() => this.handleAdd('user')}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e)}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, 'useradd') && (
          <UserBibaran.Add
            title='+ नयाँ प्रयोगकर्ता'
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addUser(e)}
          />
        )}
        {equals(loc, 'useredit') && (
          <UserBibaran.Edit
            title='प्रयोगकर्ता सम्बन्धि विवरण शंसोधन'
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateUser(e, id)}
            editProfile={true}
          />
        )}
        {equals(loc, 'userpassedit') && (
          <UserBibaran.Edit
            title='प्रयोगकर्ताको पासवर्ड शंसोधन'
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdatePassword={(e, id) => this.props.updateUserPassword(e, id)}
            changePassword={true}
          />
        )}
      </div>
    )
  }
}

User.propsTypes = {
  userDataList: PropTypes.any,
}

User.defaultProps = {
  userDataList: {},
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  userDataList: state.app.allusersData,
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
})

const mapDispatchToProps = (dispatch) => ({
  fetchallUser: (payload) => dispatch(AppActions.fetchallusersRequest(payload)),
  addUser: (payload) => dispatch(AppActions.addusersRequest(payload)),
  updateUser: (payload, userId) =>
    dispatch(AppActions.updateusersRequest(payload, userId)),
  deleteUser: (userId) => dispatch(AppActions.deleteusersRequest(userId)),
  //change password
  updateUserPassword: (payload, userId) =>
    dispatch(AppActions.updateuserspasswordRequest(payload, userId)),
  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
