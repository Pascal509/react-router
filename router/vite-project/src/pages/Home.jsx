import React from "react";
import { Link } from "react-router-dom";


function Home (){
    return(
        <div>
            <h1>HOME</h1>
            <p>WELCOME HOME</p>
        <nav>

        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
         </nav>
        </div>
    )
}

export default Home;