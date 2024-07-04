import { useEffect } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

interface Props extends React.PropsWithChildren, Omit<ScrollTrigger.Vars, "trigger"> { 
  element: string
  trigger: string
}
export default function Parallax({ children, element, trigger, ...rest }: Props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const _scrollTrigger = gsap.to(`.${element}`, {
      trigger: `.${trigger}`,
      top: "0%",
      scrollTrigger: {
        scrub: true,
        ...rest
      }
    })

    return () => {
      _scrollTrigger.kill()
    }
  }, Object.values(rest))

  return children
}