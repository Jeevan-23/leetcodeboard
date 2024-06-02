"use client"
import {Excalidraw, convertToExcalidrawElements} from "@excalidraw/excalidraw"

const ExcalidrawWrapper: React.FC = () => { 
    return (
        <>
        <div className="flex h-[calc(100vh-3.5rem)] z-50">
          <Excalidraw />
        </div>
      </>
    );
}
export default ExcalidrawWrapper;