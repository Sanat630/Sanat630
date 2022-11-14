import React from "react";
import github from "../assets/images/github.png";
import instagram from "../assets/images/insta.png";
import facebook from "../assets/images/fb.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linked.png";


function Name_section(){
    return(
        <section id="name-section">
            <h1 class="headname">Abdunazarov Sanat</h1>
            <p class="spl">Front-End developer</p>
            <div class="about-container"> 
                <div class="image-container">
                    <div class="social-links">
                        <a href="https://github.com/Sanat630" target="_blank" img={github} class="social-img" alt=""></a>
                        <a href="https://www.instagram.com/sanat630/" target="_blank" img={instagram} class="social-img" alt=""></a>
                        <a href="https://www.facebook.com/sanat.abdunazarov.1" target="_blank" img={facebook} class="social-img" alt=""></a>
                        <a href="https://twitter.com/Sanatboec" target="_blank" img={twitter} class="social-img" alt=""></a>
                        <a href="https://www.linkedin.com/in/sanat-abdunazarov-73930b217" target="_blank" img={linkedin} class="social-img" alt=""></a>

                    </div>
                </div>
            </div>
        </section>
    )
};


export default Name_section;