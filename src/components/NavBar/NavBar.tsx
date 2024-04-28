import { ShoppingCart } from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';
import React, { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';

import styles from './styles.module.css';

const Navbar: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const { totalItems } = useCart();

    const formRef = useRef(null);

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const searchValue = data.get('search');
        const query = searchValue ? searchValue.toString().trim() : '';

        if (query) {
            navigate(`/search?query=${query}`);
        } else {
            navigate('/');
        }
    };

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target;

        setSearchValue(value);
    };

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('query');
        setSearchValue(searchQuery || '');
    }, []);

    return (
        <nav className={styles.header}>
            <Link to="/" className={styles.title}>
                <h1>ScyllaDB Bookshop</h1>
            </Link>

            <div className={styles.navbarWrapper}>
                <form onSubmit={onSubmit} ref={formRef} className={styles.form}>
                    <div className={styles.searchIcon}>
                        <svg aria-hidden="true"
                             fill="none"
                             stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>

                    <input className={styles.searchInput}
                           type="text"
                           name="search"
                           placeholder="Search"
                           value={searchValue}
                           onChange={handleSearchChange} />
                    <button type="submit" className={styles.searchButton}>
                        Search
                    </button>
                </form>

                <Link to="/cart" className={styles.cartWrapper}>
                    <div>Cart</div>
                    <span className={styles.cartIconWrapper}>
                        <Icon size={20} data={ShoppingCart} className={styles.cartIcon} />
                        {totalItems > 0 && (
                            <span className={styles.itemsCount}>{totalItems}</span>
                        )}
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
