import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged, 
} from "firebase/auth";


const firebaseConfig = {
   apiKey: "AIzaSyBsFammEWm4YtfZfZ-Xy2Gy1f1AE4fp720",
   authDomain: "imba-menu-app.firebaseapp.com",
   projectId: "imba-menu-app",
   storageBucket: "imba-menu-app.appspot.com",
   messagingSenderId: "911793695166",
   appId: "1:911793695166:web:fdbe46a00ce94a2a6931ef"
 };


// initialisation
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

onAuthStateChanged(auth, (user) => {
	if (user) {
	  const component = document.querySelector("nav-bar")
	  component.currentUser = user
	} 
})

//utils
export function checkAuthState(): boolean | null{
	const {currentUser} = auth
	if (currentUser === null) return null
	return !!currentUser
}
