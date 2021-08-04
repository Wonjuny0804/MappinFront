import React from 'react';
import { ReactComponent as Logo } from "./assets/로고.svg";
import { ReactComponent as NomadMap } from "./assets/Nomads_Map.svg";

interface IconProps {
    type: "Logo" | "NomadMap";
}

function Icon({ type }: IconProps):JSX.Element {

    const dataObject = {
        Logo: <Logo />,
        NomadMap: <NomadMap />
    }

    return (
           dataObject[type]
    )
}

export default Icon;
