import i18n from "i18next";
import { initReactI18next } from "react-i18next";


 
import as from "../i18n/translations/as.json";           // Assamese
import bn from "../i18n/translations/bn.json"; // Bengali
import brx from "../i18n/translations/brx.json"; // Bodo
import doi from "../i18n/translations/doi.json"; // Dogri
import en from "../i18n/translations/en.json"; // English
import gu from "../i18n/translations/gu.json"; // Gujarati
import hi from "../i18n/translations/hi.json"; // Hindi
import kn from "../i18n/translations/kn.json"; // Kannada
import ks from "../i18n/translations/ks.json"; // Kashmiri
import kok from "../i18n/translations/kok.json"; // Konkani
import ml from "../i18n/translations/ml.json"; // Malayalam
import mai from "../i18n/translations/mai.json"; // Maithili
import mr from "../i18n/translations/mr.json"; // Marathi
import mni from "../i18n/translations/mni.json"; // Manipuri
import ne from "../i18n/translations/ne.json"; // Nepali
import or from "../i18n/translations/or.json"; // Odia
import pa from "../i18n/translations/pa.json"; // Punjabi
import sa from "../i18n/translations/sa.json"; // Sanskrit
import sat from "../i18n/translations/sat.json"; // Santali
import sd from "../i18n/translations/sd.json"; // Sindhi
import ta from "../i18n/translations/ta.json"; // Tamil
import te from "../i18n/translations/te.json"; // Telugu
import ur from "../i18n/translations/ur.json"; 

i18n.use(initReactI18next).init({
  resources: {
    as, bn, brx, doi, en, gu, hi, kn, ks, kok,
    ml, mai, mr, mni, ne, or, pa, sa, sat, sd, 
    ta, te, ur
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback to English if a translation is missing
  interpolation: { escapeValue: false },
});

export default i18n;
