import { Button as BaseButton } from '@gravity-ui/uikit';
import React from 'react';

import styles from './styles.module.css';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <BaseButton onClick={onClick} className={styles.button}>
            {label}
        </BaseButton>
    );
};

export default Button;
