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
        <h4 className={`${styles.subtitle}`}>&nbsp;{car.class}</h4>
      </div>

      <div className={`${styles.description}`}>
        <div className={`${styles.box}`}>
          <FaCar /> &nbsp;&nbsp; <span>{car.type}</span>
        </div>
        <div className={`${styles.box}`}>
          <FaGasPump /> &nbsp;&nbsp; <span>{car.fuel}</span>
        </div>
        <div className={`${styles.box}`}>
          <TbManualGearbox />
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
