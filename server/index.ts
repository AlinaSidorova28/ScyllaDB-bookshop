import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { bookApiRouter } from 'routes/book';
import { HTTP_404_NOT_FOUND } from 'utils/constants';

const app = express();

dotenv.config();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(bookApiRouter);

app.use((req, res) => {
    res.status(HTTP_404_NOT_FOUND).json({ error: 'Not Found', status: HTTP_404_NOT_FOUND });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`);
    console.info('Press Ctrl+C to quit.');
});
