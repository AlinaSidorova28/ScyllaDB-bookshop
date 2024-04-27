export interface Books {
    kind: string;
    totalItems: number;
    items: Book[];
}

export interface Book {
    id: string;
    kind: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    searchInfo: {
        textSnippet: string;
    };
}

export interface VolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {
        type: 'ISBN_10' | 'ISBN_13' | 'ISSN' | 'OTHER';
        identifier: string;
    }[];
    readingModes: {
        text: boolean;
        image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    averageRating?: number;
    ratingsCount?: number;
}

export interface SaleInfo {
    country: string;
    saleability: 'FOR_SALE' | 'FREE' | 'NOT_FOR_SALE' | 'FOR_PREORDER';
    isEbook: boolean;
    listPrice: {
        amount: number;
        currencyCode: string;
    };
    retailPrice: {
        amount: number;
        currencyCode: string;
    };
    buyLink: string;
    onSaleDate?: string;
}
