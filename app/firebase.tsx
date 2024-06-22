// TODO : Use a module bundler for size reduction
import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc } from "firebase/firestore/lite"

// TODO : Use environment variables. Do not add API keys to version control.
// For local development, copy paste this config from your firestore project settings.
const firebaseConfig = {
    apiKey: "AIzaSyBb_mv8ukCKfSHcO1ksinNrUJ6Yw43psh0",
    authDomain: "lc-board.firebaseapp.com",
    projectId: "lc-board",
    storageBucket: "lc-board.appspot.com",
    messagingSenderId: "269382160604",
    appId: "1:269382160604:web:8de78eeb2293f345c12419",
    measurementId: "G-KV3ZJBQEYJ"
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