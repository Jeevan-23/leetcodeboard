"use client";

import React, { useEffect, useState } from "react";
import {
  Excalidraw,
  WelcomeScreen,
  MainMenu,
  serializeAsJSON,
  getSceneVersion,
} from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
import { useParams } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ExcalidrawWrapper: React.FC = () => {
  const { user } = useKindeBrowserClient();
  const [userId, setUserId] = useState(null);
  const [initialData, setInitialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams<{ slug?: string | string[] }>();
  const titleParam = Array.isArray(params?.slug)
    ? params?.slug[0]
    : params?.slug ?? "";

  useEffect(() => {
    if (user) {
      const userdata = JSON.stringify(user, null, 2);
      const parsedData = JSON.parse(userdata);
      const fetchedUserId = parsedData?.email;
      setUserId(fetchedUserId);
    }
  }, [user]);

  useEffect(() => {
    const retrieveInitialData = async () => {
      if (!titleParam || !userId) {
        setIsLoading(false);
        return;
      }

      const combinedKey = userId + titleParam;

      try {
        // Retrieve data from Firestore
        const docRef = doc(db, "excalidraw", combinedKey);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data().content;
          // console.log("Data retrieved from Firestore for key:", combinedKey, data);
          setInitialData(JSON.parse(data));
        } else {
          throw new Error("Document does not exist in Firestore");
        }
      } catch (error) {
        // console.error("Error retrieving data from Firestore, checking local storage:", error);

        // Check local storage as a fallback
        const content = localStorage.getItem("excalidraw" + combinedKey);
        if (content != null) {
          // console.log("Data retrieved from localStorage for key:", combinedKey, content);
          setInitialData(JSON.parse(content));
        }
      }

      setIsLoading(false);
    };

    if (userId) {
      retrieveInitialData();
    }
  }, [titleParam, userId]);

  let lastSceneVersion = -1;

  const onChange = async (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    const currentVersion = getSceneVersion(elements);
    if (currentVersion > lastSceneVersion) {
      if (!titleParam || !userId) return;

      const combinedKey = userId + titleParam;
      // console.log("Saving data for combined key:", combinedKey);

      const content = serializeAsJSON(elements, appState, files, "local");
      if (content !== 'null') {  // Check for valid content
        localStorage.setItem("excalidraw" + combinedKey, content);

        // Updating in Firestore
        try {
          await setDoc(doc(db, "excalidraw", combinedKey), { content });
          lastSceneVersion = currentVersion;
        } catch (error) {
          console.error("Error saving data to Firestore:", error);
        }
      }
    }
  };

  if (isLoading) {
    return <div>Board is Cooking....</div>;
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)] z-50">
      <Excalidraw onChange={onChange} initialData={initialData}>
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
  );
};

export default ExcalidrawWrapper;
