import React from "react";
import Foto from "../img/foto.jpeg";

export default function InfosUsuario() {
  return (
    <div className="infoUsuario">
      <img src={Foto} alt="Foto do usuário" className="fotoUsuario" />
      <h4>Analice Marques</h4>
    </div>
  );
}
