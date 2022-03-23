import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { dropLast, prepend } from 'ramda';
import { BudgetbibaranTypes } from '../actions/budgetbibaran';

const initialState = Immutable({
  status: '',
  token: '',
});

/* ----- budgetsirshak ----- */

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

/* ----- budgetbarsik ----- */

const fetchallbudgetbarsikRequest = (state, action) =>
  state.merge({ ...state, token: '', status: 'pending' });
const fetchallbudgetbarsikSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: 'done',
    allbudgetbarsikData: action.response,
  });
};
const fetchallbudgetbarsikFailure = (state, action) => {
  state.merge({ ...state, status: 'error' });
};

const fetchbudgetbarsikRequest = (state, action) =>
  state.merge({ ...state, token: '', status: 'pending' });
const fetchbudgetbarsikSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: 'done',
    budgetbarsikData: action.response,
  });
};
const fetchbudgetbarsikFailure = (state, action) => {
  state.merge({ ...state, status: 'error' });
};

//Add budgetbarsik
const addbudgetbarsikRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' });
const addbudgetbarsikSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  });
const addbudgetbarsikFailure = (state, action) =>
  state.merge({ ...state, status: 'error' });

//Update budgetbarsik
const updatebudgetbarsikRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' });
const updatebudgetbarsikSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  });
const updatebudgetbarsikFailure = (state, action) =>
  state.merge({ ...state, status: 'error' });

//Delete budgetbarsik
const deletebudgetbarsikRequest = (state, action) =>
  state.merge({ ...state, status: 'pending' });
const deletebudgetbarsikSuccess = (state, action) =>
  state.merge({
    ...state,
    status: 'done',
  });
const deletebudgetbarsikFailure = (state, action) =>
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

  //budgetbarsik
  [BudgetbibaranTypes.FETCHALLBUDGETBARSIK_REQUEST]:
    fetchallbudgetbarsikRequest,
  [BudgetbibaranTypes.FETCHALLBUDGETBARSIK_SUCCESS]:
    fetchallbudgetbarsikSuccess,
  [BudgetbibaranTypes.FETCHALLBUDGETBARSIK_FAILURE]:
    fetchallbudgetbarsikFailure,

  [BudgetbibaranTypes.FETCHBUDGETBARSIK_REQUEST]: fetchbudgetbarsikRequest,
  [BudgetbibaranTypes.FETCHBUDGETBARSIK_SUCCESS]: fetchbudgetbarsikSuccess,
  [BudgetbibaranTypes.FETCHBUDGETBARSIK_FAILURE]: fetchbudgetbarsikFailure,

  [BudgetbibaranTypes.ADDBUDGETBARSIK_REQUEST]: addbudgetbarsikRequest,
  [BudgetbibaranTypes.ADDBUDGETBARSIK_SUCCESS]: addbudgetbarsikSuccess,
  [BudgetbibaranTypes.ADDBUDGETBARSIK_FAILURE]: addbudgetbarsikFailure,

  [BudgetbibaranTypes.UPDATEBUDGETBARSIK_REQUEST]: updatebudgetbarsikRequest,
  [BudgetbibaranTypes.UPDATEBUDGETBARSIK_SUCCESS]: updatebudgetbarsikSuccess,
  [BudgetbibaranTypes.UPDATEBUDGETBARSIK_FAILURE]: updatebudgetbarsikFailure,

  [BudgetbibaranTypes.DELETEBUDGETBARSIK_REQUEST]: deletebudgetbarsikRequest,
  [BudgetbibaranTypes.DELETEBUDGETBARSIK_SUCCESS]: deletebudgetbarsikSuccess,
  [BudgetbibaranTypes.DELETEBUDGETBARSIK_FAILURE]: deletebudgetbarsikFailure,

  [BudgetbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BudgetbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
