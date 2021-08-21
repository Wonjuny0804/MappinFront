import React from "react";

// import Icon from "../Icon/Icon";
import { IconButton } from "../";
import styles from "./PageNav.module.scss";

interface PageNavProps {
  prevOnClick?: () => void;
  nextOnClick?: () => void;
}

function PageNav({ prevOnClick, nextOnClick }: PageNavProps): JSX.Element {
  return (
    <nav className={styles.nav}>
      <IconButton type="button" icon="Prev" onClick={prevOnClick}/>
      <IconButton type="button" icon="Next" onClick={nextOnClick}/>
    </nav>
  );
}

export default PageNav;
