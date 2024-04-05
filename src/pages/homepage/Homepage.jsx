import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Ourservices from "../../components/ouservices/Ourservices";
import BrandBanner from "../../components/bradBanner/BrandBanner";
import { useGetCarsByClassQuery } from "../../state/api";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Homepage = () => {
  const [selectedClass, setClass] = useState("all");
  const ref = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { data } = useGetCarsByClassQuery(selectedClass);

  const availableCars = () => {
    if (data !== undefined) {
      return data.map((car) => <Card car={car} key={car.number} />);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <Helmet>
        <title>Home Page - Rent a car in Baku</title>
        <meta
          name="description"
          content="Welcome to Rent a car in Baku Homepage. You can book with one click which car you want."
        />
      </Helmet>
      <Header click={handleClick} />
      <Ourservices />
      <BrandBanner />
      <div className={`${styles.cardSection}`}>
        <h4 ref={ref} className={`${styles.cardTitle}`}>
          {t("availableCars")}
        </h4>
        <div className={`${styles.classSection}`}>
          <div
            className={`${styles.classContainer} ${
              selectedClass === "Econom Class" && styles.selected
            }`}
            onClick={() => setClass("Econom Class")}
          >
            {t("ecoRent")}
          </div>
          <div
            className={`${styles.classContainer} ${
              selectedClass === "Middle Class" && styles.selected
            }`}
            onClick={() => setClass("Middle Class")}
          >
            {t("middleRent")}
          </div>
          <div
            className={`${styles.classContainer} ${
              selectedClass === "Premium Class" && styles.selected
            }`}
            onClick={() => setClass("Premium Class")}
          >
            {t("premiumRent")}
          </div>
          <div
            className={`${styles.classContainer} ${
              selectedClass === "Suv Class" && styles.selected
            }`}
            onClick={() => setClass("Suv Class")}
          >
            {t("suvRent")}
          </div>
        </div>

        <div className={`${styles.cardContainer}`}>{availableCars()}</div>
      </div>
    </div>
  );
};

export default Homepage;
