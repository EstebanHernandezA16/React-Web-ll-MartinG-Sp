import React from "react";
import "./History.css";
//import { Footer } from "../shared/Footer/Footer";

export function History() {
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img1.jpg?alt=media&token=d6cc9df1-d523-466a-a589-0522afcba708";
  const img2 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img3.jpg?alt=media&token=25ef29bf-e5c4-4cb2-a0b7-36856a0b0a8f";
  const img3 =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/img2.jpg?alt=media&token=83b3cbd4-cb5e-4805-b02e-17f67dc0e52e";

  return (
    <>
      <div style={{ height: "70rem", width: '95%' }}>
        <div className="container" style={{height: '100%' }}>
          <div className="row" >
            <div className="col-4 col-md-4">
              <div
                className="card"
                style={{
                  width: "19rem",
                  height: '100%',
                  marginTop: "5px",
                  backgroundColor: "#090D0E",
                  color: "white",
                }}
              >
                <img className="card-img-top" src={img1} alt="Card image cap" />
                <div className="card-body">
                  <h3
                    className="card-title"
                    style={{ textAlign: "center", paddingBottom: "25px" }}
                  >
                    Martin Garrix
                  </h3>

                  <p className="card-text" style={{ textAlign: "center" }}>
                    Martijn Gerard Garritsen (Born 14 May 1996), known
                    professionally as Martin Garrix and also as Ytram and GRX,
                    is a Dutch DJ and record producer who was ranked number one
                    on DJ Mag's Top 100 DJs list for three consecutive years
                    2016, 2017, and 2018. Garrix has performed at music
                    festivals such as Coachella, Electric Daisy Carnival, Ultra
                    Music Festival, Tomorrowland, and Creamfields.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="card" style={{width: '18rem'}}>
           <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div> */}
            <div className="col-4 col-md-4">
              <div
                className="card"
                style={{
                  width: "19rem",
                  marginTop: "82px",
                  height: '90%',
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img className="card-img-top" src={img2} alt="Card image cap" />
                <div
                  className="card-body"
                  style={{ backgroundColor: "#090D0E" }}
                >
                  <h3
                    className="card-title"
                    style={{ textAlign: "center", paddingBottom: "25px" }}
                  >
                    Origins
                  </h3>
                  <p className="card-text" style={{ textAlign: "center" }}>
                    Garrix was born as Martijn Gerard Garritsen on 14 May 1996
                    in Amstelveen, the son of Gerard and Karin Garritsen. He has
                    a younger sister named Laura. He showed musical interest at
                    an early age and learned to play the guitar at the age of 8.
                    In 2004, he expressed interest in becoming a DJ after seeing
                    Dutch DJ Tiësto perform at that year's Summer Olympics
                    Opening Ceremony in Athens.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              {/* <h2>DJ</h2>
            <p>
              Su éxito comenzó con el lanzamiento de la canción "Animals", el 17
              de junio de 2013 por la discográfica Spinnin' Records. La canción
              alcanzó el puesto #1 en Bélgica y en Reino Unido, y el puesto #3
              en Irlanda. El sencillo Wizard, producido con Jay Hardway, también
              fue un éxito en numerosos países en 2013.
            </p>
            <img className="img-fluid w-100" src={img3} alt="imagen3" /> */}
              <div
                className="card"
                style={{
                  width: "19rem",
                  height: '75%',
                  marginTop: "235px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img className="card-img-top" src={img3} alt="Card image cap" />
                <div
                  className="card-body"
                  style={{ backgroundColor: "#090D0E" }}
                >
                  <h3
                    className="card-title"
                    style={{ textAlign: "center", paddingBottom: "10px" }}
                  >
                    ¿One Hit? I DONT THINK SOO
                  </h3>
                  <p className="card-text" style={{ textAlign: "center" }}>
                    "Animals" is a big room house instrumental by Dutch DJ and
                    record producer Martin Garrix, released as a digital
                    download on 17 June 2013 on iTunes. The song quickly became
                    popular within the EDM culture, leading to Garrix becoming
                    the youngest producer to ever have a song reach number one
                    on the electronic music store Beatport. The track was a
                    commercial success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//export {History};
