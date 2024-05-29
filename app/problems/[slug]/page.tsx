"use client"
import { useEffect } from "react"
import { Excalidraw } from "@excalidraw/excalidraw"
import { useParams } from "next/navigation"

export default function App() {
  const params = useParams()
  const titleParam = params.slug
  const title = Array.isArray(titleParam)
    ? titleParam.join(" ")
    : titleParam || "WhiteBoard"
  const prefixedTitle = `Problem : ${title}`

  useEffect(() => {
    document.title = prefixedTitle
  }, [prefixedTitle])

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] z-50">
        <Excalidraw />
      </div>
    </>
  )
}
