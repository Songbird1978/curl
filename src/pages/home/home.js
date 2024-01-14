import React from 'react';
import { Link } from 'react-router-dom';
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
import data from '../articles/Data.json';
//import Anderson from '../../assets/AndersonA.jpeg';


function Home() {

    const articleIdToTarget = 0;
  const targetedArticle = data.find(article => article.id === articleIdToTarget);

  if (!targetedArticle) {
    // Handle the case where the article with the specified id is not found
    return <p>Article not found</p>;
  }

    return (
        <>
            {/*<motion.div className="homeTwoGrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>*/}

            <Grid container className="gridContainer" sx={{ backgroundColor: 'transparent', margin: '0px', padding: '0', display: 'flex' }}>


                <Grid item className="homeTwoGrid" xs={10} sx={{}}>
                   <Link to={targetedArticle.link} className="homeLink"> 
                  <div className="centerLogo"> {targetedArticle.title}</div>
                  </Link>
                </Grid>
     

            </Grid >

            {/*</motion.div >*/}
        </>
    )
}

export default Home;