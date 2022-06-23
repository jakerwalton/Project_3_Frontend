import firebase from "firebase/app"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyCfh70Q4x2yHCFtyCg5PVod7Q9BEv2aWhc",
  authDomain: "hard-restaurant-tracker.firebaseapp.com",
  projectId: "hard-restaurant-tracker",
  storageBucket: "hard-restaurant-tracker.appspot.com",
  messagingSenderId: "628842851979",
  appId: "1:628842851979:web:90ab21a70b12ce16fbae8e",
}

firebase.initializeApp(config)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

function login() {
  return auth.signInWithPopup(provider)
}

function logout() {
  return auth.signOut()
}

export { auth, login, logout }
