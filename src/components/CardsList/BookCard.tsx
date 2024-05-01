import Button from 'components/uiKit/Button';
import Card from 'components/uiKit/Card';
import React, { useEffect, useState } from 'react';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';
import { BASE_URL } from 'config';
import Loader from 'components/uiKit/Loader';

interface CardProps {
    cardInfo: CardItem;
    onClick: () => void;
}

const BookCard: React.FC<CardProps> = ({ cardInfo, onClick }) => {
    const [revision, setRevision] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { title, authors, description, pageCount, thumbnail, currencyCode, price, isbn } = cardInfo;

    useEffect(() => {
        if (isbn) {
            fetchData();
        }
    }, [isbn]);

    const fetchData = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(`${BASE_URL}/revision?isbn=${isbn}`);
            const data = await response.json();

            if (response.ok) {
                setRevision(data.revision);
            }

            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Card className={styles.bookCard}><Loader/></Card>;
    }

    return (
        <Card className={styles.bookCard}>
            <div className={styles.image}>
                <img src={thumbnail}/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h4>{`${title}${revision && revision > 1 ? `, rev. ${revision}` : ''}`}</h4>
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
