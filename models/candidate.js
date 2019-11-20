const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({

    name: { type: String, required: true },
    img: { type: String, required: true },
    headImg: { type: String, required: true },
    bannerImg: { type: String, required: true },
    iSideLink: { type: String, required: true },
    policyLink: { type: String, required: true },
    parties: [{ type: String, required: true }],
    experiences: { type: String, required: true },
    themes: [{ type: String, required: true }],
    qualities: [{ type: String, required: true }],
    contactInfo: [{
        websites: [{ type: String, required: true }],
        twitterAccounts: [{ type: String, required: true }],
        facebookAccounts: [{ type: String, required: true }],
        instagramAccounts: [{ type: String, required: true }],
    }],
    stances:  [{ 
        key: [{type: String, required: true }],
        question: [{ type: String, required: true }],
        stance: [{ type: String, required: true }]
    }]
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;
