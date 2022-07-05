import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDirIlVoVEIz2lEK_3_s_d0aoT1ay94sBU",
  authDomain: "house-marketplace-app-501e1.firebaseapp.com",
  projectId: "house-marketplace-app-501e1",
  storageBucket: "house-marketplace-app-501e1.appspot.com",
  messagingSenderId: "385770451607",
  appId: "1:385770451607:web:c174cd9a1acc0a6cd86fd2"
}

initializeApp(firebaseConfig)

export const db = getFirestore()
