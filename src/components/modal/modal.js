import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop.js';
import '../modal/modal.css';
import '../../index.css';
import '../../products';
import { Link } from "react-router-dom";



const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0vh',
        opacity: 1,
        transition: {
            duration: 0.2,
            type: 'spring',
            damping: 15,
            stiffness: 300,
        }
    },
    exit: {

        y: '100vh',
        opacity: 0,
    },
};



const Modal = ({ handleClose, isOpen, albumInfo }) => {
    if (isOpen) {
        return null;
    }

    return (

        <Backdrop onClick={handleClose}>

            <motion.div

                onClick={(e) => e.stopPropagation()}
                className='modal'
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >


                <div className="modalContent">
                    <h2>{albumInfo.productName}</h2>

                    <p>{albumInfo.label}</p>

                    <p>{albumInfo.yearReleased}</p>

                    <iframe
                    className="musicPlayer"
                    title={albumInfo.title}
                    width={albumInfo.width}
                    height={albumInfo.height}
                    src={albumInfo.src}
                    allow={albumInfo.allow}
                    allowtransparency="true"
                    pictureinpicture="true"
                    ></iframe>

                    <br></br><br></br>
                    <Link className="linkInfo">{albumInfo.linksLabel}</Link>
                    <br></br><br></br>
                    <Link className="linkInfo">{albumInfo.linksShop}</Link>
                    <br></br><br></br>
                    
                    
                    <motion.button 
                    className="closeButton" 
                    onClick={handleClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    >Close
                   
                    </motion.button>
                   
                </div>
            </motion.div>

        </Backdrop>

    );

};

export default Modal; 