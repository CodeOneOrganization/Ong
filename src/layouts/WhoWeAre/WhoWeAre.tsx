import yellowCat from "../../assets/yellow-cat.jpg"

import styles from "./WhoWeAre.module.css"

export default function WhoWeAre() {
  return (
    <section className={styles.whoWeAre}>
      <div className="container">
        <h2 className={`${styles.title} white`}>Quem somos?</h2>
        <img className={styles.image} src={yellowCat} alt="" />
        <p className={styles.paragraphs}>
          <span className={styles.strophe}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores accusamus animi hic perferendis architecto dolore? Perspiciatis sed ea incidunt!
          </span>
        </p>
      </div>
    </section>
  )
}