import { useRef } from "react";
import contactCSS from "./Contact.module.css";
import contactImg from "./../../assets/contact-bg.jpg";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    emailjs
      .sendForm(
        "service_vnryrlf", // Service ID EmailJS
        "template_ashisoc", // Template ID EmailJS
        form.current,
        "T6mUTLjZlHYyPt4E_" // clé publique EmailJS
      )
      .then(
        (result) => {
          console.log("Message envoyé : ", result.text);
          alert("Votre message a été envoyé avec succès !");
        },
        (error) => {
          console.log("Erreur lors de l'envoi : ", error.text);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className={`${contactCSS.contact_wrapper} section`} id="contact">
      <div className="Section_title">
        <p>Construisons Quelque Chose De Beau</p>
        <h2>
          Contactez-moi Pour <br /> Une Aventure Créative !!
        </h2>
      </div>
      <div className={contactCSS.contact_container}>
        <div className={contactCSS.contact_image}>
          <img src={contactImg} alt="Image de contact" />
        </div>
        <div className={contactCSS.contact_details}>
          <div className={contactCSS.detail_wrapper}>
            <div className={contactCSS.detail}>
              <i className="ri-building-line"></i>
              <p>Bordeaux, France</p>
            </div>
            <div className={contactCSS.detail}>
              <i className="ri-mail-line"></i>
              <p>emerick.sg@gmail.com</p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className={contactCSS.form}>
            <h3>Entrons en Contact</h3>
            <div className={contactCSS.input_container}>
              <div className={contactCSS.input_wrapper}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nom"
                  aria-label="Nom"
                  required
                />
              </div>
              <div className={contactCSS.input_wrapper}>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Mail"
                  aria-label="Mail"
                  required
                />
              </div>
              <div className={contactCSS.input_wrapper}>
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Numéro"
                  aria-label="Numéro de téléphone"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                className={contactCSS.textarea}
                required
              ></textarea>
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
