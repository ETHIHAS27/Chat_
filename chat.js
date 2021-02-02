var firebaseConfig = {
    apiKey: "AIzaSyDufxoTVXHfUaYllo2WAwQdQrf9tU9OpG8",
    authDomain: "project-chat-app-cb26d.firebaseapp.com",
    databaseURL: "https://project-chat-app-cb26d-default-rtdb.firebaseio.com",
    projectId: "project-chat-app-cb26d",
    storageBucket: "project-chat-app-cb26d.appspot.com",
    messagingSenderId: "870868854940",
    appId: "1:870868854940:web:1cbafad7256c94b3116559"
  };

    user_name = localStorage.getItem("user_Id");
    room_name = localStorage.getItem("room_name");

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log("room name is "+ room_name +" username is "+ user_name);

  function send(){
    msg = document.getElementById("message").value;
    console.log(msg);

    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = " ";
}

function likes_change(message_id){
  console.log("clicked on like button of id:" + message_id);
  button_id = message_id;
  like = document.getElementById(button_id).value;
  updated_like = Number(likes)+ 1
  console.log(updated_like);
  firebase.database().ref(room_name).child(message_id).update({
    like: updated_like
  });
}

function getData() {firebase.database().ref("/"+ room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val();if(childKey != "purpose"){
  firebase_message_id = childKey;
  message_data = childData;
 //Start code
 console.log(firebase_message_id);
 console.log(message_data);

 message = message_data['message'];
 name = message_data['name'];
 likes = message_data['like'];

 name_with_tag = " <h4>"+name+"</h4>";
 message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>"
 like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+likes+" onclick = 'likes_change(this.id)'><span class = 'glyphicon glyphicon-thumbs-up'></span>Like: "+likes+"</button>"
 row = name_with_tag+message_with_tag+like_button;

 document.getElementById("output").innerHTML += row;

 //End code
} });});}
getData();

