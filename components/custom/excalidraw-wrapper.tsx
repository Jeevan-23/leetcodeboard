"use client"
import {Excalidraw, WelcomeScreen, MainMenu, serializeAsJSON, getSceneVersion} from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
import { useParams } from "next/navigation";

// import { initializeApp } from "firebase/app"
// import { getFirestore, getDoc, doc , setDoc} from "firebase/firestore/lite"

// const firebaseConfig = {
//    apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const ExcalidrawWrapper: React.FC = () => {
  const params = useParams<{ slug?: string | string[] }>();
  const titleParam = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  let lastSceneVersion = -1;

  const onChange = async (
    elements: readonly ExcalidrawElement[],
    appstate: AppState,
    files: BinaryFiles
  ) => {
    const currentversion = getSceneVersion(elements);
    if (currentversion > lastSceneVersion) {
      if (!titleParam) return null;
      const content = serializeAsJSON(elements, appstate, files, "local");
      localStorage.setItem("excalidraw" + titleParam, content);

      // updating in firebase
      // await setDoc(doc(db, "excalidraw", titleParam), {
      //   content
      // });
      lastSceneVersion = currentversion;
    }
  };

  const retrieveInitialData = async () => {
    if (!titleParam) return null;

    // Retrieve data from Firestore
    // const docRef = doc(db, "excalidraw", titleParam);
    // const docSnap = await getDoc(docRef);
    // for retriving from the firestore
    // if (docSnap.exists()) {
    //   return JSON.parse(docSnap.data().content);
    // } 
    // else 
    // {
      // Fallback to localStorage if Firestore data does not exist
      const content = localStorage.getItem("excalidraw" + titleParam);
      if (content != null) {
        return JSON.parse(content);
      }
    // }
    return null;
  };

    return (
        <>
       <div className="flex h-[calc(100vh-3.5rem)] z-50">
      <Excalidraw onChange={onChange} initialData={retrieveInitialData()}>
      <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
      </>
    );
}
export default ExcalidrawWrapper;
