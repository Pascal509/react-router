// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTn-VxZmCtjY-7R8ZTlvTHwp7tybGHWf8",
  authDomain: "myreactapp-6e08c.firebaseapp.com",
  projectId: "myreactapp-6e08c",
  storageBucket: "myreactapp-6e08c.appspot.com",
  messagingSenderId: "73176872056",
  appId: "1:73176872056:web:3f7846f30fa7c45ca3e98d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;