import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBVctA_S6_9xrKGqGd12l5NlYWZgzBHwag",
  authDomain: "reactfirebase-af900.firebaseapp.com",
  projectId: "reactfirebase-af900",
  storageBucket: "reactfirebase-af900.appspot.com",
  messagingSenderId: "505251615445",
  appId: "1:505251615445:web:c63bf73ce8ecdaf8fb885c",
  measurementId: "G-11E24KYQNP"
};

if(!firebase.app.lenght == 0){
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
}

export default firebase;