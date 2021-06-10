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
import { BanpaidawarTypes } from "../actions/banpaidawar";
import { PlotbibaranTypes } from "../actions/plotbibaran";

import { KarmacharidarbandiTypes } from "../actions/karmacharidarbandi";
import { InventoriesTypes }  from "../actions/inventories";
import { KarmacharibibaranTypes} from "../actions/karmacharibibaran";
//------------------app
import { loginRequest, logoutRequest } from "./app";

//karmacharidarbandi---------------------
import{ 
  fetchallkarmacharidarbandiRequest,
  fetchkarmacharidarbandiRequest,
  } from "./karmacharidarbandi"; 


//------------------------banbibaran
import {
  fetchallsamudayikbanbibaranRequest,
  fetchsamudayikbanbibaranRequest,
  addsamudayikbanbibaranRequest,
  updatesamudayikbanbibaranRequest,
  deletesamudayikbanbibaranRequest,
  fetchalldharmikbanbibaranRequest,
  fetchdharmikbanbibaranRequest,
  adddharmikbanbibaranRequest,
  updatedharmikbanbibaranRequest,
  deletedharmikbanbibaranRequest,
  fetchallnijibanbibaranRequest,
  fetchnijibanbibaranRequest,
  addnijibanbibaranRequest,
  updatenijibanbibaranRequest,
  deletenijibanbibaranRequest,
  fetchallkabuliyatibanbibaranRequest,
  fetchkabuliyatibanbibaranRequest,
  addkabuliyatibanbibaranRequest,
  updatekabuliyatibanbibaranRequest,
  deletekabuliyatibanbibaranRequest,
  fetchallnabikarankaryayojanaRequest,
  fetchnabikarankaryayojanaRequest,
  addnabikarankaryayojanaRequest,
  updatenabikarankaryayojanaRequest,
  deletenabikarankaryayojanaRequest,
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
  addbanyajantuuddarRequest,
  updatebanyajantuuddarRequest,
  deletebanyajantuuddarRequest,
  fetchallbanyajantuxetiRequest,
  fetchbanyajantuxetiRequest,
  addbanyajantuxetiRequest,
  updatebanyajantuxetiRequest,
  deletebanyajantuxetiRequest,
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

// ----------banxetraatikraman

import {
  fetchallbanxetraatikramanRequest,
  fetchbanxetraatikramanRequest,
  addbanxetraatikramanRequest,
  updatebanxetraatikramanRequest,
  deletebanxetraatikramanRequest,
} from "./banxetraatikraman";

//-------banpaidawar
import {
  fetchallbanpaidawarRequest,
  fetchbanpaidawarRequest,
  addbanpaidawarRequest,
  updatebanpaidawarRequest,
  deletebanpaidawarRequest,
  fetchallbanpaidawarlilamRequest,
  fetchbanpaidawarlilamRequest,
  addbanpaidawarlilamRequest,
  updatebanpaidawarlilamRequest,
  deletebanpaidawarlilamRequest,
} from "./banpaidawar";

//--------------------bandadelobibaran

import {
  fetchallbandadelobibaranRequest,
  fetchbandadelobibaranRequest,
  addbandadelobibaranRequest,
  updatebandadelobibaranRequest,
  deletebandadelobibaranRequest,
} from "./bandadelobibaran";

//-----------plotbibaran

import { 
  fetchallplotbibaranRequest,
  fetchplotbibaranRequest,
 } from "./plotbibaran";

 //---------inventories

 import{
   fetchallinventoriesRequest,
   fetchinventoriesRequest,
   fetchallentryRequest,
   fetchentryRequest,
   fetchallexitRequest,
   fetchexitRequest,
 } from "./inventories";

 //--------karmacharibibaran

 import{
   fetchallemployeesRequest,
   fetchemployeesRequest,
   fetchallemployeeshistoryRequest,
   fetchemployeeshistoryRequest,
   fetchalllevelRequest,
   fetchlevelRequest,
   fetchallpostRequest,
   fetchpostRequest,
 } from "./karmacharibibaran";

 
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
      BanbibaranTypes.DELETESAMUDAYIKBANBIBARAN_REQUEST,
      deletesamudayikbanbibaranRequest,
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
      BanbibaranTypes.ADDDHARMIKBANBIBARAN_REQUEST,
      adddharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.UPDATEDHARMIKBANBIBARAN_REQUEST,
      updatedharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.DELETEDHARMIKBANBIBARAN_REQUEST,
      deletedharmikbanbibaranRequest,
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
      BanbibaranTypes.ADDNIJIBANBIBARAN_REQUEST,
      addnijibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.UPDATENIJIBANBIBARAN_REQUEST,
      updatenijibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.DELETENIJIBANBIBARAN_REQUEST,
      deletenijibanbibaranRequest,
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

    takeLatest(
      BanbibaranTypes.ADDKABULIYATIBANBIBARAN_REQUEST,
      addkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.UPDATEKABULIYATIBANBIBARAN_REQUEST,
      updatekabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.DELETEKABULIYATIBANBIBARAN_REQUEST,
      deletekabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHALLNABIKARANKARYAYOJANA_REQUEST,
      fetchallnabikarankaryayojanaRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHNABIKARANKARYAYOJANA_REQUEST,
      fetchnabikarankaryayojanaRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.ADDNABIKARANKARYAYOJANA_REQUEST,
      addnabikarankaryayojanaRequest,
      api
    ),


    takeLatest(
      BanbibaranTypes.UPDATENABIKARANKARYAYOJANA_REQUEST,
      updatenabikarankaryayojanaRequest,
      api
    ),


    takeLatest(
      BanbibaranTypes.DELETENABIKARANKARYAYOJANA_REQUEST,
      deletenabikarankaryayojanaRequest,
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
      DwandabebasthapanTypes.ADDBANYAJANTUUDDAR_REQUEST,
      addbanyajantuuddarRequest,
      api
    ),

    takeLatest(
      DwandabebasthapanTypes.UPDATEBANYAJANTUUDDAR_REQUEST,
      updatebanyajantuuddarRequest,
      api
    ),

    takeLatest(
      DwandabebasthapanTypes.DELETEBANYAJANTUUDDAR_REQUEST,
      deletebanyajantuuddarRequest,
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

    takeLatest(
      DwandabebasthapanTypes.ADDBANYAJANTUXETI_REQUEST,
      addbanyajantuxetiRequest,
      api
    ),

    takeLatest(
      DwandabebasthapanTypes.UPDATEBANYAJANTUXETI_REQUEST,
      updatebanyajantuxetiRequest,
      api
    ),

    takeLatest(
      DwandabebasthapanTypes.DELETEBANYAJANTUXETI_REQUEST,
      deletebanyajantuxetiRequest,
      api
    ),

    // Karmachari darbandi
    takeLatest(
      KarmacharidarbandiTypes.FETCHALLKARMACHARIDARBANDI_REQUEST,
      fetchallkarmacharidarbandiRequest,
      api
    ),

    takeLatest(
      KarmacharidarbandiTypes.FETCHKARMACHARIDARBANDI_REQUEST,
      fetchkarmacharidarbandiRequest,
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

    takeLatest(
      BanxetraatikramanTypes.ADDBANXETRAATIKRAMAN_REQUEST,
      addbanxetraatikramanRequest,
      api
    ),

    takeLatest(
      BanxetraatikramanTypes.UPDATEBANXETRAATIKRAMAN_REQUEST,
      updatebanxetraatikramanRequest,
      api
    ),

    takeLatest(
      BanxetraatikramanTypes.DELETEBANXETRAATIKRAMAN_REQUEST,
      deletebanxetraatikramanRequest,
      api
    ),

    //bandadelobibaran

    takeLatest(
      BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_REQUEST,
      fetchallbandadelobibaranRequest,
      api
    ),

    takeLatest(
      BandadelobibaranTypes.FETCHBANDADELOBIBARAN_REQUEST,
      fetchbandadelobibaranRequest,
      api
    ),

    takeLatest(
      BandadelobibaranTypes.ADDBANDADELOBIBARAN_REQUEST,
      addbandadelobibaranRequest,
      api
    ),

    takeLatest(
      BandadelobibaranTypes.UPDATEBANDADELOBIBARAN_REQUEST,
      updatebandadelobibaranRequest,
      api
    ),

    takeLatest(
      BandadelobibaranTypes.DELETEBANDADELOBIBARAN_REQUEST,
      deletebandadelobibaranRequest,
      api
    ),

    //----------banpaidawar
    takeLatest(
      BanpaidawarTypes.FETCHALLBANPAIDAWAR_REQUEST,
      fetchallbanpaidawarRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.FETCHBANPAIDAWAR_REQUEST,
      fetchbanpaidawarRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.ADDBANPAIDAWAR_REQUEST,
      addbanpaidawarRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.UPDATEBANPAIDAWAR_REQUEST,
      updatebanpaidawarRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.DELETEBANPAIDAWAR_REQUEST,
      deletebanpaidawarRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.FETCHALLBANPAIDAWARLILAM_REQUEST,
      fetchallbanpaidawarlilamRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.FETCHBANPAIDAWARLILAM_REQUEST,
      fetchbanpaidawarlilamRequest,
      api
    ),  

    takeLatest(
      BanpaidawarTypes.ADDBANPAIDAWARLILAM_REQUEST,
      addbanpaidawarlilamRequest,
      api
    ),  

    takeLatest(
      BanpaidawarTypes.UPDATEBANPAIDAWARLILAM_REQUEST,
      updatebanpaidawarlilamRequest,
      api
    ),  

    takeLatest(
      BanpaidawarTypes.DELETEBANPAIDAWARLILAM_REQUEST,
      deletebanpaidawarlilamRequest,
      api
    ),  
  
    //------plotbibaran
    takeLatest(
      PlotbibaranTypes.FETCHALLPLOTBIBARAN_REQUEST,
      fetchallplotbibaranRequest,
      api
    ),
    
    takeLatest(
      PlotbibaranTypes.FETCHPLOTBIBARAN_REQUEST,
      fetchplotbibaranRequest,
      api
    ),

    //inventories
    takeLatest(
      InventoriesTypes.FETCHALLINVENTORIES_REQUEST,
      fetchallinventoriesRequest,
      api
    ), 

    takeLatest(
      InventoriesTypes.FETCHINVENTORIES_REQUEST,
      fetchinventoriesRequest,
      api
    ),
    
    takeLatest(
      InventoriesTypes.FETCHALLENTRY_REQUEST,
      fetchallentryRequest,
      api
    ), 

    takeLatest(
      InventoriesTypes.FETCHENTRY_REQUEST,
      fetchentryRequest,
      api
    ), 

    takeLatest(
      InventoriesTypes.FETCHALLEXIT_REQUEST,
      fetchallexitRequest,
      api
    ), 

    
    takeLatest(
      InventoriesTypes.FETCHEXIT_REQUEST,
      fetchexitRequest,
      api
    ), 

     //karmacharibibaran
     takeLatest(
      KarmacharibibaranTypes.FETCHALLEMPLOYEES_REQUEST,
      fetchallemployeesRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.FETCHEMPLOYEES_REQUEST,
      fetchemployeesRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.FETCHALLEMPLOYEESHISTORY_REQUEST,
      fetchallemployeeshistoryRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.FETCHEMPLOYEESHISTORY_REQUEST,
      fetchemployeeshistoryRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.FETCHALLLEVEL_REQUEST,
      fetchalllevelRequest,
      api
    ),
    
    takeLatest(
      KarmacharibibaranTypes.FETCHLEVEL_REQUEST,
      fetchlevelRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.FETCHALLPOST_REQUEST,
      fetchallpostRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.FETCHPOST_REQUEST,
      fetchpostRequest,
      api
    ),

  ]);
}
