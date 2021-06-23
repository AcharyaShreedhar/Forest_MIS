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
  const loginByUsername = (payload) => api.post("users/login", payload);
  //Bankaprakars
  const getSamudayikbanBibaranList = (payload) =>
    api.post("samudayikbanBibaranList", payload);

  const getSamudayikbanBibaran = (samudayikbanBibaranId) =>
    api.get(`samudayikbanBibaran/${samudayikbanBibaranId}`);
  //Add
  const postBankaprakarSamudayikbanAddNew = (payload) =>
    api.post(`samudayikbanBibaran`, payload);
  //update
  const postBankaprakarSamudayikbanUpdate = (payload, samudayikbanbibaranId) =>
    api.put(`samudayikbanBibaran/${samudayikbanbibaranId}`, payload);
  //Delete
  const postBankaprakarSamudayikbanDelete = (samudayikbanbibaranId) =>
    api.delete(`samudayikbanBibaran/${samudayikbanbibaranId}`);

  const getDharmikbanBibaranList = (payload) =>
    api.post("dharmikbanBibaranList", payload);

  const getDharmikbanBibaran = (dharmikbanBibaranId) =>
    api.get(`dharmikbanBibaran/${dharmikbanBibaranId}`);
  //Add
  const postBankaprakarDharmikbanAddNew = (payload) =>
    api.post(`dharmikbanBibaran`, payload);
  //update
  const postBankaprakarDharmikbanUpdate = (payload, dharmikbanBibaranId) =>
    api.put(`dharmikbanBibaran/${dharmikbanBibaranId}`, payload);
  //Delete
  const postBankaprakarDharmikbanDelete = (dharmikbanBibaranId) =>
    api.delete(`dharmikbanBibaran/${dharmikbanBibaranId}`);

  const getNijibanBibaranList = (payload) =>
    api.post("nijibanBibaranList", payload);

  const getNijibanBibaran = (nijibanBibaranId) =>
    api.get(`nijibanBibaran/${nijibanBibaranId}`);
  //Add
  const postBankaprakarNijibanAddNew = (payload) =>
    api.post(`nijibanBibaran`, payload);
  //update
  const postBankaprakarNijibanUpdate = (payload, nijibanBibaranId) =>
    api.put(`nijibanBibaran/${nijibanBibaranId}`, payload);

  //delete
  const postBankaprakarNijibanDelete = (nijibanBibaranId) =>
    api.delete(`nijibanBibaran/${nijibanBibaranId}`);

  const getKabuliyatibanBibaranList = (payload) =>
    api.post("kabuliyatibanBibaranList", payload);

  const getKabuliyatibanBibaran = (kabuliyatibanBibaranId) =>
    api.get(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`);

  //Add
  const postBankaprakarKabuliyatibanAddNew = (payload) =>
    api.post(`kabuliyatibanBibaran`, payload);

  //update
  const postBankaprakarKabuliyatibanUpdate = (
    payload,
    kabuliyatibanBibaranId
  ) => api.put(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`, payload);

  //delete
  const postBankaprakarKabuliyatibanDelete = (kabuliyatibanBibaranId) =>
    api.delete(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`);

  const getNabikaranKaryayojanaList = () => api.get("nabikaranKaryayojana");

  const getNabikaranKaryayojana = (nabikaranKaryayojanaId) =>
    api.get(`nabikaranKaryayojana/${nabikaranKaryayojanaId}`);

  //Add
  const postBankaprakarNabikarankaryayojanaAddNew = (payload) =>
    api.post(`nabikaranKaryayojana`, payload);

  //update
  const postBankaprakarNabikarankaryayojanaUpdate = (
    payload,
    nabikaranKaryayojanaId
  ) => api.put(`nabikaranKaryayojana/${nabikaranKaryayojanaId}`, payload);

  //delete
  const postBankaprakarNabikarankaryayojanaDelete = (nabikaranKaryayojanaId) =>
    api.delete(`nabikarankaryayojana/${nabikaranKaryayojanaId}`);

  //Banbibaran_baramadit_chijbastu
  const getBaramaditchijbastuList = (payload) =>
    api.post("baramaditChijbastuList", payload);

  const getBaramaditchijbastu = (baramaditchijbastuId) =>
    api.get(`baramaditChijbastu/${baramaditchijbastuId}`);

  // Banbibaran_banxetra_anya_prayojan
  const getBanxetraanyaprayojanList = (payload) =>
    api.post("banxetraAnyaprayojanList", payload);

  const getBanxetraanyaprayojan = (banxetraanyaprayojanId) =>
    api.get(`banxetraAnyaprayojan/${banxetraanyaprayojanId}`);
  //................biruwautpadans
  const getBiruwautpadanList = (payload) => api.post("biruwaUtpadansList", payload);

  const getBiruwautpadan = (biruwautpadanId) =>
    api.get(`biruwaUtpadans/${biruwautpadanId}`);

  //Add
  const postBiruwautpadanBiruwautpadanAddNew = (payload) =>
    api.post(`biruwautpadans`, payload);

  //update
  const postBiruwautpadanBiruwautpadanUpdate = (payload, biruwautpadanId) =>
    api.put(`biruwautpadans/${biruwautpadanId}`, payload);

  //delete
  const postBiruwautpadanBiruwautpadanDelete = (biruwautpadanId) =>
    api.delete(`biruwautpadans/${biruwautpadanId}`);

  const getActivitiesinfoList = (payload) => api.post("activitiesInfoList",payload);

  const getActivitiesinfo = (activitiesInfoId) =>
    api.get(`activitiesInfo/${activitiesInfoId}`);

  //Add
  const postBiruwautpadanActivitiesinfoAddNew = (payload) =>
    api.post(`activitiesInfo`, payload);

  //update
  const postBiruwautpadanActivitiesinfoUpdate = (payload, activitiesinfoId) =>
    api.put(`activitiesInfo/${activitiesinfoId}`, payload);

  //delete
  const postBiruwautpadanActivitiesinfoDelete = (activitiesinfoId) =>
    api.delete(`activitiesInfo/${activitiesinfoId}`);

  //Dwandabebasthapan
  const getBanyajantuUddarList = (payload) => api.post("banyajantuUddarsList", payload);

  const getBanyajantuUddar = (banyajantuUddarId) =>
    api.get(`banyajantuUddars/${banyajantuUddarId}`);
  //Add banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarAddNew = (payload) =>
    api.post(`banyajantuUddars`, payload);

  //update banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarUpdate = (
    payload,
    banyajantuuddarId
  ) => api.put(`banyajantuUddars/${banyajantuuddarId}`, payload);

  //delete banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarDelete = (banyajantuuddarId) =>
    api.delete(`banyajantuUddars/${banyajantuuddarId}`);

  const getBanyajantuXetiList = (payload) => api.post("banyajantuXetiBibaransList", payload);

  const getBanyajantuXeti = (banyajantuXetiId) =>
    api.get(`banyajantuXetiBibarans/${banyajantuXetiId}`);

  //Add banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiAddNew = (payload) =>
    api.post(`banyajantuXetiBibarans`, payload);

  //update banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiUpdate = (
    payload,
    banyajantuxetiId
  ) => api.put(`banyajantuXetiBibarans/${banyajantuxetiId}`, payload);

  //delete banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiDelete = (banyajantuxetiId) =>
    api.delete(`banyajantuXetiBibarans/${banyajantuxetiId}`);

  //sampatibibaran
  const getAssetsList = (payload) => api.post("assetsList",payload);

  const getAssets = (assetId) => api.get(`assets/${assetId}`);

  //Add
  const postSampatibibaranAssetsAddNew = (payload) =>
    api.post(`assets`, payload);
  //update
  const postSampatibibaranAssetsUpdate = (payload, assetId) =>
    api.put(`assets/${assetId}`, payload);
  //Delete
  const postSampatibibaranAssetsDelete = (assetId) =>
    api.delete(`assets/${assetId}`);

  const getVehiclesList = (payload) => api.post("vehiclesList", payload);

  const getVehicles = (vehicleId) => api.get(`vehicles/${vehicleId}`);

  //Add
  const postSampatibibaranVehiclesAddNew = (payload) =>
    api.post(`vehicles`, payload);
  //update
  const postSampatibibaranVehiclesUpdate = (payload, vehicleId) =>
    api.put(`vehicles/${vehicleId}`, payload);
  //Delete
  const postSampatibibaranVehiclesDelete = (vehicleId) =>
    api.delete(`vehicles/${vehicleId}`);

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
    muddaanusandhandayariId
  ) => api.put(`muddaAnusandhanDayaris/${muddaanusandhandayariId}`, payload);

  //delete muddaanusandhandayari
  const postMuddaanusandhandayariMuddaanusandhandayariDelete = (
    muddaAnusandhandayariId
  ) => api.delete(`muddaAnusandhanDayari/${muddaAnusandhandayariId}`);

  // ------banxetraatikraman
  const getBanxetraatikramanList = (payload) => api.post("banxetraAtikramansList",payload);

  const getBanxetraatikraman = (banxetraAtikramanId) =>
    api.get(`banxetraAtikramans/${banxetraAtikramanId}`);

  //Add
  const postBanxetraatikramanBanxetraatikramanAddNew = (payload) =>
    api.post(`banxetraAtikramans`, payload);

  //update
  const postBanxetraatikramanBanxetraatikramanUpdate = (
    payload,
    banxetraatikramanId
  ) => api.put(`banxetraAtikramans/${banxetraatikramanId}`, payload);

  //delete
  const postBanxetraatikramanBanxetraatikramanDelete = (banxteraatikramanId) =>
    api.delete(`banxetraAtikramans/${banxteraatikramanId}`);

  //................bandadelobibarans
  const getBandadelobibaranList = (payload) => api.post("bandadeloBibaranList",payload);

  const getBandadelobibaran = (bandadeloBibaranId) =>
    api.get(`bandadeloBibaran/${bandadeloBibaranId}`);

  //Add
  const postBanbibaranBandadelobibaranAddNew = (payload) =>
    api.post(`bandadeloBibaran`, payload);

  //update
  const postBanbibaranBandadelobibaranUpdate = (payload, bandadelobibaranId) =>
    api.put(`bandadeloBibaran/${bandadelobibaranId}`, payload);

  //delete
  const postBanbibaranBandadelobibaranDelete = (bandadelobibaranId) =>
    api.delete(`bandadeloBibaran/${bandadelobibaranId}`);

  //--------------banpaidawar
  const getBanpaidawarList = (payload) => api.post("banpaidawarList", payload);

  const getBanpaidawar = (banpaidawarId) =>
    api.get(`banpaidawar/${banpaidawarId}`);

  //Add
  const postBanpaidawarBanpaidawarAddNew = (payload) =>
    api.post(`banpaidawar`, payload);

  //update
  const postBanpaidawarBanpaidawarUpdate = (payload, banpaidawarId) =>
    api.put(`banpaidawar/${banpaidawarId}`, payload);

  //delete
  const postBanpaidawarBanpaidawarDelete = (banpaidawarId) =>
    api.delete(`banpaidawar/${banpaidawarId}`);

  const getBanpaidawarlilamList = (payload) => api.post("banpaidawarLilamList", payload);

  const getBanpaidawarlilam = (banpaidawarLilamId) =>
    api.get(`banpaidawarLilam/${banpaidawarLilamId}`);

  //Add
  const postBanpaidawarBanpaidawarlilamAddNew = (payload) =>
    api.post(`banpaidawarLilam`, payload);

  //update
  const postBanpaidawarBanpaidawarlilamUpdate = (payload, banpaidawarlilamId) =>
    api.put(`banpaidawarLilam/${banpaidawarlilamId}`, payload);

  //delete
  const postBanpaidawarBanpaidawarlilamDelete = (banpaidawarlilamId) =>
    api.delete(`banpaidawarLilam/${banpaidawarlilamId}`);

  // Karmachari darbandi
  const getKarmacharidarbandiList = () => api.get("karmachariDarbandi");

  const getKarmacharidarbandi = (karmacharidarbandiId) =>
    api.get(`karmachariDarbandi/${karmacharidarbandiId}`);

  //Add
  const postKarmacharidarbandiAddNew = (payload) =>
    api.post(`karmachariDarbandi`, payload);

  //update
  const postKarmacharidarbandiUpdate = (payload, karmacharidarbandiId) =>
    api.put(`karmachariDarbandi/${karmacharidarbandiId}`, payload);

  //delete
  const postKarmacharidarbandiDelete = (karmacharidarbandiId) =>
    api.delete(`karmachariDarbandi/${karmacharidarbandiId}`);

  //------plotbibaran
  const getPlotbibaranList = (payload) => api.post("plotList", payload);

  const getPlotbibaran = (plotId) => api.get(`plot/${plotId}`);

  //Add
  const postPlotbibaranPlotbibaranAddNew = (payload) =>
    api.post(`plot`, payload);
  //update
  const postPlotbibaranPlotbibaranUpdate = (payload, plotId) =>
    api.put(`plot/${plotId}`, payload);
  //Delete
  const postPlotbibaranPlotbibaranDelete = (plotId) =>
    api.delete(`plot/${plotId}`);

  //-----Municipalities
  const getMunicipalitiesList = () => api.get("municipalities");
  const getMunicipalities = (municipalitiesId) =>
    api.get(`municipalities/${municipalitiesId}`);

  //-------Provinces
  const getProvincesList = () => api.get("province");

  const getProvinces = (provincesId) => api.get(`province/${provincesId}`);

  //-------Districts
  const getDistrictsList = () => api.get("district");
  const getDistricts = (districtsId) => api.get(`district/${districtsId}`);

  //-------Departments
  const getDepartmentsList = (payload) => api.post("departmentList", payload);
  const getDepartments = (departmentsId) =>
    api.get(`department/${departmentsId}`);

  //-------Users
  const getUsersList = () => api.get("users");
  const getUsers = (usersId) => api.get(`users/${usersId}`);

  //inventories
  const getInventoriesList = () => api.get("inventory");
  const getInventories = (inventId) => api.get(`inventory/${inventId}`);

  //Add
  const postInventoriesInventoriesAddNew = (payload) =>
    api.post(`inventory`, payload);

  //update
  const postInventoriesInventoriesUpdate = (payload, inventoryId) =>
    api.put(`invnetory/${inventoryId}`, payload);

  //Delete
  const postInventoriesInventoriesDelete = (inventoryId) =>
    api.delete(`inventory/${inventoryId}`);

  const getEntryList = () => api.get("entry");
  const getEntry = (entryId) => api.get(`entry/${entryId}`);

  //Add
  const postInventoriesEntryAddNew = (payload) => api.post(`entry`, payload);

  //update
  const postInventoriesEntryUpdate = (payload, entryId) =>
    api.put(`entry/${entryId}`, payload);

  //Delete
  const postInventoriesEntryDelete = (entryId) =>
    api.delete(`entry/${entryId}`);

  const getExitList = () => api.get("exit");
  const getExit = (exitId) => api.get(`exit/${exitId}`);

  //Add
  const postInventoriesExitAddNew = (payload) => api.post(`exit`, payload);

  //update
  const postInventoriesExitUpdate = (payload, exitId) =>
    api.put(`exit/${exitId}`, payload);

  //Delete
  const postInventoriesExitDelete = (exitId) => api.delete(`exit/${exitId}`);

  //karmacharibibaran
  const getEmployeesList = () => api.get("employees");
  const getEmployees = (employeesId) => api.get(`employees/${employeesId}`);
  //Add
  const postKarmacharibibaranEmployeesAddNew = (payload) =>
    api.post(`employees`, payload);

  //update
  const postKarmacharibibaranEmployeesUpdate = (payload, employeeId) =>
    api.put(`employees/${employeeId}`, payload);

  //Delete
  const postKarmacharibibaranEmployeesDelete = (employeeId) =>
    api.delete(`employees/${employeeId}`);

  const getEmployeeshistoryList = () => api.get("employeeHistory");
  const getEmployeeshistory = (histId) => api.get(`employeeHistory/${histId}`);

  //Add
  const postKarmacharibibaranEmployeeshistoryAddNew = (payload) =>
    api.post(`employeeHistory`, payload);

  //update
  const postKarmacharibibaranEmployeeshistoryUpdate = (
    payload,
    employeehistoryId
  ) => api.put(`employeeHistory/${employeehistoryId}`, payload);

  //Delete
  const postKarmacharibibaranEmployeeshistoryDelete = (employeehistoryId) =>
    api.delete(`employeeHistory/${employeehistoryId}`);

  const getLevelList = () => api.get("level");
  const getLevel = (levelId) => api.get(`level/${levelId}`);

  //Add
  const postKarmacharibibaranLevelAddNew = (payload) =>
    api.post(`level`, payload);

  //update
  const postKarmacharibibaranLevelUpdate = (payload, levelId) =>
    api.put(`level/${levelId}`, payload);

  //Delete
  const postKarmacharibibaranLevelDelete = (levelId) =>
    api.delete(`level/${levelId}`);

  const getPostList = () => api.get("posts");
  const getPost = (postId) => api.get(`posts/${postId}`);

  //Add
  const postKarmacharibibaranPostAddNew = (payload) =>
    api.post(`posts`, payload);

  //update
  const postKarmacharibibaranPostUpdate = (payload, postId) =>
    api.put(`posts/${postId}`, payload);

  //Delete
  const postKarmacharibibaranPostDelete = (postId) =>
    api.delete(`posts/${postId}`);

  //-------Consumer Group Details
  const getConsumergroupDetailsList = (payload) => api.post("ConsumerGroupDetailsList", payload);
  const getConsumergroupDetails = (consumergroupDetailsId) =>
    api.get(`ConsumerGroupDetails/${consumergroupDetailsId}`);

  return {
    loginByUsername,
    getSamudayikbanBibaranList,
    getSamudayikbanBibaran,
    postBankaprakarSamudayikbanAddNew,
    postBankaprakarSamudayikbanUpdate,
    postBankaprakarSamudayikbanDelete,
    getDharmikbanBibaranList,
    getDharmikbanBibaran,
    postBankaprakarDharmikbanAddNew,
    postBankaprakarDharmikbanUpdate,
    postBankaprakarDharmikbanDelete,
    getNijibanBibaranList,
    getNijibanBibaran,
    postBankaprakarNijibanAddNew,
    postBankaprakarNijibanUpdate,
    postBankaprakarNijibanDelete,
    getKabuliyatibanBibaranList,
    getKabuliyatibanBibaran,
    postBankaprakarKabuliyatibanAddNew,
    postBankaprakarKabuliyatibanUpdate,
    postBankaprakarKabuliyatibanDelete,
    getNabikaranKaryayojanaList,
    getNabikaranKaryayojana,
    postBankaprakarNabikarankaryayojanaAddNew,
    postBankaprakarNabikarankaryayojanaUpdate,
    postBankaprakarNabikarankaryayojanaDelete,
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
    getActivitiesinfoList,
    getActivitiesinfo,
    postBiruwautpadanActivitiesinfoAddNew,
    postBiruwautpadanActivitiesinfoUpdate,
    postBiruwautpadanActivitiesinfoDelete,

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
    postBanbibaranBandadelobibaranAddNew,
    postBanbibaranBandadelobibaranUpdate,
    postBanbibaranBandadelobibaranDelete,
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
    postKarmacharidarbandiAddNew,
    postKarmacharidarbandiUpdate,
    postKarmacharidarbandiDelete,
    //-----plotbibaran
    getPlotbibaranList,
    getPlotbibaran,
    postPlotbibaranPlotbibaranAddNew,
    postPlotbibaranPlotbibaranUpdate,
    postPlotbibaranPlotbibaranDelete,
    //inventories
    getInventoriesList,
    getInventories,
    postInventoriesInventoriesAddNew,
    postInventoriesInventoriesUpdate,
    postInventoriesInventoriesDelete,
    getEntryList,
    getEntry,
    postInventoriesEntryAddNew,
    postInventoriesEntryUpdate,
    postInventoriesEntryDelete,
    getExitList,
    getExit,
    postInventoriesExitAddNew,
    postInventoriesExitUpdate,
    postInventoriesExitDelete,
    //karmacharibiabran
    getEmployeesList,
    getEmployees,
    postKarmacharibibaranEmployeesAddNew,
    postKarmacharibibaranEmployeesUpdate,
    postKarmacharibibaranEmployeesDelete,
    getEmployeeshistoryList,
    getEmployeeshistory,
    postKarmacharibibaranEmployeeshistoryAddNew,
    postKarmacharibibaranEmployeeshistoryUpdate,
    postKarmacharibibaranEmployeeshistoryDelete,
    getLevelList,
    getLevel,
    postKarmacharibibaranLevelAddNew,
    postKarmacharibibaranLevelUpdate,
    postKarmacharibibaranLevelDelete,
    getPostList,
    getPost,
    postKarmacharibibaranPostAddNew,
    postKarmacharibibaranPostUpdate,
    postKarmacharibibaranPostDelete,

    //--municipalities
    getMunicipalitiesList,
    getMunicipalities,

    //-----Provinces
    getProvincesList,
    getProvinces,

    //----Districts
    getDistrictsList,
    getDistricts,

    //-----Users
    getUsersList,
    getUsers,

    //ConsumerGroupDetails
    getConsumergroupDetailsList,
    getConsumergroupDetails,

    //-----Departments
    getDepartmentsList,
    getDepartments,

    //--------Banbibaran
    getBaramaditchijbastuList,
    getBaramaditchijbastu,
    getBanxetraanyaprayojanList,
    getBanxetraanyaprayojan,
  };
};
export default {
  create,
};
