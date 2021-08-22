import React from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  id: string;
  children: JSX.Element | null;
}

function Portal({ id, children }: PortalProps): JSX.Element {
  const mountDomNode = React.useMemo(
    () => document.getElementById(id) as HTMLElement,
    [id]
  );
  return ReactDOM.createPortal(children, mountDomNode);
}

export default Portal;
