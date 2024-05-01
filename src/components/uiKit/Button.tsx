import { Button as BaseButton, ButtonProps as BaseButtonsProps } from '@gravity-ui/uikit';
import React from 'react';

import styles from './styles.module.css';

interface ButtonProps extends BaseButtonsProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
    return (
        <BaseButton className={styles.button} {...props}>
            {label}
        </BaseButton>
    );
};

export default Button;
