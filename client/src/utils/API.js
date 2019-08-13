import axios from "axios";

export default {

    // Finds matches based on filters, doesn't include profiles associated with email address
    getMatches: function(size, energetic, dominant, email) {
        return axios.get(`/api/matches/?size=${size}&energetic=${energetic}&dominant=${dominant}&email=${email}`);
    },

    // Renders profiles associated with an email address
    getProfile: function(email) {
        return axios.get("/api/matches/" + email);
    },

<<<<<<< HEAD
=======
    // Updates profile data in Mongo based on id
>>>>>>> 7edc5f427ffefed57a001bd1084a1eaba8492186
    updateProfile: function(id, profileData) {
        return axios.put("/api/matches/" + id, profileData)
    },

    // Creates profile in Mongo
    create: function(profileData) {
        return axios.post("/api/matches", profileData)
    },

    // Deletes profile from Mongo based on id
    deleteProfile: function(id) {
        return axios.delete("/api/matches/" + id);
    }
    
};
