import React, { Fragment } from "react";
import "./Footer.css";
import { logoPers,IconoCuernos  } from "../../Global/Global";

import { Github, Twitter, Whatsapp, Discord, Spotify } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <Fragment>
      <div id="containerFooter">
        <div className="container" style={{height:'240px'}}>
          <div className="container text-center" style={{marginTop: '5%', height: '220px'}} >
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 rowFooter">
              <div className="col col-img">
                <img src={logoPers} alt="logo" style={{ width: "90px", height: "85px", marginTop: '50px', borderRadius: '40px' }} />
              </div>
              <div className="col">
              <div id="colName" className="py-5">Programmer: Esteban Hernandez Agudelo</div>
              </div>
              <div className="col">
              <div className="py-5"> <a href="https://github.com/EstebanHernandezA16"><Github className="Icons"/></a></div>
              </div>
              <div className="col">   {/*https://twitter.com/RodriiFN_/status/1505335598726406150?cxt=HHwWjICz3Yuwg-QpAAAA*/}
                <div className="py-5"><a href="https://twitter.com/inquisidor3004"><Twitter className="Icons"/></a></div>
              </div>
              <div className="col">
                <div className="py-5"><a href="https://wa.me/573013900143"><Whatsapp className="Icons"/></a></div>
              </div>
              <div className="col">
              </div>
              <div className="col">
                
              </div>
              <div className="col">
                <div className="py-1"><img src={IconoCuernos} alt="" className="Icons" /></div>
              </div>
              <div className="col">
              <div className="py-1"><a href="https://discordapp.com/users/Murork#3886/chat"><Discord className="Icons"/></a></div>
              </div>
              <div className="col">
              <div className="py-1"><a href="https://open.spotify.com/user/Murork"><Spotify className="Icons"/></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
