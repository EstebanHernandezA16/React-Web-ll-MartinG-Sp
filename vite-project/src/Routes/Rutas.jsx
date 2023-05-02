import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Menu } from "../shared/Menu/Menu";
import { Footer } from "../shared/Footer/Footer";
import { Shop } from "../Shop/Shop";
import { Form } from "../Form/Form";
import { Quiz } from "../Delta/Quiz";
import { Members } from "../Members/Members";
//
export const Rutas = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "#090D0E", maxHeight: '100%'}}>
        <div className="container-header" style={{height: '5%'}}>
        <Menu />
        </div>
      <div className="container-body" style={{height: '100%'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/api" element={<Api/>}/> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/test" element={<Quiz/>}/>
          <Route path="/m" element ={<Members/>}/>
        </Routes>
        </div>
       {/* height: "95%", marginTop: '5%', */}
        <div
          style={{ width: "100%", height: '10%', padding: '2%',  backgroundColor: "#090D0E" }}
        >
          <Footer />
        </div>
        </div>
      
    </Fragment>
  );
};
