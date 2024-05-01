import { getBooks } from 'controllers/bookController';
import { Router } from 'express';

export const bookApiRouter = Router()
    .get('/search', getBooks);
