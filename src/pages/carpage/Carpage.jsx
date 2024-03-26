import React, { useState } from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import CamryImg from "../../images/camry.jpg";
import ElantraImg from "../../images/elantra.jpg";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import UsbInput from "./icons/UsbInput.jsx";
import UsbCharger from "./icons/UsbCharger.jsx";
import Carplay from "./icons/Carplay.jsx";
import AllWheel from "./icons/AllWheel.jsx";
import Bluetooth from "./icons/Bluetooth.jsx";
import HeatedSeat from "./icons/HeatedSeat.jsx";
import BackCamera from "./icons/BackCamera.jsx";
import Insurance from "./icons/Insurance.jsx";
import Transmission from "./icons/Transmission.jsx";
import Card from "../../components/card/Card.jsx";
import Booking from "../../components/booking/Booking.jsx";
import { useGetCarByIdQuery, useGetCarsQuery } from "../../state/api.js";

const Carpage = () => {
  const [isOpen, setStatus] = useState(false);
  const carNumber = window.location.pathname.slice(6, 13);
  const { data, isLoading } = useGetCarByIdQuery(carNumber);
  const { data: cars, isLoading: loading } = useGetCarsQuery();

  const handleClick = () => {
    setStatus(!isOpen);
  };

  const bookingComponent = <Booking click={handleClick} />;
  const mainComponent = (
    <div className={`${styles.container}`}>
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
                data.images.map((image) => {
                  return (
                    <SwiperSlide className={`${styles.swiperSlide}`}>
                      <img
                        src={`${image}`}
                        alt=""
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
            <h3 className={`${styles.class}`}>{data && data.class}</h3>
          </div>

          <div className={`${styles.description}`}>
            <div className={`${styles.box}`}>
              <FaCar className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{data && data.mainDetails.type}</span>
            </div>
            <div className={`${styles.box}`}>
              <FaGasPump className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{data && data.mainDetails.fuel}</span>
            </div>
            <div className={`${styles.box}`}>
              <TbManualGearbox className={`${styles.icon}`} />
              &nbsp;&nbsp;
              <span>{data && data.mainDetails.transmission}</span>
            </div>
            <div className={`${styles.box}`}>
              <GiCarDoor className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{data && data.mainDetails.doors}</span>
            </div>
            <div className={`${styles.box}`}>
              <PiEngineFill className={`${styles.icon}`} /> &nbsp;&nbsp;{" "}
              <span>{data && data.mainDetails.engine}</span>
            </div>
            <div className={`${styles.box}`}>
              <MdOutlineAirlineSeatReclineExtra className={`${styles.icon}`} />
              &nbsp;&nbsp;
              <span>{data && data.mainDetails.seats}</span>
            </div>
          </div>

          <div className={`${styles.priceSection}`}>
            <div>
              <div className={`${styles.price}`}>
                &nbsp;$ {data && data.priceUsd}
                <span className={`${styles.day}`}>/day</span>{" "}
              </div>
              <p className={`${styles.tip}`}>
                *More days will be calculated with discounted price
              </p>
            </div>
            <div
              className={`${styles.bookNow}`}
              onClick={() => {
                handleClick();
              }}
            >
              Book Now
            </div>
          </div>

          <div className={`${styles.aboutCar}`}>
            <h4 className={`${styles.aboutCarTitle}`}>Features</h4>

            <div className={`${styles.carFeature}`}>
              <Bluetooth className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>Bluetooth</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <UsbInput className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>USB input</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <UsbCharger className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>USB charger</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <HeatedSeat className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>Heated Seats</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <BackCamera className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>Backup camera</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <AllWheel className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>Rear-wheel drive</span>
            </div>

            <div className={`${styles.carFeature}`}>
              <Insurance className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>Regular Insurance</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <Transmission className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>Automatic transmission</span>
            </div>
            <div className={`${styles.carFeature}`}>
              <Carplay className={`${styles.featureIcon}`} />
              &nbsp;&nbsp;
              <span>Apple & Android CarPlay</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.cardSection}`}>
        <h4 className={`${styles.cardTitle}`}>Available Cars</h4>
        <div className={`${styles.cardContainer}`}>
          {cars &&
            cars.map((car) => {
              return <Card car={car} />;
            })}
        </div>
      </div>
    </div>
  );

  if (isOpen) {
    return bookingComponent;
  } else {
    return mainComponent;
  }
};

export default Carpage;
