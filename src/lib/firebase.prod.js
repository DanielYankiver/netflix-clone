import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// need to seed database 

// need config 
const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase }; 