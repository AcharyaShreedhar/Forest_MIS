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
  const getSamudayikbanBibaranList = () =>
    api.get("samudayikbanBibaran");

  const getSamudayikbanBibaran = samudayikbanBibaranId => 
    api.get(`samudayikbanBibaran/${samudayikbanBibaranId}`);

  const getDharmikbanBibaranList = () =>
    api.get("dharmikbanBibaran");

  const getDharmikbanBibaran = dharmikbanBibaranId => 
    api.get(`dharmikbanBibaran/${dharmikbanBibaranId}`);
    
  const getNijibanBibaranList = () =>
    api.get("nijibanBibaran");

  const getNijibanBibaran = nijibanBibaranId => 
    api.get(`nijibanBibaran/${nijibanBibaranId}`);

  const getKabuliyatibanBibaranList = () =>
    api.get("kabuliyatibanBibaran");

  const getKabuliyatibanBibaran = kabuliyatibanBibaranId => 
    api.get(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`);
   
  const getBiruwautpadanList = () =>
    api.get("biruwaUtpadans");


    //Dwandabebasthapan

  const getBanyajantuUddarList = () =>
    api.get("banyajantuUddars");

  const getBanyajantuUddar = banyajantuUddarId =>
    api.get(`banyajantuUddars/${banyajantuUddarId}`);
    

  return {
    loginByUsername,
    getSamudayikbanBibaranList,
    getSamudayikbanBibaran,
    getDharmikbanBibaranList,
    getDharmikbanBibaran,
    getNijibanBibaranList,   
    getNijibanBibaran,    
    getKabuliyatibanBibaranList,
    getKabuliyatibanBibaran,

    //dwandabebasthapan
    getBanyajantuUddarList,
    getBanyajantuUddar,

    //biruwautpadans
    getBiruwautpadanList,
  
  };
};

export default {
  create,
};
