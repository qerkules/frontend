import React, { useRef } from "react";
import styles from "./styles.module.css";
import Card from "../../components/card/Card";

import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Ourservices from "../../components/ouservices/Ourservices";
import BrandBanner from "../../components/bradBanner/BrandBanner";
import Footer from "../../components/footer/Footer";
import { cars } from "../../data/data";

const Homepage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.container}`}>
      <Navbar />
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
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
