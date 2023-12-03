import React from 'react';
import CustomGallery from '../../components/customGallery/customGallery.js'; // Adjust the import path based on your project structure
import LiveImages from '../../imageData.js';
//import { Outlet } from 'react-router-dom';

const StudioGallery = () => {
   
   
    return <CustomGallery images={LiveImages} title="Live Gallery" />
    

};

export default StudioGallery;
