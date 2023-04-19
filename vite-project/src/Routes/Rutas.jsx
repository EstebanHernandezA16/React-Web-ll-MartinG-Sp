import {Route, Routes} from "react-router-dom"
import { Home } from "../Home/Home"
import { Colabs } from "../Colabs/Colabs"
import {Menu} from '../shared/Menu/Menu'


export const Rutas = () =>{
    return(
        <>
        <Menu/>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/colabs" element={<Colabs/>} />    
        </Routes>
        </>
    );
}