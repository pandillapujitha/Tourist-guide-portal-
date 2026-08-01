
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
storageBucket: "cloud-computing-project-596be.firebasestorage.app",
messagingSenderId: "959671235175",
appId: "1:959671235175:web:f6420aade96ce496961ac2",
measurementId: "G-7F7KQ0VGVZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const place = document.getElementById("place").value;
const date = document.getElementById("date").value;

try{

await addDoc(collection(db,"bookings"),{

name:name,
email:email,
phone:phone,
place:place,
date:date,
bookingTime:new Date()

});

alert("Booking Successful!");

bookingForm.reset();

}
catch(error){

alert("Error : "+error.message);

}

});
