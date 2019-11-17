const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswersSchema = new Schema({
    q0: { type: String, required: true },
    q1: { type: String, required: true },
    q2: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Answers = mongoose.model("Answers", AnswersSchema);

module.exports = Answers;
