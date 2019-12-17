import firebase from "firebase";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYzh4wMkZfryhpkJq3nAIf5fDyhJ3KDm4",
  authDomain: "smoothies-2a5a1.firebaseapp.com",
  databaseURL: "https://smoothies-2a5a1.firebaseio.com",
  projectId: "smoothies-2a5a1",
  storageBucket: "smoothies-2a5a1.appspot.com",
  messagingSenderId: "926768269280",
  appId: "1:926768269280:web:cc860bb16dea4136ffcd85"
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig).firestore();
export default db;


