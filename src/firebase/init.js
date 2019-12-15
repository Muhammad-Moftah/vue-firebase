import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfSkmYGDTcNTZujv8gDrxFFDlE2Cb_pRg",
  authDomain: "smoothies-892d5.firebaseapp.com",
  databaseURL: "https://smoothies-892d5.firebaseio.com",
  projectId: "smoothies-892d5",
  storageBucket: "smoothies-892d5.appspot.com",
  messagingSenderId: "116977591296",
  appId: "1:116977591296:web:5bc1f6665bb98f4ee1e4e5",
  measurementId: "G-23X2S4KTGG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebaseApp.firestore().settings({timestampsInSnapshots:true});
const firebaseApp = firebase.initializeApp(firebaseConfig);



export default firebaseApp.firestore();



