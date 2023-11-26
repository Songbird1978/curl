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


function Gallery() {

    return (
        <>
            {/*<motion.div className="homeTwoGrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>*/}

            <Grid container className="galleryGrid" sx={{ backgroundColor: 'transparent', display: 'flex' }}>

                <Grid item className="galleryItem" xs={12}  sm={6} md={6}>
                
                    <Link to={liveGallery} className="galleryLiveLink">
                        <img src={frenchTV} className="buttonImage" alt="live at the Black Box">

                        </img>
                    </Link>
                
                </Grid>

                <Grid item className="galleryItem" xs={12}  sm={6} md={6} >
                <Link to={liveGallery} className="galleryLiveLink">
                        <img src={frenchTV} className="buttonImage" alt="live at the Black Box">

                        </img>
                    </Link>
                </Grid>
                <Grid item className="galleryItem" xs={12}  sm={6} md={6} sx={{}}>
                <Link to={liveGallery} className="galleryLiveLink">
                        <img src={frenchTV} className="buttonImage" alt="live at the Black Box">

                        </img>
                    </Link>
                </Grid>
                <Grid item className="galleryItem" xs={12}  sm={6} md={6} sx={{}}>
                <Link to={liveGallery} className="galleryLiveLink">
                        <img src={frenchTV} className="buttonImage" alt="live at the Black Box">

                        </img>
                    </Link>
                </Grid>

            </Grid >
          
            {/*</motion.div >*/}
        </>
    )
}

export default Gallery;