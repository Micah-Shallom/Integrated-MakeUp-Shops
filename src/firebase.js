import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC0wd0v1vgRS3ZAOt1GpYjJzmVVEb-QRKk",
    authDomain: "integrated-makeup-shops.firebaseapp.com",
    databaseURL: "https://integrated-makeup-shops.firebaseio.com",
    projectId: "integrated-makeup-shops",
    storageBucket: "integrated-makeup-shops.appspot.com",
    messagingSenderId: "766913532811",
    appId: "1:766913532811:web:92ef4e11f1bb78ee86558e",
    measurementId: "G-VLX589L3ZZ"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth , additionalData ) => {

  if(!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {

    const {displayName , email , photoURL} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    }catch(e){
      console.log('Error Create User Profile Document in Firestore')
    }
   
  }else{
    return userRef
  }
};


const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'})
const SignInWithGoogle = () => auth.signInWithPopup(provider)
export {auth,firestore,SignInWithGoogle};

export default firebase;