import { useCallback, useEffect, useRef, useState } from "react"
import useWindowViewport from "../../hooks/useWindowViewports"
import useSceneCanvas from "../../hooks/useSceneCanvas"

import styles from "./Header.module.css"

import GSAP from "gsap"

export default function Header() {
  const canvas = useSceneCanvas()
  const windowViewport = useWindowViewport()
  const circles = useRef([
    { x: window.innerWidth * -0.0927, y: window.innerHeight * 0.521, radius: 100 },
    { x: window.innerWidth * 0.4911, y: window.innerHeight * -0.297, radius: 100 * 1.4 }
  ])
  const spot = useRef({
    path: "M3.34559 500.718C11.5897 260.786 196.293 64.0758 435.232 40.7575L831.127 2.12167C1049.35 -19.1748 1241.06 146.296 1251.88 365.287C1253.62 400.429 1250.52 435.643 1242.66 469.94L1239.1 485.498C1187.11 712.531 985.114 873.5 752.205 873.5H270.532C200.726 873.5 133.623 846.518 83.248 798.195C27.7285 744.936 -2.49019 670.559 0.151732 593.67L3.34559 500.718Z",
    height: 0,
  })

  useEffect(() => {
    if (!canvas.current) return
    windowViewport.width > 0 && init()
  }, [windowViewport, canvas.current])


  const openMenu = () => {
    const context = canvas.current.getContext("2d")!
    const R_max = Math.max(window.innerWidth, window.innerHeight)

    context.globalCompositeOperation = "source-in"
    // context.clearRect(0, 0, window.innerWidth, window.innerHeight)

    GSAP.to(circles.current[0], {
      radius: R_max,
      duration: 1.8,
      onUpdate: () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        const circle = circles.current[0]

        // drawing yellow circle
        context.globalCompositeOperation = "source-over"
        context.beginPath()
        context.fillStyle = "#F8A325"
        context.arc(window.innerWidth * 0.1677, window.innerHeight * 0.9842, circle.radius, 0, Math.PI * 2)
        context.fill()

        circle.radius *= 1.01
      }
    })

    GSAP.to(circles.current[1], {
      radius: R_max,
      duration: 1.8,
      onUpdate: () => {
        const circle = circles.current[1]

        // drawing yellow circle
        context.globalCompositeOperation = "source-over"
        context.beginPath()
        context.arc(window.innerWidth * 0.8557, window.innerHeight * 0.3509, circle.radius, 0, Math.PI * 2)
        context.fill()

        circle.radius *= 1.01
      }
    })

    GSAP.to(spot.current, {
      duration: 1,
      delay: 1.5 + 0.8,
      onUpdate: () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight)

        // drawing background
        context.fillStyle = "#F8A325"
        context.fillRect(0, 0, window.innerWidth, window.innerHeight)
        
        // drawing Spot3.svg into canvas
        context.fillStyle = "#FEBC5B"
        const path2d = new Path2D(spot.current.path)
        context.fill(path2d)
      }
    })

  }

  const closeMenu = useCallback(() => {

  }, [])

  const init = () => {
    const context = canvas.current.getContext("2d")


    console.log("context inside Header", context)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.top}>
        <ul className={styles.list}>
          <li className={styles.item}>Contato</li>
          <li className={styles.item}>Doação</li>
          <li className={styles.item}>Sobre nós</li>
          <li className={styles.item}>Adoção</li>
        </ul>
      </nav>
      <div className={`${styles.container} ${styles.bottom} container`}>
        <svg className={styles.logo} width="34" height="52" viewBox="0 0 34 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9708 9.40881L2 40.9417L6.20438 49.0001L21.2701 26.2263L25.4745 11.8614" stroke="#55370C" stroke-width="2.80292" />
          <path d="M17.0664 33.9343L27.227 48.6496L31.4314 40.2409L21.2708 26.927" stroke="#55370C" stroke-width="2.80292" />
          <path d="M11.8106 24.8248L6.55815 15.0146C6.3257 11.4171 6.692 9.22554 7.90603 6.23902C8.37083 5.09561 9.21815 4.15483 10.2646 3.50042L11.9904 2.42125C13.4427 1.51307 15.202 1.2347 16.8637 1.65014L17.7387 1.86888C19.1183 2.21378 20.3408 3.01481 21.2079 4.14197L22.7592 6.15873C23.1656 6.68704 23.4857 7.27643 23.7075 7.90496L25.4749 12.9124C23.197 9.58233 21.7003 8.45705 18.8179 7.65693L14.9639 7.30657C11.9705 7.84803 9.09747 8.09214 6.90551 9.75912M14.9639 18.5182C12.5229 15.7898 11.3348 12.9854 10.0588 9.40876" stroke="#55370C" stroke-width="2.80292" />
        </svg>
        <div className={styles.right} onClick={openMenu}>
          Menu
          <svg className={styles.dogFeet} width="57" height="49" viewBox="0 0 57 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5517 11.8003C25.9553 14.5917 25.5307 17.161 24.5817 19.0499C23.6298 20.9447 22.2218 22.0448 20.67 22.2354C19.1182 22.4259 17.4467 21.7039 15.9896 20.1049C14.537 18.5108 13.3971 16.1336 12.9935 13.3423C12.5899 10.551 13.0145 7.98164 13.9634 6.09273C14.9154 4.19793 16.3233 3.09776 17.8752 2.90722C19.427 2.71668 21.0984 3.43875 22.5556 5.03775C24.0082 6.63178 25.148 9.009 25.5517 11.8003Z" stroke="#55370C" stroke-width="2.48062" />
            <path d="M12.4143 23.3869C13.2577 25.0259 13.5327 26.6875 13.3531 28.0201C13.1727 29.3592 12.5651 30.239 11.7637 30.6299C10.9623 31.0208 9.87468 30.9678 8.66502 30.3066C7.46126 29.6488 6.25904 28.4394 5.4157 26.8004C4.57235 25.1614 4.29731 23.4998 4.47689 22.1672C4.65734 20.8281 5.26494 19.9483 6.06635 19.5574C6.86776 19.1665 7.95535 19.2195 9.16501 19.8806C10.3688 20.5385 11.571 21.7479 12.4143 23.3869Z" stroke="#55370C" stroke-width="2.48062" />
            <path d="M51.4846 26.8005C52.328 25.1615 52.603 23.4999 52.4235 22.1673C52.243 20.8282 51.6354 19.9483 50.834 19.5575C50.0326 19.1666 48.945 19.2196 47.7353 19.8807C46.5316 20.5386 45.3294 21.748 44.486 23.387C43.6427 25.026 43.3676 26.6876 43.5472 28.0202C43.7277 29.3593 44.3352 30.2391 45.1367 30.63C45.9381 31.0209 47.0257 30.9678 48.2353 30.3067C49.4391 29.6489 50.6413 28.4395 51.4846 26.8005Z" stroke="#55370C" stroke-width="2.48062" />
            <path d="M41.827 13.3424C41.5433 16.1485 40.5098 18.5387 39.132 20.142C37.75 21.7502 36.1177 22.4771 34.5659 22.2865C33.014 22.096 31.5669 20.991 30.5399 19.087C29.5161 17.1889 28.9852 14.6065 29.2688 11.8005C29.5525 8.9944 30.586 6.60413 31.9638 5.00091C33.3458 3.39269 34.9781 2.66581 36.5299 2.85635C38.0818 3.04689 39.5289 4.15187 40.5559 6.05589C41.5797 7.95398 42.1106 10.5364 41.827 13.3424Z" stroke="#55370C" stroke-width="2.48062" />
            <path d="M27.911 45.1981L27.6383 45.1334L27.3643 45.1922C23.5567 46.0092 18.8603 46.8534 16.605 47.2491C15.9797 47.3588 15.336 47.2814 14.747 47.0265C13.1009 46.3142 12.3221 44.42 12.9911 42.7559L16.5513 33.8992C20.9423 29.4502 24.2156 27.589 27.4085 27.6157C30.6499 27.6428 34.2144 29.6094 39.189 33.9772L43.1001 41.815C44.1278 43.8745 43.1135 46.3683 40.9402 47.1259C40.3651 47.3264 39.7564 47.3851 39.1646 47.2951C36.9008 46.9511 31.9221 46.1504 27.911 45.1981Z" stroke="#55370C" stroke-width="2.48062" />
          </svg>
        </div>
      </div>
    </header>
  )
}