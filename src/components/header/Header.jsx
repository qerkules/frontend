import React from "react";
import styles from "./styles.module.css";
import CamryImg from "../../images/camry-header.png";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = ({ click }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.headerSection}`}>
        <div className={`${styles.leftSide}`}>
          <h1 className={`${styles.title}`}>{t("headerTitle")}</h1>
          <p className={`${styles.subTitle}`}>{t("headerSubTitle")}</p>
        </div>
        <div className={`${styles.rightSide}`}>
          <img className={`${styles.image}`} src={CamryImg} alt="" />
        </div>
      </div>
      <div className={`${styles.buttonSection}`}>
        <div className={`${styles.lookCarsBtn}`} onClick={click}>
          <span>{t("headerButton")}</span>{" "}
          <FaAngleDoubleDown className={`${styles.icon}`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
