import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
    
  //....................................nabikaran_bibaran

  fetchnabikaranbibaranRequest: ["payload"],
  fetchnabikaranSuccess: ["response"],
  fetchnabikaranFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const ReportTypes = Types;
export default Creators;
