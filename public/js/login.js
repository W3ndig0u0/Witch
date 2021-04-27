const auth = firebase.auth();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signOutBtn = document.getElementById('signOutBtn');

const signInBtnGoogle = document.getElementById('signInBtnGoogle');
const userDetails = document.getElementById('userDetails');
const userImg = document.getElementById('userImg');

const googleProvider = new firebase.auth.GoogleAuthProvider();
var user = firebase.auth().currentUser;

signOutBtn.onclick = () => auth.signOut();
signInBtnGoogle.onclick = () => auth.signInWithPopup(googleProvider);


auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.style.display = "block";
        whenSignedOut.style.display = "none";
        userDetails.innerHTML = `<h3 class="Name">Hello ${user.displayName}!</h3>`;
        userImg.innerHTML = `<img class="user-img" src="${user.photoURL}">`;
    }
    else if(!user)
    {
        // not signed in
        whenSignedOut.style.display = "block";
        whenSignedIn.style.display = "none";
        userDetails.innerHTML = '';
    }
});