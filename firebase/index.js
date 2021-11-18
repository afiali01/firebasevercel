//Build the app instance of firebase
import {initializeApp} from 'firebase/app';
import firebaseConfig from './firebaseConfig';

const firebase = initializeApp(firebaseConfig);


export default firebase