import { Books } from 'types/book';
import { defaultThumbnail, HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR } from 'utils/constants';

export const getBooks = async (req: any, res: any) => {
    const { query = '*', startIndex = 0, maxResults = 40 } = req.query;

    try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&maturityRating=NOT_MATURE&filter=paid-ebooks`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json() as Books;

            if (data?.items) {
                const result = data.items.map((item) => {
                    const thumbnail = item.volumeInfo.imageLinks?.thumbnail || defaultThumbnail;

                    const { title, authors, description, pageCount } = item.volumeInfo;

                    return {
                        id: item.id,
                        title,
                        authors,
                        description,
                        pageCount,
                        thumbnail,
                        saleInfo: item.saleInfo,
                        price: item.saleInfo?.retailPrice?.amount,
                    };
                });

                res.json(result);
            } else {
                console.error('Error: No books found for the given query');
                res.status(HTTP_404_NOT_FOUND)
                    .json({ error: 'No books found for the given query', status: HTTP_404_NOT_FOUND });
            }
        } else {
            console.error('Error fetching books: ', response.status);
            res.status(response.status).json({ error: 'Error fetching books', status: response.status });
        }
    } catch (error) {
        console.error(error);
        res.status(HTTP_500_INTERNAL_SERVER_ERROR)
            .json({ error: 'Internal server error', status: HTTP_500_INTERNAL_SERVER_ERROR });
    }
};
