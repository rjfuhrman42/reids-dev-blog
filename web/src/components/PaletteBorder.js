import React from "react";
import * as styles from "./palette.module.css";
import "./palette.module.css";

const PaletteBorder = ({ children }) => {
  return (
    <>
      <div className={styles.paletteContainer}>
        <div className={styles.paletteColor__light}></div>
        <div className={styles.paletteColor__medium}></div>
        <div className={styles.paletteColor__dark}></div>
      </div>
      {children}
      <div className={styles.paletteContainer}>
        <div className={styles.paletteColor__dark}></div>
        <div className={styles.paletteColor__medium}></div>
        <div className={styles.paletteColor__light}></div>
      </div>
    </>
  );
};

export default PaletteBorder;
