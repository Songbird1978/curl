import React from "react";
//import { Link } from "react-router-dom";
import "./biography.css";
import '../../index.css';
import { motion } from "framer-motion";
//import Container from '@mui/material/Container';


function Biography() {
    return (

        <motion.div className="containerConstruction" initial={{ width: 0, transition: { duration: 0.5 } }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>

            <div className="mxnifesto" >
                <h1 className="heading">BIOGRAPHY</h1>
                <p className="manifestoParagraph">{

                    `
CURL will create music. 

Wholesome pulsating, magnetic music.

Music for souls,

to question our existence,

to illustrate our human insignificance,

to sooth hearts.

------------------------------

Curl were initially an Electronic project started by French Producer and Guitarist Frank Amendola (Corpus Delicti) at the start of the Millenium.

Albums Ultimate Station and Inner were released (EMI France). Curl has since developed into an international collaboration.

From 2009 the music has featured the soaring melodic vocals of English Rose, Hayley Alker, additional guitar from Wil Sintaste, bass guitar from Manu Acqualeni and drums from UK Producer Jonny Callender (Cranes, Vex).

2011 saw Curl release the Long Player We are Complex across Europe through the Paris based label D-Monic.

2014 saw the release of the new album Exit Real Life, a new wave, dreamy production that will send the listener through an emotional sonic journey. Angelic combinations of twisting guitar chime, fluttering synthesizers and beastly rhythms are married to Goddess like vocal melodies - intense sonic sculptures for the audio palette.

The 'Award winning' French film documentary 'Les Enfants d'Okeanos' (The Children Of The Sea) featured a soundtrack that was exclusively from the album 'Exit Real Life' in the Spring of 2014. The film was directed by Fabrice Begotti who has since been filming a new video with the group on the Cote D'Azur.

Curl is a truly international project with the group sharing studio time between Nice and Marseille on the South coast of France and Portsmouth on the South coast of the UK.

Psychic Uri Geller was quoted as saying "Lord Admiral Nelson and Napoleon Bonaparte are big fans of Curl and regularly get together to listen to their music over several tots of rum". What else is there to say?


`}

                </p>
            </div>
        </motion.div>
    );
}

export default Biography;