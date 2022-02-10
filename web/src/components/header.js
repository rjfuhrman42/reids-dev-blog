import { Link } from "gatsby";
import React from "react";

import * as styles from "./header.module.css";
import "./header.module.css";

const Header = ({ siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>{siteTitle}</div>
    </div>
  </div>
);

export default Header;
