import React from "react";
import styles from "./styles.module.css";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageSection}`}>
        <img src={car.photo} alt="" className={`${styles.image}`} />
      </div>

      <div className={`${styles.titleSection}`}>
        <h2 className={`${styles.title}`}>{car.name}</h2>
        <div className={`${styles.subtitleSection}`}>
          <h4 className={`${styles.subtitle}`}>{car.class} </h4>
          <span className={`${styles.year}`}>{car.year}&nbsp;</span>
        </div>
      </div>

      <div className={`${styles.description}`}>
        <div className={`${styles.box}`}>
          <FaCar className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
          <span>{car.type}</span>
        </div>
        <div className={`${styles.box}`}>
          <FaGasPump className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
          <span>{car.fuel}</span>
        </div>
        <div className={`${styles.box}`}>
          <TbManualGearbox className={`${styles.icon}`} />
          &nbsp;&nbsp;
          <span>Auto</span>
        </div>
      </div>

      <div className={`${styles.priceSection}`}>
        <div className={`${styles.price}`}>
          &nbsp;${car.price} <span className={`${styles.day}`}>/day</span>{" "}
        </div>
        <div
          className={`${styles.bookNow}`}
          onClick={() => {
            navigate(car.link);
          }}
        >
          More Info
        </div>
      </div>
    </div>
  );
};

export default Card;
