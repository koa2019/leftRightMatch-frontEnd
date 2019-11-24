const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/leftRightDB"
);

const resultsSeed = [
  {
    key: "q0",
    question: "Would you consider yourself a morning person?",
    stances: [
      "yes",
      "no"
    ]
  },
  {
    key: "q1",
    question: "Do you prefer the beach over the mountains?",
    stances: [
      "yes",
      "no"
    ]
  },
  {
    key: "q2",
    question: "Are Dogs abetter than cats?",
    stances: [
      "yes",
      "no"
    ]
  }
]

db.QuizResult
  .remove({})
  .then(() => db.QuizResult.collection.insertMany(resultsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
