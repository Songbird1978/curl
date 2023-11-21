import React from 'react';
import '../../index.css';
import './shop.css';
//import Card from '@mui/material/Card';

//import { AnimatePresence } from "framer-motion";



function Record(props) {

    const { productName, productImage, productDescription } = props.data;


    return (

        <>

            <div className="productName" >
                <img src={productImage} className="imageProduct" alt={productName} />
                <h1>{productName}</h1>
                <p>{productDescription}</p>


            </div>

        </>

    );

}

export default Record;