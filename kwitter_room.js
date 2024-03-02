

var firebaseConfig = {
  apiKey: "AIzaSyAfTkvPAVk5h2Y1VFkWOkbZT9PJJsmWyW4",
  authDomain: "kwitter-9ea07.firebaseapp.com",
  databaseURL: "https://kwitter-9ea07-default-rtdb.firebaseio.com",
  projectId: "kwitter-9ea07",
  storageBucket: "kwitter-9ea07.appspot.com",
  messagingSenderId: "1064240893456",
  appId: "1:1064240893456:web:5f5bc970a0d78038b90495"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() 

{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code 
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}