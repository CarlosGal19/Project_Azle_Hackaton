import mongoose from "mongoose";

const FinalSchema = new mongoose.Schema({
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

const FinalModel = mongoose.model("final_sample", FinalSchema);

export default FinalModel;
