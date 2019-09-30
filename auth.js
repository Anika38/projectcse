  // Your web app's Firebase configuration
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
  const auth=firebase.auth();
 // const db=firebase.firestore();
  //db.settings({timestampsInSnapshots:true});


window.onload=function(){
	const signupForm = document.querySelector('#signup-form');
  

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['inputEmail'].value;
  const password = signupForm['inputPassword'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    document.location.href = "./index.html?Logout=Successful";
    console.log(cred.user);
   
});
});
}


function login(){

  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(e=>{
    document.location.href = "./index.html?Login=Successful";
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
     
    window.alert("Error : " + errorMessage);
  });
}


function logout_func(){
  firebase.auth().signOut();
  document.location.href = "./index.html?Logout=Successful";
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    document.getElementById('logout').style.display='block';
    document.getElementById('login').style.display='none';
  } else {
    console.log("logged out");
    document.getElementById('logout').style.display='none';
    document.getElementById('login').style.display='block';
  }
});
