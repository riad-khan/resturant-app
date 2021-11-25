import React from "react";
import Menu from "./Menu";
import {Route,Routes} from "react-router-dom"


const body = () =>{
    return(
        <div>
            <Routes>
                 <Route path = "/menu" element={ <Menu />}>
            </Route>
           </Routes>
        </div>
    );
}

export default body; 