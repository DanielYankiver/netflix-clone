import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDn4zCdzSl_nZyB7LbHzW2pbodV-JHac84",
    authDomain: "netflix-clone-84bfe.firebaseapp.com",
    projectId: "netflix-clone-84bfe",
    storageBucket: "netflix-clone-84bfe.appspot.com",
    messagingSenderId: "128119821021",
    appId: "1:128119821021:web:e77717bb58faf036194134"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };