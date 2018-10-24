import axios from "axios";

const API = {
    searchArticles: function(search) {
        const APIKEY = "0f9bdfbcb2ca4522ab279a57cb127450";

        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKEY + "&q=" + search;

        return axios.get(BASEURL);
    },

    getArticle: function() {
        return axios.get("/api/articles");
    },
    deleteArticle: function(id){
        return axios.delete(`/api/saved/${id}`);
    }
};

export default API;