import styles from "./Footer.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";
import { rendering, backToNormal } from "./animations";

export default function Footer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: `.${styles.footer}`,
      start: "20% 50%",
      end: "100% 50%",
      onEnter: () => {
        rendering();
      },
      onEnterBack: () => {
        rendering();
      },
      onLeave: () => {
        backToNormal();
      },

      onLeaveBack: () => {
        backToNormal();
      },
    });
  }, []);

  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.containerFooter}>
        <div className={`${styles.sitemap} col`}>
          <h4 className={styles.title}>
            <span className="span_inside_footerTitle">sitemap</span>
          </h4>
          <p className={`${styles.link} shake`}>
            <span className="span_insideLink">Doar</span>
          </p>
          <p className={`${styles.link} shake`}>
            <span className="span_insideLink">Sobre</span>
          </p>
          <p className={`${styles.link} shake`}>
            <span className="span_insideLink">Adotar</span>
          </p>
        </div>

        <div className={`${styles.contact} col`}>
          <h4 className={styles.title}>
            <span className="span_inside_footerTitle">contact</span>
          </h4>
          <a href="" className={`${styles.link} shake`}>
            <span className="span_insideLink">WhatsApp</span>
          </a>
          <a href="" className={`${styles.link} shake`}>
            <span className="span_insideLink">Instagram</span>
          </a>
        </div>
      </div>

      <h1 className={styles.logo}>
        <span className="span_inside_footerLogo">p.a.i</span>

        <svg
          className="svg"
          width="120"
          height="190"
          viewBox="0 0 120 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 149.621L21.3285 179L76.2555 95.9711L90.0392 48.8768C90.9625 45.7222 89.7714 42.3301 87.0787 40.4451L78.8102 34.6572L6 149.621Z"
            fill="white"
            stroke="white"
            stroke-width="10.219"
          />
          <path
            d="M97.9715 177.722L60.9277 124.073L76.2562 98.5254L113.3 147.066L97.9715 177.722Z"
            fill="white"
            stroke="white"
            stroke-width="10.219"
          />
          <path
            d="M22.6174 55.0949L41.7671 90.8613L53.2634 67.8686C44.3641 57.9211 41.3095 46.8986 36.6576 33.8586L35.8625 30.3458C41.2955 28.8486 47.212 28.0873 53.2634 26.9927L67.3145 28.2701C76.5841 30.8432 81.923 34.3388 88.753 43.4604C89.2009 44.0585 90.2113 43.5398 89.9626 42.8351L85.1412 29.1743C84.3324 26.8828 83.1655 24.734 81.6838 22.8079L76.0279 15.4551C72.8668 11.3457 68.4096 8.42523 63.3798 7.16779L60.1898 6.37029C54.1313 4.85567 47.7174 5.87056 42.4225 9.18166L36.1307 13.1161C32.3154 15.502 29.2262 18.9319 27.5316 23.1006C23.1054 33.989 21.77 41.979 22.6174 55.0949Z"
            fill="white"
          />
          <path
            d="M23.8839 35.9343C27.4441 33.2267 31.4973 31.5487 35.8625 30.3458M35.8625 30.3458C41.2955 28.8486 47.212 28.0873 53.2634 26.9927L67.3145 28.2701C76.5841 30.8432 81.923 34.3388 88.753 43.4603C89.2009 44.0585 90.2113 43.5398 89.9626 42.8351L85.1412 29.1743C84.3324 26.8828 83.1655 24.734 81.6838 22.8079L76.0279 15.4551C72.8668 11.3457 68.4096 8.42523 63.3798 7.16779L60.1898 6.37029C54.1313 4.85567 47.7174 5.87056 42.4225 9.18166L36.1307 13.1161C32.3154 15.502 29.2262 18.9319 27.5316 23.1006C23.1054 33.989 21.77 41.979 22.6174 55.0949L41.7671 90.8613L53.2634 67.8686C44.3641 57.9211 41.3095 46.8986 36.6576 33.8586L35.8625 30.3458Z"
            stroke="white"
            stroke-width="10.219"
          />
        </svg>
      </h1>

      <div className={styles.bottom}>
        <p className="small">Todos os direitos reservados @ 2024</p>
        <p className="small">Developed by SynergyCode</p>
      </div>

      <div className={styles.svg1}>
        <svg
          width="668"
          height="574"
          viewBox="0 0 668 574"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-147.356 10.9616C-74.7753 -131.684 92.2456 -198.498 243.184 -145.267L502.909 -53.6701C635.513 -6.90504 702.091 141.226 649.03 271.438L647.377 275.496C637.101 300.712 631.541 327.6 630.972 354.823C627.434 524.038 443.781 627.523 297.206 542.893L-98.2281 314.576C-136.055 292.735 -165.285 258.626 -181.074 217.9C-200.77 167.095 -197.905 110.306 -173.194 61.742L-147.356 10.9616Z"
            fill="#FEBC5B"
          />
        </svg>
      </div>

      <div className={styles.svg2}>
        <svg
          width="728"
          height="209"
          viewBox="0 0 728 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.89706 334.479C8.39314 174.524 131.529 43.3839 290.821 27.8383L554.751 2.08113C700.232 -12.1165 828.039 98.1974 835.255 244.191C836.413 267.619 834.345 291.095 829.109 313.96L826.734 324.332C792.074 475.687 657.41 583 502.137 583H181.021C134.484 583 89.7485 565.012 56.1653 532.797C19.1524 497.291 -0.993457 447.706 0.767819 396.447L2.89706 334.479Z"
            fill="#FEBC5B"
          />
        </svg>
      </div>
    </footer>
  );
}
