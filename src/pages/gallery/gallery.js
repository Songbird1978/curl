import React from 'react';
import './gallery.css';
import Grid from '@mui/material/Grid';
//import { motion } from "framer-motion";
import '../../index.css'
import LiveSlider from '../../components/simpleSlider/liveSlider';
import { LiveImages } from '../../components/simpleSlider/imageData.js';


function Gallery() {



    return (
        <>
            {/*<motion.div className="homeTwoGrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>*/}

            <Grid container className="galleryGrid" sx={{ backgroundColor: 'transparent', display: 'flex' }}>


                <Grid item className="galleryItem" xs={12} sx={{}}>
                    <LiveSlider className='LiveSlider' LiveImages={LiveImages} sliderHeight="600px" />

                </Grid>


            </Grid >
          
        

            {/*</motion.div >*/}
        </>
    )
}

export default Gallery;