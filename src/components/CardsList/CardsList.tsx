import BookCard from 'components/CardsList/BookCard';
import Loader from 'components/uiKit/Loader';
import { BASE_URL } from 'config';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';

const DEFAULT_QUERY = 'nosql';

const CardsList: React.FC = () => {
    const [cardsItems, setCardsItems] = useState<CardItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const { addItem, getItem } = useCart();
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(`${BASE_URL}/search?query=${searchQuery || DEFAULT_QUERY}`);
            const data = await response.json();

            if (response.ok) {
                setCardsItems(data);
            } else {
                setError(new Error(`Error ${data.status}: ${data.error}`));
            }

            setIsLoading(false);
        } catch (error: any) {
            setError(error);
            setIsLoading(false);
        }
    };

    const handleAddToCart = (book: Pick<CardItem, 'id' | 'price'>) => {
        if (!getItem(book.id)) {
            addItem(book);
            toast.success('Book added to cart successfully!', {
                position: 'bottom-left',
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    if (error) {
        return <p className={styles.error}>{error.message}</p>;
    }
    
    if (isLoading) {
        return <Loader/>;
    }

    return cardsItems.length > 0
        ? (
            <div className={styles.grid}>
                {cardsItems.map((card) => {
                    return (
                        <BookCard key={card.id}
                                  cardInfo={card}
                                  onClick={() => handleAddToCart(card)} />
                    );
                })}
            </div>
        )
        : <p>No books found.</p>;
};

export default CardsList;
