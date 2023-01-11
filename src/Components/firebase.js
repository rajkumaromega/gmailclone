import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1D0ld1nTRQCd3g6KL8parO6qvrOf58Wk",
    authDomain: "clone-yt-bcc5f.firebaseapp.com",
    projectId: "clone-yt-bcc5f",
    storageBucket: "clone-yt-bcc5f.appspot.com",
    messagingSenderId: "796366964571",
    appId: "1:796366964571:web:d28b69c7888f91743afc7e",
    measurementId: "G-RVBZV6MTHM"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};