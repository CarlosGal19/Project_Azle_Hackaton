import FinalModel from "../models/final.model";

const getLatest = async (req, res) => {
    try {
        const latest = await FinalModel.find().sort({ createdAt: -1 }).limit(1);
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
        const all = await FinalModel.find();
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
        const final = new FinalModel({
            date,
            ph,
            temperature,
            turbidity,
            tds,
            amount
        });
        const data = await final.save();
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
