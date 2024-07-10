import { useContext } from "react";
import { SceneCanvasContext } from "../contexts/SceneCanvasProvider/SceneCanvasProvider";


export default function useSceneCanvas(){
  return useContext(SceneCanvasContext)
}