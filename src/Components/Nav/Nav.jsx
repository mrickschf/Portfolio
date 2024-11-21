import { useEffect, useRef, useState } from "react";
import navCSS from "./../Nav/Nav.module.css";

function Nav() {
  const menu = useRef(null);
  const nav = useRef(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const menuHandler = () => {
    if (menu.current) {
      menu.current.classList.toggle(navCSS.showNav);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas, rendre visible
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scroll vers le haut, masquer
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Ajouter un listener pour le scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyer le listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`${navCSS.nav_wrapper} ${navCSS.navColor} ${
        isVisible ? navCSS.visible : navCSS.hidden
      }`}
      ref={nav}
      id="home"
    >
      <div className={navCSS.logo}>
        <a href="#">EG</a>
      </div>
      <ul ref={menu}>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#works">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={navCSS.nav_btns}>
        <button
          onClick={() => {
            window.location.href = "mailto:emerick.sg@gmail.com";
          }}
        >
          Collaborons <i className="ri-arrow-right-up-line"></i>
        </button>
        <i
          className="ri-menu-4-line"
          id={navCSS.bars}
          onClick={menuHandler}
        ></i>
      </div>
    </div>
  );
}

export default Nav;
