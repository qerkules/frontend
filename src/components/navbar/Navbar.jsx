import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logoSection}`}>
        <LazyLoadImage src={Logo} alt="rent a car in baku logo" className={`${styles.logo}`} />
      </div>

      <div className={`${styles.languageSection}`}>
        <p
          className={`${styles.language}`}
          onClick={() => {
            i18n.changeLanguage("az");
          }}
        >
          <LazyLoadImage
            alt="Azerbaijan"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/AZ.svg"
            className={`${styles.flag}`}
          />
          <span>{t("aze")}</span>
        </p>
        <p
          className={`${styles.language}`}
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          <LazyLoadImage
            alt="United States"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            className={`${styles.flag}`}
          />
          <span>{t("eng")}</span>
        </p>
        <p
          className={`${styles.language}`}
          onClick={() => {
            i18n.changeLanguage("ru");
          }}
        >
          <LazyLoadImage
            alt="Russia"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
            className={`${styles.flag}`}
          />
          <span>{t("rus")}</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
