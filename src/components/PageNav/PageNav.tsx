import React from "react";

// import Icon from "../Icon/Icon";
import { IconButton } from "../";
import styles from "./PageNav.module.scss";

interface PageNavProps {
  prevOnClick?: () => void;
  nextOnClick?: () => void;
  hideNext?: boolean;
}

function PageNav({
  prevOnClick,
  nextOnClick,
  hideNext,
}: PageNavProps): JSX.Element {
  return (
    <nav className={styles.nav}>
      {prevOnClick && (
        <IconButton type="button" icon="Prev" onClick={prevOnClick} />
      )}
      {!hideNext && nextOnClick && (
        <IconButton type="button" icon="Next" onClick={nextOnClick} />
      )}
    </nav>
  );
}

export default PageNav;
