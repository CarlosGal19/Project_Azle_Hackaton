import { Server, ic } from 'azle';
import express from 'express';
import cors from 'cors';

export default Server(() => {

    type Sample = {
        id: String,
        date: Date,
        ph: Number,
        temperature: Number,
        turbidity: Number,
        tds: Number,
        amount: Number 
    };

    let initial_sample : Sample[] = [
        {
            id: "872910203810",
            date: new Date('2024-07-27T16:56:00'),
            ph: 7.8,
            temperature: 23.5,
            turbidity: 430,
            tds: 230,
            amount: 23.7
        }
    ];

    let final_sample : Sample[] = [
        {
            id: "872910203402",
            date: new Date('2024-07-27T17:34:00'),
            ph: 8.7,
            temperature: 23.5,
            turbidity: 215,
            tds: 120,
            amount: 19.9
        }
    ];

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use((req, res, next) => {
        if (ic.caller().isAnonymous()) {
            res.status(401);
            res.send();
        } else {
            next();
        }
    });

    app.get('/', (req, res) => {
        return 'Hello world';
    })

    return app.listen();
})
