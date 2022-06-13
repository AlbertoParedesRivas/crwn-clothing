// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from "firebase/auth";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCphaFGGYah77dXRCc-QHai1HLN42qy3lU",
    authDomain: "crwn-db-43a42.firebaseapp.com",
    projectId: "crwn-db-43a42",
    storageBucket: "crwn-db-43a42.appspot.com",
    messagingSenderId: "91010478412",
    appId: "1:91010478412:web:83074ba740872068959fe9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Setting up collections and documents
export const db = getFirestore();
export const createUserDocumentFromAuth = async userAuth => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }
    return userDocRef;
}