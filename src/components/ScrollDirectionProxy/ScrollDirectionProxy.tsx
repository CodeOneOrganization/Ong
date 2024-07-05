import { useEffect, useRef } from "react"


export default function ScrollDirectionProxy(){
  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleWheel(){
      const currScrollY = window.scrollY      

      if(lastScrollY > currScrollY) {
        document.body.setAttribute("data-scroll-direction", "up")
      } else {
        document.body.setAttribute("data-scroll-direction", "down")
      }

      lastScrollY = currScrollY
    }

    window.addEventListener("wheel", handleWheel)

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return null
}