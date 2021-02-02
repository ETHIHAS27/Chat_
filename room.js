var firebaseConfig = {
    apiKey: "AIzaSyDufxoTVXHfUaYllo2WAwQdQrf9tU9OpG8",
    authDomain: "project-chat-app-cb26d.firebaseapp.com",
    databaseURL: "https://project-chat-app-cb26d-default-rtdb.firebaseio.com",
    projectId: "project-chat-app-cb26d",
    storageBucket: "project-chat-app-cb26d.appspot.com",
    messagingSenderId: "870868854940",
    appId: "1:870868854940:web:1cbafad7256c94b3116559"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("userId");

console.log(username);

function logout(){
    localStorage.removeItem("user_Id");

    window.location.replace("index.html")
}

function addroom(){
    room = document.getElementById("room").value;

    firebase.database().ref("/").child(room).update({
        purpose: "Adding Room"
    })

    window.location = "chat.html"

    localStorage.setItem("room_name", room);
    
}

function redirect_to_room_name(room_id){

    console.log(room_id);

    localStorage.setItem("room_name", room_id);

    window.location = "chat.html"


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("room names = " + Room_names);

   row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirect_to_room_name(this.id)'>#"+  Room_names + "</div> <hr>"
   document.getElementById("output").innerHTML += row

   });});}
getData();

