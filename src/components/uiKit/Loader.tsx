import { Spin } from '@gravity-ui/uikit';
import React from 'react';

import styles from './styles.module.css';

const Loader: React.FC = () => {
    return (
        <div className={styles.loader}>
            Loading
            <Spin size="xl" className={styles.innerSpinner}/>
        </div>
    );
};

export default Loader;
