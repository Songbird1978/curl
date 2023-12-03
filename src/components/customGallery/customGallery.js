import React from 'react';
import ImageGallery from 'react-image-gallery';
import './customGallery.css';

import { useEffect } from 'react';

const CustomGallery = ({ images, title }) => {

    useEffect(() => {
        document.title = title;
      }, [title]);

    return (
        <div className="galleryContainer" >
           
            <ImageGallery 
            width="300px"
            height="300px"
            items={images} 
            showThumbnails={false}
            showFullscreenButton={true}
            autoPlay={false}
            

            />
            
        </div>
    );
};

export default CustomGallery;