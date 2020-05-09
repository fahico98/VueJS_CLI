
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyAZCAu9jgsp1Zk0JbnPAev8wXyoBDWUCTU",
   authDomain: "todo-ninja-d226f.firebaseapp.com",
   databaseURL: "https://todo-ninja-d226f.firebaseio.com",
   projectId: "todo-ninja-d226f",
   storageBucket: "todo-ninja-d226f.appspot.com",
   messagingSenderId: "687176989475",
   appId: "1:687176989475:web:70e94bc8ceaac1812eea96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
