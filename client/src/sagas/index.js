import { takeLatest, all } from "redux-saga/effects";
import API from "../services/api";
import { AppTypes } from "../actions/app";
import { BankaprakarTypes } from "../actions/bankaprakar";
import { BanbibaranTypes } from "../actions/banbibaran";
import { BiruwautpadanTypes } from "../actions/biruwautpadan";
import { DwandabebasthapanTypes } from "../actions/dwandabebasthapan";
import { SampatibibaranTypes } from "../actions/sampatibibaran";
import { MuddaanusandhandayariTypes } from "../actions/muddaanusandhandayari";
import { BandadelobibaranTypes } from "../actions/bandadelobibaran";
import { BanxetraatikramanTypes } from "../actions/banxetraatikraman";
import { BanpaidawarTypes } from "../actions/banpaidawar";
import { KarmacharidarbandiTypes } from "../actions/karmacharidarbandi";
import { InventoriesTypes } from "../actions/inventories";
import { KarmacharibibaranTypes } from "../actions/karmacharibibaran";
import { KaryabibaranTypes } from "../actions/karyabibaran";
import { MiscellaneousTypes } from "../actions/miscellaneous";
import { BipatbibaranTypes } from "../actions/bipatbibaran";
//------------------app
import {
  fetchalldepartmentsRequest,
  fetchdepartmentsRequest,
  adddepartmentsRequest,
  updatedepartmentsRequest,
  deletedepartmentsRequest,
  fetchalldistrictsRequest,
  fetchdistrictsRequest,
  adddistrictsRequest,
  updatedistrictsRequest,
  deletedistrictsRequest,
  fetchallmunicipalitiesRequest,
  fetchmunicipalitiesRequest,
  addmunicipalitiesRequest,
  updatemunicipalitiesRequest,
  deletemunicipalitiesRequest,
  fetchallprovincesRequest,
  fetchprovincesRequest,
  addprovincesRequest,
  updateprovincesRequest,
  deleteprovincesRequest,
  fetchallusersRequest,
  fetchusersRequest,
  addusersRequest,
  updateusersRequest,
  deleteusersRequest,
  loginRequest,
  logoutRequest,
} from "./app";

//karmacharidarbandi---------------------
import {
  fetchallkarmacharidarbandiRequest,
  fetchkarmacharidarbandiRequest,
  addkarmacharidarbandiRequest,
  updatekarmacharidarbandiRequest,
  deletekarmacharidarbandiRequest,
} from "./karmacharidarbandi";

import {
  fetchallbaramaditchijbastuRequest,
  fetchbaramaditchijbastuRequest,
  fetchallbanxetraanyaprayojanRequest,
  fetchbanxetraanyaprayojanRequest,
  fetchallplotbibaranRequest,
  fetchplotbibaranRequest,
  fetchalluddhyambibaranRequest,
  fetchuddhyambibaranRequest,
  adduddhyambibaranRequest,
  updateuddhyambibaranRequest,
  deleteuddhyambibaranRequest,
  addplotbibaranRequest,
  addbaramaditchijbastuRequest,
  addbanxetraanyaprayojanRequest,
  updatebaramaditchijbastuRequest,
  updatebanxetraanyaprayojanRequest,
  updateplotbibaranRequest,
  deleteplotbibaranRequest,
  deletebaramaditchijbastuRequest,
  deletebanxetraanyaprayojanRequest,
  fetchallbachatbibaranRequest,
  fetchbachatbibaranRequest,
  addbachatbibaranRequest,
  updatebachatbibaranRequest,
  deletebachatbibaranRequest,
} from "./banbibaran";

//------------------------bankaprakar
import {
  fetchallconsumergroupdetailsRequest,
  fetchconsumergroupdetailsRequest,
  addconsumergroupdetailsRequest,
  updateconsumergroupdetailsRequest,
  deleteconsumergroupdetailsRequest,
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
  fetchallcommercialkabuliyatibanbibaranRequest,
  fetchcommercialkabuliyatibanbibaranRequest,
  addcommercialkabuliyatibanbibaranRequest,
  updatecommercialkabuliyatibanbibaranRequest,
  deletecommercialkabuliyatibanbibaranRequest,
  fetchallrastriyabanbibaranRequest,
  fetchrastriyabanbibaranRequest,
  addrastriyabanbibaranRequest,
  updaterastriyabanbibaranRequest,
  deleterastriyabanbibaranRequest,
  fetchallnabikarankaryayojanaRequest,
  fetchnabikarankaryayojanaRequest,
  addnabikarankaryayojanaRequest,
  updatenabikarankaryayojanaRequest,
  deletenabikarankaryayojanaRequest,
  fetchallchaklabanbibaranRequest,
  fetchchaklabanbibaranRequest,
  addchaklabanbibaranRequest,
  updatechaklabanbibaranRequest,
  deletechaklabanbibaranRequest,
  fetchallsajhedaribanbibaranRequest,
  fetchsajhedaribanbibaranRequest,
  addsajhedaribanbibaranRequest,
  updatesajhedaribanbibaranRequest,
  deletesajhedaribanbibaranRequest,
} from "./bankaprakar";

//------------------------biruwautpadan
import {
  fetchallbiruwautpadanRequest,
  fetchbiruwautpadanRequest,
  addbiruwautpadanRequest,
  updatebiruwautpadanRequest,
  deletebiruwautpadanRequest,
  fetchallactivitiesinfoRequest,
  fetchactivitiesinfoRequest,
  addactivitiesinfoRequest,
  updateactivitiesinfoRequest,
  deleteactivitiesinfoRequest,
  fetchallbrixyaropanRequest,
  fetchbrixyaropanRequest,
  addbrixyaropanRequest,
  updatebrixyaropanRequest,
  deletebrixyaropanRequest,
  fetchalljadibutiRequest,
  fetchjadibutiRequest,
  addjadibutiRequest,
  updatejadibutiRequest,
  deletejadibutiRequest,
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
  addassetsRequest,
  updateassetsRequest,
  deleteassetsRequest,
  fetchallvehiclesRequest,
  fetchvehiclesRequest,
  addvehiclesRequest,
  updatevehiclesRequest,
  deletevehiclesRequest,
} from "./sampatibibaran";

// ----------muddaanusandandayari

import {
  fetchallmuddaanusandhandayariRequest,
  fetchmuddaanusandhandayariRequest,
  addmuddaanusandhandayariRequest,
  updatemuddaanusandhandayariRequest,
  deletemuddaanusandhandayariRequest,
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
  fetchallbanpaidawarbikribitaranRequest,
  fetchbanpaidawarbikribitaranRequest,
  addbanpaidawarbikribitaranRequest,
  updatebanpaidawarbikribitaranRequest,
  deletebanpaidawarbikribitaranRequest,
} from "./banpaidawar";

//--------------------bandadelobibaran

import {
  fetchallbandadelobibaranRequest,
  fetchbandadelobibaranRequest,
  addbandadelobibaranRequest,
  updatebandadelobibaranRequest,
  deletebandadelobibaranRequest,
} from "./bandadelobibaran";

//---------inventories

import {
  fetchallinventoriesRequest,
  fetchinventoriesRequest,
  addinventoriesRequest,
  updateinventoriesRequest,
  deleteinventoriesRequest,
  fetchallentryRequest,
  fetchentryRequest,
  addentryRequest,
  updateentryRequest,
  deleteentryRequest,
  fetchallexitRequest,
  fetchexitRequest,
  addexitRequest,
  updateexitRequest,
  deleteexitRequest,
} from "./inventories";

//--------karmacharibibaran

import {
  fetchallemployeesRequest,
  fetchemployeesRequest,
  addemployeesRequest,
  updateemployeesRequest,
  deleteemployeesRequest,
  fetchallemployeeshistoryRequest,
  fetchemployeeshistoryRequest,
  addemployeeshistoryRequest,
  updateemployeeshistoryRequest,
  deleteemployeeshistoryRequest,
  fetchalllevelRequest,
  fetchlevelRequest,
  addlevelRequest,
  updatelevelRequest,
  deletelevelRequest,
  fetchallpostRequest,
  fetchpostRequest,
  addpostRequest,
  updatepostRequest,
  deletepostRequest,
} from "./karmacharibibaran";

//-------karyabibaran
import {
  fetchallsamajikkaryabibaranRequest,
  fetchsamajikkaryabibaranRequest,
  addsamajikkaryabibaranRequest,
  updatesamajikkaryabibaranRequest,
  deletesamajikkaryabibaranRequest,
  fetchallbanbikaskaryabibaranRequest,
  fetchbanbikaskaryabibaranRequest,
  addbanbikaskaryabibaranRequest,
  updatebanbikaskaryabibaranRequest,
  deletebanbikaskaryabibaranRequest,
} from "./karyabibaran";

//miscellaneous
import {
  fetchallrojgarsrijanaRequest,
  fetchrojgarsrijanaRequest,
  addrojgarsrijanaRequest,
  updaterojgarsrijanaRequest,
  deleterojgarsrijanaRequest,
} from "./miscellaneous";

//bipatbibaran
import { fetchallpaherobibaranRequest } from "./bipatbibaran";

import { from } from "seamless-immutable";
const api = API.create();

export default function* root() {
  yield all([
    //-------------------------app
    takeLatest(AppTypes.LOGIN_REQUEST, loginRequest, api),
    takeLatest(AppTypes.LOGOUT_REQUEST, logoutRequest, api),

    ////----------------------------bankaprakar
    //------------------------------samudayikbanbibaran
    takeLatest(
      BankaprakarTypes.FETCHALLSAMUDAYIKBANBIBARAN_REQUEST,
      fetchallsamudayikbanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.FETCHSAMUDAYIKBANBIBARAN_REQUEST,
      fetchsamudayikbanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.ADDSAMUDAYIKBANBIBARAN_REQUEST,
      addsamudayikbanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.UPDATESAMUDAYIKBANBIBARAN_REQUEST,
      updatesamudayikbanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.DELETESAMUDAYIKBANBIBARAN_REQUEST,
      deletesamudayikbanbibaranRequest,
      api
    ),

    //------------------------------dharmikbanbibaran

    takeLatest(
      BankaprakarTypes.FETCHALLDHARMIKBANBIBARAN_REQUEST,
      fetchalldharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.FETCHDHARMIKBANBIBARAN_REQUEST,
      fetchdharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.ADDDHARMIKBANBIBARAN_REQUEST,
      adddharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.UPDATEDHARMIKBANBIBARAN_REQUEST,
      updatedharmikbanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.DELETEDHARMIKBANBIBARAN_REQUEST,
      deletedharmikbanbibaranRequest,
      api
    ),

    //------------------------------nijibanbibaran
    takeLatest(
      BankaprakarTypes.FETCHALLNIJIBANBIBARAN_REQUEST,
      fetchallnijibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.FETCHNIJIBANBIBARAN_REQUEST,
      fetchnijibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.ADDNIJIBANBIBARAN_REQUEST,
      addnijibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.UPDATENIJIBANBIBARAN_REQUEST,
      updatenijibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.DELETENIJIBANBIBARAN_REQUEST,
      deletenijibanbibaranRequest,
      api
    ),

    //------------------------------kabuliyatibanbibaran

    takeLatest(
      BankaprakarTypes.FETCHALLKABULIYATIBANBIBARAN_REQUEST,
      fetchallkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.FETCHKABULIYATIBANBIBARAN_REQUEST,
      fetchkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.ADDKABULIYATIBANBIBARAN_REQUEST,
      addkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.UPDATEKABULIYATIBANBIBARAN_REQUEST,
      updatekabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.DELETEKABULIYATIBANBIBARAN_REQUEST,
      deletekabuliyatibanbibaranRequest,
      api
    ),

    //------------------------------commercialkabuliyatiban
    takeLatest(
      BankaprakarTypes.FETCHALLCOMMERCIALKABULIYATIBANBIBARAN_REQUEST,
      fetchallcommercialkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.FETCHCOMMERCIALKABULIYATIBANBIBARAN_REQUEST,
      fetchcommercialkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.ADDCOMMERCIALKABULIYATIBANBIBARAN_REQUEST,
      addcommercialkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.UPDATECOMMERCIALKABULIYATIBANBIBARAN_REQUEST,
      updatecommercialkabuliyatibanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.DELETECOMMERCIALKABULIYATIBANBIBARAN_REQUEST,
      deletecommercialkabuliyatibanbibaranRequest,
      api
    ),

    //------------------------------rastriyaban bibaran
    takeLatest(
      BankaprakarTypes.FETCHALLRASTRIYABANBIBARAN_REQUEST,
      fetchallrastriyabanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.FETCHRASTRIYABANBIBARAN_REQUEST,
      fetchrastriyabanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.ADDRASTRIYABANBIBARAN_REQUEST,
      addrastriyabanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.UPDATERASTRIYABANBIBARAN_REQUEST,
      updaterastriyabanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.DELETERASTRIYABANBIBARAN_REQUEST,
      deleterastriyabanbibaranRequest,
      api
    ),

    //------------------------------nabikarankaranyojana

    takeLatest(
      BankaprakarTypes.FETCHALLNABIKARANKARYAYOJANA_REQUEST,
      fetchallnabikarankaryayojanaRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.FETCHNABIKARANKARYAYOJANA_REQUEST,
      fetchnabikarankaryayojanaRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.ADDNABIKARANKARYAYOJANA_REQUEST,
      addnabikarankaryayojanaRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.UPDATENABIKARANKARYAYOJANA_REQUEST,
      updatenabikarankaryayojanaRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.DELETENABIKARANKARYAYOJANA_REQUEST,
      deletenabikarankaryayojanaRequest,
      api
    ),

    //------------------------------consumergroup details
    takeLatest(
      BankaprakarTypes.FETCHALLCONSUMERGROUPDETAILS_REQUEST,
      fetchallconsumergroupdetailsRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.FETCHCONSUMERGROUPDETAILS_REQUEST,
      fetchconsumergroupdetailsRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.ADDCONSUMERGROUPDETAILS_REQUEST,
      addconsumergroupdetailsRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.UPDATECONSUMERGROUPDETAILS_REQUEST,
      updateconsumergroupdetailsRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.DELETECONSUMERGROUPDETAILS_REQUEST,
      deleteconsumergroupdetailsRequest,
      api
    ),

    //------------------------------chaklabanbibaran details
    takeLatest(
      BankaprakarTypes.FETCHALLCHAKLABANBIBARAN_REQUEST,
      fetchallchaklabanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.FETCHCHAKLABANBIBARAN_REQUEST,
      fetchchaklabanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.ADDCHAKLABANBIBARAN_REQUEST,
      addchaklabanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.UPDATECHAKLABANBIBARAN_REQUEST,
      updatechaklabanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.DELETECHAKLABANBIBARAN_REQUEST,
      deletechaklabanbibaranRequest,
      api
    ),

    //------------------------------Biruwautpadan
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

    takeLatest(
      BiruwautpadanTypes.ADDBIRUWAUTPADAN_REQUEST,
      addbiruwautpadanRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.UPDATEBIRUWAUTPADAN_REQUEST,
      updatebiruwautpadanRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.DELETEBIRUWAUTPADAN_REQUEST,
      deletebiruwautpadanRequest,
      api
    ),

    //------------------------------activitiesinfo
    takeLatest(
      BiruwautpadanTypes.FETCHALLACTIVITIESINFO_REQUEST,
      fetchallactivitiesinfoRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.FETCHACTIVITIESINFO_REQUEST,
      fetchactivitiesinfoRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.ADDACTIVITIESINFO_REQUEST,
      addactivitiesinfoRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.UPDATEACTIVITIESINFO_REQUEST,
      updateactivitiesinfoRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.DELETEACTIVITIESINFO_REQUEST,
      deleteactivitiesinfoRequest,
      api
    ),

    //brixyaropan
    takeLatest(
      BiruwautpadanTypes.FETCHALLBRIXYAROPAN_REQUEST,
      fetchallbrixyaropanRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.FETCHBRIXYAROPAN_REQUEST,
      fetchbrixyaropanRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.ADDBRIXYAROPAN_REQUEST,
      addbrixyaropanRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.UPDATEBRIXYAROPAN_REQUEST,
      updatebrixyaropanRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.DELETEBRIXYAROPAN_REQUEST,
      deletebrixyaropanRequest,
      api
    ),

    //------------------------------ jadibuti

    takeLatest(
      BiruwautpadanTypes.FETCHALLJADIBUTI_REQUEST,
      fetchalljadibutiRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.FETCHJADIBUTI_REQUEST,
      fetchjadibutiRequest,
      api
    ),

    takeLatest(BiruwautpadanTypes.ADDJADIBUTI_REQUEST, addjadibutiRequest, api),

    takeLatest(
      BiruwautpadanTypes.UPDATEJADIBUTI_REQUEST,
      updatejadibutiRequest,
      api
    ),

    takeLatest(
      BiruwautpadanTypes.DELETEJADIBUTI_REQUEST,
      deletejadibutiRequest,
      api
    ),

    ////---------Dwandabebasthapan
    //------------------------------banyajantuuddar

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

    //------------------------------banyajantuxeti
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
    //------------------------------karmachari darbandi
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

    takeLatest(
      KarmacharidarbandiTypes.ADDKARMACHARIDARBANDI_REQUEST,
      addkarmacharidarbandiRequest,
      api
    ),

    takeLatest(
      KarmacharidarbandiTypes.UPDATEKARMACHARIDARBANDI_REQUEST,
      updatekarmacharidarbandiRequest,
      api
    ),

    takeLatest(
      KarmacharidarbandiTypes.DELETEKARMACHARIDARBANDI_REQUEST,
      deletekarmacharidarbandiRequest,
      api
    ),

    //sampatibibaran
    //------------------------------gharjagga

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

    takeLatest(SampatibibaranTypes.ADDASSETS_REQUEST, addassetsRequest, api),

    takeLatest(
      SampatibibaranTypes.UPDATEASSETS_REQUEST,
      updateassetsRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.DELETEASSETS_REQUEST,
      deleteassetsRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.FETCHALLVEHICLES_REQUEST,
      fetchallvehiclesRequest,
      api
    ),

    //------------------------------vehicles

    takeLatest(
      SampatibibaranTypes.FETCHVEHICLES_REQUEST,
      fetchvehiclesRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.ADDVEHICLES_REQUEST,
      addvehiclesRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.UPDATEVEHICLES_REQUEST,
      updatevehiclesRequest,
      api
    ),

    takeLatest(
      SampatibibaranTypes.DELETEVEHICLES_REQUEST,
      deletevehiclesRequest,
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

    takeLatest(
      MuddaanusandhandayariTypes.ADDMUDDAANUSANDHANDAYARI_REQUEST,
      addmuddaanusandhandayariRequest,
      api
    ),

    takeLatest(
      MuddaanusandhandayariTypes.UPDATEMUDDAANUSANDHANDAYARI_REQUEST,
      updatemuddaanusandhandayariRequest,
      api
    ),

    takeLatest(
      MuddaanusandhandayariTypes.DELETEMUDDAANUSANDHANDAYARI_REQUEST,
      deletemuddaanusandhandayariRequest,
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

    //------------------------------banpaidawar lilam

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
      BanbibaranTypes.FETCHALLPLOTBIBARAN_REQUEST,
      fetchallplotbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHPLOTBIBARAN_REQUEST,
      fetchplotbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.ADDPLOTBIBARAN_REQUEST,
      addplotbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.UPDATEPLOTBIBARAN_REQUEST,
      updateplotbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.DELETEPLOTBIBARAN_REQUEST,
      deleteplotbibaranRequest,
      api
    ),

    //------uddhyambibaran
    takeLatest(
      BanbibaranTypes.FETCHALLUDDHYAMBIBARAN_REQUEST,
      fetchalluddhyambibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHUDDHYAMBIBARAN_REQUEST,
      fetchuddhyambibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.ADDUDDHYAMBIBARAN_REQUEST,
      adduddhyambibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.UPDATEUDDHYAMBIBARAN_REQUEST,
      updateuddhyambibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.DELETEUDDHYAMBIBARAN_REQUEST,
      deleteuddhyambibaranRequest,
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
      InventoriesTypes.ADDINVENTORIES_REQUEST,
      addinventoriesRequest,
      api
    ),

    takeLatest(
      InventoriesTypes.UPDATEINVENTORIES_REQUEST,
      updateinventoriesRequest,
      api
    ),

    takeLatest(
      InventoriesTypes.DELETEINVENTORIES_REQUEST,
      deleteinventoriesRequest,
      api
    ),

    takeLatest(
      InventoriesTypes.FETCHALLENTRY_REQUEST,
      fetchallentryRequest,
      api
    ),

    takeLatest(InventoriesTypes.FETCHENTRY_REQUEST, fetchentryRequest, api),

    takeLatest(InventoriesTypes.ADDENTRY_REQUEST, addentryRequest, api),

    takeLatest(InventoriesTypes.UPDATEENTRY_REQUEST, updateentryRequest, api),

    takeLatest(InventoriesTypes.DELETEENTRY_REQUEST, deleteentryRequest, api),

    takeLatest(InventoriesTypes.FETCHALLEXIT_REQUEST, fetchallexitRequest, api),

    takeLatest(InventoriesTypes.FETCHEXIT_REQUEST, fetchexitRequest, api),

    takeLatest(InventoriesTypes.ADDEXIT_REQUEST, addexitRequest, api),

    takeLatest(InventoriesTypes.UPDATEEXIT_REQUEST, updateexitRequest, api),

    takeLatest(InventoriesTypes.DELETEEXIT_REQUEST, deleteexitRequest, api),

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
      KarmacharibibaranTypes.ADDEMPLOYEES_REQUEST,
      addemployeesRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.UPDATEEMPLOYEES_REQUEST,
      updateemployeesRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.DELETEEMPLOYEES_REQUEST,
      deleteemployeesRequest,
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
      KarmacharibibaranTypes.ADDEMPLOYEESHISTORY_REQUEST,
      addemployeeshistoryRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.UPDATEEMPLOYEESHISTORY_REQUEST,
      updateemployeeshistoryRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.DELETEEMPLOYEESHISTORY_REQUEST,
      deleteemployeeshistoryRequest,
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

    takeLatest(KarmacharibibaranTypes.ADDLEVEL_REQUEST, addlevelRequest, api),

    takeLatest(
      KarmacharibibaranTypes.UPDATELEVEL_REQUEST,
      updatelevelRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.DELETELEVEL_REQUEST,
      deletelevelRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.FETCHALLPOST_REQUEST,
      fetchallpostRequest,
      api
    ),

    takeLatest(KarmacharibibaranTypes.FETCHPOST_REQUEST, fetchpostRequest, api),

    takeLatest(KarmacharibibaranTypes.ADDPOST_REQUEST, addpostRequest, api),

    takeLatest(
      KarmacharibibaranTypes.UPDATEPOST_REQUEST,
      updatepostRequest,
      api
    ),

    takeLatest(
      KarmacharibibaranTypes.DELETEPOST_REQUEST,
      deletepostRequest,
      api
    ),

    // Municipalities
    takeLatest(
      AppTypes.FETCHALLMUNICIPALITIES_REQUEST,
      fetchallmunicipalitiesRequest,
      api
    ),

    takeLatest(
      AppTypes.FETCHMUNICIPALITIES_REQUEST,
      fetchmunicipalitiesRequest,
      api
    ),
    takeLatest(
      AppTypes.ADDMUNICIPALITIES_REQUEST,
      addmunicipalitiesRequest,
      api
    ),

    takeLatest(
      AppTypes.UPDATEMUNICIPALITIES_REQUEST,
      updatemunicipalitiesRequest,
      api
    ),

    takeLatest(
      AppTypes.DELETEMUNICIPALITIES_REQUEST,
      deletemunicipalitiesRequest,
      api
    ),
    //---------------Provinces
    takeLatest(
      AppTypes.FETCHALLPROVINCES_REQUEST,
      fetchallprovincesRequest,
      api
    ),

    takeLatest(AppTypes.FETCHPROVINCES_REQUEST, fetchprovincesRequest, api),

    takeLatest(AppTypes.ADDPROVINCES_REQUEST, addprovincesRequest, api),

    takeLatest(AppTypes.UPDATEPROVINCES_REQUEST, updateprovincesRequest, api),

    takeLatest(AppTypes.DELETEPROVINCES_REQUEST, deleteprovincesRequest, api),

    // //--------Districts
    takeLatest(
      AppTypes.FETCHALLDISTRICTS_REQUEST,
      fetchalldistrictsRequest,
      api
    ),

    takeLatest(AppTypes.FETCHDISTRICTS_REQUEST, fetchdistrictsRequest, api),

    takeLatest(AppTypes.ADDDISTRICTS_REQUEST, adddistrictsRequest, api),

    takeLatest(AppTypes.UPDATEDISTRICTS_REQUEST, updatedistrictsRequest, api),

    takeLatest(AppTypes.DELETEDISTRICTS_REQUEST, deletedistrictsRequest, api),

    // //--------Departments
    takeLatest(
      AppTypes.FETCHALLDEPARTMENTS_REQUEST,
      fetchalldepartmentsRequest,
      api
    ),
    takeLatest(AppTypes.FETCHDEPARTMENTS_REQUEST, fetchdepartmentsRequest, api),

    takeLatest(AppTypes.ADDDEPARTMENTS_REQUEST, adddepartmentsRequest, api),

    takeLatest(
      AppTypes.UPDATEDEPARTMENTS_REQUEST,
      updatedepartmentsRequest,
      api
    ),

    takeLatest(
      AppTypes.DELETEDEPARTMENTS_REQUEST,
      deletedepartmentsRequest,
      api
    ),

    // //--------Users-------------//
    takeLatest(AppTypes.FETCHALLUSERS_REQUEST, fetchallusersRequest, api),

    takeLatest(AppTypes.FETCHUSERS_REQUEST, fetchusersRequest, api),

    takeLatest(AppTypes.ADDUSERS_REQUEST, addusersRequest, api),

    takeLatest(AppTypes.UPDATEUSERS_REQUEST, updateusersRequest, api),

    takeLatest(AppTypes.DELETEUSERS_REQUEST, deleteusersRequest, api),

    //----------Banbibaran_baramadit_chij_bastu
    takeLatest(
      BanbibaranTypes.FETCHALLBARAMADITCHIJBASTU_REQUEST,
      fetchallbaramaditchijbastuRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHBARAMADITCHIJBASTU_REQUEST,
      fetchbaramaditchijbastuRequest,
      api
    ),
    takeLatest(
      BanbibaranTypes.ADDBARAMADITCHIJBASTU_REQUEST,
      addbaramaditchijbastuRequest,
      api
    ),
    takeLatest(
      BanbibaranTypes.UPDATEBARAMADITCHIJBASTU_REQUEST,
      updatebaramaditchijbastuRequest,
      api
    ),
    takeLatest(
      BanbibaranTypes.DELETEBARAMADITCHIJBASTU_REQUEST,
      deletebaramaditchijbastuRequest,
      api
    ),

    //----------Banbibaran_banxetra_anyaprayojan
    takeLatest(
      BanbibaranTypes.FETCHALLBANXETRAANYAPRAYOJAN_REQUEST,
      fetchallbanxetraanyaprayojanRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.FETCHBANXETRAANYAPRAYOJAN_REQUEST,
      fetchbanxetraanyaprayojanRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.ADDBANXETRAANYAPRAYOJAN_REQUEST,
      addbanxetraanyaprayojanRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.UPDATEBANXETRAANYAPRAYOJAN_REQUEST,
      updatebanxetraanyaprayojanRequest,
      api
    ),
    takeLatest(
      BanbibaranTypes.DELETEBANXETRAANYAPRAYOJAN_REQUEST,
      deletebanxetraanyaprayojanRequest,
      api
    ),
    //bachat bibaran
    takeLatest(
      BanbibaranTypes.FETCHALLBACHATBIBARAN_REQUEST,
      fetchallbachatbibaranRequest,
      api
    ),
    takeLatest(
      BanbibaranTypes.FETCHBACHATBIBARAN_REQUEST,
      fetchbachatbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.ADDBACHATBIBARAN_REQUEST,
      addbachatbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.UPDATEBACHATBIBARAN_REQUEST,
      updatebachatbibaranRequest,
      api
    ),

    takeLatest(
      BanbibaranTypes.DELETEBACHATBIBARAN_REQUEST,
      deletebachatbibaranRequest,
      api
    ),

    //banpaidawar bikribitaran
    takeLatest(
      BanpaidawarTypes.FETCHALLBANPAIDAWARBIKRIBITARAN_REQUEST,
      fetchallbanpaidawarbikribitaranRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.FETCHBANPAIDAWARBIKRIBITARAN_REQUEST,
      fetchbanpaidawarbikribitaranRequest,
      api
    ),

    takeLatest(
      BanpaidawarTypes.ADDBANPAIDAWARBIKRIBITARAN_REQUEST,
      addbanpaidawarbikribitaranRequest,
      api
    ),
    takeLatest(
      BanpaidawarTypes.UPDATEBANPAIDAWARBIKRIBITARAN_REQUEST,
      updatebanpaidawarbikribitaranRequest,
      api
    ),
    takeLatest(
      BanpaidawarTypes.DELETEBANPAIDAWARBIKRIBITARAN_REQUEST,
      deletebanpaidawarbikribitaranRequest,
      api
    ),

    //karyabibaran
    takeLatest(
      KaryabibaranTypes.FETCHALLSAMAJIKKARYABIBARAN_REQUEST,
      fetchallsamajikkaryabibaranRequest,
      api
    ),

    takeLatest(
      KaryabibaranTypes.FETCHSAMAJIKKARYABIBARAN_REQUEST,
      fetchsamajikkaryabibaranRequest,
      api
    ),

    takeLatest(
      KaryabibaranTypes.ADDSAMAJIKKARYABIBARAN_REQUEST,
      addsamajikkaryabibaranRequest,
      api
    ),

    takeLatest(
      KaryabibaranTypes.UPDATESAMAJIKKARYABIBARAN_REQUEST,
      updatesamajikkaryabibaranRequest,
      api
    ),

    takeLatest(
      KaryabibaranTypes.DELETESAMAJIKKARYABIBARAN_REQUEST,
      deletesamajikkaryabibaranRequest,
      api
    ),

    //----------- miscellaneous
    takeLatest(
      MiscellaneousTypes.FETCHALLROJGARSRIJANA_REQUEST,
      fetchallrojgarsrijanaRequest,
      api
    ),
    takeLatest(
      MiscellaneousTypes.FETCHROJGARSRIJANA_REQUEST,
      fetchrojgarsrijanaRequest,
      api
    ),
    takeLatest(
      MiscellaneousTypes.ADDROJGARSRIJANA_REQUEST,
      addrojgarsrijanaRequest,
      api
    ),
    takeLatest(
      MiscellaneousTypes.UPDATEROJGARSRIJANA_REQUEST,
      updaterojgarsrijanaRequest,
      api
    ),

    takeLatest(
      MiscellaneousTypes.DELETEROJGARSRIJANA_REQUEST,
      deleterojgarsrijanaRequest,
      api
    ),
    //--------------------sajhedaribanbibaran
    takeLatest(
      BankaprakarTypes.FETCHALLSAJHEDARIBANBIBARAN_REQUEST,
      fetchallsajhedaribanbibaranRequest,
      api
    ),
    takeLatest(
      BankaprakarTypes.FETCHSAJHEDARIBANBIBARAN_REQUEST,
      fetchsajhedaribanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.ADDSAJHEDARIBANBIBARAN_REQUEST,
      addsajhedaribanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.UPDATESAJHEDARIBANBIBARAN_REQUEST,
      updatesajhedaribanbibaranRequest,
      api
    ),

    takeLatest(
      BankaprakarTypes.DELETESAJHEDARIBANBIBARAN_REQUEST,
      deletesajhedaribanbibaranRequest,
      api
    ),

    //-------------------banbikaskaryabibaran
    takeLatest(
      KaryabibaranTypes.FETCHALLBANBIKASKARYABIBARAN_REQUEST,
      fetchallbanbikaskaryabibaranRequest,
      api
    ),
    takeLatest(
      KaryabibaranTypes.FETCHBANBIKASKARYABIBARAN_REQUEST,
      fetchbanbikaskaryabibaranRequest,
      api
    ),
    takeLatest(
      KaryabibaranTypes.ADDBANBIKASKARYABIBARAN_REQUEST,
      addbanbikaskaryabibaranRequest,
      api
    ),
    takeLatest(
      KaryabibaranTypes.UPDATEBANBIKASKARYABIBARAN_REQUEST,
      updatebanbikaskaryabibaranRequest,
      api
    ),
    takeLatest(
      KaryabibaranTypes.DELETEBANBIKASKARYABIBARAN_REQUEST,
      deletebanbikaskaryabibaranRequest,
      api
    ),
    takeLatest(
      KaryabibaranTypes.DELETEBANBIKASKARYABIBARAN_REQUEST,
      deletebanbikaskaryabibaranRequest,
      api
    ),
    //-----------------bipatbibaran
    takeLatest(
      BipatbibaranTypes.FETCHALLPAHEROBIBARAN_REQUEST,
      fetchallpaherobibaranRequest,
      api
    ),
  ]);
}
