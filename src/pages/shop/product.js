import React from 'react';
import '../../index.css';
import './shop.css';
import '../../products';

function Product(albumInfo) {

    return (

        <>


            <img key={albumInfo.id} src={albumInfo.productImage} className="imageProduct" alt={albumInfo.productName} />


        </>

    );

}

export default Product;