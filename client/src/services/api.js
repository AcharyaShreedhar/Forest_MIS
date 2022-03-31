/**
 * We will follow the following rules to name API functions.
 * prefix 1: type of http request such as get, post, delete.
 * prefix 2: section name such as admin
 * samples: postAdminStaffSave
 */
import apisauce from 'apisauce'
import { equals } from 'ramda'
import { store } from '../reducers'
import AppActions from '../actions/app'
const Config = {
  API_URL: 'http://localhost:3001/api/v1/',
}
//https://forest-mis-server.herokuapp.com/api/v1/
//http://localhost:3001/api/v1/
// const authenticated = (api) => {
//   api.setHeader("Authorization", "Bearer " + window.token);
//   return api;
// };
const naviMonitor = (response) => {
  if (equals(response.status, 401)) {
    store.dispatch(AppActions.logoutRequest())
    console.log('Your token has been expired.', response.config.url)
  }
}
const create = (baseURL = Config.API_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // 50 second timeout...
    timeout: 50000,
  })

  api.addMonitor(naviMonitor)
  // Login API
  const loginByUsername = (payload) => api.post('users/login', payload)
  //Bankaprakars
  const getBantypesList = (payload) => api.post('totalBantypesList', payload)

  const getSamudayikbanBibaranList = (payload) =>
    api.post('samudayikbanBibaranList', payload)

  const getSamudayikbanBibaran = (samudayikbanBibaranId) =>
    api.get(`samudayikbanBibaran/${samudayikbanBibaranId}`)
  //Add
  const postBankaprakarSamudayikbanAddNew = (payload) =>
    api.post(`samudayikbanBibaran`, payload)
  //update
  const postBankaprakarSamudayikbanUpdate = (payload, samudayikbanbibaranId) =>
    api.put(`samudayikbanBibaran/${samudayikbanbibaranId}`, payload)
  //Delete
  const postBankaprakarSamudayikbanDelete = (samudayikbanbibaranId) =>
    api.delete(`samudayikbanBibaran/${samudayikbanbibaranId}`)

  const getDharmikbanBibaranList = (payload) =>
    api.post('dharmikbanBibaranList', payload)

  const getDharmikbanBibaran = (dharmikbanBibaranId) =>
    api.get(`dharmikbanBibaran/${dharmikbanBibaranId}`)
  //Add
  const postBankaprakarDharmikbanAddNew = (payload) =>
    api.post(`dharmikbanBibaran`, payload)
  //update
  const postBankaprakarDharmikbanUpdate = (payload, dharmikbanBibaranId) =>
    api.put(`dharmikbanBibaran/${dharmikbanBibaranId}`, payload)
  //Delete
  const postBankaprakarDharmikbanDelete = (dharmikbanBibaranId) =>
    api.delete(`dharmikbanBibaran/${dharmikbanBibaranId}`)

  const getNijibanBibaranList = (payload) =>
    api.post('nijibanBibaranList', payload)

  const getNijibanBibaran = (nijibanBibaranId) =>
    api.get(`nijibanBibaran/${nijibanBibaranId}`)
  //Add
  const postBankaprakarNijibanAddNew = (payload) =>
    api.post(`nijibanBibaran`, payload)
  //update
  const postBankaprakarNijibanUpdate = (payload, nijibanBibaranId) =>
    api.put(`nijibanBibaran/${nijibanBibaranId}`, payload)

  //delete
  const postBankaprakarNijibanDelete = (nijibanBibaranId) =>
    api.delete(`nijibanBibaran/${nijibanBibaranId}`)

  const getKabuliyatibanBibaranList = (payload) =>
    api.post('kabuliyatibanBibaranList', payload)

  const getKabuliyatibanBibaran = (kabuliyatibanBibaranId) =>
    api.get(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`)

  //Add
  const postBankaprakarKabuliyatibanAddNew = (payload) =>
    api.post(`kabuliyatibanBibaran`, payload)

  //update
  const postBankaprakarKabuliyatibanUpdate = (
    payload,
    kabuliyatibanBibaranId
  ) => api.put(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`, payload)

  //delete
  const postBankaprakarKabuliyatibanDelete = (kabuliyatibanBibaranId) =>
    api.delete(`kabuliyatibanBibaran/${kabuliyatibanBibaranId}`)

  const getCommercialkabuliyatibanBibaranList = (payload) =>
    api.post('commercialkabuliyatibanBibaranList', payload)

  const getCommercialkabuliyatibanBibaran = (
    commercialkabuliyatibanbibaranId
  ) =>
    api.get(
      `commercialkabuliyatibanBibaran/${commercialkabuliyatibanbibaranId}`
    )

  const postBankaprakarCommercialkabuliyatibanAddNew = (payload) =>
    api.post(`commercialkabuliyatibanBibaran`, payload)

  const postBankaprakarCommercialkabuliyatibanUpdate = (
    payload,
    commercialkabuliyatibanbibaranId
  ) =>
    api.put(
      `commercialkabuliyatibanBibaran/${commercialkabuliyatibanbibaranId}`,
      payload
    )

  const postBankaprakarCommercialkabuliyatibanDelete = (
    commercialkabuliyatibanbibaranId
  ) =>
    api.delete(
      `commercialkabuliyatibanBibaran/${commercialkabuliyatibanbibaranId}`
    )

  const getChaklabanBibaranList = (payload) =>
    api.post('chaklabanBibaranList', payload)

  const getChaklabanBibaran = (chaklabanBibaranId) =>
    api.get(`chaklabanBibaran/${chaklabanBibaranId}`)

  //Add
  const postBankaprakarChaklabanAddNew = (payload) =>
    api.post(`chaklabanBibaran`, payload)

  //update
  const postBankaprakarChaklabanUpdate = (payload, chaklabanbibaranId) =>
    api.put(`chaklabanBibaran/${chaklabanbibaranId}`, payload)

  //delete
  const postBankaprakarChaklabanDelete = (chaklabanbibaranId) =>
    api.delete(`chaklabanBibaran/${chaklabanbibaranId}`)

  const getNabikaranKaryayojanaList = () => api.get('nabikaranKaryayojanaList')

  const getNabikaranKaryayojana = (nabikaranKaryayojanaId) =>
    api.get(`nabikaranKaryayojana/${nabikaranKaryayojanaId}`)

  //Add
  const postBankaprakarNabikarankaryayojanaAddNew = (payload) =>
    api.post(`nabikaranKaryayojana`, payload)

  //update
  const postBankaprakarNabikarankaryayojanaUpdate = (
    payload,
    nabikaranKaryayojanaId
  ) => api.put(`nabikaranKaryayojana/${nabikaranKaryayojanaId}`, payload)

  //delete
  const postBankaprakarNabikarankaryayojanaDelete = (nabikaranKaryayojanaId) =>
    api.delete(`nabikarankaryayojana/${nabikaranKaryayojanaId}`)

  //Banbibaran_baramadit_chijbastu
  const getBaramaditchijbastuList = (payload) =>
    api.post('baramaditChijbastuList', payload)

  const getBaramaditchijbastu = (baramaditchijbastuId) =>
    api.get(`baramaditChijbastu/${baramaditchijbastuId}`)
  //add
  const postBaramaditchijbastuAddnew = (payload) =>
    api.post(`baramaditChijbastu`, payload)

  //update
  const postBaramaditchijbastuUpdate = (payload, baramaditchijbastuId) =>
    api.put(`baramaditchijbastu/${baramaditchijbastuId}`, payload)

  //delete
  const postBaramaditChijBastuDelete = (baramaditchijbastuId) =>
    api.delete(`baramaditchijbastu/${baramaditchijbastuId}`)

  // Banbibaran_banxetra_anya_prayojan
  const getBanxetraanyaprayojanList = (payload) =>
    api.post('banxetraAnyaprayojanList', payload)

  const getBanxetraanyaprayojan = (banxetraanyaprayojanId) =>
    api.get(`banxetraAnyaprayojan/${banxetraanyaprayojanId}`)

  //add
  const postBanbibaranBanxetraanyaprayojanAddNew = (payload) =>
    api.post(`BanxetraAnyaprayojan`, payload)

  //update
  const postBanbibaranBanxetraanyaprayojanUpdate = (
    payload,
    banxetraanyaprayojanId
  ) => api.put(`banxetraAnyaprayojan/${banxetraanyaprayojanId}`, payload)

  //delete
  const postBanbibaranBanxetraanyaprayojanDelete = (banxetraanyaprayojanId) =>
    api.delete(`banxetraAnyaprayojan/${banxetraanyaprayojanId}`)

  //UdhhyamBibarans
  const getUddhyambibaranList = (payload) =>
    api.post('uddhyamBibaranList', payload)

  const getUddhyambibaran = (uddhyamId) =>
    api.get(`uddhyamBibaran/${uddhyamId}`)

  //Add
  const postBanbibaranUddhyambibaranAddNew = (payload) =>
    api.post(`uddhyamBibaran`, payload)

  //update
  const postBanbibaranUddhyambibaranUpdate = (payload, uddhyamId) =>
    api.put(`uddhyambibaran/${uddhyamId}`, payload)

  //delete
  const postBanbibaranUddhyambibaranDelete = (uddhyamId) =>
    api.delete(`uddhyamBibaran/${uddhyamId}`)

  //................biruwautpadans
  const getBiruwautpadanList = (payload) =>
    api.post('biruwaUtpadansList', payload)

  const getBiruwautpadan = (biruwautpadanId) =>
    api.get(`biruwaUtpadans/${biruwautpadanId}`)

  //Add
  const postBiruwautpadanBiruwautpadanAddNew = (payload) =>
    api.post(`biruwautpadans`, payload)

  //update
  const postBiruwautpadanBiruwautpadanUpdate = (payload, biruwautpadanId) =>
    api.put(`biruwautpadans/${biruwautpadanId}`, payload)

  //delete
  const postBiruwautpadanBiruwautpadanDelete = (biruwautpadanId) =>
    api.delete(`biruwautpadans/${biruwautpadanId}`)

  const getActivitiesinfoList = (payload) =>
    api.post('activitiesInfoList', payload)

  const getActivitiesinfo = (activitiesInfoId) =>
    api.get(`activitiesInfo/${activitiesInfoId}`)

  //Add
  const postBiruwautpadanActivitiesinfoAddNew = (payload) =>
    api.post(`activitiesInfo`, payload)

  //update
  const postBiruwautpadanActivitiesinfoUpdate = (payload, activitiesinfoId) =>
    api.put(`activitiesInfo/${activitiesinfoId}`, payload)

  //delete
  const postBiruwautpadanActivitiesinfoDelete = (activitiesinfoId) =>
    api.delete(`activitiesInfo/${activitiesinfoId}`)

  //brixyaropan
  const getBrixyaropanList = (payload) => api.post('brixyaropanList', payload)

  const getBrixyaropan = (brixyaropanId) =>
    api.get(`brixyaropan/${brixyaropanId}`)

  const postBiruwautpadanBrixyaropanAddNew = (payload) =>
    api.post(`brixyaropan`, payload)

  const postBiruwautpadanBrixyaropanUpdate = (payload, brixyaropanId) =>
    api.put(`brixyaropan/${brixyaropanId}`, payload)

  const postBiruwautpadanBrixyaropanDelete = (brixyaropanId) =>
    api.delete(`brixyaropan/${brixyaropanId}`)

  //Jadibuti
  const getJadibutiList = (payload) => api.post('jadibutiList', payload)

  const getJadibuti = (jadibutiId) => api.get(`jadibuti/${jadibutiId}`)

  const postBiruwautpadanJadibutiAddNew = (payload) =>
    api.post(`jadibuti`, payload)

  const postBiruwautpadanJadibutiUpdate = (payload, jadibutiId) =>
    api.put(`jadibuti/${jadibutiId}`, payload)

  const postBiruwautpadanJadibutiDelete = (jadibutiId) =>
    api.delete(`jadibuti/${jadibutiId}`)

  //Dwandabebasthapan

  const getTotalBanyajantuUddarList = (payload) =>
    api.post('totalBanyajantuuddarList', payload)

  const getBanyajantuUddarList = (payload) =>
    api.post('banyajantuUddarsList', payload)

  const getBanyajantuUddar = (banyajantuUddarId) =>
    api.get(`banyajantuUddars/${banyajantuUddarId}`)
  //Add banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarAddNew = (payload) =>
    api.post(`banyajantuUddars`, payload)

  //update banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarUpdate = (
    payload,
    banyajantuuddarId
  ) => api.put(`banyajantuUddars/${banyajantuuddarId}`, payload)

  //delete banyajantuuddar
  const postDwandabebasthapanBanyajantuuddarDelete = (banyajantuuddarId) =>
    api.delete(`banyajantuUddars/${banyajantuuddarId}`)

  const getTotalBanyajantuXetiList = (payload) =>
    api.post('totalBanyajantuxetiList', payload)

  const getBanyajantuXetiList = (payload) =>
    api.post('banyajantuXetiBibaransList', payload)

  const getBanyajantuXeti = (banyajantuXetiId) =>
    api.get(`banyajantuXetiBibarans/${banyajantuXetiId}`)

  //Add banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiAddNew = (payload) =>
    api.post(`banyajantuXetiBibarans`, payload)

  //update banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiUpdate = (
    payload,
    banyajantuxetiId
  ) => api.put(`banyajantuXetiBibarans/${banyajantuxetiId}`, payload)

  //delete banyajantuxeti
  const postDwandabebasthapanBanyajantuxetiDelete = (banyajantuxetiId) =>
    api.delete(`banyajantuXetiBibarans/${banyajantuxetiId}`)

  //sampatibibaran
  const getAssetsList = (payload) => api.post('assetsList', payload)

  const getAssets = (assetId) => api.get(`assets/${assetId}`)

  //Add
  const postSampatibibaranAssetsAddNew = (payload) =>
    api.post(`assets`, payload)
  //update
  const postSampatibibaranAssetsUpdate = (payload, assetId) =>
    api.put(`assets/${assetId}`, payload)
  //Delete
  const postSampatibibaranAssetsDelete = (assetId) =>
    api.delete(`assets/${assetId}`)

  const getVehiclesList = (payload) => api.post('vehiclesList', payload)

  const getVehicles = (vehicleId) => api.get(`vehicles/${vehicleId}`)

  //Add
  const postSampatibibaranVehiclesAddNew = (payload) =>
    api.post(`vehicles`, payload)
  //update
  const postSampatibibaranVehiclesUpdate = (payload, vehicleId) =>
    api.put(`vehicles/${vehicleId}`, payload)
  //Delete
  const postSampatibibaranVehiclesDelete = (vehicleId) =>
    api.delete(`vehicles/${vehicleId}`)

  // anyasampati
  const getAnyaSampatiList = (payload) => api.post('anyasampatiList', payload)

  const getAnyaSampati = (sampatiId) => api.get(`anyasampati/${sampatiId}`)

  //Add
  const postSampatibibaranAnyaSampatiAddNew = (payload) =>
    api.post(`anyasampati`, payload)
  //update
  const postSampatibibaranAnyaSampatiUpdate = (payload, sampatiId) =>
    api.put(`anyasampati/${sampatiId}`, payload)
  //Delete
  const postSampatibibaranAnyaSampatiDelete = (sampatiId) =>
    api.delete(`anyasampati/${sampatiId}`)

  // muddaanusandhandayari
  const getMuddaanusandhandayariList = (payload) =>
    api.post('muddaAnusandhanDayarisList', payload)

  const getMuddaanusandhandayari = (muddaAnusandhanDayariId) =>
    api.get(`muddaAnusandhanDayaris/${muddaAnusandhanDayariId}`)

  //Add muddaanusandhandayari
  const postMuddaanusandhandayariMuddaanusandhandayariAddNew = (payload) =>
    api.post(`muddaAnusandhanDayaris`, payload)

  //update muddaanusandhandayari
  const postMuddaanusandhandayariMuddaanusandhandayariUpdate = (
    payload,
    muddaanusandhandayariId
  ) => api.put(`muddaAnusandhanDayaris/${muddaanusandhandayariId}`, payload)

  //delete muddaanusandhandayari
  const postMuddaanusandhandayariMuddaanusandhandayariDelete = (
    muddaanusandhandayariId
  ) => api.delete(`muddaAnusandhanDayaris/${muddaanusandhandayariId}`)

  // ------banxetraatikraman
  const getBanxetraatikramanList = (payload) =>
    api.post('banxetraAtikramansList', payload)

  const getBanxetraatikraman = (banxetraAtikramanId) =>
    api.get(`banxetraAtikramans/${banxetraAtikramanId}`)

  //Add
  const postBanxetraatikramanBanxetraatikramanAddNew = (payload) =>
    api.post(`banxetraAtikramans`, payload)

  //update
  const postBanxetraatikramanBanxetraatikramanUpdate = (
    payload,
    banxetraatikramanId
  ) => api.put(`banxetraAtikramans/${banxetraatikramanId}`, payload)

  //delete
  const postBanxetraatikramanBanxetraatikramanDelete = (banxteraatikramanId) =>
    api.delete(`banxetraAtikramans/${banxteraatikramanId}`)

  //................bandadelobibarans
  const getBandadelobibaranList = (payload) =>
    api.post('bandadeloBibaranList', payload)

  const getBandadelobibaran = (bandadeloBibaranId) =>
    api.get(`bandadeloBibaran/${bandadeloBibaranId}`)

  //Add
  const postBanbibaranBandadelobibaranAddNew = (payload) =>
    api.post(`bandadeloBibaran`, payload)

  //update
  const postBanbibaranBandadelobibaranUpdate = (payload, bandadelobibaranId) =>
    api.put(`bandadeloBibaran/${bandadelobibaranId}`, payload)

  //delete
  const postBanbibaranBandadelobibaranDelete = (bandadelobibaranId) =>
    api.delete(`bandadeloBibaran/${bandadelobibaranId}`)

  //--------------banpaidawar
  const getBanpaidawarList = (payload) => api.post('banpaidawarList', payload)

  const getBanpaidawar = (banpaidawarId) =>
    api.get(`banpaidawar/${banpaidawarId}`)

  //Add
  const postBanpaidawarBanpaidawarAddNew = (payload) =>
    api.post(`banpaidawar`, payload)

  //update
  const postBanpaidawarBanpaidawarUpdate = (payload, banpaidawarId) =>
    api.put(`banpaidawar/${banpaidawarId}`, payload)

  //delete
  const postBanpaidawarBanpaidawarDelete = (banpaidawarId) =>
    api.delete(`banpaidawar/${banpaidawarId}`)

  const getBanpaidawarlilamList = (payload) =>
    api.post('banpaidawarLilamList', payload)

  const getBanpaidawarlilam = (banpaidawarLilamId) =>
    api.get(`banpaidawarLilam/${banpaidawarLilamId}`)

  //Add
  const postBanpaidawarBanpaidawarlilamAddNew = (payload) =>
    api.post(`banpaidawarLilam`, payload)

  //-----------------update---------------//
  const postBanpaidawarBanpaidawarlilamUpdate = (payload, banpaidawarlilamId) =>
    api.put(`banpaidawarLilam/${banpaidawarlilamId}`, payload)

  //delete
  const postBanpaidawarBanpaidawarlilamDelete = (banpaidawarlilamId) =>
    api.delete(`banpaidawarLilam/${banpaidawarlilamId}`)

  // Karmachari darbandi
  const getKarmacharidarbandiList = (payload) =>
    api.post('karmachariDarbandiList', payload)

  const getKarmacharidarbandi = (karmacharidarbandiId) =>
    api.get(`karmachariDarbandi/${karmacharidarbandiId}`)

  //Add
  const postKarmacharidarbandiAddNew = (payload) =>
    api.post(`karmachariDarbandi`, payload)

  //update
  const postKarmacharidarbandiUpdate = (payload, karmacharidarbandiId) =>
    api.put(`karmachariDarbandi/${karmacharidarbandiId}`, payload)

  //delete
  const postKarmacharidarbandiDelete = (karmacharidarbandiId) =>
    api.delete(`karmachariDarbandi/${karmacharidarbandiId}`)

  //------plotbibaran
  const getPlotbibaranList = (payload) => api.post('plotList', payload)

  const getPlotbibaran = (plotId) => api.get(`plot/${plotId}`)

  //Add
  const postPlotbibaranPlotbibaranAddNew = (payload) =>
    api.post(`plot`, payload)
  //update
  const postPlotbibaranPlotbibaranUpdate = (payload, plotId) =>
    api.put(`plot/${plotId}`, payload)
  //Delete
  const postPlotbibaranPlotbibaranDelete = (plotId) =>
    api.delete(`plot/${plotId}`)

  //bachat bibarans
  const getBachatbibaranList = (payload) =>
    api.post('bachatBibaranList', payload)

  const getBachatbibaran = (bachatId) => api.get(`bachatBibaran/${bachatId}`)

  const postBanbibaranBachatbibaranAddNew = (payload) =>
    api.post(`bachatBibaran`, payload)

  const postBanbibaranBachatbibaranUpdate = (payload, bachatId) =>
    api.put(`bachatBibaran/${bachatId}`, payload)

  const postBanbibaranBachatbibaranDelete = (bachatId) =>
    api.delete(`bachatBibaran/${bachatId}`)

  const getMunicipalitiesList = () => api.get('municipalities')
  const getMunicipalities = (municipalitiesId) =>
    api.get(`municipalities/${municipalitiesId}`)
  //Add
  const postMunicipalitiesAddNew = (payload) =>
    api.post(`municipalities`, payload)
  //update
  const postMunicipalitiesUpdate = (payload, municipalitiesId) =>
    api.put(`municipalities/${municipalitiesId}`, payload)
  //Delete
  const postMunicipalitiesDelete = (municipalitiesId) =>
    api.delete(`municipalities/${municipalitiesId}`)

  //-------Provinces
  const getProvincesList = () => api.get('province')

  const getProvinces = (provincesId) => api.get(`province/${provincesId}`)

  //Add
  const postProvincesAddNew = (payload) => api.post(`province`, payload)
  //update
  const postProvincesUpdate = (payload, provincesId) =>
    api.put(`province/${provincesId}`, payload)
  //Delete
  const postProvincesDelete = (provincesId) =>
    api.delete(`province/${provincesId}`)

  //   //-------Districts
  const getDistrictsList = (provinceId) => api.get(`districtlist/${provinceId}`)
  const getDistricts = (districtsId) => api.get(`district/${districtsId}`)

  //Add
  const postDistrictsAddNew = (payload) => api.post(`district`, payload)
  //update
  const postDistrictsUpdate = (payload, districtsId) =>
    api.put(`district/${districtsId}`, payload)
  //Delete
  const postDistrictsDelete = (districtsId) =>
    api.delete(`district/${districtsId}`)

  //-------Departments
  const getDepartmentsList = (payload) => api.post('departmentList', payload)
  const getDepartments = (departmentsId) =>
    api.get(`department/${departmentsId}`)

  //Add
  const postDepartmentsAddNew = (payload) => api.post(`department`, payload)
  //update
  const postDepartmentsUpdate = (payload, departmentsId) =>
    api.put(`department/${departmentsId}`, payload)
  //Delete
  const postDepartmentsDelete = (departmentsId) =>
    api.delete(`department/${departmentsId}`)

  //-------Users
  const getUsersList = (payload) => api.post('usersList', payload)
  const getUsers = (usersId) => api.get(`users/${usersId}`)

  //Add
  const postUsersAddNew = (payload) => api.post(`users`, payload)
  //update
  const postUsersUpdate = (payload, usersId) =>
    api.put(`users/${usersId}`, payload)

  //change password
  const postUsersPasswordUpdate = (payload, usersId) =>
    api.put(`userspass/${usersId}`, payload)

  //Delete
  const postUsersDelete = (usersId) => api.delete(`users/${usersId}`)

  //-------Offices
  const getOfficesList = (payload) => api.post('officesList', payload)
  const getOffices = (officesId) => api.get(`offices/${officesId}`)

  //dropdown O-DDL
  const getOfficesDropdownList = (payload) =>
    api.post('officesDropdownList', payload)

  //Add
  const postOfficesAddNew = (payload) => api.post(`offices`, payload)
  //update
  const postOfficesUpdate = (payload, officesId) =>
    api.put(`offices/${officesId}`, payload)
  //Delete
  const postOfficesDelete = (officesId) => api.delete(`offices/${officesId}`)

  //inventories
  const getInventoriesList = (payload) => api.post('inventoryList', payload)
  const getInventories = (inventId) => api.get(`inventory/${inventId}`)

  //Add
  const postInventoriesInventoriesAddNew = (payload) =>
    api.post(`inventory`, payload)

  //update
  const postInventoriesInventoriesUpdate = (payload, inventoryId) =>
    api.put(`invnetory/${inventoryId}`, payload)

  //Delete
  const postInventoriesInventoriesDelete = (inventoryId) =>
    api.delete(`inventory/${inventoryId}`)

  const getEntryList = (payload) => api.post('entryList', payload)
  const getEntry = (entryId) => api.get(`entry/${entryId}`)

  //Add
  const postInventoriesEntryAddNew = (payload) => api.post(`entry`, payload)

  //update
  const postInventoriesEntryUpdate = (payload, entryId) =>
    api.put(`entry/${entryId}`, payload)

  //Delete
  const postInventoriesEntryDelete = (entryId) => api.delete(`entry/${entryId}`)

  const getExitList = (payload) => api.post('exitList', payload)
  const getExit = (exitId) => api.get(`exit/${exitId}`)

  //Add
  const postInventoriesExitAddNew = (payload) => api.post(`exit`, payload)

  //update
  const postInventoriesExitUpdate = (payload, exitId) =>
    api.put(`exit/${exitId}`, payload)

  //Delete
  const postInventoriesExitDelete = (exitId) => api.delete(`exit/${exitId}`)

  //karmacharibibaran
  const getEmployeesList = (payload) => api.post('employeesList', payload)
  const getEmployees = (employeesId) => api.get(`employees/${employeesId}`)
  //Add
  const postKarmacharibibaranEmployeesAddNew = (payload) =>
    api.post(`employees`, payload)

  //update
  const postKarmacharibibaranEmployeesUpdate = (payload, employeeId) =>
    api.put(`employees/${employeeId}`, payload)

  //Delete
  const postKarmacharibibaranEmployeesDelete = (employeeId) =>
    api.delete(`employees/${employeeId}`)

  const getEmployeeshistoryList = (payload) =>
    api.post('employeeHistoryList', payload)
  const getEmployeeshistory = (histId) => api.get(`employeeHistory/${histId}`)

  //Add
  const postKarmacharibibaranEmployeeshistoryAddNew = (payload) =>
    api.post(`employeeHistory`, payload)

  //update
  const postKarmacharibibaranEmployeeshistoryUpdate = (
    payload,
    employeehistoryId
  ) => api.put(`employeeHistory/${employeehistoryId}`, payload)

  //Delete
  const postKarmacharibibaranEmployeeshistoryDelete = (employeehistoryId) =>
    api.delete(`employeeHistory/${employeehistoryId}`)

  const getLevelList = () => api.get('level')
  const getLevel = (levelId) => api.get(`level/${levelId}`)

  //Add
  const postKarmacharibibaranLevelAddNew = (payload) =>
    api.post(`level`, payload)

  //update
  const postKarmacharibibaranLevelUpdate = (payload, levelId) =>
    api.put(`level/${levelId}`, payload)

  //Delete
  const postKarmacharibibaranLevelDelete = (levelId) =>
    api.delete(`level/${levelId}`)

  const getPostList = () => api.get('posts')
  const getPost = (postId) => api.get(`posts/${postId}`)

  //Add
  const postKarmacharibibaranPostAddNew = (payload) =>
    api.post(`posts`, payload)

  //update
  const postKarmacharibibaranPostUpdate = (payload, postId) =>
    api.put(`posts/${postId}`, payload)

  //Delete
  const postKarmacharibibaranPostDelete = (postId) =>
    api.delete(`posts/${postId}`)

  //banpaidawar_bikribitaran
  const getBanpaidawarbikribitaranList = (payload) =>
    api.post('banpaidawarbikribitaransList', payload)

  const getBanpaidawarbikribitaran = (banpaidawarBikribitaranId) =>
    api.get(`banpaidawarbikribitarans/${banpaidawarBikribitaranId}`)

  // add
  const postBanpaidawarBanpaidawarbikribitaranAddNew = (payload) =>
    api.post(`banpaidawarbikribitarans`, payload)

  //update
  const postBanpaidawarBanpaidawarbikribitaranUpdate = (
    payload,
    banpaidawarbikribitaranId
  ) => api.put(`banpaidawarbikribitarans/${banpaidawarbikribitaranId}`, payload)

  //delete
  const postBanpaidawarBanpaidawarbikribitaranDelete = (
    banpaidawarbikribitaranId
  ) => api.delete(`banpaidawarbikribitarans/${banpaidawarbikribitaranId}`)

  //rojgarsrijana
  const getRojgarSrijanaList = (payload) =>
    api.post('rojgarsrijanaList', payload)

  const getRojgarSrijana = (rojgarsrijanaId) =>
    api.get(`rojgarsrijana/${rojgarsrijanaId}`)

  //add
  const postRojgarSrijanaAddNew = (payload) =>
    api.post('rojgarsrijana', payload)
  //update
  const postRojgarSrijanaUpdate = (payload, rojgarsrijanaId) =>
    api.put(`rojgarsrijana/${rojgarsrijanaId}`, payload)

  const postRojgarSrijanaDelete = (rojgarsrijanaId) =>
    api.delete(`rojgarsrijana/${rojgarsrijanaId}`)

  //-------------------------------uddham bibaran
  const getUddhamList = (payload) => api.post('uddhamList', payload)

  const getUddham = (uddhamId) => api.get(`uddham/${uddhamId}`)

  //add
  const postUddhamAddNew = (payload) => api.post('uddham', payload)
  //update
  const postUddhamUpdate = (payload, uddhamId) =>
    api.put(`uddham/${uddhamId}`, payload)

  const postUddhamDelete = (uddhamId) => api.delete(`uddham/${uddhamId}`)

  //-------Consumer Group Details
  const getConsumergroupDetailsList = (payload) =>
    api.post('ConsumerGroupDetailsList', payload)

  const getConsumergroupDetails = (consumergroupDetailsId) =>
    api.get(`ConsumerGroupDetails/${consumergroupDetailsId}`)

  const postConsumergroupDetailsAddNew = (payload) =>
    api.post(`ConsumerGroupDetails`, payload)

  const postConsumergroupDetailsUpdate = (payload, consumergroupdetailsId) =>
    api.put(`ConsumerGroupDetails/${consumergroupdetailsId}`, payload)

  const postConsumergroupDetailsDelete = (consumergroupdetailsId) =>
    api.delete(`ConsumerGroupDetails/${consumergroupdetailsId}`)

  //------karyabibaran
  const getSamajikkaryabibaranList = (payload) =>
    api.post('samajikkaryaBibaranList', payload)
  const getSamajikkaryabibaran = (samajikkaryabibaranId) =>
    api.get(`samajikkaryaBibaran/${samajikkaryabibaranId}`)

  //Add
  const postKaryabibaranSamajikkaryabibaranAddNew = (payload) =>
    api.post(`samajikkaryaBibaran`, payload)

  //update
  const postKaryabibaranSamajikkaryabibaranUpdate = (
    payload,
    samajikkaryabibaranId
  ) => api.put(`samajikkaryaBibaran/${samajikkaryabibaranId}`, payload)

  //delete
  const postKaryabibaranSamajikkaryabibaranDelete = (samajikkaryabibaranId) =>
    api.delete(`samajikkaryaBibaran/${samajikkaryabibaranId}`)

  // rastriya banbibaran
  const getRastriyabanBibaranList = (payload) =>
    api.post('rastriyabanBibaranList', payload)

  const getRastriyabanBibaran = (rastriyabanbibaranId) =>
    api.get(`rastriyabanBibaran/${rastriyabanbibaranId}`)

  const postRastriyabanBibaranAddNew = (payload) =>
    api.post(`rastriyabanBibaran`, payload)

  const postRastriyabanBibaranUpdate = (payload, rastriyabanbibaranId) =>
    api.put(`rastriyabanBibaran/${rastriyabanbibaranId}`, payload)

  const postRastriyabanBibaranDelete = (rastriyabanbibaranId) =>
    api.delete(`rastriyabanBibaran/${rastriyabanbibaranId}`)

  // sajhedariban bibaran
  const getSajhedaribanBibaranList = (payload) =>
    api.post('sajhedaribanBibaranList', payload)

  const getSajhedaribanBibaran = (sajhedaribanBibaranId) =>
    api.get(`rastriyabanBibaran/${sajhedaribanBibaranId}`)

  const postBankaprakarSajhedaribanbibaranAddNew = (payload) =>
    api.post('sajhedaribanBibaran', payload)

  const postBankaprakarSajhedaribanbibaranUpdate = (
    payload,
    sajhedaribanbibaranId
  ) => api.put(`sajhedaribanBibaran/${sajhedaribanbibaranId}`, payload)

  const postBankaprakarSajhedaribanbibaranDelete = (sajhedaribanbibaranId) =>
    api.delete(`sajhedaribanBibaran/${sajhedaribanbibaranId}`)

  // banbikas karyabibaran
  const getBanbikasKaryaBibaranList = (payload) =>
    api.post('banbikasKaryabibaranList', payload)

  const getBanbikasKaryabibaran = (banbikasKaryabibaranId) =>
    api.get(`banbikasKaryabibaran/${banbikasKaryabibaranId}`)

  const postBanbikasKaryabibaranAddNew = (payload) =>
    api.post('banbikasKaryabibaran', payload)

  const postBanbikasKaryabibaranUpdate = (payload, banbikasKaryabibaranId) =>
    api.put(`banbikasKaryabibaran/${banbikasKaryabibaranId}`, payload)

  const postBanbikasKaryabibaranDelete = (banbikasKaryabibaranId) =>
    api.delete(`banbikasKaryabibaran/${banbikasKaryabibaranId}`)

  // bipatbibaran

  const getPahirobibaranList = (payload) =>
    api.post('pahiroBibaranList', payload)

  const getPahirobibaran = (pahirobibaranId) =>
    api.get(`pahiroBibaran/${pahirobibaranId}`)

  const postPahirobibaranAddNew = (payload) =>
    api.post('pahiroBibaran', payload)

  const postPahirobibaranUpdate = (payload, pahirobibaranId) =>
    api.put(`pahiroBibaran/${pahirobibaranId}`, payload)

  const postPahirobibaranDelete = (pahirobibaranId) =>
    api.delete(`pahiroBibaran/${pahirobibaranId}`)

  const getBadhibibaranList = (payload) => api.post('badhiBibaranList', payload)

  const getBadhibibaran = (badhibibaranId) =>
    api.get(`badhiBibaran/${badhibibaranId}`)

  const postBadhibibaranAddNew = (payload) => api.post('badhiBibaran', payload)

  const postBadhibibaranUpdate = (payload, badhibibaranId) =>
    api.put(`badhiBibaran/${badhibibaranId}`, payload)

  const postBadhibibaranDelete = (badhibibaranId) =>
    api.delete(`badhiBibaran/${badhibibaranId}`)

  // samrakshyan bibaran
  const getSamrakshyanPokhariNirmanList = (payload) =>
    api.post('samrakshyanpokhariNirmanList', payload)

  const getSamrakshyanPokhariNirman = (samrakshyanpokhariNirmanId) =>
    api.get(`samrakshyanpokhariNirman/${samrakshyanpokhariNirmanId}`)

  const postSamrakshyanPokhariNirmanAddNew = (payload) =>
    api.post('samrakshyanpokhariNirman', payload)

  const postSamrakshyanPokhariNirmanUpdate = (
    payload,
    samrakshyanpokhariNirmanId
  ) =>
    api.put(`samrakshyanpokhariNirman/${samrakshyanpokhariNirmanId}`, payload)

  const postSamrakshyanPokhariNirmanDelete = (samrakshyanpokhariNirmanId) =>
    api.delete(`samrakshyanpokhariNirman/${samrakshyanpokhariNirmanId}`)

  const getJaladharSamrakshyanList = (payload) =>
    api.post('jaladharSamrakshyanList', payload)

  const getJaladharSamrakshyan = (jaladharsamrakshyanId) =>
    api.get(`jaladharSamrakshyan/${jaladharsamrakshyanId}`)

  const postJaldharSamrakshyanAddNew = (payload) =>
    api.post('jaladharSamrakshyan', payload)

  const postJaladharSamrakshyanUpdate = (payload, jaladharsamrakshyanId) =>
    api.put(`jaladharSamrakshyan/${jaladharsamrakshyanId}`, payload)

  const postJaladharSamrakshyanDelete = (jaladharsamrakshyanId) =>
    api.delete(`jaladharSamrakshyan/${jaladharsamrakshyanId}`)

  const getNadikinarSamrakshyanList = (payload) =>
    api.post('nadikinarSamrakshyanList', payload)

  const getNadikinarSamrakshyan = (nadikinarSamrakshyanId) =>
    api.get(`nadikinarSamrakshyan/${nadikinarSamrakshyanId}`)

  const postNadikinarSamrakshyanAddNew = (payload) =>
    api.post('nadikinarSamrakshyan', payload)

  const postNadikinarSamrakshyanUpdate = (payload, nadikinarSamrakshyanId) =>
    api.put(`nadikinarSamrakshyan/${nadikinarSamrakshyanId}`, payload)

  const postNadikinarSamrakshyanDelete = (nadikinarSamrakshyanId) =>
    api.delete(`nadikinarSamrakshyan/${nadikinarSamrakshyanId}`)

  const getPanimuhanSamrakshyanList = (payload) =>
    api.post('panimuhanSamrakshyanList', payload)

  const getPanimuhanSamrakshyan = (panimuhanSamrakshyanId) =>
    api.get(`panimuhanSamrakshyan/${panimuhanSamrakshyanId}`)

  const postPanimuhanSamrakshyanAddNew = (payload) =>
    api.post('panimuhanSamrakshyan', payload)

  const postPanimuhanSamrakshyanUpdate = (payload, panimuhanSamrakshyanId) =>
    api.put(`panimuhanSamrakshyan/${panimuhanSamrakshyanId}`, payload)

  const postPanimuhanSamrakshyanDelete = (panimuhanSamrakshyanId) =>
    api.delete(`panimuhanSamrakshyan/${panimuhanSamrakshyanId}`)

  //...................................................Report

  const postNabikaranBibaran = (payload) =>
    api.post('nabikaranBibaran', payload)

  const postBanpaidawarBikriSamuhaBhitra = (payload) =>
    api.post('banpaidawarbikri_samuha', payload)

  const postBanxetraAtikramanNiyantran = (payload) =>
    api.post('banxetra_atikraman', payload)

  const postBanyajantuxetiRahat = (payload) =>
    api.post('banyajantu_xeti_rahat', payload)

  const postBanyajantuUddar = (payload) => api.post('banyajantu_uddar', payload)

  const postBandadeloXeti = (payload) =>
    api.post('bandadelo_xetibibaran', payload)

  const postBanxetraAnyaprayojan = (payload) =>
    api.post('banxetra_anyaprayojan', payload)

  const postMuddaAnusandhandayari = (payload) =>
    api.post('mudda_anusandhan_dayari', payload)

  const postGairakasthaBanpaidawarBikribitaran = (payload) =>
    api.post('gairakastha_banpaidawar', payload)

  const postKathdauraBikribitaran = (payload) =>
    api.post('kathdaura_bikribitaran', payload)

  const postBiruwautpadanKharid = (payload) =>
    api.post('biruwautpadan_kharid', payload)

  const postUddhamBibaran = (payload) => api.post('banpaidawar_uddham', payload)

  const postSrijanBhayekoRojgari = (payload) =>
    api.post('rojgari_srijana', payload)

  const postUpavoktaSusasan = (payload) => api.post('upavokta_susasan', payload)

  const postBanHastantaranBibaran = (payload) =>
    api.post('banhastantaran_bibaran', payload)

  // karyakramsirshak
  const getKaryakramSirshakDropdownList = (payload) =>
    api.post('karyakramsirshakDropdownList', payload)

  const getKaryakramsirshakList = (payload) =>
    api.post('karyakramsirshakList', payload)

  const getKaryakramsirshak = (karyakramSirshakId) =>
    api.get(`karyakramsirshak/${karyakramSirshakId}`)

  //Add
  const postBudgetbibaranKaryakramsirshakAddNew = (payload) =>
    api.post(`karyakramsirshak`, payload)
  //update
  const postBudgetbibaranKaryakramsirshakUpdate = (
    payload,
    karyakramSirshakId
  ) => api.put(`karyakramsirshak/${karyakramSirshakId}`, payload)
  //Delete
  const postBudgetbibaranKaryakramsirshakDelete = (karyakramSirshakId) =>
    api.delete(`karyakramsirshak/${karyakramSirshakId}`)

  //budgetsirshak
  const getBudgetSirshakDropdownList = (payload) =>
    api.post('budgetsirshakDropdownList', payload)

  const getBudgetsirshakList = (payload) =>
    api.post('budgetsirshakList', payload)

  const getBudgetsirshak = (budgetsirshakId) =>
    api.get(`budgetsirshak/${budgetsirshakId}`)

  //Add
  const postBudgetbibaranBudgetsirshakAddNew = (payload) =>
    api.post(`budgetsirshak`, payload)
  //update
  const postBudgetbibaranBudgetsirshakUpdate = (payload, budgetsirshakId) =>
    api.put(`budgetsirshak/${budgetsirshakId}`, payload)
  //Delete
  const postBudgetbibaranBudgetsirshakDelete = (budgetsirshakId) =>
    api.delete(`budgetsirshak/${budgetsirshakId}`)

  // budgetentry
  const getBudgetentryList = (payload) =>
    api.post('budgetkarmacharidetailList', payload)

  const getBudgetentry = (budgetkarmacharidetailId) =>
    api.get(`budgetkarmacharidetail/${budgetkarmacharidetailId}`)

  //Add
  const postBudgetbibaranBudgetentryAddNew = (payload) =>
    api.post(`budgetkarmacharidetail`, payload)
  //update
  const postBudgetbibaranBudgetentryUpdate = (
    payload,
    budgetkarmacharidetailId
  ) => api.put(`budgetkarmacharidetail/${budgetkarmacharidetailId}`, payload)
  //Delete
  const postBudgetbibaranBudgetentryDelete = (budgetkarmacharidetailId) =>
    api.delete(`budgetkarmacharidetail/${budgetkarmacharidetailId}`)
  //budgetbarsik
  const getBudgetbarsikList = (payload) => api.post('budgetbarsikList', payload)

  const getBudgetbarsik = (budgetbarsikId) =>
    api.get(`budgetbarsik/${budgetbarsikId}`)

  //Add
  const postBudgetbibaranBudgetbarsikAddNew = (payload) =>
    api.post(`budgetbarsik`, payload)
  //update
  const postBudgetbibaranBudgetbarsikUpdate = (payload, budgetbarsikId) =>
    api.put(`budgetbarsik/${budgetbarsikId}`, payload)
  //Delete
  const postBudgetbibaranBudgetbarsikDelete = (budgetbarsikId) =>
    api.delete(`budgetbarsik/${budgetbarsikId}`)

  const getBudgetbarsiklakshaydata = (payload) =>
    api.post('budgetBarsikLakshay', payload)

  const getBudgetchaumasiklakshaydata = (payload) =>
    api.post('budgetChaumasikLakshay', payload)

  return {
    loginByUsername,
    getBantypesList,
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
    getCommercialkabuliyatibanBibaranList,
    getCommercialkabuliyatibanBibaran,
    postBankaprakarCommercialkabuliyatibanAddNew,
    postBankaprakarCommercialkabuliyatibanUpdate,
    postBankaprakarCommercialkabuliyatibanDelete,
    getNabikaranKaryayojanaList,
    getNabikaranKaryayojana,
    postBankaprakarNabikarankaryayojanaAddNew,
    postBankaprakarNabikarankaryayojanaUpdate,
    postBankaprakarNabikarankaryayojanaDelete,
    getRastriyabanBibaranList,
    getRastriyabanBibaran,
    postRastriyabanBibaranAddNew,
    postRastriyabanBibaranUpdate,
    postRastriyabanBibaranDelete,
    getChaklabanBibaranList,
    getChaklabanBibaran,
    postBankaprakarChaklabanAddNew,
    postBankaprakarChaklabanUpdate,
    postBankaprakarChaklabanDelete,
    getSajhedaribanBibaranList,
    getSajhedaribanBibaran,
    postBankaprakarSajhedaribanbibaranAddNew,
    postBankaprakarSajhedaribanbibaranUpdate,
    postBankaprakarSajhedaribanbibaranDelete,

    //dwandabebasthapan
    getTotalBanyajantuUddarList,
    getBanyajantuUddarList,
    getBanyajantuUddar,
    postDwandabebasthapanBanyajantuuddarAddNew,
    postDwandabebasthapanBanyajantuuddarUpdate,
    postDwandabebasthapanBanyajantuuddarDelete,
    getTotalBanyajantuXetiList,
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
    getBrixyaropanList,
    getBrixyaropan,
    postBiruwautpadanBrixyaropanAddNew,
    postBiruwautpadanBrixyaropanUpdate,
    postBiruwautpadanBrixyaropanDelete,
    getJadibutiList,
    getJadibuti,
    postBiruwautpadanJadibutiAddNew,
    postBiruwautpadanJadibutiUpdate,
    postBiruwautpadanJadibutiDelete,

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
    //anyasampati
    getAnyaSampatiList,
    getAnyaSampati,
    postSampatibibaranAnyaSampatiAddNew,
    postSampatibibaranAnyaSampatiUpdate,
    postSampatibibaranAnyaSampatiDelete,

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
    getBanpaidawarbikribitaranList,
    getBanpaidawarbikribitaran,
    postBanpaidawarBanpaidawarbikribitaranAddNew,
    postBanpaidawarBanpaidawarbikribitaranUpdate,
    postBanpaidawarBanpaidawarbikribitaranDelete,

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

    //bachat bibaran
    getBachatbibaranList,
    getBachatbibaran,
    postBanbibaranBachatbibaranAddNew,
    postBanbibaranBachatbibaranUpdate,
    postBanbibaranBachatbibaranDelete,

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

    // //--municipalities
    getMunicipalitiesList,
    getMunicipalities,
    postMunicipalitiesAddNew,
    postMunicipalitiesUpdate,
    postMunicipalitiesDelete,

    // //-----Provinces
    getProvincesList,
    getProvinces,
    postProvincesAddNew,
    postProvincesUpdate,
    postProvincesDelete,

    //----Districts
    getDistrictsList,
    getDistricts,
    postDistrictsAddNew,
    postDistrictsUpdate,
    postDistrictsDelete,

    //-----Users
    getUsersList,
    getUsers,
    postUsersAddNew,
    postUsersUpdate,
    postUsersPasswordUpdate, //change password
    postUsersDelete,

    //-----Offices
    getOfficesList,
    getOffices,
    getOfficesDropdownList, //O-DDL
    postOfficesAddNew,
    postOfficesUpdate,
    postOfficesDelete,

    //ConsumerGroupDetails
    getConsumergroupDetailsList,
    getConsumergroupDetails,
    postConsumergroupDetailsAddNew,
    postConsumergroupDetailsUpdate,
    postConsumergroupDetailsDelete,

    //-----Departments
    getDepartmentsList,
    getDepartments,
    postDepartmentsAddNew,
    postDepartmentsUpdate,
    postDepartmentsDelete,

    //--------Banbibaran
    getBaramaditchijbastuList,
    getBaramaditchijbastu,
    postBaramaditchijbastuAddnew,
    postBaramaditchijbastuUpdate,
    postBaramaditChijBastuDelete,
    getBanxetraanyaprayojanList,
    getBanxetraanyaprayojan,
    postBanbibaranBanxetraanyaprayojanAddNew,
    postBanbibaranBanxetraanyaprayojanUpdate,
    postBanbibaranBanxetraanyaprayojanDelete,
    getUddhyambibaranList,
    getUddhyambibaran,
    postBanbibaranUddhyambibaranAddNew,
    postBanbibaranUddhyambibaranUpdate,
    postBanbibaranUddhyambibaranDelete,

    //------karyabibaran
    getSamajikkaryabibaranList,
    getSamajikkaryabibaran,
    postKaryabibaranSamajikkaryabibaranAddNew,
    postKaryabibaranSamajikkaryabibaranUpdate,
    postKaryabibaranSamajikkaryabibaranDelete,
    getBanbikasKaryaBibaranList,
    getBanbikasKaryabibaran,
    postBanbikasKaryabibaranAddNew,
    postBanbikasKaryabibaranUpdate,
    postBanbikasKaryabibaranDelete,

    //------- rojgarsrijana
    getRojgarSrijanaList,
    getRojgarSrijana,
    postRojgarSrijanaAddNew,
    postRojgarSrijanaUpdate,
    postRojgarSrijanaDelete,

    //------- uddham
    getUddhamList,
    getUddham,
    postUddhamAddNew,
    postUddhamUpdate,
    postUddhamDelete,

    //----------bipatbibaran
    getPahirobibaranList,
    getPahirobibaran,
    postPahirobibaranAddNew,
    postPahirobibaranUpdate,
    postPahirobibaranDelete,
    getBadhibibaranList,
    getBadhibibaran,
    postBadhibibaranAddNew,
    postBadhibibaranUpdate,
    postBadhibibaranDelete,

    //samraxan bibaran
    getSamrakshyanPokhariNirmanList,
    getSamrakshyanPokhariNirman,
    postSamrakshyanPokhariNirmanAddNew,
    postSamrakshyanPokhariNirmanUpdate,
    postSamrakshyanPokhariNirmanDelete,
    getJaladharSamrakshyanList,
    getJaladharSamrakshyan,
    postJaldharSamrakshyanAddNew,
    postJaladharSamrakshyanUpdate,
    postJaladharSamrakshyanDelete,
    getNadikinarSamrakshyanList,
    getNadikinarSamrakshyan,
    postNadikinarSamrakshyanAddNew,
    postNadikinarSamrakshyanUpdate,
    postNadikinarSamrakshyanDelete,
    getPanimuhanSamrakshyanList,
    getPanimuhanSamrakshyan,
    postPanimuhanSamrakshyanAddNew,
    postPanimuhanSamrakshyanUpdate,
    postPanimuhanSamrakshyanDelete,

    //Karyakramsirshak
    getKaryakramSirshakDropdownList,
    getKaryakramsirshakList,
    getKaryakramsirshak,
    getBudgetSirshakDropdownList,
    postBudgetbibaranKaryakramsirshakAddNew,
    postBudgetbibaranKaryakramsirshakUpdate,
    postBudgetbibaranKaryakramsirshakDelete,

    //...............budgetsirshak

    getBudgetsirshakList,
    getBudgetsirshak,
    postBudgetbibaranBudgetsirshakAddNew,
    postBudgetbibaranBudgetsirshakUpdate,
    postBudgetbibaranBudgetsirshakDelete,
    getBudgetbarsiklakshaydata,
    getBudgetchaumasiklakshaydata,

    //...............budgetbarsik

    getBudgetbarsikList,
    getBudgetbarsik,
    postBudgetbibaranBudgetbarsikAddNew,
    postBudgetbibaranBudgetbarsikUpdate,
    postBudgetbibaranBudgetbarsikDelete,

    //budgetentry
    getBudgetentryList,
    getBudgetentry,
    postBudgetbibaranBudgetentryAddNew,
    postBudgetbibaranBudgetentryUpdate,
    postBudgetbibaranBudgetentryDelete,

    //............................report
    postNabikaranBibaran,
    postBanpaidawarBikriSamuhaBhitra,
    postBanxetraAtikramanNiyantran,
    postBanyajantuxetiRahat,
    postBanyajantuUddar,
    postBandadeloXeti,
    postBanxetraAnyaprayojan,
    postMuddaAnusandhandayari,
    postGairakasthaBanpaidawarBikribitaran,
    postKathdauraBikribitaran,
    postBiruwautpadanKharid,
    postUddhamBibaran,
    postSrijanBhayekoRojgari,
    postUpavoktaSusasan,
    postBanHastantaranBibaran,
  }
}

const exportedObject = { create }

export default exportedObject
