import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmv4-BHwLx8iQf2rBPNmg_HzwmEqccCow",
  authDomain: "ss-2de64.firebaseapp.com",
  projectId: "ss-2de64",
  storageBucket: "ss-2de64.appspot.com",
  messagingSenderId: "272280229038",
  appId: "1:272280229038:web:186fb1744498df2ea6893f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
