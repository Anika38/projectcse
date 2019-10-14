// Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyCzK57EVa5O_4_FGX9pEjLPiQFLZ6whUI4",
    authDomain: "commentbox-aa80c.firebaseapp.com",
    databaseURL: "https://commentbox-aa80c.firebaseio.com",
    projectId: "commentbox-aa80c",
    storageBucket: "",
    messagingSenderId: "950783731645",
    appId: "1:950783731645:web:99e1fb1d46eb5e31a694d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  
 
 
// Reference messages collection
var messagesRef = firebase.database().ref('messages3');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
   var name = getInputVal('name');
  var message = getInputVal('message');

  // Save message
   saveMessage(name,message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./blog04.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    
    message:message,
	 name:name
  });
}
