import {Route, Routes} from "react-router-dom"
import { Home } from "../Home/Home"
import { About } from "../About/About"
import {Menu} from '../shared/Menu/Menu'


export const Rutas = () =>{
    return(
        <>
        <Menu/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />    
        </Routes>
        </>
    );
}