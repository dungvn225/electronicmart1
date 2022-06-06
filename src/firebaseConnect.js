// import * as firebase from 'firebase';
import { firebase } from '@firebase/app';
import 'firebase/database';
import 'firebase/auth';

// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnoVTcLcLE-A7vLhMN-YtcgFFbDOskP_8",
  authDomain: "my-project11-5cc5e.firebaseapp.com",
  databaseURL: "https://my-project11-5cc5e-default-rtdb.firebaseio.com",
  projectId: "my-project11-5cc5e",
  storageBucket: "my-project11-5cc5e.appspot.com",
  messagingSenderId: "299958828308",
  appId: "1:299958828308:web:bc6aebffe23c7838489601"
};


// // Initialize Firebase
//    firebase.initializeApp(firebaseConfig);
//     // const firebaseConnect=firebase.initializeApp(firebaseConfig);
//     export const data=firebaseConnect.database().ref('user');
     


export const firebaseConnect = firebase.initializeApp(firebaseConfig);

  

export const data=firebase.database().ref('user');
