import gsap from "gsap";

interface IProps {
  className: string;
}

export function titleAnimation({ className }: IProps) {
  gsap.to(`.${className}`, {
    y: 0,
    stagger: 0.2,
    opacity: 1,
    duration: 2,
    ease: "elastic.out(1,9)",
  });
}
export function titleAnimationOut({ className }: IProps) {
  gsap.to(`.${className}`, {
    y: "100%",
    stagger: 0.2,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1,9)",
  });
}
