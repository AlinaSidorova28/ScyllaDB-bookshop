import { HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR } from 'utils/constants';

export const getRevisionByISBN = async (req: any, res: any) => {
    const { isbn } = req.query;

    try {
        const url = `https://openlibrary.org/isbn/${isbn}.json`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            if (data) {
                console.info(`GET: ${url}`);
                res.json({ revision: data.revision });
            } else {
                console.error('Error: No information found for the given ISBN');
                res.status(HTTP_404_NOT_FOUND)
                    .json({ error: 'No information found for the given ISBN', status: HTTP_404_NOT_FOUND });
            }
        } else {
            console.error('Error fetching revision information: ', response.status);
            res.status(response.status).json({ error: 'Error fetching revision information', status: response.status });
        }
    } catch (error) {
        console.error(error);
        res.status(HTTP_500_INTERNAL_SERVER_ERROR)
            .json({ error: 'Internal server error', status: HTTP_500_INTERNAL_SERVER_ERROR });
    }
};
