// db queries
const db = require("../models");

// Defining methods for the quizController
module.exports = {
  create: function(req, res) {
    console.log(' controller>create>reqbody: ', req.body)

    db.Answers
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
