import React from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logoSection}`}>
        <img src={Logo} alt="" className={`${styles.logo}`} />
      </div>
    </div>
  );
};

export default Navbar;
