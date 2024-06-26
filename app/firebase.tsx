// TODO : Use a module bundler for size reduction
import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc } from "firebase/firestore/lite"
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

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
