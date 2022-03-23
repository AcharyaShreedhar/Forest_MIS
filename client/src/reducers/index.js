import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import configureStore from '../configureStore';
import immutablePersistenceTransform from '../services/transform';

const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  transforms: [immutablePersistenceTransform],
};

/* ------------- Assemble The Reducers ------------- */
const reducers = combineReducers({
  app: require('./app').reducer,
  bankaprakar: require('./bankaprakar').reducer,
  dwandabebasthapan: require('./dwandabebasthapan').reducer,
  biruwautpadan: require('./biruwautpadan').reducer,
  sampatibibaran: require('./sampatibibaran').reducer,
  banpaidawar: require('./banpaidawar').reducer,
  karmacharidarbandi: require('./karmacharidarbandi').reducer,
  inventories: require('./inventories').reducer,
  karmacharibibaran: require('./karmacharibibaran').reducer,
  banbibaran: require('./banbibaran').reducer,
  karyabibaran: require('./karyabibaran').reducer,
  miscellaneous: require('./miscellaneous').reducer,
  bipatbibaran: require('./bipatbibaran').reducer,
  samrakshyan: require('./samrakshyan').reducer,
  report: require('./report').reducer,
  budgetbibaran: require('./budgetbibaran').reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const initialState = {};

const store = configureStore(initialState, persistedReducer, history);

const persistor = persistStore(store);

export { store, persistor, history };
