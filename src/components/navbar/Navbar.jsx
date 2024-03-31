import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logoSection}`}>
        <img src={Logo} alt="" className={`${styles.logo}`} />
      </div>

      <div className={`${styles.languageSection}`}>
        <p
          className={`${styles.language}`}
          onClick={() => {
            i18n.changeLanguage("az");
          }}
        >
          <img
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AZ.svg"
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
          <img
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
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
          <img
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
            className={`${styles.flag}`}
          />
          <span>{t("rus")}</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
