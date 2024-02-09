
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfTkvPAVk5h2Y1VFkWOkbZT9PJJsmWyW4",
  authDomain: "kwitter-9ea07.firebaseapp.com",
  databaseURL: "https://kwitter-9ea07-default-rtdb.firebaseio.com",
  projectId: "kwitter-9ea07",
  storageBucket: "kwitter-9ea07.appspot.com",
  messagingSenderId: "1064240893456",
  appId: "1:1064240893456:web:5f5bc970a0d78038b90495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code 

      //End code
      });});}
getData();
