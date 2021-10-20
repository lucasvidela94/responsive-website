import React from "react"
import "../App.css"
import { Button } from "./boton"
import "./SeccionRuta.css"

function SeccionRuta() {
  return (
    <div className="contenedor-ruta">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>TRANSPORTATE CON NOSOTROS</h1>
      <p>¿QUE ESTAS ESPERANDO?</p>
      <div className="ruta-btns">
        <Button
          className="btns"
          botonEstilo="btn--outline"
          botonTamaño="btn--large"
        >
          MAS INFO!
        </Button>
        <Button
          className="btns"
          botonEstilo="btn--primary"
          botonTamaño="btn--large"
        >
          Mira el montaje!
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default SeccionRuta
