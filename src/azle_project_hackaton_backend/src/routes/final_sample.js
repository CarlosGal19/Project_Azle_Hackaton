import express from 'express';
import { getLatest, getAll, create } from '../controllers/finalController.js';

const FinalRouter = express.Router();

FinalRouter.get('/one', async (req, res) => {
    getLatest(req, res);
});

FinalRouter.get('/all', async (req, res) => {
    getAll(req, res);
});

FinalRouter.post('/create', async (req, res) => {
    create(req, res);
});

export default FinalRouter;
