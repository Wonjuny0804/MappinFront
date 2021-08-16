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
      {/* <button type="button" onClick={prevOnClick}>
        <Icon type="Prev" />
      </button>
      <button type="button" onClick={nextOnClick}>
        <Icon type="Next" />
      </button> */}
      <IconButton type="button" icon="Prev"/>
      <IconButton type="button" icon="Next"/>
    </nav>
  );
}

export default PageNav;
