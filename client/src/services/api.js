/**
 * We will follow the following rules to name API functions.
 * prefix 1: type of http request such as get, post, delete.
 * prefix 2: section name such as admin
 * samples: postAdminStaffSave
 */
import apisauce from "apisauce";
import { equals, isNil, isEmpty } from "ramda";
import { store } from "../reducers";
import AppActions from "../actions/app";
const Config = {
  API_URL: "http://localhost:3001/api/v1/",
};
// const authenticated = (api) => {
//   api.setHeader("Authorization", "Bearer " + window.token);
//   return api;
// };
const naviMonitor = (response) => {
  if (equals(response.status, 401)) {
    store.dispatch(AppActions.logoutRequest());
    console.log("Your token has been expired.", response.config.url);
  }
};
const create = (baseURL = Config.API_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // 50 second timeout...
    timeout: 50000,
  });
  const s3API = apisauce.create({
    baseURL: Config.S3_URL,
    headers: {
      Accept: "application/xml",
      "Content-Type": "multipart/form-data",
    },
    // 50 second timeout...
    timeout: 50000,
  });
  api.addMonitor(naviMonitor);
  // Login API
  const loginByUsername = (payload) => api.post("auth/login", payload);
  //Banbibarans
  const getSamudayikbanBibaranList = () => api.get("samudayikbanBibaran");

  const getSamudayikbanBibaran = (samudayikbanBibaranId) =>
    api.get(`samudayikbanBibaran/${samudayikbanBibaranId}`);
  //Add
  const postBanbibaranSamudayikbanAddNew = (payload) =>
    api.post(`samudayikbanBibaran`, payload);
  //update
  const postBanbibaranSamudayikbanUpdate = (payload, samudayikbanbibaranId) =>
    api.put(`samudayikbanBibaran/${samudayikbanbibaranId}`, payload);
  //Delete
  const postBanbibaranSamudayikbanDelete = (samudayikbanbibaranId) =>
    api.delete(`samudayikbanBibaran/${samudayikbanbibaranId}`);

  const getDharmikbanBibaranList = () => api.get("dharmikbanBibaran");

  const getDharmikbanBibaran = (dharmikbanBibaranId) =>
    api.get(`dharmikbanBibaran/${dharmikbanBibaranId}`);
  //Add
  const postBanbibaranDharmikbanAddNew = (payload) =>
    api.post(`dharmikbanBibaran`, payload);
  //update
  const postBanbibaranDharmikbanUpdate = (payload, dharmikbanBibaranId) =>
    api.put(`dharmikbanBibaran/${dharmikbanBibaranId}`, payload);
  //Delete
  const postBanbibaranDharmikbanDelete = (dharmikbanBibaranId) =>
    api.delete(`dharmikbanBibaran/${dharmikbanBibaranId}`);

  const getNijibanBibaranList = () => api.get("nijibanBibaran");

  const getNijibanBibaran = (nijibanBibaranId) =>
    api.get(`nijibanBibaran/${nijibanBibaranId}`);
  //Add
  const postBanbibaranNijibanAddNew = (payload) =>
    api.post(`nijibanBibaran`, payload);
  //update
  const postBanbibaranNijibanUpdate = (payload, nijibanBibaranId) =>
    api.put(`nijibanBibaran/${nijibanBibaranId}`, payload);

  //delete
  const postBanbibaranNijibanDelete = (nijibanBibaranId) =>
    api.delete(`nijibanBibaran/${nijibanBibaranId}`);

  const getKabuliyatibanBibaranList = () => api.get("kabuliyatibanBibaran");

  const getKabuliyatibanBibaran = (kabuliyatibanBibaranId) =>
    api.get(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`);

  //Add
  const postBanbibaranKabuliyatibanAddNew = (payload) =>
    api.post(`kabuliyatibanBibaran`, payload);
  //update
  const postBanbibaranKabuliyatibanUpdate = (payload, kabuliyatibanBibaranId) =>
    api.put(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`, payload);

  //delete
  const postBanbibaranKabuliyatibanDelete = (kabuliyatibanBibaranId) =>
    api.delete(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`);

  const getNabikaranKaryayojanaList = () => api.get("nabikaranKaryayojana");

  const getNabikaranKaryayojana = (nabikaranKaryayojanaId) =>
    api.get(`nabikaranKaryayojana/${nabikaranKaryayojanaId}`);

  //Add
  const postBanbibaranNabikarankaryayojanaAddNew = (payload) =>
    api.post(`nabikaranKaryayojana`, payload);

  //update
  const postBanbibaranNabikarankaryayojanaUpdate = (
    payload,
    nabikaranKaryayojanaId
  ) => api.post(`nabikaranKaryayojana/${nabikaranKaryayojanaId}`, payload);

  //delete
  const postBanbibaranNabikarankaryayojanaDelete = (
    payload,
    nabikaranKaryayojanaId
  ) => api.post(`nabikarankaryayojana/${nabikaranKaryayojanaId}`, payload);

  //................biruwautpadans
  const getBiruwautpadanList = () => api.get("biruwaUtpadans");

  const getBiruwautpadan = (biruwautpadanId) =>
    api.get(`biruwaUtpadans/${biruwautpadanId}`);

  //Add
  const postBiruwautpadanBiruwautpadanAddNew = (payload) =>
    api.post(`biruwautpadans`, payload);

  //update
  const postBiruwautpadanBiruwautpadanUpdate = (payload, biruwautpadanId) =>
    api.post(`biruwautpadans/${biruwautpadanId}`, payload);

  //delete
  const postBiruwautpadanBiruwautpadanDelete = (payload, biruwautpadanId) =>
    api.post(`biruwautpadans/${biruwautpadanId}`, payload);

  //Dwandabebasthapan
  const getBanyajantuUddarList = () => api.get("banyajantuUddars");

  const getBanyajantuUddar = (banyajantuUddarId) =>
    api.get(`banyajantuUddars/${banyajantuUddarId}`);
  //Add banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarAddNew = (payload) =>
    api.post(`banyajantuUddars`, payload);

  //update banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarUpdate = (
    payload,
    banyajantuUddarId
  ) => api.post(`banyajantuUddars/${banyajantuUddarId}`, payload);

  //delete banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarDelete = (
    payload,
    banyajantuUddarId
  ) => api.post(`banyajantuUddars/${banyajantuUddarId}`, payload);

  const getBanyajantuXetiList = () => api.get("banyajantuXetiBibarans");

  const getBanyajantuXeti = (banyajantuXetiId) =>
    api.get(`banyajantuXetiBibarans/${banyajantuXetiId}`);

  //Add banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiAddNew = (payload) =>
    api.post(`banyajantuXetiBibarans`, payload);

  //update banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiUpdate = (
    payload,
    banyajantuXetiId
  ) => api.post(`banyajantuXetiBibarans/${banyajantuXetiId}`, payload);

  //delete banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiDelete = (
    payload,
    banyajantuXetiId
  ) => api.post(`banyajantuXetiBibarans/${banyajantuXetiId}`, payload);

  //sampatibibaran
  const getAssetsList = () => api.get("assets");

  const getAssets = (assetId) => api.get(`assets/${assetId}`);

  //Add
  const postSampatibibaranAssetsAddNew = (payload) => api.post(`assets`, payload);
  //update
  const postSampatibibaranAssetsUpdate = (payload, assetId) => api.put(`assets/${assetId}`, payload);
  //Delete
  const postSampatibibaranAssetsDelete = (assetId) => api.delete(`assets/${assetId}`);

  const getVehiclesList = () => api.get("vehicles");

  const getVehicles = (vehicleId) => api.get(`vehicles/${vehicleId}`);

  //Add
  const postSampatibibaranVehiclesAddNew = (payload) => api.post(`vehicles`, payload);
  //update
  const postSampatibibaranVehiclesUpdate = (payload, vehicleId) => api.put(`vehicles/${vehicleId}`, payload);
  //Delete
  const postSampatibibaranVehiclesDelete = (vehicleId) => api.delete(`vehicles/${vehicleId}`);

  // muddaanusandhandayari
  const getMuddaanusandhandayariList = () => api.get("muddaAnusandhanDayaris");

  const getMuddaanusandhandayari = (muddaAnusandhanDayariId) =>
    api.get(`muddaAnusandhanDayaris/${muddaAnusandhanDayariId}`);

  //Add muddaanusandhandayari
  const postMuddaanusandhandayariMuddaanusandhandayariAddNew = (payload) =>
    api.post(`muddaAnusandhanDayaris`, payload);

  //update muddaanusandhandayari
  const postMuddaanusandhandayariMuddaanusandhandayariUpdate = (
    payload,
    muddaAnusandhanDayariId
  ) => api.post(`muddaAnusandhanDayaris/${muddaAnusandhanDayariId}`, payload);

  //delete muddaanusandhandayari
  const postMuddaanusandhandayariMuddaanusandhandayariDelete = (
    payload,
    muddaAnusandhanDayariId
  ) => api.post(`muddaAnusandhanDayari/${muddaAnusandhanDayariId}`, payload);

  // ------banxetraatikraman
  const getBanxetraatikramanList = () => api.get("banxetraAtikramans");

  const getBanxetraatikraman = (banxetraAtikramanId) =>
    api.get(`banxetraAtikramans/${banxetraAtikramanId}`);

  //Add
  const postBanxetraatikramanBanxetraatikramanAddNew = (payload) =>
    api.post(`banxetraAtikramans`, payload);

  //update
  const postBanxetraatikramanBanxetraatikramanUpdate = (
    payload,
    banxetraAtikramanId
  ) => api.post(`banxetraAtikramans/${banxetraAtikramanId}`, payload);

  //delete
  const postBanxetraatikramanBanxetraatikramanDelete = (
    payload,
    banxetraAtikramanId
  ) => api.post(`banxetraAtikramans/${banxetraAtikramanId}`, payload);

  //................bandadelobibarans
  const getBandadelobibaranList = () => api.get("bandadeloBibaran");

  const getBandadelobibaran = (bandadeloBibaranId) =>
    api.get(`bandadeloBibaran/${bandadeloBibaranId}`);

  //Add
  const postBandadelobibaranBandadeloAddNew = (payload) =>
    api.post(`bandadeloBibaran`, payload);

  //update
  const postBandadelobibaranBandadeloUpdate = (payload, bandadeloBibaranId) =>
    api.post(`bandadeloBibaran/${bandadeloBibaranId}`, payload);

  //delete
  const postBandadelobibaranBandadeloDelete = (payload, bandadeloBibaranId) =>
    api.post(`bandadeloBibaran/${bandadeloBibaranId}`, payload);

  //--------------banpaidawar
  const getBanpaidawarList = () => api.get("banpaidawar");

  const getBanpaidawar = (banpaidawarId) =>
    api.get(`banpaidawar/${banpaidawarId}`);

  //Add
  const postBanpaidawarBanpaidawarAddNew = (payload) =>
    api.post(`banpaidawar`, payload);

  //update
  const postBanpaidawarBanpaidawarUpdate = (payload, banpaidawarId) =>
    api.post(`banpaidawar/${banpaidawarId}`, payload);

  //delete
  const postBanpaidawarBanpaidawarDelete = (payload, banpaidawarId) =>
    api.post(`banpaidawar/${banpaidawarId}`, payload);

  const getBanpaidawarlilamList = () => api.get("banpaidawarLilam");

  const getBanpaidawarlilam = (banpaidawarLilamId) =>
    api.get(`banpaidawarLilam/${banpaidawarLilamId}`);

  //Add
  const postBanpaidawarBanpaidawarlilamAddNew = (payload) =>
    api.post(`banpaidawarLilam`, payload);

  //update
  const postBanpaidawarBanpaidawarlilamUpdate = (payload, banpaidawarLilamId) =>
    api.post(`banpaidawarLilam/${banpaidawarLilamId}`, payload);

  //delete
  const postBanpaidawarBanpaidawarlilamDelete = (payload, banpaidawarLilamId) =>
    api.post(`banpaidawarLilam/${banpaidawarLilamId}`, payload);

  // Karmachari darbandi
  const getKarmacharidarbandiList = () => api.get("karmachariDarbandi");

  const getKarmacharidarbandi = (karmacharidarbandiId) =>
    api.get(`karmachariDarbandi/${karmacharidarbandiId}`);
  //------plotbibaran
  const getPlotbibaranList = () => api.get("plot");

  const getPlotbibaran = (plotId) => api.get(`plot/${plotId}`);

  //-----Municipalities
  const getMunicipalitiesList = () => api.get("municipalities");
  const getMunicipalities = (municipalitiesId) => api.get(`municipalities/${municipalitiesId}`);

  //inventories
  const getInventoriesList = () => api.get("inventory");
  const getInventories = (inventId) => api.get(`inventory/${inventId}`);
  const getEntryList = () => api.get("entry");
  const getEntry = (entryId) => api.get(`entry/${entryId}`);
  const getExitList = () => api.get("exit");
  const getExit = (exitId) => api.get(`exit/${exitId}`);

  //karmacharibibaran
  const getEmployeesList = () => api.get("employees");
  const getEmployees = (employeesId) => api.get(`employees/${employeesId}`);
  //Add
  const postKarmacharibibaranEmployeesAddNew = (payload) => api.post(`employees`, payload);
  
  //update
 const postKarmacharibibaranEmployeesUpdate = (payload, employeesId) => 
 api.post(`employees/${employeesId}`, payload);

  const getEmployeeshistoryList = () => api.get("employeeHistory");
  const getEmployeeshistory = (histId) => api.get(`employeeHistory/${histId}`);


   
 
  const getLevelList = () => api.get("level");
  const getLevel = (levelId) => api.get(`level/${levelId}`);
  const getPostList = () => api.get("posts");

  const getPost =(postId) => api.get(`posts/${postId}`);

  

  return {
    loginByUsername,
    getSamudayikbanBibaranList,
    getSamudayikbanBibaran,
    postBanbibaranSamudayikbanAddNew,
    postBanbibaranSamudayikbanUpdate,
    postBanbibaranSamudayikbanDelete,
    getDharmikbanBibaranList,
    getDharmikbanBibaran,
    postBanbibaranDharmikbanAddNew,
    postBanbibaranDharmikbanUpdate,
    postBanbibaranDharmikbanDelete,
    getNijibanBibaranList,
    getNijibanBibaran,
    postBanbibaranNijibanAddNew,
    postBanbibaranNijibanUpdate,
    postBanbibaranNijibanDelete,
    getKabuliyatibanBibaranList,
    getKabuliyatibanBibaran,
    postBanbibaranKabuliyatibanAddNew,
    postBanbibaranKabuliyatibanUpdate,
    postBanbibaranKabuliyatibanDelete,
    getNabikaranKaryayojanaList,
    getNabikaranKaryayojana,
    postBanbibaranNabikarankaryayojanaAddNew,
    postBanbibaranNabikarankaryayojanaUpdate,
    postBanbibaranNabikarankaryayojanaDelete,
    //dwandabebasthapan
    getBanyajantuUddarList,
    getBanyajantuUddar,
    postDwandabebasthapanBanyajantuuddarAddNew,
    postDwandabebasthapanBanyajantuuddarUpdate,
    postDwandabebasthapanBanyajantuuddarDelete,
    getBanyajantuXetiList,
    getBanyajantuXeti,
    postDwandabebasthapanBanyajantuxetiAddNew,
    postDwandabebasthapanBanyajantuxetiUpdate,
    postDwandabebasthapanBanyajantuxetiDelete,
    //biruwautpadans
    getBiruwautpadanList,
    getBiruwautpadan,
    postBiruwautpadanBiruwautpadanAddNew,
    postBiruwautpadanBiruwautpadanUpdate,
    postBiruwautpadanBiruwautpadanDelete,
    //sampatibibaran
    getAssetsList,
    getAssets,
    postSampatibibaranAssetsAddNew,
    postSampatibibaranAssetsUpdate,
    postSampatibibaranAssetsDelete,
    getVehiclesList,
    getVehicles,
    postSampatibibaranVehiclesAddNew,
    postSampatibibaranVehiclesUpdate,
    postSampatibibaranVehiclesDelete,
    //muddaanusandhandayari
    getMuddaanusandhandayariList,
    getMuddaanusandhandayari,
    postMuddaanusandhandayariMuddaanusandhandayariAddNew,
    postMuddaanusandhandayariMuddaanusandhandayariUpdate,
    postMuddaanusandhandayariMuddaanusandhandayariDelete,
    //banxetraatikraman
    getBanxetraatikramanList,
    getBanxetraatikraman,
    postBanxetraatikramanBanxetraatikramanAddNew,
    postBanxetraatikramanBanxetraatikramanUpdate,
    postBanxetraatikramanBanxetraatikramanDelete,
    //bandadelobibaran
    getBandadelobibaranList,
    getBandadelobibaran,
    postBandadelobibaranBandadeloAddNew,
    postBandadelobibaranBandadeloUpdate,
    postBandadelobibaranBandadeloDelete,
    //------banpaidawar
    getBanpaidawarList,
    getBanpaidawar,
    postBanpaidawarBanpaidawarAddNew,
    postBanpaidawarBanpaidawarUpdate,
    postBanpaidawarBanpaidawarDelete,
    getBanpaidawarlilamList,
    getBanpaidawarlilam,
    postBanpaidawarBanpaidawarlilamAddNew,
    postBanpaidawarBanpaidawarlilamUpdate,
    postBanpaidawarBanpaidawarlilamDelete,
    // karmacharidarbandi
    getKarmacharidarbandiList,
    getKarmacharidarbandi,
    //-----plotbibaran
    getPlotbibaranList,
    getPlotbibaran,
    //inventories
    getInventoriesList,
    getInventories,
    getEntryList,
    getEntry,
    getExitList,
    getExit,
    //karmacharibiabran
    getEmployeesList,
    getEmployees,
    postKarmacharibibaranEmployeesAddNew,
    postKarmacharibibaranEmployeesUpdate,
    postKarmacharibibaranEmployeesDelete,
    getEmployeeshistoryList,
    getEmployeeshistory,
    getLevelList,
    getLevel,
    getPostList,
    getPost,

    //--municipalities
    getMunicipalitiesList,
    getMunicipalities,

  };
};
export default {
  create,
};
