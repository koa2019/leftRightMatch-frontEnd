const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultsSchema = new Schema({
    first: { type: String, required: true },
    second: { type: String, required: true },
    third: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const QuizResult = mongoose.model("QuizResult", ResultsSchema);

module.exports = QuizResult;
