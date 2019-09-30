

var firebaseConfig = {
    apiKey: "AIzaSyD1QCke2ZDp7PPIPdoeU64GAQupWMsh3rU",
    authDomain: "contactform-d811a.firebaseapp.com",
    databaseURL: "https://contactform-d811a.firebaseio.com",
    projectId: "contactform-d811a",
    storageBucket: "",
    messagingSenderId: "1019411373002",
    appId: "1:1019411373002:web:e72ff6049c81ea507c0d33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



$(document).ready(function(){//will start working right after the page is loaded

  var rootRef=firebase.database().ref().child("messages");


  rootRef.on("child_added", snap => {

    alert(snap.val()); //to check if the code works..nothing fancy

    var name=  snap.child("name").val();
    var email=  snap.child("email").val();

    $("#write_ere").append(<p>`+ email + `</p> + <p> + name + </p> );
  });


});