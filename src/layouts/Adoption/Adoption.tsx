import styles from "./Adoption.module.css"

import Slide from "../../components/Slide/Slide"

import AdoptionCard from "./AdoptionCard"

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.4721 3.52873C44.2119 1.33498 42.2225 -0.232416 40.0287 0.0278619L4.27946 4.2693C2.08571 4.52957 0.518315 6.51896 0.778591 8.71271C1.03887 10.9065 3.02825 12.4739 5.222 12.2136L36.9991 8.44341L40.7693 40.2205C41.0296 42.4143 43.019 43.9817 45.2127 43.7214C47.4065 43.4611 48.9739 41.4718 48.7136 39.278L44.4721 3.52873ZM17.642 39.4755L43.642 6.47549L37.358 1.52451L11.358 34.5245L17.642 39.4755Z" fill="#F1A106" />
    </svg>
  )
}

const length = 8

export default function Adoption() {

  

  return (
    <section className={styles.adoption} data-slide-element id="adoption">
      <div className="container">
        <Slide>
          <div className={styles.wrapper} data-slide-wrapper>
            {Array.from({ length }, (_, i) => <AdoptionCard key={`AdoptionCard_${i}`} />)}
          </div>
        </Slide>
        <div className={styles.bottom}>
          <a href="https://www.instagram.com/pai.ong/?igsh=OGV5OXQ1ZjJycXJn" target="_blank" title="ir para o instagram" className={styles.buttonAdoption}>
            Adote
            <br />
            <Arrow />
          </a>
          <svg className={styles.spot} width="836" height="583" viewBox="0 0 836 583" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.89706 334.479C8.39314 174.524 131.529 43.3839 290.821 27.8383L554.751 2.08113C700.232 -12.1165 828.039 98.1974 835.255 244.191C836.413 267.619 834.345 291.095 829.109 313.96L826.734 324.332C792.074 475.687 657.41 583 502.137 583H181.021C134.484 583 89.7485 565.012 56.1653 532.797C19.1524 497.291 -0.993457 447.706 0.767819 396.447L2.89706 334.479Z" fill="#FEBC5B" />
          </svg>
          <div className={styles.text}>
            <p className={styles.innerText}>
              Adotar um grande amigo pode te ajudar em diversos deveres de casa.
            </p>
            <small className={styles.small}>sua adoção traz felicidade</small>
          </div>
        </div>
      </div>
    </section>
  )
}