import React from "react";
import { IconButton } from "components";

interface CustomOverlayProps {
  name: string;
  keywords: Array<string>;
  onClick?: () => void;
}

function CustomOverlay ({
  name,
  keywords,
  onClick
}: CustomOverlayProps): JSX.Element {
  return (
  <div>
    <h2>{name}</h2>
    <div>
      {keywords.map((keyword, index) => <span key={index}>{keyword}</span> )}
    </div>
    <IconButton type="button" icon="AddPlace" onClick={onClick}/>
  </div>
  )
} 

export default CustomOverlay;