import CartItem from 'components/Cart/CartItem';
import Card from 'components/uiKit/Card';
import React from 'react';
import { Item, useCart } from 'react-use-cart';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';

interface CartProps {
    isVisible: boolean;
    toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ isVisible, toggleCart }) => {
    const { items, cartTotal } = useCart();

    if (!items?.length) {
        toggleCart();

        return null;
    }

    return (
        <Card className={styles[isVisible ? 'visible' : 'hidden']}>
            {items?.map((el) => {
                return <CartItem key={el.id} item={el as Item & CardItem}/>;
            })}
            <div className={styles.total}>
                <span>Total price: </span>
                {`${cartTotal.toFixed(2)} ${items[0].currencyCode}`}
            </div>
        </Card>
    );
};

export default Cart;
