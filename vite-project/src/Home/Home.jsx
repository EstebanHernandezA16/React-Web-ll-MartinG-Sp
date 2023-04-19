import React from "react";

import { History } from "../History/History";


function Home() {
const banner ="https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/banner.jpg?alt=media&token=32609249-b25a-4c9e-b3a3-5d231f57fae7"

    return(
        <>
        
        <h1 style={{backgroundColor: "gray"}}>Build Home</h1>
        <img style={{width:'100%',height:'600px'}} src={banner} alt="banner" />
        <section>
            <History/>
        </section>
        </>
    );
}

export {Home}