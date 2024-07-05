import { useLocation } from "react-router-dom";

import ModalDonation from "./ModalDonation";
import { useEffect } from "react";


interface Props { key: string }
export default function ModalController({  }: Props){
  const location = useLocation()
  // const locomotiveScroll = useLocomotiveScroll()
  const searchParams = new URLSearchParams(location.search)
  const modal = searchParams.get("modal")

  useEffect(() => {
    function onModalChange(){
      
    }
  }, [location.search])

  console.log("current output from useLocation key:", modal)

  switch (modal) {
    case "donations":
      return <ModalDonation />
    default:
      return null
  }
}