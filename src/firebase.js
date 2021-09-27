// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbIDu6SydfMH5Okw0ZiF3RqwIdHQNTFTE",
  authDomain: "react-basic-wordlist.firebaseapp.com",
  projectId: "react-basic-wordlist",
  storageBucket: "react-basic-wordlist.appspot.com",
  messagingSenderId: "414722700709",
  appId: "1:414722700709:web:f9e788b7f851aa65b5a44c",
  measurementId: "G-40E1D5YPLF",
}

initializeApp(firebaseConfig)

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export const db = getFirestore()
