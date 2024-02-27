import React, { useRef } from "react";
import styles from "./styles.module.css";
import Card from "../../components/card/Card";
import CamryJpg from "../../images/camry.jpg";
import ElantraJpg from "../../images/elantra.jpg";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Ourservices from "../../components/ouservices/Ourservices";
import BrandBanner from "../../components/bradBanner/BrandBanner";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };



  const cars = [
    {
      name: "Toyota Camry",
      year: "2020",
      class: "Premium Class",
      fuel: "Gas",
      type: "Sedan",
      price: "70",
      photo: CamryJpg,
      link: "cars",
    },
    {
      name: "Hyundai Elantra",
      class: "Econom Class",
      year: "2015",
      fuel: "Gas",
      type: "Sedan",
      price: "40",
      photo: ElantraJpg,
      link: "cars",
    },
    {
      name: "Hyundai Elantra",
      class: "Econom Class",
      year: "2015",
      fuel: "Gas",
      type: "Sedan",
      price: "40",
      photo: ElantraJpg,
      link: "cars",
    },
    {
      name: "Hyundai Elantra",
      class: "Econom Class",
      year: "2015",
      fuel: "Gas",
      type: "Sedan",
      price: "40",
      photo: ElantraJpg,
      link: "cars",
    },
  ];

  return (
    <div className={`${styles.container}`}>
      <Navbar />
      <Header click={handleClick} />
      <Ourservices />
      <BrandBanner />
      <h4 ref={ref} className={`${styles.cardTitle}`}>
        Available Cars
      </h4>
      <div className={`${styles.cardContainer}`}>
        {cars.map((car) => {
          return <Card car={car} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
