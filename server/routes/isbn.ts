import { getRevisionByISBN } from 'controllers/revisionController';
import { Router } from 'express';

export const isbnApiRouter = Router()
    .get('/revision', getRevisionByISBN);
