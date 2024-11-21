import footerCSS from "./../Footer/Footer.module.css";

function Footer() {
  return (
    <div className={`${footerCSS.footer_wrapper} section`}>
      <h3>EG</h3>
      <div className={footerCSS.footer_links}>
        <a href="#about">À propos</a>
        <a href="#works">Projets</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={footerCSS.social}>
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
          aria-label="Envoyer un mail" // Pour l'accessibilité
        ></i>
      </div>
    </div>
  );
}

export default Footer;
