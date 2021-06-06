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
    api.post(`samudayikbanBibaran/${samudayikbanbibaranId}`, payload);

  const getDharmikbanBibaranList = () => api.get("dharmikbanBibaran");

  const getDharmikbanBibaran = (dharmikbanBibaranId) =>
    api.get(`dharmikbanBibaran/${dharmikbanBibaranId}`);

  const getNijibanBibaranList = () => api.get("nijibanBibaran");

  const getNijibanBibaran = (nijibanBibaranId) =>
    api.get(`nijibanBibaran/${nijibanBibaranId}`);

  const getKabuliyatibanBibaranList = () => api.get("kabuliyatibanBibaran");

  const getKabuliyatibanBibaran = (kabuliyatibanBibaranId) =>
    api.get(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`);

  //................biruwautpadans

  const getBiruwautpadanList = () => api.get("biruwaUtpadans");

  const getBiruwautpadan = (biruwautpadanId) =>
    api.get(`biruwaUtpadans/${biruwautpadanId}`);

  //Dwandabebasthapan

  const getBanyajantuUddarList = () => api.get("banyajantuUddars");

  const getBanyajantuUddar = (banyajantuUddarId) =>
    api.get(`banyajantuUddars/${banyajantuUddarId}`);

  const getBanyajantuXetiList = () => api.get("banyajantuXetiBibarans");

  const getBanyajantuXeti = (banyajantuXetiId) =>
    api.get(`banyajantuXetiBibarans/${banyajantuXetiId}`);

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

  const getBanxetraatikraman = (banxetraAtikramanId) =>
    api.get(`banxetraAtikramans/${banxetraAtikramanId}`);

  //................bandadelobibarans

  const getBandadelobibaranList = () => api.get("bandadeloBibaran");

  return {
    loginByUsername,
    getSamudayikbanBibaranList,
    getSamudayikbanBibaran,
    postBanbibaranSamudayikbanAddNew,
    postBanbibaranSamudayikbanUpdate,
    getDharmikbanBibaranList,
    getDharmikbanBibaran,
    getNijibanBibaranList,
    getNijibanBibaran,
    getKabuliyatibanBibaranList,
    getKabuliyatibanBibaran,

    //dwandabebasthapan
    getBanyajantuUddarList,
    getBanyajantuUddar,
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
  };
};

export default {
  create,
};
