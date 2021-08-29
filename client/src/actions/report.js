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

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const ReportTypes = Types;
export default Creators;
