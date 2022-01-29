import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";
import "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className={styles.paletteContainer}>
        <div className={styles.paletteColor__dark}></div>
        <div className={styles.paletteColor__medium}></div>
        <div className={styles.paletteColor__light}></div>
      </div>
    </div>
  </div>
);

export default Header;
