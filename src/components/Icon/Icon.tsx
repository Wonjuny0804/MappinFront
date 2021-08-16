import React from "react";
import { ReactComponent as Logo } from "./assets/로고.svg";
import { ReactComponent as NomadMap } from "./assets/Nomads_Map.svg";
import { ReactComponent as Prev } from "./assets/prev.svg";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as Search } from "./assets/search.svg";
import { ReactComponent as Ellipse } from "./assets/Ellipse.svg";

export interface IconProps {
  type: "Logo" | "NomadMap" | "Prev" | "Next" | "Search" | "Ellipse";
}

function Icon({ type }: IconProps): JSX.Element {
  const dataObject = {
    Logo: <Logo />,
    NomadMap: <NomadMap />,
    Prev: <Prev />,
    Next: <Next />,
    Search: <Search />,
    Ellipse: <Ellipse />,
  };

  return dataObject[type];
}

export default Icon;
