import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, equals, prepend } from "ramda";
import { ReportTypes } from "../actions/report";

const initialState = Immutable({
  status: "",
});

//...................................Nabikaran Bibaran
const fetchnabikaranbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchnabikaranbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    nabikaran_yojana: action.response,
  });
};
const fetchnabikaranbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................Samuha bhitra Banpaidawar bikri
const fetchsamuhabhitrabanpaidawarbikribibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchsamuhabhitrabanpaidawarbikribibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banpaidawar_bikri: action.response,
  });
};
const fetchsamuhabhitrabanpaidawarbikribibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banxetra atikraman niyantran
const fetchbanxetraatikramanniyantranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanxetraatikramanniyantranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banxetra_atikraman: action.response,
  });
};
const fetchbanxetraatikramanniyantranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banyajantu xeti rahat
const fetchbanyajantuxetirahatRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanyajantuxetirahatSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banyajantu_xeti_rahat: action.response,
  });
};
const fetchbanyajantuxetirahatFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banyajantu uddar sambhandhi bibaran
const fetchbanyajantuuddarbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanyajantuuddarbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banyajantu_uddar: action.response,
  });
};
const fetchbanyajantuuddarbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banyajantu uddar sambhandhi bibaran
const fetchbandadeloxetibibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbandadeloxetibibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    bandadelo_xeti: action.response,
  });
};
const fetchbandadeloxetibibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................Banxetrako Jagga Anya prayojan ko lagi bibaran
const fetchbanxetraanyaprayojanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanxetraanyaprayojanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banxetra_anyaprayojan: action.response,
  });
};
const fetchbanxetraanyaprayojanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................Mudda Anusandhan Dayari Sambhandhi bibaran
const fetchmuddaanusandhandayaribibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchmuddaanusandhandayaribibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    mudda_dayari: action.response,
  });
};
const fetchmuddaanusandhandayaribibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//......................................Gaira Kastha Banpaidawar Bikri bitaran sambhandhi Bibaran
const fetchgairakasthabanpaidawarbikribitaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchgairakasthabanpaidawarbikribitaranSuccess = (state, action) => {
  const gair = action.response.gairkastha_banpaidawar;
  const data = gair.map((item, index) => {
    if (equals(item.name, "4")) {
      return {
        ...item,
        name: "जडिबुटि",
        total: item.sarkarbata + item.samudayik_banbata + item.niji,
      };
    } else if (equals(item.name, "5")) {
      return {
        ...item,
        name: "खोटो",
        total: item.sarkarbata + item.samudayik_banbata + item.niji,
      };
    } else {
      return {
        ...item,
        name: "अन्य",
        total: item.sarkarbata + item.samudayik_banbata + item.niji,
      };
    }
  });
  return state.merge({
    ...state,
    status: "done",
    gairkastha_banpaidawar: data,
  });
};
const fetchgairakasthabanpaidawarbikribitaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//......................................Kathdaura Bikri bitaran sambhandhi Bibaran
const fetchkathdaurabikribitaranbikribitaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchkathdaurabikribitaranbikribitaranSuccess = (state, action) => {
  const kathdaura = {
    baiganik_ban: {},
    nonbaiganik_ban: {},
    dharmikban: {},
    chaklaban: {},
    kabuliyatiban: {},
    commercialkabuliyatiban: {},
    sajhedariban: {},
    nijiban: {},
    rastriyaban: {},
  };
  let totalsamudayikban = {
    samuhabhitra_kath: 0,
    samuhabhitra_daura: 0,
    samuha_saal: 0,
    samuha_khayar: 0,
    samuha_daura: 0,
    samuha_anya: 0,
    aapurti_kath: 0,
    aapurti_daura: 0,
  };
  let total = {
    samuhabhitra_kath: 0,
    samuhabhitra_daura: 0,
    samuha_saal: 0,
    samuha_khayar: 0,
    samuha_daura: 0,
    samuha_anya: 0,
    aapurti_kath: 0,
    aapurti_daura: 0,
  };
  action.response.kathdaura_bikri.map((item, index) => {
    total = {
      samuhabhitra_kath: total.samuhabhitra_kath + item.samuhabhitra_kath,
      samuhabhitra_daura: total.samuhabhitra_daura + item.samuhabhitra_daura,
      samuha_saal: total.samuha_saal + item.samuha_saal,
      samuha_khayar: total.samuha_khayar + item.samuha_khayar,
      samuha_daura: total.samuha_daura + item.samuha_daura,
      samuha_anya: total.samuha_anya + item.samuha_anya,
      aapurti_kath: total.aapurti_kath + item.aapurti_kaath,
      aapurti_daura: total.aapurti_daura + item.aapurti_daura,
    };
    if (equals(item.banko_kisim, 1)) {
      totalsamudayikban = {
        samuhabhitra_kath:
          totalsamudayikban.samuhabhitra_kath + item.samuhabhitra_kath,
        samuhabhitra_daura:
          totalsamudayikban.samuhabhitra_daura + item.samuhabhitra_daura,
        samuha_saal: totalsamudayikban.samuha_saal + item.samuha_saal,
        samuha_khayar: totalsamudayikban.samuha_khayar + item.samuha_khayar,
        samuha_daura: totalsamudayikban.samuha_daura + item.samuha_daura,
        samuha_anya: totalsamudayikban.samuha_anya + item.samuha_anya,
        aapurti_kath: totalsamudayikban.aapurti_kath + item.aapurti_kaath,
        aapurti_daura: totalsamudayikban.aapurti_daura + item.aapurti_daura,
      };

      kathdaura.baiganik_ban = item;
    } else if (equals(item.banko_kisim, 2)) {
      totalsamudayikban = {
        samuhabhitra_kath:
          totalsamudayikban.samuhabhitra_kath + item.samuhabhitra_kath,
        samuhabhitra_daura:
          totalsamudayikban.samuhabhitra_daura + item.samuhabhitra_daura,
        samuha_saal: totalsamudayikban.samuha_saal + item.samuha_saal,
        samuha_khayar: totalsamudayikban.samuha_khayar + item.samuha_khayar,
        samuha_daura: totalsamudayikban.samuha_daura + item.samuha_daura,
        samuha_anya: totalsamudayikban.samuha_anya + item.samuha_anya,
        aapurti_kath: totalsamudayikban.aapurti_kath + item.aapurti_kaath,
        aapurti_daura: totalsamudayikban.aapurti_daura + item.aapurti_daura,
      };

      kathdaura.nonbaiganik_ban = item;
    } else if (equals(item.banko_kisim, 3)) {
      kathdaura.kabuliyatiban = item;
    } else if (equals(item.banko_kisim, 4)) {
      kathdaura.dharmikban = item;
    } else if (equals(item.banko_kisim, 5)) {
      kathdaura.chaklaban = item;
    } else if (equals(item.banko_kisim, 6)) {
      kathdaura.sajhedariban = item;
    } else if (equals(item.banko_kisim, 7)) {
      kathdaura.commercialkabuliyatiban = item;
    } else if (equals(item.banko_kisim, 8)) {
      kathdaura.nijiban = item;
    } else {
      kathdaura.rastriyaban = item;
    }
  });
  return state.merge({
    ...state,
    status: "done",
    data: {
      kathdaura_bikri: {
        kathdaura,
        total,
        totalsamudayikban,
      },
    },
  });
};
const fetchkathdaurabikribitaranbikribitaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//......................................Biruwa utpadan kharid sambhandhi Bibaran
const fetchbiruwautpadankharidRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbiruwautpadankharidSuccess = (state, action) => {
  const utpadan = {
    division_ban: {},
    samuha: {},
    niji: {},
  };
  let kharid = {};
  const brixyaropan = action.response.biruwautpadan_kharid.brixyaropan;
  action.response.biruwautpadan_kharid.utpadan.map((item, index) => {
    if (equals(item.utpadan_medium, 1)) {
      utpadan.division_ban = item;
    } else if (equals(item.utpadan_medium, 2)) {
      utpadan.samuha = item;
    } else if (equals(item.utpadan_medium, 3)) {
      utpadan.niji = item;
    } else {
      kharid = item;
    }
  });

  return state.merge({
    ...state,
    status: "done",

    biruwautpadan_kharid: {
      utpadan: utpadan,
      kharid: kharid,
      ropan: brixyaropan,
    },
  });
};
const fetchbiruwautpadankharidFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//......................................Ban paidawarma aadharit Uddham  sambhandhi Bibaran
const fetchuddhambibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchuddhambibaranSuccess = (state, action) => {
  const uddham = {
    niji: {},
    samudayik: {},
    sahakari: {},
  };
  action.response.banpaidawar_uddham.map((item, index) => {
    if (equals(item.uddham_type, 1)) {
      uddham.niji = item;
    } else if (equals(item.uddham_type, 2)) {
      uddham.samudayik = item;
    } else {
      uddham.sahakari = item;
    }
  });
  return state.merge({
    ...state,
    status: "done",
    banpaidawar_uddham: { uddham },
  });
};
const fetchuddhambibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//......................................Banle srijana gareko rojgari sambhandhi Bibaran
const fetchsrijanabhayekorojgariRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchsrijanabhayekorojgariSuccess = (state, action) => {
  const rojgari = action.response.rojgari_srijana;
  const data = rojgari.map((item, index) => {
    if (equals(item.karya, 1)) {
      return {
        ...item,
        karya: "स्विकृत बार्षिक कार्यक्रम अनुसारको पुंजिगत खर्च गर्दा",
      };
    } else if (equals(item.karya, 2)) {
      return {
        ...item,
        karya: "बन सम्वर्धन गर्दा",
      };
    } else if (equals(item.karya, 3)) {
      return {
        ...item,
        karya: "बन संरक्षन गर्दा",
      };
    } else if (equals(item.karya, 4)) {
      return {
        ...item,
        karya: "बन पैदावार संकलन तथा घाटगद्दी",
      };
    } else {
      return {
        ...item,
        karya: "बन उद्ध्यम ",
      };
    }
  });
  console.log("data---------->", data);
  return state.merge({
    ...state,
    status: "done",
    rojgari_srijana: data,
  });
};
const fetchsrijanabhayekorojgariFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................Upavokta Samuhako Susasanko abastha
const fetchupavoktasusasanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchupavoktasusasanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    susasanko_abastha: action.response,
  });
};
const fetchupavoktasusasanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................Hastantaran Mitiko aadharma Banko bibaran
const fetchbanhastantaranbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanhastantaranbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    ban_bibaran: action.response,
  });
};
const fetchbanhastantaranbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const locationsRequest = (state, action) => {
  let locations = state.locations;

  locations = prepend(action.payload.route, locations);
  locations = dropLast(1, locations);
  return state.merge({ ...state, locations });
};

const clearRequest = (state, action) =>
  state.merge({ ...state, ...initialState });

export const reducer = createReducer(initialState, {
  [ReportTypes.FETCHNABIKARANBIBARAN_REQUEST]: fetchnabikaranbibaranRequest,
  [ReportTypes.FETCHNABIKARANBIBARAN_SUCCESS]: fetchnabikaranbibaranSuccess,
  [ReportTypes.FETCHNABIKARANBIBARAN_FAILURE]: fetchnabikaranbibaranFailure,

  [ReportTypes.FETCHSAMUHABHITRABANPAIDAWARBIKRIBIBARAN_REQUEST]: fetchsamuhabhitrabanpaidawarbikribibaranRequest,
  [ReportTypes.FETCHSAMUHABHITRABANPAIDAWARBIKRIBIBARAN_SUCCESS]: fetchsamuhabhitrabanpaidawarbikribibaranSuccess,
  [ReportTypes.FETCHSAMUHABHITRABANPAIDAWARBIKRIBIBARAN_FAILURE]: fetchsamuhabhitrabanpaidawarbikribibaranFailure,

  [ReportTypes.FETCHBANXETRAATIKRAMANNIYANTRAN_REQUEST]: fetchbanxetraatikramanniyantranRequest,
  [ReportTypes.FETCHBANXETRAATIKRAMANNIYANTRAN_SUCCESS]: fetchbanxetraatikramanniyantranSuccess,
  [ReportTypes.FETCHBANXETRAATIKRAMANNIYANTRAN_FAILURE]: fetchbanxetraatikramanniyantranFailure,

  [ReportTypes.FETCHBANYAJANTUXETIRAHAT_REQUEST]: fetchbanyajantuxetirahatRequest,
  [ReportTypes.FETCHBANYAJANTUXETIRAHAT_SUCCESS]: fetchbanyajantuxetirahatSuccess,
  [ReportTypes.FETCHBANYAJANTUXETIRAHAT_FAILURE]: fetchbanyajantuxetirahatFailure,

  [ReportTypes.FETCHBANYAJANTUUDDARBIBARAN_REQUEST]: fetchbanyajantuuddarbibaranRequest,
  [ReportTypes.FETCHBANYAJANTUUDDARBIBARAN_SUCCESS]: fetchbanyajantuuddarbibaranSuccess,
  [ReportTypes.FETCHBANYAJANTUUDDARBIBARAN_FAILURE]: fetchbanyajantuuddarbibaranFailure,

  [ReportTypes.FETCHBANDADELOXETIBIBARAN_REQUEST]: fetchbandadeloxetibibaranRequest,
  [ReportTypes.FETCHBANDADELOXETIBIBARAN_SUCCESS]: fetchbandadeloxetibibaranSuccess,
  [ReportTypes.FETCHBANDADELOXETIBIBARAN_FAILURE]: fetchbandadeloxetibibaranFailure,

  [ReportTypes.FETCHBANXETRAANYAPRAYOJANBIBARAN_REQUEST]: fetchbanxetraanyaprayojanbibaranRequest,
  [ReportTypes.FETCHBANXETRAANYAPRAYOJANBIBARAN_SUCCESS]: fetchbanxetraanyaprayojanbibaranSuccess,
  [ReportTypes.FETCHBANXETRAANYAPRAYOJANBIBARAN_FAILURE]: fetchbanxetraanyaprayojanbibaranFailure,

  [ReportTypes.FETCHMUDDAANUSANDHANDAYARIBIBARAN_REQUEST]: fetchmuddaanusandhandayaribibaranRequest,
  [ReportTypes.FETCHMUDDAANUSANDHANDAYARIBIBARAN_SUCCESS]: fetchmuddaanusandhandayaribibaranSuccess,
  [ReportTypes.FETCHMUDDAANUSANDHANDAYARIBIBARAN_FAILURE]: fetchmuddaanusandhandayaribibaranFailure,

  [ReportTypes.FETCHGAIRAKASTHABANPAIDAWARBIKRIBITARAN_REQUEST]: fetchgairakasthabanpaidawarbikribitaranRequest,
  [ReportTypes.FETCHGAIRAKASTHABANPAIDAWARBIKRIBITARAN_SUCCESS]: fetchgairakasthabanpaidawarbikribitaranSuccess,
  [ReportTypes.FETCHGAIRAKASTHABANPAIDAWARBIKRIBITARAN_FAILURE]: fetchgairakasthabanpaidawarbikribitaranFailure,

  [ReportTypes.FETCHKATHDAURABIKRIBITARAN_REQUEST]: fetchkathdaurabikribitaranbikribitaranRequest,
  [ReportTypes.FETCHKATHDAURABIKRIBITARAN_SUCCESS]: fetchkathdaurabikribitaranbikribitaranSuccess,
  [ReportTypes.FETCHKATHDAURABIKRIBITARAN_FAILURE]: fetchkathdaurabikribitaranbikribitaranFailure,

  [ReportTypes.FETCHBIRUWAUTPADANKHARID_REQUEST]: fetchbiruwautpadankharidRequest,
  [ReportTypes.FETCHBIRUWAUTPADANKHARID_SUCCESS]: fetchbiruwautpadankharidSuccess,
  [ReportTypes.FETCHBIRUWAUTPADANKHARID_FAILURE]: fetchbiruwautpadankharidFailure,

  [ReportTypes.FETCHUDDHAMBIBARAN_REQUEST]: fetchuddhambibaranRequest,
  [ReportTypes.FETCHUDDHAMBIBARAN_SUCCESS]: fetchuddhambibaranSuccess,
  [ReportTypes.FETCHUDDHAMBIBARAN_FAILURE]: fetchuddhambibaranFailure,

  [ReportTypes.FETCHUDDHAMBIBARAN_REQUEST]: fetchuddhambibaranRequest,
  [ReportTypes.FETCHUDDHAMBIBARAN_SUCCESS]: fetchuddhambibaranSuccess,
  [ReportTypes.FETCHUDDHAMBIBARAN_FAILURE]: fetchuddhambibaranFailure,

  [ReportTypes.FETCHSRIJANABHAYEKOROJGARI_REQUEST]: fetchsrijanabhayekorojgariRequest,
  [ReportTypes.FETCHSRIJANABHAYEKOROJGARI_SUCCESS]: fetchsrijanabhayekorojgariSuccess,
  [ReportTypes.FETCHSRIJANABHAYEKOROJGARI_FAILURE]: fetchsrijanabhayekorojgariFailure,

  [ReportTypes.FETCHUPAVOKTASUSASAN_REQUEST]: fetchupavoktasusasanRequest,
  [ReportTypes.FETCHUPAVOKTASUSASAN_SUCCESS]: fetchupavoktasusasanSuccess,
  [ReportTypes.FETCHUPAVOKTASUSASAN_FAILURE]: fetchupavoktasusasanFailure,

  [ReportTypes.FETCHBANHASTANTARANBIBARAN_REQUEST]: fetchbanhastantaranbibaranRequest,
  [ReportTypes.FETCHBANHASTANTARANBIBARAN_SUCCESS]: fetchbanhastantaranbibaranSuccess,
  [ReportTypes.FETCHBANHASTANTARANBIBARAN_FAILURE]: fetchbanhastantaranbibaranFailure,

  [ReportTypes.LOCATIONS_REQUEST]: locationsRequest,
  [ReportTypes.CLEAR_REQUEST]: clearRequest,
});
