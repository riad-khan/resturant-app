import React from "react";
import Menu from "./Menu";
import {Route,Routes,Navigate} from "react-router-dom";
import Home from "./home";
import Contact from "./Contact"

const body = () =>{
    return(
        <div>
            <Routes>
                   <Route path="/" element ={<Navigate to="/home" />} />
                  <Route path="/home" element ={<Home />} />
                  <Route path="/contact" element ={<Contact />} />
                 <Route path = "/menu" element={ <Menu />}>
            </Route>
           </Routes>
        </div>
    );
}

export default body; 