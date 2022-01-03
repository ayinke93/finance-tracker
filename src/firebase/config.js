import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAmtwBJOuZ587GDe49GecbsvQb5YqMBkMM',
	authDomain: 'mymoney-8ee05.firebaseapp.com',
	projectId: 'mymoney-8ee05',
	storageBucket: 'mymoney-8ee05.appspot.com',
	messagingSenderId: '1057826169582',
	appId: '1:1057826169582:web:ab6e62fb2ebafa0c3d09ff',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
