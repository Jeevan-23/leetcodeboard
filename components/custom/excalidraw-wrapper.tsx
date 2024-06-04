"use client"
import {Excalidraw, WelcomeScreen} from "@excalidraw/excalidraw"

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
      </Excalidraw>
    </div>
      </>
    );
}
export default ExcalidrawWrapper;