import styles from "./AdoptionCard.module.css"

function Seal() {
  return (
    <div className={styles.seal}>
      <svg className={styles.arrow} width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.88725 1.29412H2.6287L2.43132 1.46112C1.11056 2.57858 1.11056 4.61495 2.43132 5.73241L2.6287 5.89941H2.88725H15.042C16.2961 5.89941 16.9276 7.4126 16.0455 8.30411L5.64527 18.8158L5.12754 19.3391L5.67206 19.8344L8.07402 22.0195L8.56578 22.4668L9.04179 22.0028L19.5145 11.7923C20.4089 10.9203 21.9118 11.554 21.9118 12.8032V24.4873V24.7839L22.1237 24.9915C23.256 26.1008 25.0675 26.1008 26.1999 24.9915L26.4118 24.7839V24.4873V2V1.29412H25.7059H2.88725Z" fill="#EDB158" stroke="#553507" stroke-width="1.41176" />
      </svg>
      <svg className={styles.spot} width="92" height="90" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.5 39.5C91.5 62.9721 66.9721 90 43.5 90C20.0279 90 0 65.4721 0 42C0 18.5279 9.5279 0 33 0C56.4721 0 91.5 16.0279 91.5 39.5Z" fill="#F1A106" />
      </svg>
    </div>
  )
}

export default function AdoptionCard() {

  const handleGoInstagram = () => {
    window.open("https://www.instagram.com/pai.ong/?igsh=OGV5OXQ1ZjJycXJn")
  }

  return (
    <figure onClick={handleGoInstagram} className={styles.card} data-slide-item >
      <Seal />
      <img className={styles.image} src="" alt="" />
    </figure>
  )
}