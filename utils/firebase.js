// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCddk3jx7xo9d2HIEph_XdV5nkJfEE9htw",
  authDomain: "ogd-yellobot.firebaseapp.com",
  databaseURL: "https://ogd-yellobot-default-rtdb.firebaseio.com",
  projectId: "ogd-yellobot",
  storageBucket: "ogd-yellobot.appspot.com",
  messagingSenderId: "527112681595",
  appId: "1:527112681595:web:60a9254462a4ff72848ade",
  measurementId: "G-X5WBYVPLTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export everything properly
export { app, database, ref, set };
