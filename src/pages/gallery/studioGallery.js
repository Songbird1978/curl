import React from 'react';
import Gallery from 'react-grid-gallery';
import  LiveImages  from '../../imageData.js';

const images = LiveImages; 

const StudioGallery = () => {

    return <Gallery images={images} />;
};

export default StudioGallery;