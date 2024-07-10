import { createContext, MutableRefObject, useEffect, useRef } from "react"

export const SceneCanvasContext = createContext<MutableRefObject<HTMLCanvasElement>>(null)
interface Props extends React.PropsWithChildren {}
export default function SceneCanvasProvider({children}: Props){
  const canvasRef = useRef<HTMLCanvasElement>(null!)

  useEffect(() => {
    canvasRef.current = document.getElementById("scene")! as HTMLCanvasElement
  }, [])

  return (
    <SceneCanvasContext.Provider value={canvasRef}>
      {children}
    </SceneCanvasContext.Provider>
  )
}