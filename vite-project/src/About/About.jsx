import React, { Fragment } from "react";

import {Colabs} from '../Colabs/Colabs'

export const About = () => {
  const slide01 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/slide01.jpg?alt=media&token=c6b33a5a-1457-4856-abd2-0fd3b135d0d4";
  const slide02 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/slide02.jpg?alt=media&token=adb48d59-e399-40e6-a98a-740e71ec550a";
  const slide03 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/slide03.jpg?alt=media&token=bc5de9c6-928b-4e1b-9b8a-a3559c3357cd";
  return (
    <Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide01}
              style={{width:'100%',height:'600px'}}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide02}
              style={{width:'100%',height:'600px'}}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide03}
              style={{width:'100%',height:'600px'}}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
        <Colabs/>



    </Fragment>
  );
};
