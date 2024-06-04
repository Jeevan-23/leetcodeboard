"use client"
import {Excalidraw, WelcomeScreen, MainMenu} from "@excalidraw/excalidraw"

const ExcalidrawWrapper: React.FC = () => { 
    return (
        <>
       <div className="flex h-[calc(100vh-3.5rem)] z-50">
      <Excalidraw >
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