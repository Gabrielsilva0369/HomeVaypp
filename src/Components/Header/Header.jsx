import { header } from '@/constants';
import styles from './Header.module.scss';
import CreditCardComponent from './CreditCard';
import { motion } from 'framer-motion';

const Header = () => {
    const {caption, title, subtitle} = header;

    const motionProps = (initialX, finalX) => ({
        initial: {opacity:0, x: initialX},
        whileInView: {opacity: 1, x: finalX},
        viewport: {once:true},
        transition: {
            type: 'spring',
            bounce: 0.4,
            durantion: 1,
        }
    });

    return(
        <header className={styles.header}>
            <div className={styles.conteiner}>
                <motion.div {...motionProps(-200, 0)} className={styles.content}>
                 
                    <h1>{title}</h1>
                 
                </motion.div>
                <motion.div {...motionProps(-200, 0)}>
                    <CreditCardComponent />
                </motion.div>
            </div>
        </header>
    );
}

export default Header