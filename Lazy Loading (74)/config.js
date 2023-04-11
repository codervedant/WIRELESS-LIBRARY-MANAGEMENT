import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB4XTvzSJOEccs_ftiXrHWmFh1JdGtmqRk",
  authDomain: "willy-app-cabd9.firebaseapp.com",
  projectId: "willy-app-cabd9",
  databaseURL: "https://willy-app-cabd9-default-rtdb.firebaseio.com",
  storageBucket: "willy-app-cabd9.appspot.com",
  messagingSenderId: "199827646806",
  appId: "1:199827646806:web:3d10fe2bc209905cf80ef7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();