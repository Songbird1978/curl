import React from 'react';
import CustomGallery from '../../components/customGallery/customGallery.js'; // Adjust the import path based on your project structure
import PressImages from '../../pressData.js';
import '../../components/customGallery/customGallery.css';
//import { Outlet } from 'react-router-dom';

const PressGallery = () => {
    return (
        <div className="pressGallery">
            <CustomGallery images={PressImages} title="Press Gallery" />
        </div>

    );
};

export default PressGallery;