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
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login Failed ❌: " + error.message);
    });
}