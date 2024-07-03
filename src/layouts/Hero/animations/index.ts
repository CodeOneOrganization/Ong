import gsap from "gsap";
import styles from "../Hero.module.css"
export default function rendering(){
    animationTitle()
    animatonImage()
    animationParagraph()
}

function animationTitle(){
    gsap.to(".span_inside_heroTitle",{
        y:0,
        ease: "elastic.out(1,9)",
        duration: 1.5
    })
}

function animatonImage(){
    gsap.to(`.${styles.figure}`,{
        opacity: 1,
        width: "100%",
        ease: "elastic.out(1,8)",
        duration: 1.5,
        delay: 1
    })
}

function animationParagraph(){
    gsap.to(`.${styles.paragraphs}`,{
        opacity: 1,
        duration: 1,
        delay: 1.8
    })
}