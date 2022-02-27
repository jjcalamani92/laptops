import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export const HeaderLogo_5 = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo">
        <FontAwesomeIcon className="icon" icon={faLaptop} />
        Tecno<span>Dev</span>
      </NavLink>
    </div>
  );
};
