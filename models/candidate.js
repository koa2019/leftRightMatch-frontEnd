const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({

    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    bannerImg: { type: String, required: true },
    politicalParty: [{ type: String, required: true }],
    politicalExperience: { type: String, required: true },
    isideLink: { type: String, required: true },
    policyLink: { type: String, required: true },
    topThemes: [{ type: String, required: true }],
    topQualities: [{ type: String, required: true }],
    contactInfo: [{
        website: [{ type: String, required: true }],
        twitter: [{ type: String, required: true }],
        facebook: [{ type: String, required: true }],
        instagram: [{ type: String, required: true }],
    }],
    date: { type: Date, default: Date.now }
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;
