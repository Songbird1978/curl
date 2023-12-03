import React from 'react';
import { Outlet } from 'react-router-dom';
//import Home from './pages/home/home';
//import Under from './pages/under/under';
import './articles.css';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import '../../index.css'
import Article from './article';

function Articles() {

    return (
        <>
            <motion.div className="" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

                <Grid container className="" sx={{ display: 'flex' }}>
                    <Outlet />

                    <Grid item className="homeTwoGrid" xs={1} sx={{ backgroundColor: 'transparent', height: '10vh' }} ></Grid>
                    <Grid item className="homeTwoGrid" xs={10} sx={{ backgroundColor: 'transparent', height: '10vh' }} ></Grid>
                    <Grid item className="homeTwoGrid" xs={1} sx={{ backgroundColor: 'transparent', height: '10vh' }}></Grid>

                    <Grid item className="noFun" xs={1} sx={{ backgroundColor: 'transparent', height: '75vh' }}></Grid>
                    <Grid item className="center" xs={10} sx={{}}>
                        <Article></Article>
                    </Grid>
                    <Grid item className="scratch" xs={1} sx={{ backgroundColor: 'transparent', height: '75vh' }}></Grid>

                    <Grid item className="seven" xs={1} sx={{ backgroundColor: 'transparent', height: '10vh' }}></Grid>
                    <Grid item className="homeTwoGrid" xs={10} sx={{ backgroundColor: 'transparent', height: '10vh' }}></Grid>
                    <Grid item className="nine" xs={1} sx={{ backgroundColor: 'transparent', height: '10vh' }}></Grid>

                </Grid >


            </motion.div >
        </>
    )
}

export default Articles;