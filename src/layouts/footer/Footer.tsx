import {
  faFacebookF,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faEnvelope, faMap, faMapMarkedAlt, faMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="box">
        <h3>Links directos</h3>
        <NavLink className="links" to="/">
          <FontAwesomeIcon className="icon" icon={faChevronRight} />
          Inicio
        </NavLink>
        <NavLink className="links" to="/nosotros">
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
          Nosotros
        </NavLink>
        <NavLink className="links" to="/servicios">
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
          Servicios
        </NavLink>
        <NavLink className="links" to="/reseñas">
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
          reseñas
        </NavLink>
        <NavLink className="links" to="/contacto">
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
          Contacto
        </NavLink>
      </div>
      <div className="box">
        <h3>Horario de atención</h3>
        <p>
          Lunes : <i> 7:00am - 10:30pm </i>{" "}
        </p>
        <p>
          Martes : <i> 7:00am - 10:30pm </i>{" "}
        </p>
        <p>
          Miercoles : <i> 7:00am - 10:30pm </i>{" "}
        </p>
        <p>
          Jueves : <i> 7:00am - 10:30pm </i>{" "}
        </p>
        <p>
          Viernes : <i> 7:00am - 10:30pm </i>{" "}
        </p>
        
      </div>
      <div className="box">
        <h3>Contacto</h3>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faPhone} />
          +591 68175851
        </a>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faPhone} />
          +591 68175851
        </a>
        <a className="links" href="#">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          info@jjwebdevelopment.com
        </a>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faMap} />
          La paz, BOLIVIA
        </a>
        
        <div className="share">
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faFacebookF} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faTwitter} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faLinkedin} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faWhatsapp} />{" "}
          </a>
        </div>
      </div>
      <div className="box">
        <h3>Nuevas noticias</h3>
        <p>Suscribete para estar actualizado</p>
        <form action="">
          <input
            type="email"
            name=""
            className="email"
            placeholder="ingresa tu email"
          />
          <input type="submit" value="suscribirse" className="btn" />
        </form>
      </div>
    </section>
  );
};
