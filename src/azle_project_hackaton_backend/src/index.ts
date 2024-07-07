import { Server } from 'azle';
import express, { Request } from 'express';
import cors from 'cors';

export default Server(() => {
    type Sample = {
        id: string,
        dateTime: Date,
        pH: number,
        temperature: number,
        turbidity: number,
        tds: number,
        quantity: number
    };

    let initial_sample: Sample[] = [
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

    let final_sample: Sample[] = [
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

    app.get('/greet', (req: Request, res) => {
        return res.status(200).send({ message: 'Hello World from Azle!' });
    });

    app.get('/initial_samples', (req: Request, res) => {
        if (initial_sample.length === 0) {
            return res.status(404).send({ message: 'No samples' });
        }
        return res.status(200).send({ message: initial_sample });
    });

    app.get('/final_samples', (req: Request, res) => {
        if (final_sample.length === 0) {
            return res.status(404).send({ message: 'No samples' });
        }
        return res.status(200).send({ message: final_sample });
    });

    app.post('/initial_sample', (req: Request, res) => {
        const { id, dateTime, pH, temperature, turbidity, tds, quantity } = req.body;
        if (!id || !dateTime || !pH || !temperature || !turbidity || !tds || !quantity) {
            return res.status(400).send({ message: 'Incomplete sample data' });
        }

        const newSample: Sample = {
            id,
            dateTime: new Date(dateTime),
            pH,
            temperature,
            turbidity,
            tds,
            quantity
        };

        initial_sample.push(newSample);
        return res.status(200).send({ message: 'Sample added successfully', sample: newSample });
    });

    app.post('/final_sample', (req: Request, res) => {
        const { id, dateTime, pH, temperature, turbidity, tds, quantity } = req.body;
        if (!id || !dateTime || !pH || !temperature || !turbidity || !tds || !quantity) {
            return res.status(400).send({ message: 'Incomplete sample data' });
        }

        const newSample: Sample = {
            id,
            dateTime: new Date(dateTime),
            pH,
            temperature,
            turbidity,
            tds,
            quantity
        };

        final_sample.push(newSample);
        return res.status(200).send({ message: 'Sample added successfully', sample: newSample });
    });

    return app.listen();
});
