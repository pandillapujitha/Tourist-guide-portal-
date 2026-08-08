
// ===============================
// 🔥 FIREBASE CONFIG (REPLACE WITH YOURS)
// ===============================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ===============================
// ✅ REGISTER FUNCTION
// ===============================
function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email & password");
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Registration Successful ✅");
      console.log(userCredential.user);
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
}

// ===============================
// ✅ LOGIN FUNCTION
// ===============================
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Enter email & password");
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login Successful ✅");
      console.log(userCredential.user);

      // Redirect after login
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login Failed ❌\n" + error.message);
      console.error(error);
    });
}

// ===============================
// ✅ LOGOUT FUNCTION
// ===============================
function logout() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logged out successfully 👋");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// ===============================
// ✅ CHECK USER LOGIN STATUS
// ===============================
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("No user logged in");
  }
});