
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyC5FxjC0bUuJFz_T4Q4KzZnEOXtzaTElJE",
authDomain: "cloud-computing-project-596be.firebaseapp.com",
projectId: "cloud-computing-project-596be",
storageBucket: "cloud-computing-project-596be.appspot.com",
messagingSenderId: "959671235175",
appId: "1:959671235175:web:f6420aade96ce496961ac2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("bookingForm").addEventListener("submit", async function(e){

e.preventDefault();

try{

await addDoc(collection(db,"Bookings"),{

name:document.getElementById("name").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
place:document.getElementById("place").value,
date:document.getElementById("date").value,
createdAt:new Date()

});

alert("Booking Successful");

this.reset();

}
catch(error){

alert(error.message);
console.log(error);

}

});
