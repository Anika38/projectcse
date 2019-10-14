const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
	e.preventDefault();
	
	const email  =signupForm['inputEmail'].value;
	const passward  =signupForm['inputPassword'].value;
	//signup the user
	
	auth.createUserWithEmailAndPassword(email,passward).then(cred => {
		//console.log(cred.user);
		//const modal= document.querySelector('#modal-signup');
		//M.Modal.getInstance(modal).close();
		signupForm.reset();
		document.location.href = "./index.html?Signup=Successful";
		
});

});
