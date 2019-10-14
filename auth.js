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



	const signupForm = document.querySelector('#signup-form');
  


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



function login_func(){
	const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
	e.preventDefault();
	
	const email  =signupForm['inputEmail'].value;
	const passward  =signupForm['inputPassword'].value;
	//signup the user
	
	auth.createUserWithEmailAndPassword(email,passward).then(cred => {
		//console.log(cred.user);
		const modal= document.querySelector('#modal-signup');
		//M.Modal.getInstance(modal).close();
		signupForm.reset();
		document.location.href = "./index.html?Signup=Successful";
		
});

});
	
	
	const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
	e.preventDefault();
	const email  =loginForm['inputEmail'].value;
	const passward  =loginForm['inputPassword'].value;
	auth.signInWithEmailAndPassword(email,passward).then(cred => {
		console.log(cred.user);
		const modal= document.querySelector('#modal-login');
		//M.Modal.getInstance(modal).close();
		loginForm.reset();
		document.location.href = "./index.html?Login=Successful";

	});
	
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
