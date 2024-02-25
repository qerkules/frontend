import React from "react";
import styles from "./styles.module.css";
import { BsCash } from "react-icons/bs";
const Ourservices = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageSection}`}>
        <img src="" alt="" className={`${styles.image}`} />
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
              <BsCash />
            </div>
            <div className={`${styles.infoBox}`}>
              <h4 className={`${styles.infoTitle}`}>Best Price guaranteed </h4>
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
