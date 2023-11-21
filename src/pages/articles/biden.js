import React from "react";
//import { Link } from "react-router-dom";
import './articles.css';
import '../../index.css';
import Paper from '@mui/material/Paper';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import data from '../../Data.json';



function Biden() {
    return (

        <motion.div className="containerConstruction" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

            <Paper className="paper" elevation={10} sx={{ mode: 'dark' }}>
                <h1 className="title">{data.title[2]}</h1>

                <Box >
                    <Box >
                            <video autoPlay playsInline muted >
                                <source src="" type="video/mp4" poster=""></source>
                            </video>
                     
                    </Box>
                </Box>

                <p className="Paragraph">{

                    `
BIDEN


`}

                </p>

            </Paper>
        </motion.div>


    );
}

export default Biden;