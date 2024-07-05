import { useEffect } from "react";
import styles from "./BibleVerse.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { titleAnimation, titleAnimationOut } from "./animations";

export default function BibleVerse() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: `.${styles.bibleVerse}`,
      start: "0% 50%",
      end: "300% 50%",
      scrub: true,

      onEnter: ()=>{
        titleAnimation({className: "span_bibleVerse_title"});
      },
      onEnterBack: () =>{
        titleAnimation({className: "span_bibleVerse_title"});
      },
      onLeave: () =>{
        titleAnimationOut({className: "span_bibleVerse_title"});
      },
      onLeaveBack: ()=>{
        titleAnimationOut({className: "span_bibleVerse_title"});

      }
    });
    ScrollTrigger.create({
      trigger: `.${styles.bottom}`,
      start: "-20% 50%",
      end: "250% 50%",
      scrub: true,

      onEnter: ()=>{
        titleAnimation({className: "span_bibleVerse_title2"});
      },
      onEnterBack: () =>{
        titleAnimation({className: "span_bibleVerse_title2"});
      },
      onLeave: () =>{
        titleAnimationOut({className: "span_bibleVerse_title2"});
      },
      onLeaveBack: ()=>{
        titleAnimationOut({className: "span_bibleVerse_title2"});

      }
    });

    return () => {
      gsap.killTweensOf(".span_bibleVerse_title");
      gsap.killTweensOf(".span_bibleVerse_title2");
    };
  }, []);

  return (
    <section className={`${styles.bibleVerse} container`}>
      <div className={styles.up}>
        <h3 className={styles.title}>
          <span className="span_bibleVerse_title">“Porque meu é todo </span>{" "}
          <span className="span_bibleVerse_title"> animal da selva, e o </span>{" "}
          <span className="span_bibleVerse_title">gado sobre milhares </span>{" "}
          <span className="span_bibleVerse_title">de montanhas.</span>
        </h3>
      </div>

      <div className={styles.bottom}>
        <h3 className={styles.title}>
          <span className="span_bibleVerse_title2">
            {" "}
            Conheço todas as aves{" "}
          </span>{" "}
          <span className="span_bibleVerse_title2">dos montes; e </span>{" "}
          <span className="span_bibleVerse_title2"> minhas são todas as </span>{" "}
          <span className="span_bibleVerse_title2"> feras do campo.”</span>
        </h3>
      </div>

      <h4 className={styles.verse}>Salmos 50: 10,11</h4>
    </section>
  );
}
