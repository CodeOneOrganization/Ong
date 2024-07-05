import { useEffect, useState } from "react";
import Hero from "./layouts/Hero";

import LocomotiveScroll, { InstanceOptions } from "locomotive-scroll"

import Adoption from "./layouts/Adoption";
import Tile from "./layouts/Tile";
import LoveVideo from "./layouts/LoveVideo";
import WhoWeAre from "./layouts/WhoWeAre";
import Scene from "./layouts/Scene";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import ScrollDirectionProxy from "./components/ScrollDirectionProxy/ScrollDirectionProxy";
interface extendOptions extends InstanceOptions {
  autoResize?: boolean
}

export default function App() {
  const [locomotive, setLocomotive] = useState<LocomotiveScroll>()

  useEffect(() => {
    ;(async () => {
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
      <ScrollDirectionProxy />
      <Header />
      <Scene />
      <Tile />
      <Hero/>
      <Adoption />
      <LoveVideo />
      <WhoWeAre />
      <Footer/>
    </main>
  )
}


