import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://qasims-fe-nc-news-project.onrender.com/api",
});

export const getArticles = (topic) => {
    return newsApi.get("/articles", {params: {topic: topic}}).then((res) => {
            return res.data;
    })
}

export const getTopics = () => {
    return newsApi.get("/topics")
        .then((res) => {
            return res.data;
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
        .then((res) => {
            console.log(res)
            
            return res.data.article;
        })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data.comments
        })
}

export const patchVotesByArtcleId = (article_id, votes) => {
    return newsApi.patch(`/articles/${article_id}`, { inc_votes: votes})
        .then((data) => {
            return data.updatesVotes
        });
};