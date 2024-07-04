import { useEffect, useRef, useState } from "react"

import styles from "./Scene.module.css"

import gsap from "gsap"

import useWindowViewport from "../../hooks/useWindowViewports"

const CIRCLE_INITIAL_RADIUS = 50

export default function Scene() {
  const windowViewport = useWindowViewport()
  const canvas = useRef<any>()
  const prevMouse = useRef<any>(null)
  const circle = useRef<number | null>(null)

  useEffect(() => {
    windowViewport.width > 0 && init()
  }, [windowViewport])

  useEffect(() => {
    let frameRate = 1
    circle.current = CIRCLE_INITIAL_RADIUS
    
    function raf() {
      const newRadius = circle.current! * 1.03
      
      draw(windowViewport.width / 2, windowViewport.height / 2, newRadius)
      circle.current = newRadius

      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
    return () => { }
  }, [])

  const init = () => {
    const context = canvas.current?.getContext("2d")!

    context.fillStyle = "#F8A325"
    context.fillRect(0, 0, windowViewport.width, windowViewport.height)
    context.globalCompositeOperation = "destination-out"
  }

  // const onMouseMove = (e: MouseEvent) => {
  //   const numOfCircles = Math.max(Math.abs(e.movementX), Math.abs(e.movementY)) / 10

  //   if(prevMouse.current) {
  //     for (let i = 0; i < numOfCircles; i++) {
  //       const x = gsap.utils.interpolate(prevMouse.current.x, e.clientX, (1 / numOfCircles) * i) 
  //       const y = gsap.utils.interpolate(prevMouse.current.y, e.clientY, (1 / numOfCircles) * i) 

  //       draw(x, y, 80)
  //     }
  //   }

  //   prevMouse.current = {
  //     x: e.clientX,
  //     y: e.clientY
  //   }
  // }

  const draw = (x: number, y: number, radius: number) => {
    const context = canvas.current.getContext("2d")
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
  }

  return (
    <canvas className={styles.canvas} ref={canvas} width={windowViewport.width} height={windowViewport.height} id="scene"></canvas>
  )
}