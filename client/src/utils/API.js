import axios from "axios";

export default {

    getMatches: function() {
        return axios.get("/api/matches");
    },

    getProfile: function(id) {
        return axios.get("/api/matches/" + id);
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
