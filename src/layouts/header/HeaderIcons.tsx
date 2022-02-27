import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

interface State {
  Menu: any;
  Theme: any;
}

export const HeaderIcons = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const handleOpen = () => {};
  const handleClose = () => {};
  return (
    <div className="icons">
        <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} />
        <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
};
export const HeaderIcons_2 = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const handleOpen = () => {};
  const handleClose = () => {};
  return (
    <div className="icons">
        <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} />
        <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
};
export const HeaderIcons_3 = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const handleOpen = () => {};
  const handleClose = () => {};
  return (
    <div className="icons">
        <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} />
        <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
};
export const HeaderIcons_4 = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const handleOpen = () => {};
  const handleClose = () => {};
  return (
    <div className="icons">
        <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} />
        <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
};
export const HeaderIcons_5 = () => {
  const { menu } = useSelector((state: State) => state.Menu);
  const handleOpen = () => {};
  const handleClose = () => {};
  return (
    <div className="icons">
        <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} />
        <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
};
