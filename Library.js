import React, { useState } from 'react';
import './Library.css';
import { AiFillCaretLeft } from "react-icons/ai";

const juegosData = [
  {
    id: 1,
    nombre: "The Last of us Part II Remastered",
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/315718bce7eed62e3cf3fb02d61b81ff1782d6b6cf850fa4.png",
    enlace: "https://mega.nz/file/75FCAYBQ#2l_BT04BSZUMuAsTvpuWTrhNjyJx1KZl2kT2UE0zlGk",
    categoria: "Accion, Supervivencia"
  },
  {
    id: 2,
    nombre: "American Truck Simulator",
    imagen: "https://m.media-amazon.com/images/M/MV5BMWUxMGY4MWQtOWRkNi00NWRhLTkyYWItZGYyMWJlNTc1YmExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    enlace: "https://mega.nz/file/vhcEgZyK#IhMh9o22mfIibnAHYwoF727KLvE3Lb7MtTGXdayAL-I",
    categoria: "Conducción, Simulador"
  },
  {
    id: 3,
    nombre: "Battlefield 1 Ultimate edition",
    imagen: "https://cdn.cdkeys.com/media/catalog/product/b/a/battlefield_1_cover.jpg",
    enlace: "https://mega.nz/file/il0gmQhB#yewZ5-0ZBaY6aXfcCrPEeWFz2LJWs7s-Nv6MzV_gVM0",
    categoria: "Accion, Guerra,"
  },
  {
    id: 4,
    nombre: "BodyCam",
    imagen: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co7mli.jpg",
    enlace: "https://mega.nz/file/q41xzK4b#0TubKk67Lw3N_IixqB11KEc3WTLNRLri1DlprGwyjkA",
    categoria: "Accion, Shooter, Fps, Realista"
  },
  {
    id: 5,
    nombre: "Chuxie",
    imagen: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/chuxx.png",
    enlace: "https://mega.nz/file/a5En2Qqb#c_JBGlBV09R4ugYSZ-o-krP-6LcD4csUBpd-m-UuGXc",
    categoria: "Realista, Shooter, Terror"
  },
  {
    id: 6,
    nombre: "COD WWII",
    imagen: "https://upload.wikimedia.org/wikipedia/en/1/18/Call_of_Duty_WWII_Cover_Art.jpg",
    enlace: "https://mega.nz/file/a00FyQ5B#x3fbAAozA5T6IslcBLmoOeT_wW2nt4SnfOq4RIjyc4U",
    categoria: "Accion, Supervivencia, Guerra, Shooter"
  },
  {
    id: 7,
    nombre: "Forza Horizon 5 ",
    imagen: "https://cdn.bynogame.com/product/1732289084537.webp",
    enlace: "https://mega.nz/file/P4NEXBgI#hkPAJojQrZH9JMrKXH0Cn0Ota_Jwf0eLUBr0k_uwjKc",
    categoria: "Carreras, Simulador"
  },
  {
    id: 8,
    nombre: "Red Dead Redemption II",
    imagen: "https://i5.walmartimages.com/seo/Red-Dead-Redemption-2-PlayStation-4_65bcc7a0-9a94-45fe-9316-6deac8cb2b86_2.df87ada9ea2d3bc6fc8013a20eb58da1.png",
    enlace: "https://mega.nz/file/asVTWQZa#eBA9vjc6OQoRnuro4w_-GC1qbP01MSsywSn5xzFddTo",
    categoria: "Accion, Mundo Abierto"
  },
  {
    id: 9,
    nombre: "Marvel Spider-Man II",
    imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/09/marvels-spider-man-2-1696011147019-3148250.jpg?tf=3840x",
    enlace: "https://mega.nz/file/2hkniT7J#6kqHXFNSGYRAGhjE7HNFFe2VNljunBKAybko1FdqZvY",
    categoria: "Accion, Mundo Abierto, super héroe"
  },
  {
    id: 10,
    nombre: "The Last of Us part I",
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png",
    enlace: "https://mega.nz/file/ih81RBAR#s4BKtVgeSlJnQCLXn4zaorbrf1YlH55i5nm6OqbIw_A",
    categoria: "Accion, Mundo Abierto, Zombie, Apocalipsis"
  },
  {
    id: 11,
    nombre: "Allan Wake II",
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/91aaee87abf84de085e12a7a4fed5b5e174b938d56585ce2.jpg",
    enlace: "https://mega.nz/file/OhlDDKSJ#GoYtaPg6bnHAcUiqlaf_8iAWYlN33Mxo8WS8gROQDAs",
    categoria: "Terror"
  },
  // Agrega más juegos aquí
];

function GameLibrary({volver}) {
  const [busqueda, setBusqueda] = useState('');

  const juegosFiltrados = juegosData.filter(juego =>
    juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="library-container">

      <AiFillCaretLeft  onClick={volver} className='return-button' />

      <h1>Biblioteca de Juegos</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar juego..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="juegos-grid">
        {juegosFiltrados.map(juego => (
          <a
    key={juego.id}
    href={juego.enlace}
    target="_blank"
    rel="noopener noreferrer"
    className="juego-card"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <img src={juego.imagen} alt={juego.nombre} />
    <h5 className='Game-name'>{juego.nombre}</h5>
    <h6 className='Category'>{juego.categoria}</h6>
  </a>
        ))}
      </div>
    </div>
  );
}

export default GameLibrary;
