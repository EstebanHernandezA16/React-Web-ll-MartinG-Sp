import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Menu } from "../shared/Menu/Menu";
import { Footer } from "../shared/Footer/Footer";
import { Shop } from "../Shop/Shop";
import { Form } from "../Form/Form";
import { Quiz } from "../Delta/Quiz";
//
export const Rutas = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "#090D0E" }}>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/api" element={<Api/>}/> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/test" element={<Quiz/>}/>
        </Routes>

        <div
          style={{ width: "100%", height: "300px", backgroundColor: "#090D0E" }}
        >
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
