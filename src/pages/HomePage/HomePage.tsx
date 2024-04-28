import CardsGrid from 'components/CardsGrid/CardsGrid';
import Loader from 'components/uiKit/Loader';
import { BASE_URL } from 'config';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';

const HomePage = () => {
    const [searchResults, setSearchResults] = useState<CardItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(`${BASE_URL}/search?query=${searchQuery}`);
            const data = await response.json();

            if (response.ok) {
                setSearchResults(data);
            } else {
                setError(new Error(`Error ${data.status}: ${data.error}`));
            }

            setIsLoading(false);
        } catch (error: any) {
            setError(error);
            setIsLoading(false);
        }
    };

    if (error) {
        return <p className={styles.error}>{error.message}</p>;
    }

    return (
        <div>
            {isLoading
                ? <Loader/>
                : searchResults.length > 0
                    ? <CardsGrid cardsItems={searchResults} />
                    : <p>No books found.</p>
            }
        </div>
    );
};

export default HomePage;
