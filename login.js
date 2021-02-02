var username = localStorage.getItem("userId");


function addUser(){
    var user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_Id",user_name);

    window.location = "room.html"
}
