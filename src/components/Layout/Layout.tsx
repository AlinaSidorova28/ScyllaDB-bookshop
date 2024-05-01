import Cart from 'components/Cart/Cart';
import Header from 'components/Header/Header';
import React, { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';

import styles from './styles.module.css';

const Layout: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const { items } = useCart();

    const toggleCart = useCallback(() => {
        setIsVisible((prev) => items?.length ? !prev : false);
    }, [items?.length]);

    return (
        <div className="App">
            <Header toggleCart={toggleCart} />
            <div className={styles[isVisible ? 'leftSided' : '']}>
                <Outlet />
            </div>
            <Cart isVisible={isVisible} toggleCart={toggleCart} />
            <ToastContainer />
        </div>
    );
};

export default Layout;
