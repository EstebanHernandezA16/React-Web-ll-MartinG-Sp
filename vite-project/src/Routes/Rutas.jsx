import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Menu } from "../shared/Menu/Menu";
import { Footer } from "../shared/Footer/Footer";
import { Members } from "../Members/Members";
// 
export const Rutas = () => {
  return (
    <Fragment>
      <div style={{backgroundColor: '#090D0E'}}>

      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/api" element={<Api/>}/> */}
        <Route path="/m" element={<Members/>}/>
      </Routes>

      <div style={{ width: '100%', height: '300px', backgroundColor: '#090D0E'}}>
      <Footer/>
      </div>
      </div>
    </Fragment>
  );
};
