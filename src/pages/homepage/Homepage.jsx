import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Ourservices from "../../components/ouservices/Ourservices";
import BrandBanner from "../../components/bradBanner/BrandBanner";
import { useGetCarsByClassQuery, useGetCarsQuery } from "../../state/api";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedClass, setClass] = useState("");
  const { data, isLoading } = useGetCarsQuery();
  const { data: classes, isLoading: loading } =
    useGetCarsByClassQuery(selectedClass);

  return (
    <div className={`${styles.container}`}>
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

        <div className={`${styles.cardContainer}`}>
          {data !== undefined &&
            selectedClass === "" &&
            data.map((car) => {
              return <Card car={car} />;
            })}

          {selectedClass !== "" &&
            classes !== null &&
            classes.map((car) => {
              return <Card car={car} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
