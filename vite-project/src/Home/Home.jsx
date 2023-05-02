import React from "react";
import './Home.css'
import { History } from "../History/History";
import {banner} from "../Global/Global"

function Home() {


    return(
        <>
        <div className="vanish">
        <div className="ElectroEffect">
        <img id="bannerHome"  src={banner} alt="banner" /> 
        </div>
        </div>
        {/* <h1 style={{backgroundColor: "gray"}}>Welcome</h1> */}
        
        <section style={{backgroundColor: "#090D0E"}} >
            <History/>
        </section>
        
        </>
    );
}

export {Home}