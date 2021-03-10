import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJVQtwP1QM5DlMpI9eoYXEZXdhJDibZ18",
    authDomain: "udemy-vue-3-firebase-ninja.firebaseapp.com",
    projectId: "udemy-vue-3-firebase-ninja",
    storageBucket: "udemy-vue-3-firebase-ninja.appspot.com",
    messagingSenderId: "1040452109366",
    appId: "1:1040452109366:web:426473a034c789860ec497",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
