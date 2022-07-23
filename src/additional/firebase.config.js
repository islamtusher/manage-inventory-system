// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA17oXW8qSMpNmQCbKYkhZEjZbGct9X9p8",
  authDomain: "inventory-management-sys-ac090.firebaseapp.com",
  projectId: "inventory-management-sys-ac090",
  storageBucket: "inventory-management-sys-ac090.appspot.com",
  messagingSenderId: "922982578131",
  appId: "1:922982578131:web:629ede318df9ae04f2a126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth