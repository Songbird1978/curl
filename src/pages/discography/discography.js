import React from 'react';
import { Outlet } from "react-router-dom";
import '../../index.css'
import { PRODUCTS } from '../../products';
//import Product from '../shop/product';
import Grid from '@mui/material/Grid';
import '../discography/discography.css';
//import { Link } from "react-router-dom";
//import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from '../../components/modal/modal';
import { motion } from 'framer-motion';


function Discography() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const close = () => setModalOpen(false);
    const open = (albumInfo) => { setModalOpen(true); setSelectedAlbum(albumInfo) };

    return (

        <Grid className="discContainer" container spacing={5}>


            <Outlet />

            {PRODUCTS.map((albumInfo) => (
                
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="Products" key={albumInfo.id} >

                        <motion.button
                            key={albumInfo.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='saveButton'
                            onClick={() => {

                                modalOpen ? close() : open(albumInfo)

                            }}
                        >
                            <img key={albumInfo.id} src={albumInfo.productImage} className="imageProduct" alt={albumInfo.productName} />


                        </motion.button>
                    </Grid>
              
            ))}

            {modalOpen && <Modal
                modalOpen={modalOpen}
                handleClose={close}
                albumInfo={selectedAlbum}

            >

            </Modal>}

        </Grid>

    );

}

export default Discography;