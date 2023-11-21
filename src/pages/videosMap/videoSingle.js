import React from 'react';
//import { Outlet } from "react-router-dom";
import '../../index.css';
//import Card from '@mui/material/Card';
//import videosMap from '../videosMap/videoMap';
import './videoSingle.css'
import ReactPlayer from 'react-player/lazy';


function VideoSingle(props) {
    const { videoInfo, videoUrl } = props.data;
    return (

        <ReactPlayer
            url={videoUrl}
            className="videoWrapper"
            alt={videoInfo}
            width='100%'
            height='100%' />
    );
}

export default VideoSingle;