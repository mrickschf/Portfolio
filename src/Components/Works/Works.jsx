import worksCSS from "./../Works/Works.module.css";
import gallery01 from "./../../assets/Gallery01.gif";
import gallery02 from "./../../assets/Gallery02.gif";
import gallery03 from "./../../assets/Gallery03.gif";

function Works() {
  const images = [gallery01, gallery02, gallery03];

  return (
    <div className={worksCSS.Gallery} id="works">
      {images.map((image, index) => (
        <div className={worksCSS.gallery_img} key={index}>
          <img src={image} alt={`works-gallery-image-${index + 1}`} />
          <span className={worksCSS.number}>{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default Works;
