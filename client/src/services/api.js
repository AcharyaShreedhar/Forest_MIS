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

  const getSamudayikbanBibaran = (samudayikbanBibaranId) => api.get(`samudayikbanBibaran/${samudayikbanBibaranId}`);
  //Add
  const postBanbibaranSamudayikbanAddNew = (payload) => api.post(`samudayikbanBibaran`, payload);
  //update
  const postBanbibaranSamudayikbanUpdate = (payload, samudayikbanbibaranId) => api.put(`samudayikbanBibaran/${samudayikbanbibaranId}`, payload);
  //Delete
  const postBanbibaranSamudayikbanDelete = (samudayikbanbibaranId) => api.delete(`samudayikbanBibaran/${samudayikbanbibaranId}`);
  
  const getDharmikbanBibaranList = () => api.get("dharmikbanBibaran");

  const getDharmikbanBibaran = (dharmikbanBibaranId) => api.get(`dharmikbanBibaran/${dharmikbanBibaranId}`);
  //Add
  const postBanbibaranDharmikbanAddNew = (payload) => api.post(`dharmikbanBibaran`, payload);
  //update
  const postBanbibaranDharmikbanUpdate = (payload, dharmikbanBibaranId) => api.post(`dharmikbanBibaran/${dharmikbanBibaranId}`, payload);
  //Delete
  const postBanbibaranDharmikbanDelete = (dharmikbanBibaranId) => api.delete(`dharmikbanBibaran/${dharmikbanBibaranId}`);

  const getNijibanBibaranList = () => api.get("nijibanBibaran");

  const getNijibanBibaran = (nijibanBibaranId) => api.get(`nijibanBibaran/${nijibanBibaranId}`);
  //Add
  const postBanbibaranNijibanAddNew = (payload) => api.post(`nijibanBibaran`, payload);
  //update
  const postBanbibaranNijibanUpdate = (payload, nijibanBibaranId) => api.post(`nijibanBibaran/${nijibanBibaranId}`, payload);

  //delete
  const postBanbibaranNijibanDelete = (payload, nijibanBibaranId) => api.post(`nijibanBibaran/${nijibanBibaranId}`, payload);

  const getKabuliyatibanBibaranList = () => api.get("kabuliyatibanBibaran");

  const getKabuliyatibanBibaran = (kabuliyatibanBibaranId) => api.get(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`);

  //Add
  const postBanbibaranKabuliyatibanAddNew = (payload) => api.post(`kabuliyatibanBibaran`, payload);

  //update
  const postBanbibaranKabuliyatibanUpdate = (payload, kabuliyatibanBibaranId) =>api.post(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`, payload);

  //delete
  const postBanbibaranKabuliyatibanDelete = (payload, kabuliyatibanBibaranId) => api.post(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`, payload);

    const getNabikaranKaryayojanaList = () => api.get("nabikaranKaryayojana");

    const getNabikaranKaryayojana = (nabikaranKaryayojanaId) => api.get(`nabikaranKaryayojana/${nabikaranKaryayojanaId}`);

  //................biruwautpadans
  const getBiruwautpadanList = () => api.get("biruwaUtpadans");

  const getBiruwautpadan = (biruwautpadanId) => api.get(`biruwaUtpadans/${biruwautpadanId}`);
  //Dwandabebasthapan
  const getBanyajantuUddarList = () => api.get("banyajantuUddars");

  const getBanyajantuUddar = (banyajantuUddarId) => api.get(`banyajantuUddars/${banyajantuUddarId}`);
  //Add banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarAddNew = (payload) => api.post(`banyajantuUddars`, payload);

  //update banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarUpdate = ( payload,banyajantuUddarId ) => 
  api.post(`bandadeloBibaran/${banyajantuUddarId}`, payload);

  //delete banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarDelete = (
    payload,
    banyajantuUddarId
  ) => api.post(`bandadeloBibaran/${banyajantuUddarId}`, payload);

  const getBanyajantuXetiList = () => api.get("banyajantuXetiBibarans");

  const getBanyajantuXeti = (banyajantuXetiId) => api.get(`banyajantuXetiBibarans/${banyajantuXetiId}`);
  //sampatibibaran
  const getAssetsList = () => api.get("assets");

  const getAssets = (assetId) => api.get(`assets/${assetId}`);

  const getVehiclesList = () => api.get("vehicles");

  const getVehicles = (vehicleId) => api.get(`vehicles/${vehicleId}`);
  // muddaanusandhandayari
  const getMuddaanusandhandayariList = () => api.get("muddaAnusandhanDayaris");

  const getMuddaanusandhandayari = (muddaAnusandhanDayariId) =>

    api.get(`muddaAnusandhanDayaris/${muddaAnusandhanDayariId}`);
  // ------banxetraatikraman
  const getBanxetraatikramanList = () => api.get("banxetraAtikramans");

  const getBanxetraatikraman = (banxetraAtikramanId) => api.get(`banxetraAtikramans/${banxetraAtikramanId}`);

  //................bandadelobibarans
  const getBandadelobibaranList = () => api.get("bandadeloBibaran");

  const getBandadelobibaran = (bandadeloBibaranId) => api.get(`bandadeloBibaran/${bandadeloBibaranId}`);

  //Add
  const postBandadelobibaranBandadeloAddNew = (payload) => api.post(`bandadeloBibaran`, payload);

  //update
  const postBandadelobibaranBandadeloUpdate = (payload, bandadeloBibaranId) => api.post(`bandadeloBibaran/${bandadeloBibaranId}`, payload);

  //delete
  const postBandadelobibaranBandadeloDelete = (payload, bandadeloBibaranId) =>api.post(`bandadeloBibaran/${bandadeloBibaranId}`, payload);

  //--------------banpaidawar
  const getBanpaidawarList = () => api.get("banpaidawar");

  const getBanpaidawar = (banpaidawarId) =>  api.get(`banpaidawar/${banpaidawarId}`);

  const getBanpaidawarlilamList = () => api.get("banpaidawarLilam");

  const getBanpaidawarlilam = (banpaidawarLilamId) => api.get(`banpaidawar/${banpaidawarLilamId}`);
  // Karmachari darbandi
  const getKarmacharidarbandiList = () => api.get("karmachariDarbandi");

  const getKarmacharidarbandi = (karmacharidarbandiId) => api.get(`karmachariDarbandi/${karmacharidarbandiId}`);
  //------plotbibaran
  const getPlotbibaranList = () => api.get("plot");

  const getPlotbibaran = (plotId) => api.get(`plot/${plotId}`);

  //inventories
  const getInventoriesList = () => api.get("inventory");
  
  const getInventories = (inventId) => api.get(`inventory/${inventId}`);

  //karmacharibibaran
  const getEmployeesList = () => api.get("employees");
  const getEmployees = (employeesId) => api.get(`employees/${employeesId}`);

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
    //dwandabebasthapan
    getBanyajantuUddarList,
    getBanyajantuUddar,
    postDwandabebasthapanBanyajantuuddarAddNew,
    postDwandabebasthapanBanyajantuuddarUpdate,
    postDwandabebasthapanBanyajantuuddarDelete,
    getBanyajantuXetiList,
    getBanyajantuXeti,
    //biruwautpadans
    getBiruwautpadanList,
    getBiruwautpadan,
    //sampatibibaran
    getAssetsList,
    getAssets,
    getVehiclesList,
    getVehicles,
    //muddaanusandhandayari
    getMuddaanusandhandayariList,
    getMuddaanusandhandayari,
    //banxetraatikraman
    getBanxetraatikramanList,
    getBanxetraatikraman,
    //bandadelobibaran
    getBandadelobibaranList,
    getBandadelobibaran,
    postBandadelobibaranBandadeloAddNew,
    postBandadelobibaranBandadeloUpdate,
    postBandadelobibaranBandadeloDelete,
    //------banpaidawar
    getBanpaidawarList,
    getBanpaidawar,
    getBanpaidawarlilamList,
    getBanpaidawarlilam,
    // karmacharidarbandi
    getKarmacharidarbandiList,
    getKarmacharidarbandi,
    //-----plotbibaran
    getPlotbibaranList,
    getPlotbibaran,
    //inventories
    getInventoriesList,
    getInventories,
    //karmacharibiabran
    getEmployeesList,
    getEmployees,
  };
};
export default {
  create,
};
