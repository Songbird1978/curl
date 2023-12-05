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
                    <ul className="contentList">                   
                        <li>
                         <h2>{albumInfo.productName}</h2>
                         </li>
                         <li>
                    <p>{albumInfo.label}</p>
                    
                    </li>
                    <li>
                    <p>{albumInfo.yearReleased}</p>
                    </li>
                    </ul>

                </div>

                <div className="musicPlayer">

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
                </div>
                <div className="buttonList">
                    <br></br><br></br>

                    <ul className="buttonList">
                        <li>
                    <Link className="linkInfo">
                    <motion.button 
                    className="closeButton" 
                    to="{albumInfo.linksLabel}"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    > Label   
                    </motion.button>
                    </Link>
                    </li>

                    <li>
                    <Link className="linkInfo">
                    <motion.button 
                    className="closeButton" 
                    onClick={albumInfo.linksShop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    > Shop  
                    </motion.button>
                    </Link>
                    </li>

                    <li>
                    <Link className="linkInfo">
                    <motion.button 
                    className="closeButton" 
                    onClick={handleClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    >Close
                    </motion.button>
                    </Link>
                    </li>
                    </ul>
                   

                   
                   
                </div>
            </motion.div>

        </Backdrop>

    );

};

export default Modal; 