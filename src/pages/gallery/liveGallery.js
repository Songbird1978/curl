import React from 'react';
import CustomGallery from '../../components/customGallery/customGallery.js'; // Adjust the import path based on your project structure
import LiveImages from '../../imageData.js';
import '../../components/customGallery/customGallery.css';
//import { Outlet } from 'react-router-dom';

const LiveGallery = () => {
    return (
        <div className="">
            <CustomGallery images={LiveImages} title="Live Gallery" />
        </div>

    );
};

export default LiveGallery;

