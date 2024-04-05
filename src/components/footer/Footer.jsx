import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.webp";
import MapImg from "../../images/map.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.connectionContainer}`}>
        <div className={`${styles.contactSection}`}>
          <LazyLoadImage src={Logo} alt="rent a car in baku logo" className={`${styles.logo}`} />
          <div className={`${styles.contactTitle}`}>Contact Options</div>
          <div className={`${styles.contactEmail}`}>mmehemmsd@gmail.com</div>
          <div className={`${styles.contactNumbers}`}>
            <p>+994553151777</p>
          </div>
        </div>
        <div className={`${styles.linksSection}`}>
          <a href="https://maps.app.goo.gl/VNPEHDwREo5ZuVk88">
            <LazyLoadImage src={MapImg} alt="rent a car in baku location"  className={`${styles.mapImage}`}/>
          </a>
        </div>
      </div>
      <div className={`${styles.disclaimer}`}>
        rentacar mm © all rights reserved
      </div>
    </div>
  );
};

export default Footer;
