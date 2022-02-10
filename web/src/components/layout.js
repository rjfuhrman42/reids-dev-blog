import React from "react";
import Header from "./header";
import { Link } from "gatsby";
import PaletteBorder from "./PaletteBorder";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  location,
}) => (
  <>
    {location ? ( // if the location is undefined or falsy, disable the header. This only occurs when not on the main page "/" (?)
      <>
        <PaletteBorder>
          <Header
            siteTitle={siteTitle}
            onHideNav={onHideNav}
            onShowNav={onShowNav}
            showNav={showNav}
          />
        </PaletteBorder>
      </>
    ) : (
      <h2 className={styles.headline}>
        <Link to="/">← Back to all posts</Link>
      </h2>
    )}

    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
