import { motion } from 'framer-motion';
import '../Backdrop/backdrop.css';

const Backdrop = ({ parent, children, onClick }) => {

return (

    <motion.div
    
    className='backdrop'
    onClick={onClick}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0 }}
    >
    {parent}
    {children}
    </motion.div>
);

};

export default Backdrop; 