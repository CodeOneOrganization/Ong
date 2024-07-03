import { useEffect, useState } from "react";
import Hero from "./layouts/Hero";

import LocomotiveScroll, { InstanceOptions } from "locomotive-scroll"

import Adoption from "./layouts/Adoption";
import Tile from "./layouts/Tile";
import LoveVideo from "./layouts/LoveVideo";
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

    return () => {
      locomotive?.stop()
    }
  }, [])
  return (
    <main>
      <Tile />
      <Hero/>
      <Adoption />
      <LoveVideo />
    </main>
  )
}


