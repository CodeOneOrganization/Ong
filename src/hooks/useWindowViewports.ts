import { useEffect, useState } from "react";


export default function useWindowViewport(){
  const [windowViewport, setWindowViewport] = useState({width: 0, height: 0})

  useEffect(() => {
    const resize = () => setWindowViewport({width: window.innerWidth, height: window.innerHeight})
    resize()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return windowViewport
}