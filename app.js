import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBW35hUxcw9rm-5bGnrobzFarS2qm4J9SM",
  authDomain: "mytube-e395b.firebaseapp.com",
  projectId: "mytube-e395b",
  storageBucket: "mytube-e395b.firebasestorage.app",
  messagingSenderId: "594520505470",
  appId: "1:594520505470:web:d6b29e9197725a37962c2f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGNUP
window.signup = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => alert("Signup Success ✅"))
    .catch(e => alert(e.message));
};

// LOGIN
window.login = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Login Success 🎉");
      window.location.href = "home.html";
    })
    .catch(e => alert(e.message));
};

// GOOGLE LOGIN
window.googleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

// REDIRECT RESULT
getRedirectResult(auth).then((result) => {
  if (result) {
    window.location.href = "home.html";
  }
});

// USER CHECK
onAuthStateChanged(auth, (user) => {
  if (user && window.location.pathname.includes("index.html")) {
    window.location.href = "home.html";
  }
});

// LOGOUT
window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};