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

const samudayikbanHeadings = [
  "दर्ता नं",
  "सामुदायिक वन उपभोक्ता समितिको नाम",
  "क्षत्रफल(हे.)",
  "मुख्य प्रजाति",
  "वनको किसिम(प्राकृतिक्/वृक्षरोपण)",
  "हस्तान्तरण मिति",
  "वनको मौज्दात",
  "वार्षिक निकासी परिमाण (घ. मी)काठ",
  "वार्षिक निकासी परिमाण (घ. मी)दाउरा",
  "सिर्जना गर्ने",
  "परिमार्जन गर्ने",
];
const dharmikbanHeadings = [
  "दर्ता नं",
  "धर्मिक वनको नाम",
  "व्यवस्थापन गर्ने धार्मिक निकाय / समुदायको नाम",
  "क्षत्रफल(हे.)",
  "मुख्य प्रजाति",
  "वनको किसिम(प्राकृतिक्/वृक्षरोपण)",
  "हस्तान्तरण मिति",
  "वनको मौज्दात(घ.मी.)",
  "नविकरण गर्नुपर्ने आर्थिक वर्ष",
  "सिर्जना गर्ने",
  "परिमार्जन गर्ने",
];
export { AssetsURL, SPECIALOPTIONS, samudayikbanHeadings, dharmikbanHeadings };
