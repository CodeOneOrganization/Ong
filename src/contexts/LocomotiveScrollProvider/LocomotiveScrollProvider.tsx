import { InstanceOptions } from "locomotive-scroll";

import { createContext, useLayoutEffect, useState } from "react";

export const LocomotiveScrollContext = createContext<any>(null!)

interface IExtendOptions extends InstanceOptions {
  autoResize?: boolean
}

interface Props extends React.PropsWithChildren { }
export default function LocomotiveScrollProvider({ children }: Props) {
  const [_, _set] = useState<any>(null!)

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default

      const newLocomotiveScroll = new LocomotiveScroll({
        autoResize: true,
        multiplier: 2,
        lenisOptions: {
          smoothTouch: true,
          touchMultiplier: 1.5,
        },
      } as IExtendOptions)

      _set(newLocomotiveScroll.lenisInstance)
      console.log("locomotive scroll inside useEffect:", newLocomotiveScroll)

      // newLocomotiveScroll?.stop()
    })()

    return () => { }
  }, [])

  console.log("locomotiveScroll", _)

  return (
    <LocomotiveScrollContext.Provider value={_}>
      {children}
    </LocomotiveScrollContext.Provider>
  )
}