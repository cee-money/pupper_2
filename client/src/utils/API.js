import axios from "axios";

export default {

    getMatches: () => {
        return axios.get("/api/matches");
    },

    getMatch: id => {
        return axios.get("/api/matches/" + id);
    },

    updateProfile: profileData => {
        return axios.post("/api/matches", profileData )
    },

    deleteMatch: id => {
        return axios.delete("/api/matches/" + id);
    }
    
};
