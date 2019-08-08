import axios from "axios";

export default {

    getMatches: () => {
        return axios.get("/api/matches");
    },

    getProfile: id => {
        return axios.get("/api/matches/" + id);
    },

    updateProfile: profileData => {
        return axios.put("/api/matches", profileData )
    },

    create: profileData => {
        return axios.post("/api/matches", profileData)
    },

    deleteProfile: id => {
        return axios.delete("/api/matches/" + id);
    }
    
};
