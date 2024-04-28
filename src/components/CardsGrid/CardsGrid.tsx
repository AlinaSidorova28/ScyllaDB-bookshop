import BookCard from 'components/uiKit/BookCard';
import React from 'react';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';

interface CardsGridProps {
    cardsItems: CardItem[];
}

const CardsGrid: React.FC<CardsGridProps> = ({ cardsItems }) => {
    const { addItem } = useCart();

    const handleAddToCart = (book: Pick<CardItem, 'id' | 'price'>) => {
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
    };

    return (
        <div className={styles.grid}>
            {cardsItems.map((card) => {
                return (
                    <BookCard key={card.id}
                              cardInfo={card}
                              onClick={() => handleAddToCart(card)} />
                );
            })}
        </div>
    );
};

export default CardsGrid;
