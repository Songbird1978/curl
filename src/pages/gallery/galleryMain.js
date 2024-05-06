import React from 'react';
import './gallery.css';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import '../../index.css';
import frenchTV from '../../assets/liveImages/French TV.jpg';
import { motion } from 'framer-motion';
import curlOne from '../../assets/pressImages/cool pic2.jpg';
import wilThree from '../../assets/behindTheScenes/wil3.jpg';
import boardsStill from '../../assets/behindTheScenes/CURL VIDEO STILL.jpg';
import { Outlet } from 'react-router-dom';


function GalleryMain() {

    return (
        <>
            <motion.div className="galleryMotionDiv" initial={{ width: 0, height: 0 }} animate={{ width: "100%", height: "100%" }} transition={{ ease: "easeOut", duration: 0.4 }} exit={{ x: window.innerwidth, y: window.innerHeight, transition: { duration: 0.1 } }}>

                <Grid container className="galleryGrid" sx={{ backgroundColor: 'transparent', display: 'flex' }}>

                    <Grid item className="galleryItem" xs={12} sm={6} md={3}>
                        <Link to="/liveGallery" className="galleryLiveLink">
                            <motion.button whileHover={{ scale: 0.9 }}
                                transition={{ ease: "easeOut" }}
                                whileTap={{ scale: 1.1 }}
                                animate={{ x: 100 }}
                                initial={{ x: 0 }}>

                                <div className="headingGallery">LIVE</div>
                                <img src={frenchTV} className="buttonImage" alt="live at the Black Box">
                                </img>

                            </motion.button>
                        </Link>
                    </Grid>


                    <Grid item className="galleryItem" xs={12} sm={6} md={3} >
                        <Link to="/pressGallery" className="galleryLiveLink">
                            <motion.button whileHover={{ scale: 0.9 }}
                                transition={{ ease: "easeOut" }}
                                whileTap={{ scale: 1.1 }}
                                animate={{ x: 100 }}
                                initial={{ x: 0 }}>

                                <div className="headingGallery">PRESS</div>
                                <img src={curlOne} className="buttonImage" alt="live at the Black Box">
                                </img>
                            </motion.button>
                        </Link>
                    </Grid>

                    <Grid item className="galleryItem" xs={12} sm={6} md={3} >
                        <motion.div whileHover={{ scale: 0.9 }}
                            transition={{ ease: "easeOut" }}
                            whileTap={{ scale: 1.1 }}
                            animate={{ x: 100 }}
                            initial={{ x: 0 }}>
                            <Link to="/studioGallery.js" className="galleryLiveLink">
                                <div className="headingGallery">STUDIO</div>
                                <img src={wilThree} className="buttonImage" alt="live at the Black Box">
                                </img>
                            </Link>
                        </motion.div>
                    </Grid>

                    <Grid item className="galleryItem" xs={12} sm={6} md={3} sx={{}}>
                        <motion.div whileHover={{ scale: 0.9 }}
                            transition={{ ease: "easeOut" }}
                            whileTap={{ scale: 1.1 }}
                            animate={{ x: 100 }}
                            initial={{ x: 0 }}>
                            <Link to="/behindTheScenes.js" className="galleryLiveLink">
                                <div className="headingGallery">CHILL</div>
                                <img src={boardsStill} className="buttonImage" alt="live at the Black Box">
                                </img>
                            </Link>
                        </motion.div>
                    </Grid>

                </Grid >
                <Outlet />

            </motion.div >
        </>
    )
}

export default GalleryMain;