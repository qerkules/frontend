import React, { useState } from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import UsbInput from "./icons/UsbInput.jsx";
import UsbCharger from "./icons/UsbCharger.jsx";
import Carplay from "./icons/Carplay.jsx";
import Bluetooth from "./icons/Bluetooth.jsx";
import HeatedSeat from "./icons/HeatedSeat.jsx";
import BackCamera from "./icons/BackCamera.jsx";
import Insurance from "./icons/Insurance.jsx";
import Card from "../../components/card/Card.jsx";
import Booking from "../../components/booking/Booking.jsx";
import { useGetCarByIdQuery, useGetCarsQuery } from "../../state/api.js";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const Carpage = () => {
  const [isOpen, setStatus] = useState(false);
  const carNumber = window.location.pathname.slice(6, 13);
  const { data } = useGetCarByIdQuery(carNumber);
  const { data: cars } = useGetCarsQuery();
  const { t } = useTranslation();

  const handleClick = () => {
    setStatus(!isOpen);
  };
  const carClass = () => {
    if (data) {
      if (data.class === "Economy Class") {
        return t("ecoClass");
      } else if (data.class === "Middle Class") {
        return t("middleClass");
      } else if (data.class === "Suv Class") {
        return t("suvClass");
      } else if (data.class === "Premium Class") {
        return t("premiumClass");
      }
    }
  };
  const fuelType = () => {
    if (data) {
      if (data.mainDetails.fuel === "Gas") {
        return t("gas");
      } else if (data.mainDetails.fuel === "Diesel") {
        return t("diesel");
      }
    }
  };
  const carType = () => {
    if (data) {
      if (data.mainDetails.type === "Sedan") {
        return t("sedan");
      } else if (data.mainDetails.type === "Suv") {
        return t("suv");
      }
    }
  };
  const carSeats = () => {
    if (data) {
      if (data.mainDetails.seats === "5 Seater") {
      return `5 ${t("seater")}`;
      } else if (data.mainDetails.seats === "7 Seater") {
        return `7 ${t("seater")}`;
      }
    }
  };

  const bookingComponent = (
    <Booking
      click={handleClick}
      carName={data && data.brand + " " + data.model}
      carPrice={data && data.priceUsd}
    />
  );
  const mainComponent = (
    <div className={`${styles.container}`}>
      <Helmet>
        <title>Car Page - Rent a car in Baku</title>
        <meta
          name="description"
          content="You can find every details about all cars model and book easy just one click"
        />
      </Helmet>
      <div className={`${styles.desktopVersion}`}>
        <div className={`${styles.leftSection}`}>
          <div className={`${styles.swiperContainer}`}>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={`${styles.mySwiper}`}
            >
              {data &&
                data.images.map((image, index) => {
                  return (
                    <SwiperSlide
                      className={`${styles.swiperSlide}`}
                      key={image}
                    >
                      <LazyLoadImage
                        src={`${image}`}
                        alt={`rent a car in baku ${data.brand}`}
                        className={`${styles.image}`}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>

        <div className={`${styles.rightSection}`}>
          <div className={`${styles.titleSection}`}>
            <h1 className={`${styles.title}`}>Rent a car in Baku</h1>
            <h2 className={`${styles.carName}`}>
              {data && data.brand + " " + data.model + " " + data.year}
            </h2>
            <h3 className={`${styles.class}`}>{carClass()}</h3>
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
            <div className={`${styles.box}`}>
              <GiCarDoor className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{t("doors")}</span>
            </div>
            <div className={`${styles.box}`}>
              <PiEngineFill className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{data && data.mainDetails.engine}</span>
            </div>
            <div className={`${styles.box}`}>
              <MdOutlineAirlineSeatReclineExtra className={`${styles.icon}`} />
              &nbsp;&nbsp;
              <span>{carSeats()}</span>
            </div>
          </div>

          <div className={`${styles.priceSection}`}>
            <div>
              <div className={`${styles.price}`}>
                &nbsp;$ {data && data.priceUsd}
                <span className={`${styles.day}`}>/{t("day")}</span>{" "}
              </div>
              <p className={`${styles.tip}`}>{t("priceTip")}</p>
            </div>
            <div
              className={`${styles.bookNow}`}
              onClick={() => {
                handleClick();
              }}
            >
              {t("bookNow")}
            </div>
          </div>

          <div className={`${styles.aboutCar}`}>
            <h4 className={`${styles.aboutCarTitle}`}>{t("features")}</h4>

            <div className={`${styles.carFeature}`}>
              <Bluetooth className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("bluetooth")}</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <UsbInput className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("usbIn")}</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <UsbCharger className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("usbCh")}</span>
            </div>
            {data && data.brand + " " + data.model !== "Toyota Camry" && (
              <div className={`${styles.carFeature}`}>
                <HeatedSeat className={`${styles.featureIcon}`} />
                &nbsp;&nbsp;
                <span>{t("heatedSeat")}</span>
              </div>
            )}
            <div className={`${styles.carFeature}`}>
              <BackCamera className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("backupCam")}</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <Insurance className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>{t("cascoIns")}</span>
            </div>
            {data && Number(data.year) > 2016 && (
              <div className={`${styles.carFeature}`}>
                <Carplay className={`${styles.featureIcon}`} />
                &nbsp;&nbsp;
                <span>{t("carPlay")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.cardSection}`}>
        <h4 className={`${styles.cardTitle}`}>{t("availableCars")}</h4>
        <div className={`${styles.cardContainer}`}>
          {cars &&
            cars.map((car) => {
              return <Card car={car} key={car.number} />;
            })}
        </div>
      </div>
    </div>
  );

  if (isOpen) {
    return bookingComponent;
  } else {
    return <>{mainComponent}</>;
  }
};

export default Carpage;
