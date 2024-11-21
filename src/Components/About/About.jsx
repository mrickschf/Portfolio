import aboutCSS from "./../About/About.module.css";
import profileImg from "./../../assets/profile.jpg";
import about_img from "./../../assets/About-img.jpg";
import logoreact from "./../../assets/logoreact.webp";
import logotailwind from "./../../assets/logotailwind.png";
import logojs from "./../../assets/logojs.png";

function About() {
  return (
    <>
      <div className={`${aboutCSS.About_wrapper} section`} id="about">
        <div className="Section_title">
          <p>Développement de sites webs créatifs</p>
          <h2>
            Salut ! Je suis <span>Emerick</span>, développeur web français,
            <br /> originaire de Bordeaux.
          </h2>
        </div>
        <div className={aboutCSS.about_container}>
          <div className={aboutCSS.about_details}>
            <h2>10+</h2>
            <small>Projets effectués</small>
            <p>
              Pris de passion pour ce domaine, je ne cesse d'apprendre et de
              faire évoluer mes compétences à chaque projet.
            </p>
            <div className={aboutCSS.profile}>
              <img src={profileImg} alt="profile-image" />
              <i className="ri-arrow-right-up-line"></i>
            </div>
          </div>
          <div className={aboutCSS.about_content}>
            <div className={aboutCSS.about_image}>
              <img src={about_img} alt="about-image" />
              <div className={aboutCSS.about_info}>
                <h3>Développeur web</h3>
              </div>
            </div>
            <div className={aboutCSS.about_detail}>
              <p>Mes outils de créations</p>
              <h3>
                Les outils utilisés <br />
                Pour que la magie opère
              </h3>
              <p>
                Tous mes projets sont faits avec React, qui est selon moi, la
                librairie la plus complète à ce jour.
              </p>
              <div className={aboutCSS.Tools}>
                <div className={aboutCSS.Tool}>
                  <img src={logoreact} alt="react" />
                  <p>React</p>
                  <img src={logotailwind} alt="tailwind" />
                  <p>Tailwind</p>
                  <img src={logojs} alt="javascript" />
                  <p>Javascript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
