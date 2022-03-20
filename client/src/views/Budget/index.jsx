import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { isEmpty } from 'ramda'
import { NotFound } from '../../components'
import BudgetActions from '../../actions/budget'
import AppActions from '../../actions/app'
import budgetRoutes from '../../routes/budget'

export class Budget extends Component {
  componentDidMount() {
    const { districtId, officeId } = this.props
    this.props.fetchallKaryakramsirshak({
      distId: districtId,
      officeId: officeId,
      name: 'karyakram_name',
      page: 0,
      perPage: 10,
    })
  }

  componentDidUpdate() {
    const { districtId, officeId } = this.props
    this.props.fetchallKaryakramsirshak({
      distId: districtId,
      officeId: officeId,
      name: 'karyakram_name',
      page: 0,
      perPage: 10,
    })
  }

  render() {
    const { authenticated } = this.props
    return (
      <Switch>
        {budgetRoutes.map((prop, key) => {
          if (prop.redirect && authenticated) {
            return <Redirect exact from={prop.path} to={prop.to} key={key} />
          }
          if (prop.redirect && !authenticated) {
            return (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={key}
              />
            )
          }
          if (!prop.redirect && prop.auth && !authenticated) {
            return <Redirect exact from={prop.path} to='/' key={key} />
          }
          return (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          )
        })}
        <Route path='*' exact component={NotFound} />
      </Switch>
    )
  }
}

Budget.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
}

Budget.defaultProps = {
  authenticated: false,
  history: () => {},
}

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
})

const mapDispatchToProps = (dispatch) => ({
  fetchallKaryakramsirshak: (payload) =>
    dispatch(BudgetActions.fetchallkaryakramsirshakRequest(payload)),
  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Budget)
