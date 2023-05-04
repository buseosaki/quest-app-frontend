import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    let userId=5; //simdilik
    return (
      <div>
        <ul> //linkler app.jsde oluşturduğumuz rootlarla eşleşmeli.
            <li><Link to="/">Home</Link></li>
            <li><Link to={{pathname : '/users/ + userId'}}></Link></li>
        </ul>
      </div>


    )

}

export default Navbar;