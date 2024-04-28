import { SaleInfo } from 'types/book';

export interface CardItem {
    id: string;
    title: string;
    pageCount: number;
    thumbnail: string;
    saleInfo: SaleInfo;
    price: number;
    description?: string;
    authors?: string[];
}
