import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { dropLast, prepend } from 'ramda'
import { BudgetbibaranTypes } from '../actions/budgetbibaran'

const initialState = Immutable({
  status: '',
  token: '',
})
const fetchallkaryakramsirshakRequest = (state, action) =>
  state.merge({ ...state, token: '', status: 'pending' })
const fetchallkaryakramsirshakSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: 'done',
    allkaryakramsirshakData: action.response,
  })
}
const fetchallkaryakramsirshakFailure = (state, action) => {
  state.merge({ ...state, status: 'error' })
}

const fetchkaryakramsirshakRequest = (state, action) =>
  state.merge({ ...state, token: '', status: 'pending' })
const fetchkaryakramsirshakSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: 'done',
    karyakramsirshakData: action.response,
  })
}
const fetchkaryakramsirshakFailure = (state, action) => {
  state.merge({ ...state, status: 'error' })
}

//Add karyakramsirshak
const addkaryakramsirshakRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' })
const addkaryakramsirshakSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  })
const addkaryakramsirshakFailure = (state, action) =>
  state.merge({ ...state, status: 'error' })

//Update karyakramsirshak
const updatekaryakramsirshakRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' })
const updatekaryakramsirshakSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  })
const updatekaryakramsirshakFailure = (state, action) =>
  state.merge({ ...state, status: 'error' })

//Delete karyakramsirshak
const deletekaryakramsirshakRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' })
const deletekaryakramsirshakSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  })
const deletekaryakramsirshakFailure = (state, action) =>
  state.merge({ ...state, status: 'error' })

/// budgetsirshak dropdown
const fetchbudgetsirshakdropdownRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' })
const fetchbudgetsirshakdropdownSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: 'done',
    budgetSirshakDropdownData: action.response,
  })
}

const fetchbudgetsirshakdropdownFailure = (state, action) => {
  state.merge({ ...state, status: 'error' })
}

const locationsRequest = (state, action) => {
  let locations = state.locations

  locations = prepend(action.payload.route, locations)
  locations = dropLast(1, locations)
  return state.merge({ ...state, locations })
}

const clearRequest = (state, action) =>
  state.merge({ ...state, ...initialState })

export const reducer = createReducer(initialState, {
  [BudgetbibaranTypes.FETCHALLKARYAKRAMSIRSHAK_REQUEST]:
    fetchallkaryakramsirshakRequest,
  [BudgetbibaranTypes.FETCHALLKARYAKRAMSIRSHAK_SUCCESS]:
    fetchallkaryakramsirshakSuccess,
  [BudgetbibaranTypes.FETCHALLKARYAKRAMSIRSHAK_FAILURE]:
    fetchallkaryakramsirshakFailure,

  [BudgetbibaranTypes.FETCHKARYAKRAMSIRSHAK_REQUEST]:
    fetchkaryakramsirshakRequest,
  [BudgetbibaranTypes.FETCHKARYAKRAMSIRSHAK_SUCCESS]:
    fetchkaryakramsirshakSuccess,
  [BudgetbibaranTypes.FETCHKARYAKRAMSIRSHAK_FAILURE]:
    fetchkaryakramsirshakFailure,

  [BudgetbibaranTypes.ADDKARYAKRAMSIRSHAK_REQUEST]: addkaryakramsirshakRequest,
  [BudgetbibaranTypes.ADDKARYAKRAMSIRSHAK_SUCCESS]: addkaryakramsirshakSuccess,
  [BudgetbibaranTypes.ADDKARYAKRAMSIRSHAK_FAILURE]: addkaryakramsirshakFailure,

  [BudgetbibaranTypes.UPDATEKARYAKRAMSIRSHAK_REQUEST]:
    updatekaryakramsirshakRequest,
  [BudgetbibaranTypes.UPDATEKARYAKRAMSIRSHAK_SUCCESS]:
    updatekaryakramsirshakSuccess,
  [BudgetbibaranTypes.UPDATEKARYAKRAMSIRSHAK_FAILURE]:
    updatekaryakramsirshakFailure,

  [BudgetbibaranTypes.DELETEKARYAKRAMSIRSHAK_REQUEST]:
    deletekaryakramsirshakRequest,
  [BudgetbibaranTypes.DELETEKARYAKRAMSIRSHAK_SUCCESS]:
    deletekaryakramsirshakSuccess,
  [BudgetbibaranTypes.DELETEKARYAKRAMSIRSHAK_FAILURE]:
    deletekaryakramsirshakFailure,

  [BudgetbibaranTypes.FETCHBUDGETSIRSHAKDROPDOWN_REQUEST]:
    fetchbudgetsirshakdropdownRequest,
  [BudgetbibaranTypes.FETCHBUDGETSIRSHAKDROPDOWN_SUCCESS]:
    fetchbudgetsirshakdropdownSuccess,
  [BudgetbibaranTypes.FETCHBUDGETSIRSHAKDROPDOWN_FAILURE]:
    fetchbudgetsirshakdropdownFailure,

  [BudgetbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BudgetbibaranTypes.CLEAR_REQUEST]: clearRequest,
})
