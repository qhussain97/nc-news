import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://qasims-fe-nc-news-project.onrender.com/api",
});

export const getArticles = (topic) => {
    return newsApi.get("/articles", {params: {topic: topic}}).then((res) => {
            console.log(res)
            return res.data;
    })
}

export const getTopics = () => {
    return newsApi.get("/topics")
        .then((res) => {
            return res.data;
    })
}