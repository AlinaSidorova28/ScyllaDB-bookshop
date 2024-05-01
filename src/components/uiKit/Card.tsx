import { Card as BaseCard } from '@gravity-ui/uikit';
import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <BaseCard view="raised" className={className}>
            {children}
        </BaseCard>
    );
};

export default Card;
