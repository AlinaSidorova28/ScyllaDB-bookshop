import { TextInput, TextInputProps } from '@gravity-ui/uikit';
import React from 'react';

interface InputProps extends TextInputProps {
    className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return <TextInput className={className} {...props} />;
};

export default Input;
