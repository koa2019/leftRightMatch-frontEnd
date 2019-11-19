import axios from 'axios';

// exporting different methods requesting & posting new data to sql database

export default {

    // retrieves all questions from database
    getQuestions: function () {
        return axios.get("/api/questions/");
    },
    // gets all candidates from database
    getAllCandidates: function () {
        return axios.get("/api/candidates");
    },
    // gets 1 candidate by given id
    getCandidate: function (id) {
        console.log('API.js getCandidate(id)= ', id)
        // return axios.get("/api/candidates/" + id);
    },
    // gets user profile with given id
    getUserProfile: function(id) {
        return axios.get("/api/userprofile/" + id)
    },
    // Not sure what's the correct path?
    // saves a user's quiz results to their profile id database
    saveUserAnswers: function (answersData) {
        console.log(answersData)
        return axios.post("/api/answers", answersData);
    }
};