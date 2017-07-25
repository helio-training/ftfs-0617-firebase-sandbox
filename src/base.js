import Rebase from 're-base';
import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD7mr_5h757d1ILU2iP7wdGBFbfJORNxO4",
  authDomain: "simply-glamorous.firebaseapp.com",
  databaseURL: "https://simply-glamorous.firebaseio.com",
  projectId: "simply-glamorous",
  storageBucket: "simply-glamorous.appspot.com",
  messagingSenderId: "794219128147"
};

const app = Firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;