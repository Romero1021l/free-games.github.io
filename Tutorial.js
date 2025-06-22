import React from 'react';
import './Tutorial.css';
import { AiFillCaretLeft } from "react-icons/ai";
import paso1 from './paso1.PNG';
import paso2 from './paso2.PNG';
import paso3 from "./paso3.PNG";
import paso4 from "./paso4.PNG";
import paso5 from "./paso5.PNG";
import paso6 from "./paso6.mp4";


const tutorialSteps = [
  { id: 1, text: "selecciona el juego que deseas descargar", img: paso1 },
  { id: 2, text: "ejecuta el archivo torrent de la descarga usando qbittorrent (enlace para descargarlo en la pagina principal)", img: paso2},
  { id: 3, text: "al terminar de descargar el juego, dar click derecho en el archivo", img: paso3 },
  { id: 4, text: "seleccionar abrir carpeta de destino", img: paso4 },
  { id: 5, text: "Finaliza la instalación y abre el juego.", img: paso5 },
  { id: 6, text: "A DISFRUTAR!!", video: paso6 }
];

function Tutorial({volver}) {
  return (
    <div className="tutorial-container">

        <AiFillCaretLeft  onClick={volver} className='return-button' />
      <h1>Pasos para la instalacion de los Juegos</h1>
      <div className="steps-grid">
  {tutorialSteps.map((step) => (
    <div key={step.id} className="step">
      <h2>Paso {step.id}</h2>

      {step.img && (
        <img src={step.img} alt={`Paso ${step.id}`} />
      )}

      {step.video && (
        <video controls width="100%" src={step.video} />
      )}

      <p>{step.text}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Tutorial;