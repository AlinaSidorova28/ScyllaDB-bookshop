import Button from 'components/uiKit/Button';
import Card from 'components/uiKit/Card';
import React from 'react';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';

interface CardProps {
    cardInfo: CardItem;
    onClick: () => void;
}

const BookCard: React.FC<CardProps> = ({ cardInfo, onClick }) => {
    const { title, authors, description, pageCount, thumbnail, currencyCode, price } = cardInfo;

    return (
        <Card className={styles.bookCard}>
            <div className={styles.image}>
                <img src={thumbnail}/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h4>{title}</h4>
                    <div>{authors?.join(', ')}</div>
                </div>
                <div>{description || 'No description.'}</div>
                <div>
                    <span className={styles.bold}>Pages: </span>
                    {pageCount || 'Unknown'}
                </div>
                {price ? (
                    <div>
                        <span className={styles.bold}>Price: </span>
                        {`${price.toFixed(2)} ${currencyCode}`}
                    </div>
                ) : null}
                <Button onClick={onClick} label="Add to Cart"/>
            </div>
        </Card>
    );
};

export default BookCard;
