import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { dropLast, prepend } from 'ramda';
import { BudgetbibaranTypes } from '../actions/budgetbibaran';

const initialState = Immutable({
  status: '',
  token: '',
});

const fetchallbudgetsirshakRequest = (state, action) =>
  state.merge({ ...state, token: '', status: 'pending' });
const fetchallbudgetsirshakSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: 'done',
    allbudgetsirshakData: action.response,
  });
};
const fetchallbudgetsirshakFailure = (state, action) => {
  state.merge({ ...state, status: 'error' });
};

const fetchbudgetsirshakRequest = (state, action) =>
  state.merge({ ...state, token: '', status: 'pending' });
const fetchbudgetsirshakSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: 'done',
    budgetsirshakData: action.response,
  });
};
const fetchbudgetsirshakFailure = (state, action) => {
  state.merge({ ...state, status: 'error' });
};

//Add budgetsirshak
const addbudgetsirshakRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' });
const addbudgetsirshakSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  });
const addbudgetsirshakFailure = (state, action) =>
  state.merge({ ...state, status: 'error' });

//Update budgetsirshak
const updatebudgetsirshakRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' });
const updatebudgetsirshakSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  });
const updatebudgetsirshakFailure = (state, action) =>
  state.merge({ ...state, status: 'error' });

//Delete budgetsirshak
const deletebudgetsirshakRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' });
const deletebudgetsirshakSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  });
const deletebudgetsirshakFailure = (state, action) =>
  state.merge({ ...state, status: 'error' });

const locationsRequest = (state, action) => {
  let locations = state.locations;

  locations = prepend(action.payload.route, locations);
  locations = dropLast(1, locations);
  return state.merge({ ...state, locations });
};

const clearRequest = (state, action) =>
  state.merge({ ...state, ...initialState });

export const reducer = createReducer(initialState, {
  [BudgetbibaranTypes.FETCHALLBUDGETSIRSHAK_REQUEST]:
    fetchallbudgetsirshakRequest,
  [BudgetbibaranTypes.FETCHALLBUDGETSIRSHAK_SUCCESS]:
    fetchallbudgetsirshakSuccess,
  [BudgetbibaranTypes.FETCHALLBUDGETSIRSHAK_FAILURE]:
    fetchallbudgetsirshakFailure,

  [BudgetbibaranTypes.FETCHBUDGETSIRSHAK_REQUEST]: fetchbudgetsirshakRequest,
  [BudgetbibaranTypes.FETCHBUDGETSIRSHAK_SUCCESS]: fetchbudgetsirshakSuccess,
  [BudgetbibaranTypes.FETCHBUDGETSIRSHAK_FAILURE]: fetchbudgetsirshakFailure,

  [BudgetbibaranTypes.ADDBUDGETSIRSHAK_REQUEST]: addbudgetsirshakRequest,
  [BudgetbibaranTypes.ADDBUDGETSIRSHAK_SUCCESS]: addbudgetsirshakSuccess,
  [BudgetbibaranTypes.ADDBUDGETSIRSHAK_FAILURE]: addbudgetsirshakFailure,

  [BudgetbibaranTypes.UPDATEBUDGETSIRSHAK_REQUEST]: updatebudgetsirshakRequest,
  [BudgetbibaranTypes.UPDATEBUDGETSIRSHAK_SUCCESS]: updatebudgetsirshakSuccess,
  [BudgetbibaranTypes.UPDATEBUDGETSIRSHAK_FAILURE]: updatebudgetsirshakFailure,

  [BudgetbibaranTypes.DELETEBUDGETSIRSHAK_REQUEST]: deletebudgetsirshakRequest,
  [BudgetbibaranTypes.DELETEBUDGETSIRSHAK_SUCCESS]: deletebudgetsirshakSuccess,
  [BudgetbibaranTypes.DELETEBUDGETSIRSHAK_FAILURE]: deletebudgetsirshakFailure,

  [BudgetbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BudgetbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
