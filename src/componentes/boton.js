import React from "react"
import "./boton.css"
import { Link } from "react-router-dom"

const ESTILOS = ["btn--primary", "btn--outline"]

const TAMAÑOS = ["btn--medium", "btn--large"]

export const Button = ({
  children,
  type,
  onClick,
  botonEstilo,
  botonTamaño,
}) => {
  const chequearBotonEstilo = ESTILOS.includes(botonEstilo)
    ? botonEstilo
    : ESTILOS[0]

  const chequearBotonTamaño = TAMAÑOS.includes(botonTamaño)
    ? botonTamaño
    : TAMAÑOS[0]

  return (
    <Link to="/contacto" className="btn-mobile">
      <button
        className={`btn ${chequearBotonEstilo} ${chequearBotonTamaño}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}
