import React, { Fragment, useState, useEffect } from "react";
import gif from '../assets/Gifs/loading.gif'

export const Loading = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [time, setTime] = useState(0);
    
    useEffect(()=>{
        time>0? setIsLoading(false) : null
        

    },[time])

    setTimeout(()=>{

        setTime(1)

    },5000)

    return(
        <Fragment>
        {isLoading? 
        <>
        
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>loading</h3>
                        <img src={gif} alt="banner" style={{width: '300px' , height: '300px'}} className="img-fluid d-block" />
                    </div>
                </div>
            </div>
        
        </>:<>
        <h3>Pagina cargada....</h3>
        </>}
        </Fragment>
    );
}