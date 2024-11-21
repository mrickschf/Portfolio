import headerCSS from "./../Header/Header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import headerimage1 from "./../../assets/header-image-1.jpg";
import headerimage2 from "./../../assets/header-image-2.jpg";
import headerimage3 from "./../../assets/header-image-3.jpg";
import headerimage4 from "./../../assets/header-image-4.jpg";
import { Autoplay } from "swiper/modules";

function Header() {
  return (
    <div className={`${headerCSS.header_wrapper} section`} id="home">
      <div className={headerCSS.social}>
        <i
          className="ri-github-line"
          onClick={() => {
            window.location.href =
              "https://github.com/mrickschf?tab=repositories";
          }}
        ></i>
        <i
          className="ri-linkedin-line"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/emerick-gharbi/";
          }}
        ></i>
        <i
          className="ri-mail-line"
          onClick={() => {
            window.location.href = "mailto:emerick.sg@gmail.com";
          }}
          aria-label="Envoyer un mail"
        ></i>
      </div>

      <Swiper
        className={headerCSS.swiper}
        speed={1500}
        loop={true}
        autoplay={{ delay: 3400 }}
        modules={Autoplay}
      >
        <SwiperSlide>
          <div className={headerCSS.Header_slide}>
            <div className={headerCSS["header-content"]}>
              <small>Une idée à la fois</small>
              <h2>
                Quand les idées prennent vie <br />
              </h2>
              <p>
                Le plus satifsaisant dans ce métier est quand la petite idée
                devient tangible.
              </p>
              <button
                onClick={() => {
                  window.location.href = "mailto:emerick.sg@gmail.com";
                }}
              >
                Contactez-moi <i className="ri-arrow-right-up-line"></i>
              </button>
            </div>
            <div className={headerCSS.header_images}>
              <div className={headerCSS.header_image}>
                <img src={headerimage1} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage2} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage3} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage4} alt="header-image" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={headerCSS.Header_slide2}>
            <div className={headerCSS["header-content"]}>
              <small>Une idée à la fois</small>
              <h2>
                Quand les idées prennent vie <br />
              </h2>
              <p>
                Le plus satifsaisant dans ce métier est quand la petite idée
                devient tangible.
              </p>
              <button>
                Collaborons<i className="ri-arrow-right-up-line"></i>
              </button>
            </div>
            <div className={headerCSS.header_images}>
              <div className={headerCSS.header_image}>
                <img src={headerimage1} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage2} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage3} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage4} alt="header-image" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
