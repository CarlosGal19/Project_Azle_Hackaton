import express from 'express';
import { getLatest, getAll, create } from '../controllers/finalController.js';

const InitialRouter = express.Router();

InitialRouter.get('/one', async (req, res) => {
    getLatest(req, res);
});

InitialRouter.get('/all', async (req, res) => {
    getAll(req, res);
});

InitialRouter.post('/create', async (req, res) => {
    create(req, res);
});

export default InitialRouter;
