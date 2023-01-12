import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import {  Link } from "react-router-dom";


const Articles = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    
    useEffect(() => {
        setIsLoading(true);
        getArticles().then(({ articles }) => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p className="Loading">Loading...
        </p>;
    }

    return (
        <div className="Articles_list">
              <h2>Number of Articles: {articles.length}</h2>
            <h2>Articles:</h2>
            <ul>
            {articles.map((article) => {
                return <li key={article.article_id}>
                    <Link to ={`/articles/${article.article_id}`} >{article.title}</Link> 
                    <span>   Topic: {article.topic}</span></li>
            })}
            </ul>
        </div>
    )
        }

export default Articles;