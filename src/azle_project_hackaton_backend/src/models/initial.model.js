import mongoose from "mongoose";

const InitialSchema = new mongoose.Schema({
    date:{
        type: Date,
        required: true
    },
    ph: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    turbidity: {
        type: Number,
        required: true
    },
    tds: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }

}, { timestamps: true });

const InitialModel = mongoose.model("initial_sample", InitialSchema);

export default InitialModel;
