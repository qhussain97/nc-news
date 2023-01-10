import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const Articles = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const { topic } = useParams();

    
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
        <ul className="Articles_list">
            <h2>Articles:</h2>
            {articles.map((article) => (
                <li className="Articles_card" key={article.article_id}>
                    <p>{article.title}</p>
                    <p>{article.topic}</p>
                    <p>Votes: {article.votes}</p>
                </li>
            ))}
        </ul>
    );
};

export default Articles;