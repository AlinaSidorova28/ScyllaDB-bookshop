export interface CardItem {
    id: string;
    title: string;
    pageCount: number;
    thumbnail: string;
    price: number;
    currencyCode: string;
    description?: string;
    authors?: string[];
    isbn?: string;
}
