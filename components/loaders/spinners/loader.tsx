import React from 'react';
import styles from '@/components/styles/overlayLoader.module.css';



const Loader = () => {


    return (
        <div className={styles.overlay}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loader;
