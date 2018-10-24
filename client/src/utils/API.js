import axios from "axios";

export default {
    searchArticles: function(search) {
        const APIKEY = "0f9bdfbcb2ca4522ab279a57cb127450";

        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKEY + "&q=" + search;

        return axios.get(BASEURL);
    },

    getArticle: function(id) {
        return axios.get("/api/articles" + id);
    },
    saveArticle: function(id) {
        return axios.post("/api/articles" + id);
    },
    deleteArticle: function(id){
        return axios.delete("/api/articles/" + id);
    }
};