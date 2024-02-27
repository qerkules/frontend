import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.connectionContainer}`}>
        <div className={`${styles.logoSection}`}>
          <img src={Logo} alt="" className={`${styles.logo}`} />
        </div>
        <div className={`${styles.linksSection}`}>
          <div className={`${styles.link}`}>About Us</div>
          <div className={`${styles.link}`}>About Us</div>
          <div className={`${styles.link}`}>About Us</div>
        </div>
        <div className={`${styles.contactSection}`}>
          <div className={`${styles.contactTitle}`}>Contact Options</div>
          <div className={`${styles.contactEmail}`}>mmehemmsd@gmail.com</div>
          <div className={`${styles.contactNumbers}`}>
            <p>+994553151777</p>
          </div>
        </div>
      </div>
      <div className={`${styles.disclaimer}`}>
        rentacar mm © all rights reserved
      </div>
    </div>
  );
};

export default Footer;
