import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDn2nqYdxqVtDm5ocuKs5_rpoYZtLHKaxg",
  authDomain: "vuejs-todo-demo-hsensh.firebaseapp.com",
  databaseURL: "https://vuejs-todo-demo-hsensh.firebaseio.com",
  projectId: "vuejs-todo-demo-hsensh",
  storageBucket: "vuejs-todo-demo-hsensh.appspot.com",
  messagingSenderId: "43819358107",
  appId: "1:43819358107:web:3106e0f99b83e471"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db