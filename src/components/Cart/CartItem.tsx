import Button from 'components/uiKit/Button';
import Card from 'components/uiKit/Card';
import Input from 'components/uiKit/Input';
import React, { ChangeEventHandler, FormEventHandler, useCallback, useEffect, useState } from 'react';
import { Item, useCart } from 'react-use-cart';
import { CardItem } from 'types/cards';

import styles from './styles.module.css';

interface CartItemProps {
    item: Item & CardItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const [value, setValue] = useState(0);
    const [error, setError] = useState('');

    const { updateItem, removeItem } = useCart();

    useEffect(() => {
        setValue(item.quantity ?? 0);
    }, []);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target }) => {
        setError('');
        setValue(+target.value || 0);
    }, []);

    const validateQuantity = useCallback(() => {
        if (value < 1 || value > 100) {
            setError('Sorry! Number invalid');

            return false;
        }

        return true;
    }, [value]);

    const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
        event.preventDefault();
        const isQuantityValid = validateQuantity();

        if (isQuantityValid) {
            updateItem(item.id, { ...item, quantity: value });
        }
    }, [item, value]);

    return (
        <Card className={styles.cartItem}>
            <button className={styles.removeItem} onClick={() => removeItem(item.id)}>
                X
            </button>
            <form onSubmit={onSubmit} className={styles.cartItemForm}>
                <h4>{item.title}</h4>
                <Input type="number" value={value.toString()} onChange={onChange} />
                <Button label="Update quantity" type="submit" />
                {error && <span className={styles.error}>{error}</span>}
            </form>
        </Card>
    );
};

export default CartItem;
