import React from 'react';
//import { Link } from 'react-router-dom';
//import Home from './pages/home/home';
//import Under from './pages/under/under';
import './home.css';
//import Video from '../../components/video/video';
import Grid from '@mui/material/Grid';
//import { motion } from "framer-motion";
import '../../index.css'
//import NestedGrid from '../../components/nestedGrid/nestedGrid';
//import LiveSlider from '../../components/simpleSlider/liveSlider';
//import { LiveImages } from '../../components/simpleSlider/imageData.js';


function Home() {



    return (
        <>
            {/*<motion.div className="homeTwoGrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>*/}

            <Grid container className="gridContainer" sx={{ backgroundColor: 'transparent', margin: '0px', padding: '0', display: 'flex' }}>


                <Grid item className="homeTwoGrid" xs={10} sx={{}}>
                    <h1 className="centerLogo">CURL</h1>
                    
                </Grid>
     

            </Grid >

            {/*</motion.div >*/}
        </>
    )
}

export default Home;