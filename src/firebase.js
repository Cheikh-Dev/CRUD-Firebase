import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6EnsabcGOzBw6YSJiC3j-hb1jEpoUN9s",
  authDomain: "react-table-crud-81daf.firebaseapp.com",
  projectId: "react-table-crud-81daf",
  storageBucket: "react-table-crud-81daf.appspot.com",
  messagingSenderId: "1086624321804",
  appId: "1:1086624321804:web:48f90bbd7b54beab73b929",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
