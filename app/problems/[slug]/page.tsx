"use client"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import ExcalidrawWrapper from "@/components/custom/excalidraw-wrapper"

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
        <ExcalidrawWrapper />
    </>
  )
}
