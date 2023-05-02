import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Shop.css";
import { Cassette } from "react-bootstrap-icons";

export const Shop = () => {

  const[isPlaying, setIsPlaying] = useState(false);
  const products = [
    {
      id: 1,
      img: "",
      title: "Diamond Disk",
      desc: "Survive to the best song of GRX off all the times",
      price: 29.99 + "$",
      song:"Animals",
      audio:""
    },
    {
      id: 2,
      img: "",
      title: "Emerald Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 25.99 + "$",
      song:"Virus",
      audio:"",
      
    },
    {
      id: 3,
      img: "",
      title: "Platinum Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 19.99 + "$",
      song:"Oops",
      audio:"",
    },
    {
      id: 4,
      img: "",
      title: "Golden Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 14.99 + "$",
      song: "Turn Up The Speakers",
      audio:"",
    },
    {
      id: 5,
      img: "",
      title: "Silver Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 10.99 + "$",
      song: "Wizard",
      audio:"",
    },
    {
      id: 6,
      img: "",
      title: "Bronze Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 4.99 + "$",
      song: "Summer",
      audio:"",
    },
    
  ];

  const startAudio = (id) =>{
    const audio = new Audio(products[id].audio);
    isPlaying==true? (audio.pause() && setIsPlaying(false)): (audio.play() && setIsPlaying(true));
    // audio.play()
    // setIsPlaying(true)
  }

  return (
    <Fragment>
      <div className="shop-container">
        <h1>Test</h1>
        <div className="row">
        {products.map((product) => {
          return (
            
              <div key={product.id} className="col-4  ">
                <div
                  className="card"
                  style={{ width: "19rem", backgroundColor: "#090D0E" }}
                >
                  <img src={product.img} className="card-img-top" alt="..." />
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
