//login
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