import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need ot seed the database 

// we need a config 
const config = {

};

const firebase = Firebase.initializeApp(config);

export { firebase };