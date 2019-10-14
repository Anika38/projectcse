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
  
  
  function showTable(){
    resetForm();
	document.getElementById("add-new-div").style.display = 'none';
	document.getElementById("tour-places-div").style.display = 'block';
}

function BackToaddPlace() {
    resetForm();
	document.getElementById("add-new-div").style.display = 'block';
    document.getElementById("tour-places-div").style.display = 'none';
}
  
  function resetForm() {
    document.getElementById('name').value = "";
	 document.getElementById('company').value = "";
	
    document.getElementById('email').value = "";
    document.getElementById('phone').value=""; 
	 document.getElementById('message').value=""; 
	
   
}

	



 
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here

function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

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
    document.location.href="./retreive.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
