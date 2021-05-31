import { takeEvery, takeLatest, all } from "redux-saga/effects";
import API from "../services/api";
import { AppTypes } from "../actions/app";
import { BanbibaranTypes } from "../actions/banbibaran";

//------------------app
import { loginRequest, logoutRequest } from "./app";

//------------------------banbibaran
import { fetchallsamudayikbanbibaranRequest } from "./banbibaran";

const api = API.create();

export default function* root() {
  yield all([
    //-------------------------app
    takeLatest(AppTypes.LOGIN_REQUEST, loginRequest, api),
    takeLatest(AppTypes.LOGOUT_REQUEST, logoutRequest, api),

    //----------------------------banbibaran
    takeLatest(
      BanbibaranTypes.FETCHALLSAMUDAYIKBANBIBARAN_REQUEST,
      fetchallsamudayikbanbibaranRequest,
      api
    ),
  ]);
}
