import React, { useState, useEffect } from "react"
import { Button } from "./boton"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const cerrarMenuMovil = () => setClick(false)

  const mostrarBoton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    mostrarBoton()
  }, [])

  window.addEventListener("resize", mostrarBoton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={cerrarMenuMovil}>
            Transvid
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={cerrarMenuMovil}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/servicios"
                className="nav-links"
                onClick={cerrarMenuMovil}
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/productos"
                className="nav-links"
                onClick={cerrarMenuMovil}
              >
                Empresa
              </Link>
            </li>

            <li>
              <Link
                to="/contacto"
                className="nav-links-mobile"
                onClick={cerrarMenuMovil}
              >
                Contacto
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contacto</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
