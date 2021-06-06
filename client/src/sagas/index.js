import { takeEvery, takeLatest, all } from "redux-saga/effects";
import API from "../services/api";
import { AppTypes } from "../actions/app";
import { BanbibaranTypes } from "../actions/banbibaran";
import { BiruwautpadanTypes } from "../actions/biruwautpadan";
import { DwandabebasthapanTypes } from "../actions/dwandabebasthapan";
import { SampatibibaranTypes } from "../actions/sampatibibaran";
import { MuddaanusandhandayariTypes } from "../actions/muddaanusandhandayari";
import { BandadelobibaranTypes } from "../actions/bandadelobibaran";
import { BanxetraatikramanTypes } from "../actions/banxetraatikraman";

//------------------app
import { loginRequest, logoutRequest } from "./app";

//------------------------banbibaran
import {
  fetchallsamudayikbanbibaranRequest,
  fetchsamudayikbanbibaranRequest,
  addsamudayikbanbibaranRequest,
  updatesamudayikbanbibaranRequest,
  fetchalldharmikbanbibaranRequest,
  fetchdharmikbanbibaranRequest,
  fetchallnijibanbibaranRequest,
  fetchnijibanbibaranRequest,
  fetchallkabuliyatibanbibaranRequest,
  fetchkabuliyatibanbibaranRequest,
} from "./banbibaran";

//------------------------biruwautpadan
import {
  fetchallbiruwautpadanRequest,
  fetchbiruwautpadanRequest,
} from "./biruwautpadan";

//-----------------dwandabebasthapan
import {
  fetchallbanyajantuuddarRequest,
  fetchbanyajantuuddarRequest,
  fetchallbanyajantuxetiRequest,
  fetchbanyajantuxetiRequest,
} from "./dwandabebasthapan";

//-------------------sampatibibaran
import {
  fetchallassetsRequest,
  fetchassetsRequest,
  fetchallvehiclesRequest,
  fetchvehiclesRequest,
} from "./sampatibibaran";

// ----------muddaanusandandayari

import {
  fetchallmuddaanusandhandayariRequest,
  fetchmuddaanusandhandayariRequest,
} from "./muddaanusandhandayari";

//--------------------bandadelobibaran
import { fetchallbandadelobibaranRequest } from "./bandadelobibaran";

// ----------banxetraatikraman

import {
  fetchallbanxetraatikramanRequest,
  fetchbanxetraatikramanRequest,
} from "./banxetraatikraman";

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

    takeLatest(
      BanbibaranTypes.FETCHSAMUDAYIKBANBIBARAN_REQUEST,
      fetchsamudayikbanbibaranRequest,
      api
    ),
    takeLatest(
      BanbibaranTypes.ADDSAMUDAYIKBANBIBARAN_REQUEST,
      addsamudayikbanbibaranRequest,
      api
    ),
    takeLatest(
      BanbibaranTypes.UPDATESAMUDAYIKBANBIBARAN_REQUEST,
      updatesamudayikbanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHALLDHARMIKBANBIBARAN_REQUEST,
      fetchalldharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHDHARMIKBANBIBARAN_REQUEST,
      fetchdharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHALLNIJIBANBIBARAN_REQUEST,
      fetchallnijibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHNIJIBANBIBARAN_REQUEST,
      fetchnijibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHALLKABULIYATIBANBIBARAN_REQUEST,
      fetchallkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHKABULIYATIBANBIBARAN_REQUEST,
      fetchkabuliyatibanbibaranRequest,
      api
    ),
    // Biruwautpadan
    takeLatest(
      BiruwautpadanTypes.FETCHALLBIRUWAUTPADAN_REQUEST,
      fetchallbiruwautpadanRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.FETCHBIRUWAUTPADAN_REQUEST,
      fetchbiruwautpadanRequest,
      api
    ),

    //---------Dwandabebasthapan

    takeLatest(
      DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_REQUEST,
      fetchallbanyajantuuddarRequest,
      api
    ),

    takeLatest(
      DwandabebasthapanTypes.FETCHBANYAJANTUUDDAR_REQUEST,
      fetchbanyajantuuddarRequest,
      api
    ),

    takeLatest(
      DwandabebasthapanTypes.FETCHALLBANYAJANTUXETI_REQUEST,
      fetchallbanyajantuxetiRequest,
      api
    ),

    takeLatest(
      DwandabebasthapanTypes.FETCHBANYAJANTUXETI_REQUEST,
      fetchbanyajantuxetiRequest,
      api
    ),

    //sampatibibaran

    takeLatest(
      SampatibibaranTypes.FETCHALLASSETS_REQUEST,
      fetchallassetsRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.FETCHASSETS_REQUEST,
      fetchassetsRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.FETCHALLVEHICLES_REQUEST,
      fetchallvehiclesRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.FETCHVEHICLES_REQUEST,
      fetchvehiclesRequest,
      api
    ),

    //------muddaanusandhandayari

    takeLatest(
      MuddaanusandhandayariTypes.FETCHALLMUDDAANUSANDHANDAYARI_REQUEST,
      fetchallmuddaanusandhandayariRequest,
      api
    ),

    takeLatest(
      MuddaanusandhandayariTypes.FETCHMUDDAANUSANDHANDAYARI_REQUEST,
      fetchmuddaanusandhandayariRequest,
      api
    ),

    //-----banxetraatikraman
    takeLatest(
      BanxetraatikramanTypes.FETCHALLBANXETRAATIKRAMAN_REQUEST,
      fetchallbanxetraatikramanRequest,
      api
    ),

    takeLatest(
      BanxetraatikramanTypes.FETCHBANXETRAATIKRAMAN_REQUEST,
      fetchbanxetraatikramanRequest,
      api
    ),

    //bandadelobibaran

    takeLatest(
      BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_REQUEST,
      fetchallbandadelobibaranRequest,
      api
    ),
  ]);
}
