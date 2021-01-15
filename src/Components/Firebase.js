import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDlAjTrWMU5e5eJVBBZQw-8-_PuRg78jv8",
  authDomain: "practicum-de97e.firebaseapp.com",
  databaseURL: "https://practicum-de97e-default-rtdb.firebaseio.com",
  projectId: "practicum-de97e",
  storageBucket: "practicum-de97e.appspot.com",
  messagingSenderId: "1073426291575",
  appId: "1:1073426291575:web:b36769b6410fe1d0469f72",
  measurementId: "G-1H2RVVC6YC",
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();
