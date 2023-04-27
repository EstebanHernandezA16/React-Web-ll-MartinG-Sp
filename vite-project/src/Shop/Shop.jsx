import React, { Fragment, useEffect, useRef } from "react";
import "./Shop.css";

export const Shop = () => {
  const products = [
    {
      id: 1,
      img: "",
      title: "Diamond Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 29.99 + "$",
    },
    {
      id: 2,
      img: "",
      title: "Emerald Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 25.99 + "$",
    },
    {
      id: 3,
      img: "",
      title: "Platinum Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 19.99 + "$",
    },
    {
      id: 4,
      img: "",
      title: "Golden Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 14.99 + "$",
    },
    {
      id: 5,
      img: "",
      title: "Silver Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 10.99 + "$",
    },
    {
      id: 6,
      img: "",
      title: "Bronze Disk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi odit ullam quo doloremque excepturi! Error pariatur beatae id laboriosam rerum.",
      price: 4.99 + "$",
    },
  ];

  return (
    <Fragment>
      <div className="shop-container">
        <h1>Test</h1>
        <div className="row">
        {products.map((product) => {
          return (
            
              <div className="col-4  ">
                <div
                  className="card"
                  style={{ width: "19rem", backgroundColor: "#090D0E" }}
                >
                  <img src={product.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.desc}</p>
                    <h6 className="card-price">{product.price}</h6>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
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
