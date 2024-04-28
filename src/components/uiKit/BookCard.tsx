import { Card as BaseCard } from '@gravity-ui/uikit';
import Button from 'components/uiKit/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';

interface CardProps {
    cardInfo: CardItem;
    onClick: () => void;
}

const BookCard: React.FC<CardProps> = ({ cardInfo, onClick }) => {
    const { title, authors, description, pageCount, thumbnail, saleInfo, id } = cardInfo;

    return (
        <BaseCard view="raised" className={styles.bookCard}>
            <Link to={`/books/${id}`}>
                <img src={thumbnail}/>
            </Link>
            <div className={styles.titleWrapper}>
                <h4>{title}</h4>
                <div>{authors?.join(', ')}</div>
            </div>
            <div className={styles.description}>{description || 'No description.'}</div>
            <div>
                <span className={styles.bold}>Pages: </span>
                {pageCount}
            </div>
            {saleInfo.retailPrice && (
                <div>
                    <span className={styles.bold}>Price: </span>
                    {`${saleInfo.retailPrice.amount} ${saleInfo.retailPrice.currencyCode}`}
                </div>
            )}
            <Button onClick={onClick} label="Add to Cart"/>
        </BaseCard>
    );
};

export default BookCard;
