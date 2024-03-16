import React from "react";
import styles from "./styles.module.css";
import { BsCash } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdLocalAirport } from "react-icons/md";
import SectionImg from "../../images/sectionimg.png";

const Ourservices = () => {
  return (
    <div className={`${styles.container}`}>
      
      <div className={`${styles.sectionImgContainer}`}>
        <img src={SectionImg} alt="" className={`${styles.sectionImg}`} />
      </div>

      <div className={`${styles.detailsSection}`}>
        <div className={`${styles.whyChoose}`}>
          <p>Why Choose Us</p>
        </div>
        <h2 className={`${styles.title}`}>
          We offer the best rental experience with rental deals
        </h2>
        <div className={`${styles.infoSection}`}>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <BsCash />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>Best Price guaranteed</h4>
              <p className={`${styles.infoSubtitle}`}>
                Best price performance cars in baku
              </p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <MdLocalAirport />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>Delivery To Airport</h4>
              <p className={`${styles.infoSubtitle}`}>
                Best price performance cars in baku
              </p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <Ri24HoursFill />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>24 Hour Car delivery</h4>
              <p className={`${styles.infoSubtitle}`}>
                Best price performance cars in baku
              </p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <IoMdPersonAdd />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>Experienced driver</h4>
              <p className={`${styles.infoSubtitle}`}>
                Best price performance cars in baku
              </p>
            </div>
          </div>
          <div className={`${styles.infoCard}`}>
            <div className={`${styles.iconContainer}`}>
              <BiSupport />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>24/7 Support </h4>
              <p className={`${styles.infoSubtitle}`}>
                Best price performance cars in baku
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
