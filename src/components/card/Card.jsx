import React from "react";
import styles from "./styles.module.css";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Card = ({ car }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageSection}`}>
        <img src={car.images[0]} alt="" className={`${styles.image}`} />
      </div>

      <div className={`${styles.titleSection}`}>
        <h2 className={`${styles.title}`}>
          {car.brand} {car.model}{" "}
        </h2>
        <div className={`${styles.subtitleSection}`}>
          <h4 className={`${styles.subtitle}`}>{car.class} </h4>
        </div>
        <div className={`${styles.year}`}>{car.year}&nbsp;</div>
      </div>

      <div className={`${styles.description}`}>
        <div className={`${styles.box}`}>
          <FaCar className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
          <span>{car.mainDetails.type}</span>
        </div>

        <div className={`${styles.box}`}>
          <FaGasPump className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
          <span>{car.mainDetails.fuel}</span>
        </div>

        <div className={`${styles.box}`}>
          <TbManualGearbox className={`${styles.icon}`} />
          &nbsp;&nbsp;
          <span>{car.mainDetails.transmission}</span>
        </div>
      </div>

      <div className={`${styles.priceSection}`}>
        <div className={`${styles.price}`}>
          &nbsp;${car.priceUsd} <span className={`${styles.day}`}>/day</span>{" "}
        </div>
        <a className={`${styles.bookNow}`} href={`/cars/${car.number}`}>
          {t("moreInfo")}
        </a>
      </div>
    </div>
  );
};

export default Card;
