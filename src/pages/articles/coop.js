import React from "react";
import './articles.css';
import '../../index.css';
import Paper from '@mui/material/Paper';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
//import data from '../../Data.json';


function Coop() {
    return (

        <motion.div className="containerConstruction" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

            <Paper className="mxnifesto" elevation={10} sx={{ mode: 'dark' }}>
                <h1 className="title">Co-operation Condor</h1>

                <Box className="A">
                    <Box className="B">
                            <video autoPlay playsInline muted >
                               
                            </video>
                     
                    </Box>
                </Box>

                <p className="manifestoParagraph">{

                    `
COOP

`}

                </p>

            </Paper>
        </motion.div>


    );
}

export default Coop;