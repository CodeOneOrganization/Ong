import { useContext } from "react";
import { LocomotiveScrollContext } from "../contexts/LocomotiveScrollProvider/LocomotiveScrollProvider";

export default function useLocomotiveScroll(){
  return useContext(LocomotiveScrollContext)
}