"use client"
import {Excalidraw, WelcomeScreen, MainMenu, serializeAsJSON, getSceneVersion} from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
import { useParams } from "next/navigation";

// import { initializeApp } from "firebase/app"
// import { getFirestore, getDoc, doc , setDoc} from "firebase/firestore/lite"

// const firebaseConfig = {
//   apiKey: "AIzaSyBqHnK_3b8wC08t0xvfHqxw0tyLR_8t494",
//   authDomain: "lcboard-85d25.firebaseapp.com",
//   projectId: "lcboard-85d25",
//   storageBucket: "lcboard-85d25.appspot.com",
//   messagingSenderId: "344003910610",
//   appId: "1:344003910610:web:f04577fa15d757ee7d460b",
//   measurementId: "G-GXB2YZXFZ5"
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
