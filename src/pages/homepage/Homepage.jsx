import React from "react";
import styles from "./styles.module.css";
import Card from "../../components/card/Card";
import CamryJpg from "../../images/camry.jpg";
import ElantraJpg from "../../images/elantra.jpg";

const Homepage = () => {
  const cars = [
    {
      name: "Toyota Camry 2020",
      class: "Premium Class",
      fuel: "Gas",
      type: "Sedan",
      price: "70",
      photo: CamryJpg,
      link: "cars",
    },
    {
      name: "Hyundai Elantra 2015",
      class: "Econom Class",
      fuel: "Gas",
      type: "Sedan",
      price: "40",
      photo: ElantraJpg,
      link: "cars",
    }, {
      name: "Hyundai Elantra 2015",
      class: "Econom Class",
      fuel: "Gas",
      type: "Sedan",
      price: "40",
      photo: ElantraJpg,
      link: "cars",
    }, {
      name: "Hyundai Elantra 2015",
      class: "Econom Class",
      fuel: "Gas",
      type: "Sedan",
      price: "40",
      photo: ElantraJpg,
      link: "cars",
    },
  ];

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.cardContainer}`}>
        {cars.map((car) => {
          return <Card car={car} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
