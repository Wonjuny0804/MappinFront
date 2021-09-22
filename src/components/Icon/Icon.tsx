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
import { ReactComponent as Spinner } from "./assets/Spinner.svg";
import { ReactComponent as Marker } from "./assets/Marker.svg";
import { ReactComponent as Plus } from "./assets/Plus.svg";
import { ReactComponent as PlusGrey } from "./assets/PlusGrey.svg";
import { ReactComponent as EmptyHeart } from "./assets/EmptyHeart.svg";
import { ReactComponent as FillHeart } from "./assets/FillHeart.svg";
import { ReactComponent as AddPlace } from "./assets/mappinAdd.svg";
import { ReactComponent as CaretDown } from "./assets/CaretDown.svg";
import { ReactComponent as Save } from "./assets/Save.svg";
import { ReactComponent as Edit } from "./assets/Edit.svg";
import { ReactComponent as Remove } from "./assets/Remove.svg";

export interface IconProps {
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
    | "Facebook"
    | "Spinner"
    | "Marker"
    | "Plus"
    | "PlusGrey"
    | "EmptyHeart"
    | "FillHeart"
    | "AddPlace"
    | "CaretDown"
    | "Save"
    | "Edit"
    | "Remove";
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
    Spinner: <Spinner />,
    Marker: <Marker />,
    Plus: <Plus />,
    PlusGrey: <PlusGrey />,
    EmptyHeart: <EmptyHeart />,
    FillHeart: <FillHeart />,
    AddPlace: <AddPlace />,
    CaretDown: <CaretDown />,
    Save: <Save />,
    Edit: <Edit />,
    Remove: <Remove />,
  };

  return dataObject[type];
}

export default Icon;
