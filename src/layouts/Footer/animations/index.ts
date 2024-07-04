import gsap from "gsap";
import styles from "../Footer.module.css";

export function rendering() {
  animationTitle();
  animationLink();
  animationLogo();
}

export function backToNormal() {
  animationTitleBack();
  animationLinkBack();
}

function animationTitle() {
  gsap.to(".span_inside_footerTitle", {
    y: 0,
    ease: "elastic.out(1,9)",
    duration: 1.5,
    stagger: 0.1,
  });
}
function animationLogo() {
  gsap.to(".svg", {
    opacity: 1,
    right: "20vw",
    duration: 2,
    ease: "elastic.out(1,9)",
  });

  gsap.to(".span_inside_footerLogo", {
    y: 0,
    ease: "elastic.out(1,9)",
    duration: 1.5,
    delay: 0.5,
  });
}
function animationLink() {
  gsap.to(".span_insideLink", {
    y: 0,
    ease: "elastic.out(1,9)",
    duration: 1.5,
    stagger: 0.1,
    delay: 0.2,
  });
}

function animationTitleBack() {
  gsap.to(".span_inside_footerTitle", {
    y: "100%",
    ease: "elastic.out(1,9)",
    duration: 1,
  });
}
function animationLinkBack() {
  gsap.to(".span_insideLink", {
    y: "100%",
    ease: "elastic.out(1,9)",
    duration: 1,
  });
}
