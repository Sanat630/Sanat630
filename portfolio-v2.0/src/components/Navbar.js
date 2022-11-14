import React from "react";


function Navbar(){
    return(
        <nav class="navbar" id="navbar">
            <ul class="nav-links-container">
                <li class="nav-link"><a href="#main" class="links active">home</a></li>
                <li class="nav-link"><a href="#name-section" class="links">about</a></li>
                <li class="nav-link"><a href="#portfolio" class="links">projects</a></li>
                <li class="nav-link"><a href="#contact" class="links">contact</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;