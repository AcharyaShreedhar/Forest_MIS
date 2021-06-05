import { takeEvery, takeLatest, all } from "redux-saga/effects";
import API from "../services/api";
import { AppTypes } from "../actions/app";
import { BanbibaranTypes } from "../actions/banbibaran";
import { BiruwautpadanTypes } from "../actions/biruwautpadan";
import { DwandabebasthapanTypes } from "../actions/dwandabebasthapan";
import { SampatibibaranTypes } from "../actions/sampatibibaran";
//------------------app
import { loginRequest, logoutRequest } from "./app";

//------------------------banbibaran
import { fetchallsamudayikbanbibaranRequest } from "./banbibaran";
import { fetchsamudayikbanbibaranRequest } from "./banbibaran";
import { fetchalldharmikbanbibaranRequest } from "./banbibaran";
import { fetchdharmikbanbibaranRequest } from "./banbibaran";
import { fetchallnijibanbibaranRequest } from "./banbibaran";
import { fetchnijibanbibaranRequest } from "./banbibaran";
import { fetchallkabuliyatibanbibaranRequest } from "./banbibaran";
import { fetchkabuliyatibanbibaranRequest} from "./banbibaran";
//------------------------biruwautpadan
import { fetchallbiruwautpadanRequest} from "./biruwautpadan";
import { fetchbiruwautpadanRequest} from "./biruwautpadan";

//-----------------dwandabebasthapan
import{ fetchallbanyajantuuddarRequest } from "./dwandabebasthapan";
import{ fetchbanyajantuuddarRequest } from "./dwandabebasthapan";
import{ fetchallbanyajantuxetiRequest } from "./dwandabebasthapan";

//-------------------sampatibibaran
import { fetchallassetsRequest, fetchassetsRequest, fetchallvehiclesRequest } from "./sampatibibaran";

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
      BiruwautpadanTypes.FETCHBIRUWAUTPADAN_REQUEST,
      fetchbiruwautpadanRequest,
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
     

  ]);
}
