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

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const ReportTypes = Types;
export default Creators;
