import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCsvCrVU5EVhV3OSV9bjePVlSsPP41t4rE",
    authDomain: "netflix-clone-f7aec.firebaseapp.com",
    projectId: "netflix-clone-f7aec",
    storageBucket: "netflix-clone-f7aec.appspot.com",
    messagingSenderId: "792760238335",
    appId: "1:792760238335:web:5229b09b2b6a97a1df8cca",
    measurementId: "G-KH5N4NKHS5"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase }; 