import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Shop.css";
import { DiamondD, EmeraldD, PlatinumD, GoldenD, SilverD, CopperD } from "../Global/Global";
import { DiamondM, EmeraldM, PlatinumM, GoldenM, SilverM, CopperM } from "../Global/Global";
import { Cassette } from "react-bootstrap-icons";

export const Shop = () => {
  const [audio, setAudio] = useState(null);
  const[isPlaying, setIsPlaying] = useState(null);
  
  const products = [
    {
      id: 1,
      img: {DiamondD}.DiamondD,
      title: "Diamond Disk",
      desc: "Survive to the best song of GRX off all the times",
      price: 29.99 + "$",
      song:"Animals",
      audio:{DiamondM}.DiamondM,
      id_css: 'A'
    },
    {
      id: 2,
      img: {EmeraldD}.EmeraldD,
      title: "Emerald Disk",
      desc: "Or Maybe u want something more... chill with green sounds",
      price: 25.99 + "$",
      song:"Virus",
      audio:{EmeraldM}.EmeraldM,
      id_css: 'V',
      
    },
    {
      id: 3,
      img: {PlatinumD}.PlatinumD,
      title: "Platinum Disk",
      desc: "U want to come back to Mario Universe",
      price: 19.99 + "$",
      song:"Oops",
      audio:{PlatinumM}.PlatinumM,
      id_css: 'O',
    },
    {
      id: 4,
      img: {GoldenD}.GoldenD,
      title: "Golden Disk",
      desc: "Let's party yeahh!!!",
      price: 14.99 + "$",
      song: "Turn Up The Speakers",
      audio:{GoldenM}.GoldenM,
      id_css: 'T',
    },
    {
      id: 5,
      img: {SilverD}.SilverD,
      title: "Silver Disk",
      desc: "Some magicians Touchs in this test",
      price: 10.99 + "$",
      song: "Wizard",
      audio:{SilverM}.SilverM,
      id_css:'W'
    },
    {
      id: 6,
      img: {CopperD}.CopperD,
      title: "Bronze Disk",
      desc: "This is a poisonous song... soo be careful buddy",
      price: 4.99 + "$",
      song: "Poison",
      audio: {CopperM}.CopperM,
      id_css:'B'
    },
    
  ];

  const startAudio = (id) =>{
    const audio = new Audio(products[id].audio);
    isPlaying==true? (audio.current.pause()&& setIsPlaying(false) && setAudio(audio)): (audio.play()&& setIsPlaying(true));
    if(isPlaying){
    audio.current.pause();
    }
    
  }

  const eventoClase = (evento) =>{
    console.log(evento.target.classList.add('prueba'));
  }

  return (
    <Fragment>
      <div className="shop-container">
        <h1>Merchandising</h1>
        <div className="row">
        {products.map((product) => {
          return (
            
              <div key={product.id} className="col-4  ">
                <div
                  className="card"
                  style={{ width: "19rem", backgroundColor: "#090D0E" }}
                >
                  <img id={product.id_css} src={product.img} onMouseOver={eventoClase} className="card-img-top img-fluid icono" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.desc}</p>
                    <h6 className="card-price">{product.price}</h6>
                    {/* <a href="#" className="btn btn-primary btn-buy">
                      Buy
                    </a> */}{/*onClick={startAudio(product.id)}*/ }
                    
                    <button href="#" onClick={() =>{ startAudio(product.id), console.log("Escuchando "+product.song);}}  className="btn  btn-audio col-6">
                    <Cassette size={16}/>
                    </button>
                    <button 
                    className="btn  btn-buy col-6">
                      Buy
                    </button>
                    

                  </div>
                </div>
              </div>
            
          );
        })}</div>

        {/* <div className="row">
            <div className="col-4  " >
            <div className="card" style={{width: '18rem', backgroundColor: '#090D0E'}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> 
            </div>
            <div className="col-4 " >
            <div className="card " style={{width: '18rem', backgroundColor: '#090D0E'}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> 
            </div>
            <div className="col-4 " >
            <div className="card" style={{width: '18rem', backgroundColor: '#090D0E'}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> 
            </div>
        </div> */}
      </div>
    </Fragment>
  );
};
