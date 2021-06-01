import { equals } from "ramda";

const AssetsURL = equals(process.env.NODE_ENV, "production")
  ? "https://www.forestmis.com/assets"
  : "https://www.forestmis.com/assets";

const SPECIALOPTIONS = {
  ALL: -1, // Select All
  NONE: -2, // Select None
  SELFASSIGNED: -3,
  LIST: -4, // List
};

export { AssetsURL, SPECIALOPTIONS };
