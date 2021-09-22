import React from "react";
import { IconButton } from "components";
import styles from "./CustomOverlay.module.scss";
import "./overlay.scss";

// interface CustomOverlayProps {
//   name: string;
//   keywords?: Array<string>;
//   onClick?: () => void;
// }

function CustomOverlay(
  name: string,
  handleSelect: () => void,
  closeOverlay: () => void,
  keywords?: string[]
): HTMLElement {
  const $content = document.createElement("div");
  const $title = document.createElement("h2");
  const $keywords = document.createElement("div");
  const $button = document.createElement("button");
  $content.classList.add("overlayWrapper");
  $title.classList.add("overlayTitle");
  $keywords.classList.add("keywords");
  $button.classList.add("addButton");

  $title.innerHTML = name;
  $keywords.innerHTML =
    keywords && keywords[0] !== ""
      ? "" +
        keywords.map(
          (keyword, index) =>
            `<span class='keyword' key=${index}>${keyword}</span>`
        )
      : "<span>아직 키워드가 없습니다.</span>";

  $content.onclick = function () {
    closeOverlay();
  };
  $button.onclick = function () {
    handleSelect();
  };

  $content.appendChild($title);
  $content.appendChild($keywords);
  $content.appendChild($button);

  return $content;
}

export default CustomOverlay;
