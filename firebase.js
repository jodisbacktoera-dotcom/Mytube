import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "mytube-e395b.firebaseapp.com",
  projectId: "mytube-e395b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
window.loginGoogle = function(){
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

// RESULT
getRedirectResult(auth).then(res=>{
  if(res?.user){
    localStorage.setItem("user", res.user.displayName);
    location.href="home.html";
  }
});

// LOGOUT
window.logout = function(){
  signOut(auth);
  location.href="index.html";
};