import { useEffect } from "react"

import useLocomotiveScroll from "../../hooks/useLocomotiveScroll"


export default function ScrollDirectionProxy(){
  const locomotiveScroll = useLocomotiveScroll()

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleWheel(){
      const currScrollY = window.scrollY      

      if(lastScrollY > currScrollY) {
        document.body.setAttribute("data-scroll-direction", "up")
      } else if (lastScrollY < currScrollY) {
        document.body.setAttribute("data-scroll-direction", "down")
      }

      lastScrollY = currScrollY
    }

    if(locomotiveScroll){
      console.log("locomotiveScroll", locomotiveScroll)
      locomotiveScroll.on("scroll", handleWheel)

    }

    return () => {
      // locomotiveScroll.on("wheel", handleWheel)
    }
  }, [locomotiveScroll])

  return null
}