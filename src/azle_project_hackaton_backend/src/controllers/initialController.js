import InitialModel from "../models/initial.model.js";

const getLatest = async (req, res) => {
    try {
        const latest = await InitialModel.find().sort({ createdAt: -1 }).limit(1);
        if (!latest) {
            return res.status(404).send({ message: "No data found" });
        }
        res.status(200).send({ data: latest });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const all = await InitialModel.find();
        if (!all) {
            return res.status(404).send({ message: "No data found" });
        }
        res.status(200).send({ data: all });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const create = async (req, res) => {
    try {
        const { date, ph, temperature, turbidity, tds, amount } = req.body;
        if([date, ph, temperature, turbidity, tds, amount].includes(undefined)){
            return res.status(400).send({ message: "All fields are required" });
        }
        const initial = new InitialModel({
            date,
            ph,
            temperature,
            turbidity,
            tds,
            amount
        });
        const data = await initial.save();
        res.status(200).send({ message: "Data created successfully", data });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export {
    getLatest,
    getAll,
    create
};
