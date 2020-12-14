import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// var firebaseConfig = {
//   apiKey: "AIzaSyBOw3360c_1Tu8sydnf_EdwqpnwGzxHk7Y",
//   authDomain: "cartoncost-409cb.firebaseapp.com",
//   databaseURL: "https://cartoncost-409cb.firebaseio.com",
//   projectId: "cartoncost-409cb",
//   storageBucket: "cartoncost-409cb.appspot.com",
//   messagingSenderId: "836711813445",
//   appId: "1:836711813445:web:02cd4daeff6e25c5c82e2c",
//   measurementId: "G-Z4KKY994J9",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

var firebaseConfig = {
  apiKey: "AIzaSyDj-6GeJH3OhUOB0s5vo1KPSKBAxQnj8VA",
  authDomain: "cartoon-cost.firebaseapp.com",
  projectId: "cartoon-cost",
  storageBucket: "cartoon-cost.appspot.com",
  messagingSenderId: "696147660440",
  appId: "1:696147660440:web:643e199db16ff9a826caed",
  measurementId: "G-9KDPXW5BFT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export default firebase
