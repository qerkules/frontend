import React from "react";
import styles from "./styles.module.css";
import Hyundai from "../../images/logos/hyundai.png"
import Toyota from "../../images/logos/toyota.png"
import Mercedes from "../../images/logos/mercedes.png"
import Kia from "../../images/logos/kia.png"
import Bmw from "../../images/logos/bmw.png"

const BrandBanner = () => {
  return (
    <div className={`${styles.container}`}>
      <img src={Mercedes} alt="" className={`${styles.image} ${styles.margin}`} />
      <img src={Hyundai} alt="" className={`${styles.image} ${styles.margin}`} />
      <img src={Toyota} alt="" className={`${styles.image} ${styles.margin}`} />
      <img src={Kia} alt="" className={`${styles.image} ${styles.margin}`} />
      <img src={Bmw} alt="" className={`${styles.image}`} />
    </div>
  );
};

export default BrandBanner;
