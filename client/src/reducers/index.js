import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBrowserHistory } from "history";
import configureStore from "../configureStore";
import immutablePersistenceTransform from "../services/transform";

const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  transforms: [immutablePersistenceTransform],
};

/* ------------- Assemble The Reducers ------------- */
const reducers = combineReducers({
  app: require("./app").reducer,
  banbibaran: require("./banbibaran").reducer,
  dwandabebasthapan: require("./dwandabebasthapan").reducer,
  biruwautpadan: require("./biruwautpadan").reducer,
  sampatibibaran: require("./sampatibibaran").reducer,
  muddaanusandhandayari: require("./muddaanusandhandayari").reducer,
  bandadelobibaran: require("./bandadelobibaran").reducer,
  banxetraatikraman: require("./banxetraatikraman").reducer,
  banpaidawar: require("./banpaidawar").reducer,
  karmacharidarbandi: require("./karmacharidarbandi").reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const initialState = {};

const store = configureStore(initialState, persistedReducer, history);

const persistor = persistStore(store);

export { store, persistor, history };
