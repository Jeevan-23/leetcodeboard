// TODO : Use a module bundler for size reduction
import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc } from "firebase/firestore/lite"


// TODO : Use environment variables. Do not add API keys to version control.
// For local development, copy paste this config from your firestore project settings.
const firebaseConfig = {
  apiKey: "AIzaSyBqHnK_3b8wC08t0xvfHqxw0tyLR_8t494",
  authDomain: "lcboard-85d25.firebaseapp.com",
  projectId: "lcboard-85d25",
  storageBucket: "lcboard-85d25.appspot.com",
  messagingSenderId: "344003910610",
  appId: "1:344003910610:web:f04577fa15d757ee7d460b",
  measurementId: "G-GXB2YZXFZ5"
};

  

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getDocumentData(collectionName: string, documentId: string) {
  try {
    // Reference to the document we want to retrieve
    const docRef = doc(db, collectionName, documentId)

    // Use getDoc to fetch the document
    const documentSnapshot = await getDoc(docRef)

    // Check if the document exists
    if (documentSnapshot.exists()) {
      // Return document data
      return documentSnapshot.data()
    } else {
      // Return null if document does not exist
      return null
    }
  } catch (error) {
    // Propagate error to the caller
    throw error
  }
}