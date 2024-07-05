import { useEffect, useState } from "react";
import Hero from "./layouts/Hero";

import LocomotiveScroll, { InstanceOptions } from "locomotive-scroll"

import Adoption from "./layouts/Adoption";
import Tile from "./layouts/Tile";
import LoveVideo from "./layouts/LoveVideo";
import WhoWeAre from "./layouts/WhoWeAre";
import Scene from "./layouts/Scene";
import Footer from "./layouts/Footer";
<<<<<<< HEAD
import Header from "./layouts/Header";

import ScrollDirectionProxy from "./components/ScrollDirectionProxy/ScrollDirectionProxy";
import ModalController from "./components/Modal/ModalController";
import { BrowserRouter, Route, Router } from "react-router-dom";
=======
import BibleVerse from "./layouts/BibleVerse";
import Support from "./layouts/Support";
>>>>>>> 3858aeef713cb58f5a4b5b6e45ff9e87c375d4cb
interface extendOptions extends InstanceOptions {
  autoResize?: boolean
}

export default function App() {
  const [locomotive, setLocomotive] = useState<LocomotiveScroll>()

  useEffect(() => {
    ; (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default

      const newLocomotiveScroll = new LocomotiveScroll({
        autoResize: true,
        multiplier: 2,
        lenisOptions: {
          smoothTouch: true,
          touchMultiplier: 1.5,
        },
      } as extendOptions)

      setLocomotive(newLocomotiveScroll)
    })()

    locomotive?.stop()

    return () => {
      locomotive?.destroy()
    }
  }, [])
  return (
    <main>
<<<<<<< HEAD
          <ModalController />
          <ScrollDirectionProxy />
          <Header />
          <Scene />
          <Tile />
          <Hero />
          <Adoption />
          <LoveVideo />
          {/* <WhoWeAre /> */}
          <Footer />
=======
      <Tile />
      <Hero/>
      <Adoption />
      <LoveVideo />
      <Support/>
      <BibleVerse/>
      <Footer/>
>>>>>>> 3858aeef713cb58f5a4b5b6e45ff9e87c375d4cb
    </main>
  )
}


