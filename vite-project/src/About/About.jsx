import React, { Fragment } from "react";
import {Colabs} from '../Colabs/Colabs'
import { slide01, slide02, slide03 } from "../Global/Global";
import './About.css'
export const About = () => {

  return (
    <Fragment>
      <div
        style={{backgroundColor:'#090D0E'}}
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
            id="slide1"
              src={slide01}
              style={{width:'100%',height:'600px'}}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
            id="slide2"
              src={slide02}
              style={{width:'100%',height:'600px'}}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
            id="slide3"
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
      <div style={{backgroundColor: '#090D0E'}}>
      
      <Colabs/>
      </div>
        



    </Fragment>
  );
};
