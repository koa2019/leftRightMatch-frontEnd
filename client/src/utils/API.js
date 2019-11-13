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
    // gets candidates with the given id
    getCandidate: function (id) {
        return axios.get("/api/candidates/" + id);
    },
    // gets user profile with given id
    getUserProfile: function(id) {
        return axios.get("/api/userprofile/" + id)
    },
    // deletes user profile with the given id
    deleteUserProfile: function (id) {
        return axios.delete("/api/userprofile/" + id);
    },
    // Not sure what's the correct path?
    // saves a user's quiz results to their profile id database
    saveUserResults: function (id, resultsData) {
        return axios.post("/api/userprofile/#", id, resultsData);
    }
};