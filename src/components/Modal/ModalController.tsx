import { useLocation, useNavigate } from "react-router-dom";

import ModalDonation from "./ModalDonation";
import { useEffect } from "react";


interface Props { }
export default function ModalController({ }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  // const locomotiveScroll = useLocomotiveScroll()
  const searchParams = new URLSearchParams(location.search)
  const modal = searchParams.get("modal")

  useEffect(() => {
    function onModalChange() {

    }
  }, [location.search])


  useEffect(() => {
    let isMounting = true

    function showPopup() {
      const modal = "donations"
      navigate(`?modal=${modal}`)
    }

    if (isMounting) {
      const popup = setTimeout(showPopup, 5000)
    } 
      

    return () => {
      isMounting = false  

      navigate(`?modal=`)
    }

  }, [])

  console.log("current output from useLocation key:", modal)

  switch (modal) {
    case "donations":
      return <ModalDonation />
    default:
      return null
  }
}