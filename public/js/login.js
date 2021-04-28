const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtnGoogle = document.getElementById('signInBtnGoogle');
const signOutBtnFaebook = document.getElementById('signOutBtnFaebook');

const userDetails = document.getElementById('userDetails');
const userImg = document.getElementById('userImg');


const googleProvider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtnGoogle.onclick = () => auth.signInWithPopup(googleProvider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in

        const html = document.createElement('div');
        whenSignedIn.className = "not-hidden";
        whenSignedOut.className = "hidden";
        userImg.innerHTML = `<img class="user-img" src="${user.photoURL}">`;
        // userDetails.innerHTML = `<h3 class="name">Hello ${user.displayName}!</h3>`;
        
        html.innerHTML = items.join('');
        document.getElementById('login').appendChild(html);
    } 
    else {
        // not signed in
        whenSignedIn.className = "hidden";
        whenSignedOut.className = "not-hidden";
        userDetails.innerHTML = '';
        userImg.innerHTML = '';
    }
});