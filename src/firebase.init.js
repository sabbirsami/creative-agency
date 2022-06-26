import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCojx2Eh4mJEYIGph1nBNYGxO169M0aE6c",
    authDomain: "creative-agency-2022.firebaseapp.com",
    projectId: "creative-agency-2022",
    storageBucket: "creative-agency-2022.appspot.com",
    messagingSenderId: "197658958822",
    appId: "1:197658958822:web:a0518610b4fff043d41427",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
