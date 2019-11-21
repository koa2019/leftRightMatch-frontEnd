const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateMatchSchema = new Schema({
    name: { type: String, required: true },
    headImg: { type: String, required: true },
    percentageMatch: { type: Number, required: true }
});

const CandidateMatches = mongoose.model("CandidateMatch", CandidateMatchSchema);

module.exports = CandidateMatches;
