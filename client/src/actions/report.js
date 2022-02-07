import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  //....................................nabikaran_bibaran

  fetchnabikaranbibaranRequest: ["payload"],
  fetchnabikaranbibaranSuccess: ["response"],
  fetchnabikaranbibaranFailure: null,

  //.....................................banpaidawar bikri samuha bhitra

  fetchsamuhabhitrabanpaidawarbikribibaranRequest: ["payload"],
  fetchsamuhabhitrabanpaidawarbikribibaranSuccess: ["response"],
  fetchsamuhabhitrabanpaidawarbikribibaranFailure: null,

  //......................................banxetra atikraman niyantran Bibaran

  fetchbanxetraatikramanniyantranRequest: ["payload"],
  fetchbanxetraatikramanniyantranSuccess: ["response"],
  fetchbanxetraatikramanniyantranFailure: null,

  //......................................banyajantu bata bhayeko xeti ra rahat sambhandhi Bibaran

  fetchbanyajantuxetirahatRequest: ["payload"],
  fetchbanyajantuxetirahatSuccess: ["response"],
  fetchbanyajantuxetirahatFailure: null,

  //......................................banyajantu Uddar sambhandhi Bibaran

  fetchbanyajantuuddarbibaranRequest: ["payload"],
  fetchbanyajantuuddarbibaranSuccess: ["response"],
  fetchbanyajantuuddarbibaranFailure: null,

  //......................................bandadelo bata bhayeko xeti sambhandhi Bibaran

  fetchbandadeloxetibibaranRequest: ["payload"],
  fetchbandadeloxetibibaranSuccess: ["response"],
  fetchbandadeloxetibibaranFailure: null,

  //......................................bandadelo bata bhayeko xeti sambhandhi Bibaran

  fetchbanxetraanyaprayojanbibaranRequest: ["payload"],
  fetchbanxetraanyaprayojanbibaranSuccess: ["response"],
  fetchbanxetraanyaprayojanbibaranFailure: null,

  //......................................Mudda Anusandhan Dayari sambhandhi Bibaran

  fetchmuddaanusandhandayaribibaranRequest: ["payload"],
  fetchmuddaanusandhandayaribibaranSuccess: ["response"],
  fetchmuddaanusandhandayaribibaranFailure: null,

  //......................................Gaira Kastha Banpaidawar Bikri bitaran sambhandhi Bibaran

  fetchgairakasthabanpaidawarbikribitaranRequest: ["payload"],
  fetchgairakasthabanpaidawarbikribitaranSuccess: ["response"],
  fetchgairakasthabanpaidawarbikribitaranFailure: null,

  //......................................Kath daura Bikri bitaran sambhandhi Bibaran

  fetchkathdaurabikribitaranRequest: ["payload"],
  fetchkathdaurabikribitaranSuccess: ["response"],
  fetchkathdaurabikribitaranFailure: null,

  //......................................Kath daura Bikri bitaran sambhandhi Bibaran

  fetchbiruwautpadankharidRequest: ["payload"],
  fetchbiruwautpadankharidSuccess: ["response"],
  fetchbiruwautpadankharidFailure: null,

  //......................................Ban paidawarma aadharit Uddham  sambhandhi Bibaran

  fetchuddhambibaranRequest: ["payload"],
  fetchuddhambibaranSuccess: ["response"],
  fetchuddhambibaranFailure: null,

  //......................................Banle srijana gareko rojgari sambhandhi Bibaran

  fetchsrijanabhayekorojgariRequest: ["payload"],
  fetchsrijanabhayekorojgariSuccess: ["response"],
  fetchsrijanabhayekorojgariFailure: null,

  //......................................Upavokta Samuhako Susasan ko bibaran

  fetchupavoktasusasanRequest: ["payload"],
  fetchupavoktasusasanSuccess: ["response"],
  fetchupavoktasusasanFailure: null,

  //......................................Hastantaran Mitiko aadharma Banko bibaran

  fetchbanhastantaranbibaranRequest: ["payload"],
  fetchbanhastantaranbibaranSuccess: ["response"],
  fetchbanhastantaranbibaranFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const ReportTypes = Types;
export default Creators;
