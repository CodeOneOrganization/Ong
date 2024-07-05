import { useEffect, useRef } from "react"

import styles from "./Scene.module.css"

import gsap from "gsap"

import useWindowViewport from "../../hooks/useWindowViewports"

const CIRCLE_INITIAL_RADIUS = 0

export default function Scene() {
  const windowViewport = useWindowViewport()
  const canvas = useRef<HTMLCanvasElement>(null!)
  const circle = useRef<{ radius: number } | null>(null)

  useEffect(() => {
    windowViewport.width > 0 && init()
  }, [windowViewport])

  useEffect(() => {
    circle.current! = { radius: CIRCLE_INITIAL_RADIUS }

    if (!canvas.current) return
    const context = canvas.current.getContext("2d")!
    context.fillStyle = "#F8A325"
    context.fillRect(0, 0, window.innerWidth, window.innerHeight)
    context.globalCompositeOperation = "destination-out"

    const R_max = Math.max(window.innerWidth, window.innerHeight)


    gsap.to(circle.current, {
      radius: R_max,
      delay: 1,
      ease: "power4.inOut",
      duration: 1.5,
      onUpdate: () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight)

        // drawing background
        context.fillStyle = "#F8A325"
        context.fillRect(0, 0, window.innerWidth, window.innerHeight)
        context.globalCompositeOperation = "destination-out"

        // drawing reveal paint
        context.beginPath()
        // console.log("Animation progress value:", e)
        context.arc(window.innerWidth * 0.7, window.innerHeight * 0.2, circle.current!.radius, 0, Math.PI * 2)
        context.fill()
        context.globalCompositeOperation = "xor"

        circle.current!.radius = circle.current!.radius * 1.01

      }

    },)

    return () => { }
  }, [canvas])

  const init = () => {
    const context = canvas.current?.getContext("2d")!

    context.fillStyle = "#F8A325"
    context.fillRect(0, 0, windowViewport.width, windowViewport.height)
    context.globalCompositeOperation = "destination-out"
  }

  return (
    <canvas className={styles.canvas} ref={canvas} width={windowViewport.width} height={windowViewport.height} id="scene"></canvas>
  )
}