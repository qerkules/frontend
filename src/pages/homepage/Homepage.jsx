import React, { useRef } from "react";
import styles from "./styles.module.css";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Ourservices from "../../components/ouservices/Ourservices";
import BrandBanner from "../../components/bradBanner/BrandBanner";
import { cars } from "../../data/data";

const Homepage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.container}`}>
      <Header click={handleClick} />
      <Ourservices />
      <BrandBanner />
      <div className={`${styles.cardSection}`}>
        <h4 ref={ref} className={`${styles.cardTitle}`}>
          Available Cars
        </h4>

        <div className={`${styles.cardContainer}`}>
          {cars.map((car) => {
            return <Card car={car} />;
          })}
        </div>

        <div className={`${styles.btnContainer}`}>
          <div className={`${styles.showAllCarsBtn}`}>Show All Cars</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
