import styles from "./ModalDonation.module.css"

interface Props { }
export default function ModalDonation() {
  return (
    <dialog open className={styles.modal}>
      <video className={styles.video} src="" />
    </dialog>
  )
}