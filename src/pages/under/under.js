import React from 'react';
import { Link } from "react-router-dom";
import '../under/under.css'
import '../../index.css'
import { motion } from "framer-motion";
//import Menatwork from "../../assets/menatwork.png"


function Under() {

    return (

        <>
            <Link to="/home">
                <motion.div className="containerConstruction" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
                    <div className="menatworkanimation">
                       {/* <motion.img src={Menatwork} alt="men at work artwork by Jose" className="menatwork" animate={{ rotate: [0, 360] }} transition={{ repeat: "infiity", duration: 10, delay: 0, repeatDelay: 0 }}></motion.img>*/}
                    </div>
                </motion.div>
            </Link>
        </>

    );

}

export default Under;