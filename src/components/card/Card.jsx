import React from "react";
import styles from "./styles.module.css";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ car }) => {
  const { t, i18n } = useTranslation();

  const carClass = () => {
    if (car.class === "Economy Class") {
      return t("ecoClass");
    } else if (car.class === "Middle Class") {
      return t("middleClass");
    } else if (car.class === "Suv Class") {
      return t("suvClass");
    } else if (car.class === "Premium Class") {
      return t("premiumClass");
    }
  };

  const fuelType = () => {
    if (car.mainDetails.fuel === "Gas") {
      return t("gas");
    } else if (car.mainDetails.fuel === "Diesel") {
      return t("diesel");
    }
  };

  const carType = () => {
    if (car.mainDetails.type === "Sedan") {
      return t("sedan");
    } else if (car.mainDetails.type === "Suv") {
      return t("suv");
    }
  };
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageSection}`}>
        <img
          src={car.images[0]}
          alt={`rent a car in baku ${car.brand}`}
          className={`${styles.image}`}
          loading="eager"
        />
      </div>

      <div className={`${styles.titleSection}`}>
        <h2 className={`${styles.title}`}>
          {car.brand} {car.model}{" "}
        </h2>
        <div className={`${styles.subtitleSection}`}>
          <h4 className={`${styles.subtitle}`}>{carClass()}</h4>
        </div>
        <div className={`${styles.year}`}>{car.year}&nbsp;</div>
      </div>

      <div className={`${styles.description}`}>
        <div className={`${styles.box}`}>
          <FaCar className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
          <span>{carType()}</span>
        </div>

        <div className={`${styles.box}`}>
          <FaGasPump className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
          <span>{fuelType()}</span>
        </div>

        <div className={`${styles.box}`}>
          <TbManualGearbox className={`${styles.icon}`} />
          &nbsp;&nbsp;
          <span>{t("auto")}</span>
        </div>
      </div>

      <div className={`${styles.priceSection}`}>
        <div className={`${styles.price}`}>
          {i18n.language === "az" ? `₼${car.priceAzn}` : `$ ${car.priceUsd}`}{" "}
          <span className={`${styles.day}`}>/{t("day")}</span>{" "}
        </div>
        <a className={`${styles.bookNow}`} href={`/cars/${car.number}`}>
          {t("moreInfo")}
        </a>
      </div>
    </div>
  );
};

export default Card;
