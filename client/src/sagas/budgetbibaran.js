import { call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { history } from '../reducers'
import { isNil } from 'ramda'
import BudgetbibaranActions from '../actions/budgetbibaran'

export function* fetchallbudgetsirshakRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getBudgetsirshakList(payloaddata)
  if (response.ok) {
    yield put(BudgetbibaranActions.fetchallbudgetsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.fetchallbudgetsirshakFailure())
  }
}

export function* fetchbudgetsirshakRequest(api, action) {
  const budgetsirshakId = action.payload

  const response = yield api.getBudgetsirshak(budgetsirshakId)

  if (response.ok) {
    yield put(BudgetbibaranActions.fetchbudgetsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.fetchbudgetsirshakFailure())
  }
}

// Budgetsirshak dropdown
export function* fetchbudgetsirshakdropdownRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getBudgetSirshakDropdownList(payloaddata)
  if (response.ok) {
    yield put(
      BudgetbibaranActions.fetchbudgetsirshakdropdownSuccess(response.data)
    )
  } else {
    yield put(BudgetbibaranActions.fetchbudgetsirshakdropdownFailure())
  }
}

// Add budgetsirshak
export function* addbudgetsirshakRequest(api, action) {
  const { payload } = action

  const response = yield api.postBudgetbibaranBudgetsirshakAddNew(
    payload.budgetsirshak.data
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पत्ति प्रविष्ट भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallbudgetsirshakRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'budget_type',
      page: 0,
      perPage: 10,
    })
    yield call(history.push, '/budget/budgetsirshaklist')
    yield put(BudgetbibaranActions.addbudgetsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.addbudgetsirshakFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Update budgetsirshak
export function* updatebudgetsirshakRequest(api, action) {
  const { payload, budgetsirshakId } = action

  const response = yield api.postBudgetbibaranBudgetsirshakUpdate(
    payload.budgetsirshak.data,
    budgetsirshakId
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पत्ति शंसोधन भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallbudgetsirshakRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'budget_type',
      page: 0,
      perPage: 10,
    })
    yield call(history.push, '/budget/budgetsirshaklist')
    yield put(BudgetbibaranActions.updatebudgetsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.updatebudgetsirshakFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Delete budgetsirshak
export function* deletebudgetsirshakRequest(api, action) {
  const { payload } = action

  const response = yield api.postBudgetbibaranBudgetsirshakDelete(payload)

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पत्ति हटाईयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallbudgetsirshakRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'budget_type',
      page: 0,
      perPage: 10,
    })
    yield put(BudgetbibaranActions.deletebudgetsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.deletebudgetsirshakFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

/* ------ karyakramsirshak -------*/

// Karyakramsirshak dropdown
export function* fetchkaryakramsirshakdropdownRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getKaryakramSirshakDropdownList(payloaddata)
  if (response.ok) {
    yield put(
      BudgetbibaranActions.fetchkaryakramsirshakdropdownSuccess(response.data)
    )
  } else {
    yield put(BudgetbibaranActions.fetchkaryakramsirshakdropdownFailure())
  }
}

export function* fetchallkaryakramsirshakRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getKaryakramsirshakList(payloaddata)

  if (response.ok) {
    yield put(
      BudgetbibaranActions.fetchallkaryakramsirshakSuccess(response.data)
    )
  } else {
    yield put(BudgetbibaranActions.fetchallkaryakramsirshakFailure())
  }
}

export function* fetchkaryakramsirshakRequest(api, action) {
  const vehicleId = action.payload

  const response = yield api.getKaryakramsirshak(vehicleId)

  if (response.ok) {
    yield put(BudgetbibaranActions.fetchkaryakramsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.fetchkaryakramsirshakFailure())
  }
}

// Add karyakramsirshak
export function* addkaryakramsirshakRequest(api, action) {
  const { payload } = action
  const response = yield api.postBudgetbibaranKaryakramsirshakAddNew(
    payload.karyakramsirshak.data
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक गाडी विवरण प्रविष्ट भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallkaryakramsirshakRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'karyakram_name',
      page: 0,
      perPage: 10,
    })
    yield call(history.push, '/budget/karyakramsirshaklist')
    yield put(BudgetbibaranActions.addkaryakramsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.addkaryakramsirshakFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Update karyakramsirshak
export function* updatekaryakramsirshakRequest(api, action) {
  const { payload, karyakramSirshakId } = action
  const response = yield api.postBudgetbibaranKaryakramsirshakUpdate(
    payload.karyakramsirshak.data,
    karyakramSirshakId
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक गाडी विवरण शंसोधन भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallkaryakramsirshakRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'karyakram_name',
      page: 0,
      perPage: 10,
    })
    yield call(history.push, '/budget/karyakramsirshaklist')
    yield put(BudgetbibaranActions.updatekaryakramsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.updatekaryakramsirshakFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Delete karyakramsirshak
export function* deletekaryakramsirshakRequest(api, action) {
  const { payload } = action

  const response = yield api.postBudgetbibaranKaryakramsirshakDelete(payload)

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक गाडी विवरण हटाईयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallkaryakramsirshakRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'karyakram_name',
      page: 0,
      perPage: 10,
    })
    yield put(BudgetbibaranActions.deletekaryakramsirshakSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.deletekaryakramsirshakFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

/* ----- budgetbarsik ----- */
export function* fetchallbudgetbarsikRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getBudgetbarsikList(payloaddata)

  if (response.ok) {
    yield put(BudgetbibaranActions.fetchallbudgetbarsikSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.fetchallbudgetbarsikFailure())
  }
}

export function* fetchbudgetbarsikRequest(api, action) {
  const budgetbarsikId = action.payload
  const response = yield api.getBudgetbarsik(budgetbarsikId)

  if (response.ok) {
    yield put(BudgetbibaranActions.fetchbudgetbarsikSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.fetchbudgetbarsikFailure())
  }
}

// budgetbarsik lakshay
export function* fetchbudgetbarsiklakshaydataRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getBudgetbarsiklakshaydata(payloaddata)

  if (response.ok) {
    yield put(
      BudgetbibaranActions.fetchbudgetbarsiklakshaydataSuccess(response.data)
    )
  } else {
    yield put(BudgetbibaranActions.fetchbudgetbarsiklakshaydataFailure())
  }
}

// budgetchaumasik lakshay
export function* fetchbudgetchaumasiklakshaydataRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getBudgetchaumasiklakshaydata(payloaddata)

  if (response.ok) {
    yield put(
      BudgetbibaranActions.fetchbudgetchaumasiklakshaydataSuccess(response.data)
    )
  } else {
    yield put(BudgetbibaranActions.fetchbudgetchaumasiklakshaydataFailure())
  }
}

// Add budgetbarsik
export function* addbudgetbarsikRequest(api, action) {
  const { payload } = action

  const response = yield api.postBudgetbibaranBudgetbarsikAddNew(
    payload.budgetbarsik.data
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पती विवरण प्रविष्ट भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })

    yield fetchallbudgetbarsikRequest(api, {
      fromDate: '2075-01-01',
      toDate: '2090-12-30',
      distId: '%',
      officeId: '%',
      name: 'budget_type',
      page: 0,
      perPage: 10,
    })

    yield call(history.push, '/budget/budgetbarsiklist')
    yield put(BudgetbibaranActions.addbudgetbarsikSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.addbudgetbarsikFailure())

    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Update budgetbarsik
export function* updatebudgetbarsikRequest(api, action) {
  const { payload, budgetbarsikId } = action

  const response = yield api.postBudgetbibaranBudgetbarsikUpdate(
    payload.budgetbarsik.data,
    budgetbarsikId
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पती विवरण शंसोधन भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })

    yield fetchallbudgetbarsikRequest(api, {
      fromDate: '2075-01-01',
      toDate: '2090-12-30',
      distId: '%',
      officeId: '%',
      name: 'budget_type',
      page: 0,
      perPage: 10,
    })

    yield call(history.push, '/budget/budgetbarsiklist')
    yield put(BudgetbibaranActions.updatebudgetbarsikSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.updatebudgetbarsikFailure())

    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Delete budgetbarsik
export function* deletebudgetbarsikRequest(api, action) {
  const { payload } = action

  const response = yield api.postBudgetbibaranBudgetbarsikDelete(payload)

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पती विवरण हटाईयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })

    yield fetchallbudgetbarsikRequest(api, {
      fromDate: '2075-01-01',
      toDate: '2090-12-30',
      distId: '%',
      officeId: '%',
      name: 'budget_type',
      page: 0,
      perPage: 10,
    })

    yield put(BudgetbibaranActions.deletebudgetbarsikSuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.deletebudgetbarsikFailure())

    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

/* ----- budgetentry ----- */
export function* fetchallbudgetentryRequest(api, action) {
  const { payload } = action
  const payloaddata = isNil(payload) ? action : payload
  const response = yield api.getBudgetentryList(payloaddata)

  if (response.ok) {
    yield put(BudgetbibaranActions.fetchallbudgetentrySuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.fetchallbudgetentryFailure())
  }
}

export function* fetchbudgetentryRequest(api, action) {
  const budgetkarmacharidetailId = action.payload

  const response = yield api.getBudgetentry(budgetkarmacharidetailId)

  if (response.ok) {
    yield put(BudgetbibaranActions.fetchbudgetentrySuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.fetchbudgetentryFailure())
  }
}

// Add budgetentry
export function* addbudgetentryRequest(api, action) {
  const { payload } = action

  const response = yield api.postBudgetbibaranBudgetentryAddNew(
    payload.budgetentry.data
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पती विवरण प्रविष्ट भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallbudgetentryRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'createdAt',
      page: 0,
      perPage: 10,
    })
    yield call(history.push, '/budget/budgetentrylist')
    yield put(BudgetbibaranActions.addbudgetentrySuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.addbudgetentryFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Update budgetentry
export function* updatebudgetentryRequest(api, action) {
  const { payload, budgetkarmacharidetailId } = action

  const response = yield api.postBudgetbibaranBudgetentryUpdate(
    payload.budgetentry.data,
    budgetkarmacharidetailId
  )

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पती विवरण शंसोधन भयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallbudgetentryRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'createdAt',
      page: 0,
      perPage: 10,
    })
    yield call(history.push, '/budget/budgetentrylist')
    yield put(BudgetbibaranActions.updatebudgetentrySuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.updatebudgetentryFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}

// Delete budgetentry
export function* deletebudgetentryRequest(api, action) {
  const { payload } = action

  const response = yield api.postBudgetbibaranBudgetentryDelete(payload)

  if (response.data.error != null) {
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  } else if (response.ok) {
    toast.success('सफलतापुर्वक सम्पती विवरण हटाईयो !!!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
    yield fetchallbudgetentryRequest(api, {
      distId: '%',
      officeId: '%',
      name: 'createdAt',
      page: 0,
      perPage: 10,
    })
    yield put(BudgetbibaranActions.deletebudgetentrySuccess(response.data))
  } else {
    yield put(BudgetbibaranActions.deletebudgetentryFailure())
    toast.error(
      'तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    )
  }
}
