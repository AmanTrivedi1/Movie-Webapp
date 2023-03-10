
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4SLTaFcyHOFAJdtDKjLgIaW_6Dqdjom8",
    authDomain: "ytclone-520a4.firebaseapp.com",
    projectId: "ytclone-520a4",
    storageBucket: "ytclone-520a4.appspot.com",
    messagingSenderId: "531545097690",
    appId: "1:531545097690:web:2e1991e8baded9cad4ace3"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.auth();