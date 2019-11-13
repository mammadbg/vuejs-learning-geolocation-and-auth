import firebase from "firebase";
import firestore from "firebase/firestore";

const config = {
  apiKey: "AIzaSyD5gOmunKJNVwKiQr8r31oAtdviSzxXhFA",
  authDomain: "geo-ninjas-ac2e7.firebaseapp.com",
  databaseURL: "https://geo-ninjas-ac2e7.firebaseio.com",
  projectId: "geo-ninjas-ac2e7",
  storageBucket: "geo-ninjas-ac2e7.appspot.com",
  messagingSenderId: "961190645236",
  appId: "1:961190645236:web:1acc43dde91e5accb4bda1",
  measurementId: "G-VVF4V9FZBX"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
