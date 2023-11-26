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
            
                <Grid item className="galleryItem" xs={12}  sm={12} md={6}>
                <motion.div whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={liveGallery} className="galleryLiveLink">
                        <headingGallery className="headingGallery">Live</headingGallery>
                        <img src={frenchTV} className="buttonImage" alt="live at the Black Box">
                        </img>
                    </Link>
                    </motion.div>
                </Grid>
             

                <Grid item className="galleryItem" xs={12}  sm={12} md={6} >
                <motion.div whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={pressGallery} className="galleryLiveLink">
                        <headingGallery className="headingGallery">Press</headingGallery>
                        <img src={curlOne} className="buttonImage" alt="live at the Black Box">
                        </img>
                    </Link>
                    </motion.div>
                </Grid>

                <Grid item className="galleryItem" xs={12}  sm={12} md={6} sx={{}}>
                <motion.div whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={studioGallery} className="galleryLiveLink">
                        <headingGallery className="headingGallery">Studio</headingGallery>
                        <img src={wilThree} className="buttonImage" alt="live at the Black Box">
                        </img>
                    </Link>
                    </motion.div>
                </Grid>

                <Grid item className="galleryItem" xs={12}  sm={12} md={6} sx={{}}>
               <motion.div whileHover={{ scale: 0.8 }}
                transition={{ ease: "easeOut" }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ x: 100 }} 
                        initial={{ x: 0 }}>
                    <Link to={chill} className="galleryLiveLink">
                        <headingGallery className="headingGallery">Chill</headingGallery>
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