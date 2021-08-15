import React from "react";
import { ReactComponent as Logo } from "./assets/로고.svg";
import { ReactComponent as NomadMap } from "./assets/Nomads_Map.svg";
import { ReactComponent as Prev } from "./assets/prev.svg";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as Search } from "./assets/search.svg";

interface IconProps {
  type: "Logo" | "NomadMap" | "Prev" | "Next" | "Search";
}

function Icon({ type }: IconProps): JSX.Element {
  const dataObject = {
    Logo: <Logo />,
    NomadMap: <NomadMap />,
    Prev: <Prev />,
    Next: <Next />,
    Search: <Search />
  };

  return dataObject[type];
}

export default Icon;
