import { Server } from 'azle';
import express from 'express';
import cors from 'cors';

export default Server(() => {

    type Sample = {
        id: String,
        dateTime: Date,
        pH: Number,
        temperature: Number,
        turbidity: Number,
        tds: Number,
        quantity: Number
    };

    let initial_sample : Sample[] = [
        {
            id: "872910203810",
            dateTime: new Date('2024-07-27T16:56:00'),
            pH: 7.8,
            temperature: 23.5,
            turbidity: 430,
            tds: 230,
            quantity: 23.7
        }
    ];

    let final_sample : Sample[] = [
        {
            id: "872910203402",
            dateTime: new Date('2024-07-27T17:34:00'),
            pH: 8.7,
            temperature: 23.5,
            turbidity: 215,
            tds: 120,
            quantity: 19.9
        }
    ];

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get('/greet', (req: Request, res: any) => {
        return res.status(200).send({message: 'Hello World from Azle!'});
    });

    app.get('/initial_samples', (req: Request, res: any) => {
        return res.status(200).send({message: initial_sample});
    });

    app.get('/final_samples', (req: Request, res: any) => {
        return res.status(200).send({message: final_sample});
    });

    // Get the latest initial sample
    app.get('/latest_initial_sample', (req: Request, res: any) => {
        return res.status(200).send({message: initial_sample[initial_sample.length - 1]});
    });

    // Get the latest final sample
    app.get('/latest_final_sample', (req: Request, res: any) => {
        return res.status(200).send({message: final_sample[final_sample.length - 1]});
    });

    return app.listen();
})
