const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateMatchSchema = new Schema({
    name: { type: String, required: true },
    headImg: { type: String, required: true },
    percentageMatch: { type: Number, required: true }
});

const CandidateMatch = mongoose.model("CandidateMatch", CandidateMatchSchema);

module.exports = CandidateMatch;
