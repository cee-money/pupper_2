import axios from "axios";

export default {

    getMatches: function(size, energetic, dominant, email) {
        return axios.get(`/api/matches/?size=${size}&energetic=${energetic}&dominant=${dominant}&email=${email}`);
    },

    getProfile: function(email) {
        return axios.get("/api/matches/" + email);
    },

    updateProfile: function(id, profileData) {
        return axios.put("/api/matches/" + id, profileData)
    },

    create: function(profileData) {
        return axios.post("/api/matches", profileData)
    },

    deleteProfile: function(id) {
        return axios.delete("/api/matches/" + id);
    }
    
};
