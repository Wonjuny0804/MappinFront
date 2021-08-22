import React from "react";
import { ReactComponent as Logo } from "./assets/로고.svg";
import { ReactComponent as NomadMap } from "./assets/Nomads_Map.svg";
import { ReactComponent as Prev } from "./assets/prev.svg";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as Search } from "./assets/search.svg";
import { ReactComponent as Ellipse } from "./assets/Ellipse.svg";
import { ReactComponent as Close } from "./assets/Close.svg";
import { ReactComponent as Share } from "./assets/Share.svg";
import { ReactComponent as Kakao } from "./assets/Kakao.svg";
import { ReactComponent as Facebook } from "./assets/Facebook.svg";
import { ReactComponent as Naver } from "./assets/Naver.svg";

interface IconProps {
  type:
    | "Logo"
    | "NomadMap"
    | "Prev"
    | "Next"
    | "Search"
    | "Ellipse"
    | "Close"
    | "Share"
    | "Kakao"
    | "Naver"
    | "Facebook";
}

function Icon({ type }: IconProps): JSX.Element {
  const dataObject = {
    Logo: <Logo />,
    NomadMap: <NomadMap />,
    Prev: <Prev />,
    Next: <Next />,
    Search: <Search />,
    Ellipse: <Ellipse />,
    Close: <Close />,
    Share: <Share />,
    Kakao: <Kakao />,
    Naver: <Naver />,
    Facebook: <Facebook />,
  };

  return dataObject[type];
}

export default Icon;
