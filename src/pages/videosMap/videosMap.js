import React from 'react';
import { Outlet } from "react-router-dom";
import '../../index.css';
import { VIDEOS } from '../../videos';
import VideoSingle from './videoSingle';
import Grid from '@mui/material/Grid';
import '../videosMap/videosMap.css'



function Videos() {

    return (
        <div className="videos" >

            <Outlet />
            <Grid className="videoContainer" container spacing={5}>
                {VIDEOS.map((video, id) => (
                    <Grid key={id} item xs={12} sm={6} md={6} className="videoItem">
                        <VideoSingle data={video} /> </Grid>))}
            </Grid>
        </div>
    );

}

export default Videos;