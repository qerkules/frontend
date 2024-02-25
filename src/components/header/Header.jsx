import React from "react";
import styles from "./styles.module.css";
import CamryImg from "../../images/camry-header.png";
import { FaAngleDoubleDown } from "react-icons/fa";
const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.headerSection}`}>
        <div className={`${styles.leftSide}`}>
          <h1 className={`${styles.title}`}>
            Find, book and rent <br /> a car in Baku <span className={`${styles.highlight}`}>easily</span>
          </h1>
          <p className={`${styles.subTitle}`}>
            Search for your budget passed car and book one click,Search for your
            budget passed car and book one click
          </p>
        </div>
        <div className={`${styles.rightSide}`}>
          <img className={`${styles.image}`} src={CamryImg} alt="" />
        </div>
      </div>
      <div className={`${styles.buttonSection}`}>
        <div className={`${styles.lookCarsBtn}`}>
          <span>Look Available Cars</span>{" "}
          <FaAngleDoubleDown className={`${styles.icon}`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
