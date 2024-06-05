"use client"
import {Excalidraw, WelcomeScreen, MainMenu, serializeAsJSON, getSceneVersion} from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
import { useParams } from "next/navigation";



const ExcalidrawWrapper: React.FC = () => { 
  const params = useParams()
  const titleParam = params.slug
  let lastSceneVersion = -1;
  const onChange = (
    elements: readonly ExcalidrawElement[],
    appstate: AppState,
    files: BinaryFiles
  ) => {
    const currentversion = getSceneVersion(elements);
    if(currentversion > lastSceneVersion) {
      const content = serializeAsJSON(elements, appstate, files, "local")
      localStorage.setItem("excalidraw"+titleParam, content);
      lastSceneVersion = currentversion;
    }
  }

  const retrieveInitialData = () => {
    const content = localStorage.getItem("excalidraw"+titleParam)
    if(content != null) {
      return JSON.parse(content)
    }
  }

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