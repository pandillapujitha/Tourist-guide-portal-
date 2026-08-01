
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
export const db = getFirestore(app);
