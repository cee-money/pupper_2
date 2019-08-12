import axios from "axios";

export default {

    getMatches: function(email, size, energetic, dominant) {
        return axios.get("/api/matches" + email + size + energetic + dominant);
    },

    getProfile: function(email) {
        return axios.get("/api/matches/" + email);
    },

    updateProfile: function(profileData) {
        return axios.put("/api/matches", profileData )
    },

    create: function(profileData) {
        return axios.post("/api/matches", profileData)
    },

    deleteProfile: function(id) {
        return axios.delete("/api/matches/" + id);
    }
    
};
