import React from "react";
import { Outlet } from "react-router-dom";
import './articles.css';
import '../../index.css';
import { motion } from "framer-motion";
import "../biography/biography.css";
import '../../index.css';

function Anderson() {
    return (

        <motion.div className="containerConstruction" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

            <div className="mxnifesto" >
                <h1 className="title">Anderson Shelter</h1>
                <p className="manifestoParagraph">{

                    `
It has been seven years since the release of the third album from CURL 'Shapeshifters' but the question you have to ask is, 'Who is Anderson?'

The worst superhero we have ever met. Collaborating with this guy, has slowed development for the creation of the forthcoming, 2024 album, 'Interferometry'. 

In 1940, the British Government asked the people to build Anderson Shelters in their gardens as protection from the Blitz. "A feelgood factor", "Do your bit", yet, completely useless, just like our superhero associate. The new CURL single 'Anderson Shelter' will help you understand how CURL have been recovering from their self-inflicted bombing raids.

`}
                </p>
            </div>

            <Outlet />

        </motion.div>

    );
}

export default Anderson;