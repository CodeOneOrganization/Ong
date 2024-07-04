import videoSrc from "../../assets/Guide Dog at Work Video.mp4"
import Parallax from "../../components/Parallax"

import styles from "./LoveVideo.module.css"

export default function LoveVideo() {
  return (
    <section className={styles.loveVideo}>
      <div className="container">
        <div className={styles.wrapper}>
          <Parallax
            element={styles.video}
            trigger={styles.loveVideo}
            start="0% 50%"
            end="100% 50%"
            id="parallax"
            markers={true}
          >
            <video className={styles.video} src={videoSrc} autoPlay muted loop></video>
          </Parallax>
          <div className={styles.bottom}>
            <h2 className="white" >Amor</h2>
            <p className={styles.paragraphs}>
              <span className={`${styles.strophe} small`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <small className={`${styles.strophe} small`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis provident dignissimos odit quis. Velit at fugiat quae. Deserunt, ad sit.
              </small>
              {/* <span className={`${styles.strophe} small`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet facere dicta nemo autem quia velit harum quidem illum cupiditate repellat?
              </span> */}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}