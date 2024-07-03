import styles from "./Hero.module.css";
import dogHero from "../../../public/dogHero.png";
import { useEffect } from "react";
import rendering from "./animations";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import icon from "../../../public/BoneIcon.svg";

export default function Hero() {
  useEffect(() => {
    rendering();

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`.${styles.image}`, {
      top: "6%",
      scrollTrigger: {
        trigger: `.${styles.hero}`,
        start: "50%-=120px 50%-20px",
        markers: true,
        end: `50%+=${window.innerHeight}px 50%`,
        scrub: true,
      },
    });

    return () => { }
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span className="span_inside_heroTitle">p.a.i ong</span>
          </h1>

          <div className={styles.paragraphs}>
            <p className={styles.innerText}>
              🐕🐈 Associe-se e seja mais que <br /> um defensor da causa animal,
              seja <br /> um aumigo. Doações no direct.
              <small className={`${styles.innerText} ${styles.right}`}>Estamos aguardando a sua sua ajuda</small>
            </p>
          </div>

          <figure className={styles.figure}>
            <img className={styles.image} src={dogHero} alt="dog" />
          </figure>
        </div>

      </section>

      <div className={styles.card}>
        <div className={styles.contentCard}>
          <svg
            className={styles.icon}
            width="105"
            height="90"
            viewBox="0 0 105 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
            // filter="url(#filter0_d_590_546)"
            >
              <path
                d="M23.8711 50.3684C27.0686 48.3401 56.1122 29.9163 70.2344 20.9579"
                stroke="#553507"
                stroke-width="4"
              />
              <path
                d="M33.9004 65.4641C37.0979 63.4358 66.1415 45.012 80.2637 36.0536"
                stroke="#553507"
                stroke-width="4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.4151 20.2729C85.7352 17.7796 85.6737 14.6964 84.0186 12.2069C81.5663 8.51825 76.4723 7.42138 72.6171 9.8669C68.7624 12.3121 67.7161 17.303 70.1672 20.9915L66.7895 23.1342C63.0955 17.5761 64.7129 10.1451 70.4026 6.53586C76.0927 2.92631 83.7011 4.50602 87.3963 10.0642C90.3101 14.4469 89.9208 19.9946 86.8362 23.9147L84.4151 20.2729Z"
                fill="#553507"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4486 62.7537C14.5811 62.9163 11.7244 61.6074 10.0701 59.1189C7.61775 55.4303 8.66386 50.4384 12.519 47.9929C16.3742 45.5474 21.4682 46.6443 23.9205 50.3329C24.3045 50.9105 24.6027 51.5201 24.8178 52.1468L28.2704 49.9567C28.0015 49.3522 27.6779 48.7614 27.2982 48.1903C23.603 42.632 15.9946 41.0523 10.3045 44.6619C4.6143 48.2714 2.99709 55.7034 6.69233 61.2616C9.60537 65.6433 14.9502 67.5525 19.8701 66.3961L17.4486 62.7537Z"
                fill="#553507"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.6773 23.6686C89.5445 23.5063 92.4007 24.8152 94.0549 27.3034C96.5072 30.9921 95.4611 35.9839 91.606 38.4294C87.7508 40.875 82.6568 39.7781 80.2045 36.0894C80.0769 35.8975 79.9587 35.702 79.8499 35.5035L76.4638 37.6514C76.5785 37.8471 76.6995 38.0407 76.8268 38.2321C80.522 43.7903 88.1304 45.37 93.8205 41.7605C99.5107 38.1509 101.128 30.719 97.4327 25.1608C94.5198 20.7793 89.1753 18.8701 84.2556 20.0261L86.6773 23.6686Z"
                fill="#553507"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.7084 66.1502C18.3898 68.643 18.4519 71.7249 20.1064 74.2135C22.5587 77.9022 27.6527 78.999 31.5079 76.5535C35.363 74.108 36.4091 69.1161 33.9568 65.4275C33.8287 65.2348 33.6934 65.0491 33.5514 64.8706L36.9375 62.7226C37.0744 62.9052 37.2068 63.0927 37.3346 63.2848C41.0298 68.843 39.4126 76.275 33.7224 79.8845C28.0323 83.4941 20.4239 81.9144 16.7287 76.3562C13.8155 71.9743 14.204 66.428 17.287 62.508L19.7084 66.1502Z"
                fill="#553507"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_590_546"
                x="0.708984"
                y="4.59839"
                width="102.707"
                height="85.2236"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_590_546"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_590_546"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className={styles.cardText}>
            <h4 className={styles.cardContent_title}>+100</h4>
            <small className={styles.cardContent_small}>
              Cães recolhidos e <br /> <span> cuidados</span>
            </small>
          </div>
        </div>

        <div className={styles.contentCard}>
          <svg
            className={styles.icon}
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.2227 44.0251C23.042 44.0124 22.8586 44.0078 22.6727 44.0118C19.4682 44.0805 16.9991 46.664 16.9991 49.6284C16.9991 52.5928 19.4682 55.0706 22.6727 55.0019C22.8586 54.9979 23.042 54.9855 23.2227 54.965V58.975C23.0406 58.9889 22.8573 58.9979 22.6727 59.0019C17.3306 59.1164 13 54.9581 13 49.7142C13 44.4702 17.3306 40.1263 22.6727 40.0118C22.8573 40.0078 23.0406 40.009 23.2227 40.0151V44.0251Z"
              fill="#553507"
            />
            <path
              d="M38.3215 62.1862C40.6796 65.7332 39.6611 70.5058 35.9904 72.8343C32.3198 75.1628 27.442 74.1305 25.0839 70.5835C22.7258 67.0365 23.7442 62.2639 27.4149 59.9354C31.0856 57.6069 35.9633 58.6392 38.3215 62.1862Z"
              stroke="#553507"
              stroke-width="4"
            />
            <path
              d="M69.3215 62.1862C71.6796 65.7332 70.6611 70.5058 66.9904 72.8343C63.3198 75.1628 58.442 74.1305 56.0839 70.5835C53.7258 67.0365 54.7442 62.2639 58.4149 59.9354C62.0856 57.6069 66.9633 58.6392 69.3215 62.1862Z"
              stroke="#553507"
              stroke-width="4"
            />
            <path
              d="M0 2H11.2791C13.7606 2 15.8666 3.81998 16.2263 6.27527L17.0286 11.7518M17.0286 11.7518L20.9737 38.6822C21.3334 41.1375 23.4394 42.9574 25.9209 42.9574H68.2174C70.6382 42.9574 72.7112 41.2233 73.1388 38.8406L76.9442 17.6349C77.4944 14.569 75.1377 11.7518 72.0229 11.7518H17.0286ZM78 57H21.6"
              stroke="#553507"
              stroke-width="4"
            />
          </svg>

          <div className={styles.cardText}>
            <h4 className={styles.cardContent_title}>+100</h4>
            <small className={styles.cardContent_small}>
              <span>Doações de </span> <br /> alimentos semanais
            </small>
          </div>
        </div>

        <div className={styles.contentCard}>
          <svg
            className={styles.icon}
            width="87"
            height="78"
            viewBox="0 0 87 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.7747 17.899C40.4256 22.4 39.7409 26.5431 38.2107 29.5889C36.6757 32.6443 34.4054 34.4183 31.903 34.7256C29.4007 35.0328 26.7055 33.8685 24.3559 31.2901C22.0135 28.7197 20.1755 24.8864 19.5247 20.3854C18.8738 15.8844 19.5585 11.7414 21.0887 8.69552C22.6237 5.64016 24.894 3.86613 27.3963 3.55888C29.8986 3.25164 32.5938 4.41598 34.9435 6.99437C37.2858 9.56474 39.1239 13.398 39.7747 17.899Z"
              stroke="#553507"
              stroke-width="4"
            />
            <path
              d="M19.0633 33.0324C21.0989 35.1981 22.2638 37.6514 22.5777 39.7967C22.8932 41.9526 22.3425 43.5864 21.274 44.5485C20.2055 45.5105 18.4961 45.9117 16.3273 45.4247C14.169 44.94 11.768 43.5997 9.7323 41.434C7.69661 39.2684 6.53176 36.8151 6.21782 34.6697C5.90235 32.5138 6.45309 30.88 7.52157 29.9179C8.59006 28.9559 10.2994 28.5547 12.4683 29.0418C14.6266 29.5265 17.0276 30.8667 19.0633 33.0324Z"
              stroke="#553507"
              stroke-width="4"
            />
            <path
              d="M67.7317 32.5116C65.696 34.6773 64.5311 37.1306 64.2172 39.276C63.9017 41.4318 64.4524 43.0656 65.5209 44.0277C66.5894 44.9898 68.2988 45.391 70.4676 44.9039C72.6259 44.4192 75.0269 43.0789 77.0626 40.9133C79.0983 38.7476 80.2632 36.2943 80.5771 34.1489C80.8926 31.9931 80.3418 30.3593 79.2733 29.3972C78.2049 28.4351 76.4955 28.0339 74.3266 28.521C72.1684 29.0057 69.7673 30.346 67.7317 32.5116Z"
              stroke="#553507"
              stroke-width="4"
            />
            <path
              d="M66.0208 20.3856C65.5634 24.9103 63.8968 28.7647 61.6752 31.3498C59.4466 33.9431 56.8145 35.1152 54.3122 34.8079C51.8099 34.5007 49.4765 32.7189 47.8204 29.6487C46.1694 26.588 45.3134 22.4239 45.7707 17.8992C46.2281 13.3744 47.8947 9.52009 50.1164 6.9349C52.3449 4.34165 54.977 3.16955 57.4793 3.4768C59.9816 3.78404 62.3151 5.56583 63.9711 8.63605C65.6221 11.6967 66.4782 15.8608 66.0208 20.3856Z"
              stroke="#553507"
              stroke-width="4"
            />
            <path
              d="M43.5792 71.753L43.1395 71.6486L42.6976 71.7434C36.5579 73.0608 28.9849 74.4221 25.3482 75.0601L25.6938 77.03L25.3482 75.0601C24.3399 75.237 23.302 75.1122 22.3522 74.7012C19.6979 73.5526 18.4421 70.4983 19.5208 67.8148L25.2616 53.5335C32.3421 46.3594 37.6204 43.3583 42.7689 43.4013C47.9956 43.445 53.7433 46.6162 61.7649 53.6593L68.0715 66.2977C69.7287 69.6186 68.0933 73.6399 64.5887 74.8615C63.6614 75.1847 62.6799 75.2794 61.7256 75.1344C58.0752 74.5796 50.0471 73.2886 43.5792 71.753Z"
              stroke="#553507"
              stroke-width="4"
            />
          </svg>

          <div className={styles.cardText}>
            <h4 className={styles.cardContent_title}>+100</h4>
            <small className={styles.cardContent_small}>
              <span> Adoções de </span> <br />
              animaizinhos
            </small>
          </div>
        </div>

        <div className={styles.contentCard}>
          <svg
            className={styles.icon}
            width="105"
            height="90"
            viewBox="0 0 105 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M23.8711 50.3684C27.0686 48.3401 56.1122 29.9163 70.2344 20.9579"
                stroke="#553507"
                stroke-width="4"
              />
              <path
                d="M33.9004 65.4641C37.0979 63.4358 66.1415 45.012 80.2637 36.0536"
                stroke="#553507"
                stroke-width="4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.4151 20.2729C85.7352 17.7796 85.6737 14.6964 84.0186 12.2069C81.5663 8.51825 76.4723 7.42138 72.6171 9.8669C68.7624 12.3121 67.7161 17.303 70.1672 20.9915L66.7895 23.1342C63.0955 17.5761 64.7129 10.1451 70.4026 6.53586C76.0927 2.92631 83.7011 4.50602 87.3963 10.0642C90.3101 14.4469 89.9208 19.9946 86.8362 23.9147L84.4151 20.2729Z"
                fill="#553507"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4486 62.7537C14.5811 62.9163 11.7244 61.6074 10.0701 59.1189C7.61775 55.4303 8.66386 50.4384 12.519 47.9929C16.3742 45.5474 21.4682 46.6443 23.9205 50.3329C24.3045 50.9105 24.6027 51.5201 24.8178 52.1468L28.2704 49.9567C28.0015 49.3522 27.6779 48.7614 27.2982 48.1903C23.603 42.632 15.9946 41.0523 10.3045 44.6619C4.6143 48.2714 2.99709 55.7034 6.69233 61.2616C9.60537 65.6433 14.9502 67.5525 19.8701 66.3961L17.4486 62.7537Z"
                fill="#553507"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.6773 23.6686C89.5445 23.5063 92.4007 24.8152 94.0549 27.3034C96.5072 30.9921 95.4611 35.9839 91.606 38.4294C87.7508 40.875 82.6568 39.7781 80.2045 36.0894C80.0769 35.8975 79.9587 35.702 79.8499 35.5035L76.4638 37.6514C76.5785 37.8471 76.6995 38.0407 76.8268 38.2321C80.522 43.7903 88.1304 45.37 93.8205 41.7605C99.5107 38.1509 101.128 30.719 97.4327 25.1608C94.5198 20.7793 89.1753 18.8701 84.2556 20.0261L86.6773 23.6686Z"
                fill="#553507"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.7084 66.1502C18.3898 68.643 18.4519 71.7249 20.1064 74.2135C22.5587 77.9022 27.6527 78.999 31.5079 76.5535C35.363 74.108 36.4091 69.1161 33.9568 65.4275C33.8287 65.2348 33.6934 65.0491 33.5514 64.8706L36.9375 62.7226C37.0744 62.9052 37.2068 63.0927 37.3346 63.2848C41.0298 68.843 39.4126 76.275 33.7224 79.8845C28.0323 83.4941 20.4239 81.9144 16.7287 76.3562C13.8155 71.9743 14.204 66.428 17.287 62.508L19.7084 66.1502Z"
                fill="#553507"
              />
            </g>
            <defs>
              <filter
                // id="filter0_d_590_546"
                x="0.708984"
                y="4.59839"
                width="102.707"
                height="85.2236"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_590_546"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_590_546"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className={styles.cardText}>
            <h4 className={styles.cardContent_title}>+100</h4>
            <small className={styles.cardContent_small}>
              anos de
              <br /> <span> experiência</span>
            </small>
          </div>
        </div>

        <div className={styles.backgroundCard}>
          <svg
            width="478"
            height="213"
            viewBox="0 0 478 213"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-25.0463 189.642C-21.7318 93.1998 52.5122 14.132 148.555 4.7611L307.816 -10.7779C395.535 -19.3365 472.596 47.1778 476.947 135.205C477.646 149.335 476.398 163.493 473.24 177.282L471.807 183.538C450.904 274.798 369.707 339.5 276.084 339.5H82.3678C54.3088 339.5 27.3356 328.656 7.08474 309.234C-15.2408 287.823 -27.3928 257.917 -26.3303 227.002L-25.0463 189.642Z"
              fill="#F8A325"
            />
          </svg>

          <svg
            width="347"
            height="213"
            viewBox="0 0 347 213"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5578 74.8202C-17.4288 35.2086 7.44249 -24.0797 58.1166 -29.0154L186.211 -41.4919C249.058 -47.6133 307.579 -8.8045 326.394 51.4718L341.16 98.7749C346.74 116.651 347.847 135.624 344.383 154.029C333.068 214.153 276.457 254.739 215.883 246.153L63.2787 224.522C24.4028 219.011 3.44218 175.923 23.104 141.936C34.5832 122.094 32.6545 97.2308 18.2527 79.3959L14.5578 74.8202Z"
              fill="#F8A325"
            />
          </svg>

          <svg
            width="184"
            height="210"
            viewBox="0 0 184 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.206391 138.691C0.206391 110.451 11.6852 83.4239 32.0073 63.8149L67.6109 29.4607C129.274 -30.0388 232.449 6.19925 243.866 91.1241C245.013 99.6574 245.073 108.325 244.038 116.872C238.351 163.868 200.939 200.696 153.859 205.645L57.3826 215.785C44.1011 217.181 30.794 213.39 20.2422 205.204C7.60254 195.399 0.206391 180.3 0.206391 164.303L0.206391 138.691Z"
              fill="#F8A325"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
