import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { isEmpty } from 'ramda'
import { NotFound } from '../../components'
import NepaliDate from 'nepali-date-converter'
import AppActions from '../../actions/app'
import DwandabebasthapanActions from '../../actions/dwandabebasthapan'
import ReportActions from '../../actions/report'
import reportRoutes from '../../routes/report'

export class Report extends Component {
  componentDidMount() {
    const { districtId, officeRole, officeId } = this.props

    let currentArthikbarsa = ''
    let previousArthikbarsa = ''
    let upcommingArthikbarsa = ''
    let currentYear = ''
    let previousYear = ''
    let upcommingYear = ''

    if (new NepaliDate().getMonth <= '03') {
      upcommingYear = new NepaliDate().getYear()
      currentYear = new NepaliDate().getYear() - 1
      currentYear -= 1
      previousYear = new NepaliDate().getYear()
      previousYear -= 2
      upcommingArthikbarsa = upcommingYear + '-04-01'
      currentArthikbarsa = currentYear + '-04-01'
      previousArthikbarsa = previousYear + '-04-01'
    } else {
      upcommingYear = new NepaliDate().getYear()
      upcommingYear += 1
      currentYear = new NepaliDate().getYear()
      previousYear = new NepaliDate().getYear()
      previousYear -= 1
      upcommingArthikbarsa = upcommingYear + '-04-01'
      currentArthikbarsa = currentYear + '-04-01'
      previousArthikbarsa = previousYear + '-04-01'
    }

    this.props.fetchtotalBanyajantuuddar({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchtotalBanyajantuxeti({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchNabikaranBibaran({
      currentArthikbarsa,
      upcommingArthikbarsa, //2
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchSamuhaBhitraBanpaidawarBikri({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanxetraAtikraman({
      previousArthikbarsa,
      currentArthikbarsa, //7
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanyajantuXetiRahat({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanyajantuUddar({
      currentArthikbarsa, //9
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBandadeloXeti({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanxetraAnyaprayojan({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchMuddaanusandhandayari({
      previousArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchGairakasthaBanpaidawarBikribitaran({
      currentArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchKathdauraBikribitaran({
      currentArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBiruwaUtpadanKharid({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchUddhamBibaran({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchSrijanaBhayekoRojgari({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
      currentArthikbarsa, //10
    })
    this.props.fetchUpavoktaSusasan({
      currentArthikbarsa,
      arthikbarsa: '077/78', //12
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchBanHastantaran({
      currentArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchbudgetmonthlylist({
      chaumasik_id: 3,
      expense_year: '2078',
      expense_month_id: 9,
      fiscal_year: '2078/079',
      office_id: officeId,
    })

    this.props.fetchOfficedropdown({
      distId: '%',
      name: 'value', //"office_name"
    })
  }

  componentDidUpdate() {
    const { districtId, officeRole, officeId } = this.props

    let currentArthikbarsa = ''
    let previousArthikbarsa = ''
    let upcommingArthikbarsa = ''
    let currentYear = ''
    let previousYear = ''
    let upcommingYear = ''

    if (new NepaliDate().getMonth <= '03') {
      upcommingYear = new NepaliDate().getYear()
      currentYear = new NepaliDate().getYear() - 1
      currentYear -= 1
      previousYear = new NepaliDate().getYear()
      previousYear -= 2
      upcommingArthikbarsa = upcommingYear + '-04-01'
      currentArthikbarsa = currentYear + '-04-01'
      previousArthikbarsa = previousYear + '-04-01'
    } else {
      upcommingYear = new NepaliDate().getYear()
      upcommingYear += 1
      currentYear = new NepaliDate().getYear()
      previousYear = new NepaliDate().getYear()
      previousYear -= 1
      upcommingArthikbarsa = upcommingYear + '-04-01'
      currentArthikbarsa = currentYear + '-04-01'
      previousArthikbarsa = previousYear + '-04-01'
    }

    this.props.fetchtotalBanyajantuuddar({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchtotalBanyajantuxeti({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchNabikaranBibaran({
      currentArthikbarsa,
      upcommingArthikbarsa, //2
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchSamuhaBhitraBanpaidawarBikri({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanxetraAtikraman({
      previousArthikbarsa,
      currentArthikbarsa, //7
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanyajantuXetiRahat({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanyajantuUddar({
      currentArthikbarsa, //9
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBandadeloXeti({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBanxetraAnyaprayojan({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchMuddaanusandhandayari({
      previousArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchGairakasthaBanpaidawarBikribitaran({
      currentArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchKathdauraBikribitaran({
      currentArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchBiruwaUtpadanKharid({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchUddhamBibaran({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })
    this.props.fetchSrijanaBhayekoRojgari({
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
      currentArthikbarsa, //10
    })
    this.props.fetchUpavoktaSusasan({
      currentArthikbarsa,
      arthikbarsa: '077/78', //12
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchBanHastantaran({
      currentArthikbarsa,
      distId: `${officeRole < 3 ? '%' : districtId}`,
      officeId: `${officeRole < 3 ? '%' : officeId}`,
    })

    this.props.fetchbudgetmonthlylist({
      chaumasik_id: 3,
      expense_year: '2078',
      expense_month_id: 9,
      fiscal_year: '2078/079',
      office_id: officeId,
    })
  }

  render() {
    const { authenticated } = this.props
    return (
      <Switch>
        {reportRoutes.map((prop, key) => {
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

Report.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
}

Report.defaultProps = {
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
  fetchtotalBanyajantuuddar: (payload) =>
    dispatch(
      DwandabebasthapanActions.fetchtotalbanyajantuuddarRequest(payload)
    ),
  fetchtotalBanyajantuxeti: (payload) =>
    dispatch(DwandabebasthapanActions.fetchtotalbanyajantuxetiRequest(payload)),
  fetchNabikaranBibaran: (payload) =>
    dispatch(ReportActions.fetchnabikaranbibaranRequest(payload)),
  fetchSamuhaBhitraBanpaidawarBikri: (payload) =>
    dispatch(
      ReportActions.fetchsamuhabhitrabanpaidawarbikribibaranRequest(payload)
    ),
  fetchBanxetraAtikraman: (payload) =>
    dispatch(ReportActions.fetchbanxetraatikramanniyantranRequest(payload)),
  fetchBanyajantuXetiRahat: (payload) =>
    dispatch(ReportActions.fetchbanyajantuxetirahatRequest(payload)),
  fetchBanyajantuUddar: (payload) =>
    dispatch(ReportActions.fetchbanyajantuuddarbibaranRequest(payload)),
  fetchBandadeloXeti: (payload) =>
    dispatch(ReportActions.fetchbandadeloxetibibaranRequest(payload)),
  fetchBanxetraAnyaprayojan: (payload) =>
    dispatch(ReportActions.fetchbanxetraanyaprayojanbibaranRequest(payload)),
  fetchMuddaanusandhandayari: (payload) =>
    dispatch(ReportActions.fetchmuddaanusandhandayaribibaranRequest(payload)),
  fetchGairakasthaBanpaidawarBikribitaran: (payload) =>
    dispatch(
      ReportActions.fetchgairakasthabanpaidawarbikribitaranRequest(payload)
    ),
  fetchKathdauraBikribitaran: (payload) =>
    dispatch(ReportActions.fetchkathdaurabikribitaranRequest(payload)),
  fetchBiruwaUtpadanKharid: (payload) =>
    dispatch(ReportActions.fetchbiruwautpadankharidRequest(payload)),
  fetchUddhamBibaran: (payload) =>
    dispatch(ReportActions.fetchuddhambibaranRequest(payload)),
  fetchSrijanaBhayekoRojgari: (payload) =>
    dispatch(ReportActions.fetchsrijanabhayekorojgariRequest(payload)),
  fetchUpavoktaSusasan: (payload) =>
    dispatch(ReportActions.fetchupavoktasusasanRequest(payload)),
  fetchBanHastantaran: (payload) =>
    dispatch(ReportActions.fetchbanhastantaranbibaranRequest(payload)),
  menuRequest: (payload) => dispatch(AppActions.menuRequest(payload)),
  fetchbudgetmonthlylist: (payload) =>
    dispatch(ReportActions.fetchbudgetmonthlybibaranRequest(payload)),
  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Report)
