import { TextInput, TextInputProps } from '@gravity-ui/uikit';
import React from 'react';

import styles from './styles.module.css';

interface InputProps extends TextInputProps {
    className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return <TextInput className={`${styles.input} ${className}`} {...props} />;
};

export default Input;
