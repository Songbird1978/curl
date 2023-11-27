import React from 'react';
import './gallery.css';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
import '../../index.css';
//import LiveSlider from '../../components/simpleSlider/liveSlider';
//import { LiveImages } from '../../components/simpleSlider/imageData.js';
import frenchTV from '../../assets/liveImages/French TV.jpg';
import liveGallery from '../gallery/liveGallery.js';
import pressGallery from '../gallery/pressGallery.js';
import studioGallery from '../gallery/studioGallery.js';
import { motion } from 'framer-motion';
import curlOne from '../../assets/pressImages/cool pic2.jpg';
import wilThree from '../../assets/behindTheScenes/wil3.jpg';
import chill from '../gallery/behindTheScenes.js';
import boardsStill from '../../assets/behindTheScenes/CURL VIDEO STILL.jpg';


function Gallery() {

    return (
        <>
            <motion.div className="homeTwoGrid" initial={{ width: 0, height: 0 }} animate={{ width: "100%", height: "100%" }} transition={{ ease: "easeOut", duration: 0.4}} exit={{ x: window.innerwidth, y: window.innerHeight, transition: { duration: 0.1 } }}>

            <Grid container className="galleryGrid" sx={{ backgroundColor: 'transparent', display: 'flex' }}>
            
                <Grid item className="galleryItem" xs={12}  sm={6} md={3}>
                <motion.button whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={liveGallery} className="galleryLiveLink">
                        <div className="headingGallery">LIVE</div>
                        <img src={frenchTV} className="buttonImage" alt="live at the Black Box">
                        </img>
                    </Link>
                    </motion.button>
                </Grid>
             

                <Grid item className="galleryItem" xs={12}  sm={6} md={3} >
                <motion.div whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={pressGallery} className="galleryLiveLink">
                        <div className="headingGallery">PRESS</div>
                        <img src={curlOne} className="buttonImage" alt="live at the Black Box">
                        </img>
                    </Link>
                    </motion.div>
                </Grid>

                <Grid item className="galleryItem" xs={12}  sm={6} md={3} sx={{}}>
                <motion.div whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={studioGallery} className="galleryLiveLink">
                        <div className="headingGallery">STUDIO</div>
                        <img src={wilThree} className="buttonImage" alt="live at the Black Box">
                        </img>
                    </Link>
                    </motion.div>
                </Grid>

                <Grid item className="galleryItem" xs={12}  sm={6} md={3} sx={{}}>
               <motion.div whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={chill} className="galleryLiveLink">
                        <div className="headingGallery">CHILL</div>
                        <img src={boardsStill} className="buttonImage" alt="live at the Black Box">
                        </img>
                    </Link>
                    </motion.div>
                </Grid>

            </Grid >
          
            </motion.div >
        </>
    )
}

export default Gallery;