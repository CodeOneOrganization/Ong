import { useNavigate } from "react-router-dom"
import styles from "./ModalDonation.module.css"
import { useCallback } from "react"

interface Props { }
export default function ModalDonation() {
  const navigate = useNavigate()

  const closeModal = useCallback(() => {
    navigate(`?modal=`)
  }, [])


  return (
    <dialog open className={styles.modal}>
      <video className={styles.video} src="" />
      <button className={styles.close} onClick={closeModal}>X</button>
    </dialog>
  )
}