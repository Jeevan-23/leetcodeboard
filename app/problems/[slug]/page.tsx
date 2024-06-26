"use client"
import { Suspense, useEffect } from "react"
import { useParams } from "next/navigation"
import ExcalidrawWrapper from "@/components/custom/excalidraw-wrapper"
import Loading from "@/app/loading"

export default function App() {
  const params = useParams()
  const titleParam = params?.slug
  const title = Array.isArray(titleParam)
    ? titleParam.join(" ")
    : titleParam || "WhiteBoard"
  const prefixedTitle = `Problem : ${title}`

  useEffect(() => {
    document.title = prefixedTitle
  }, [prefixedTitle])

  return (
    <>
      <Suspense fallback = {<Loading />} >
        <ExcalidrawWrapper />
      </Suspense>
    </>
  )
}
