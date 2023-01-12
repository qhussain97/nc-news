import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "../components/Comments";

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();
    

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id).then((articleFromApi) => {
            setArticle(articleFromApi);
            setIsLoading(false);
        });
    }, [article_id]);

    
if (isLoading)
        return (
            <main>
                <p className="Loading">Loading...</p>
            </main>
        );

    return (
        <main>
            <article>
            <h2>{article.title}</h2>
            <h2>{article.topic}</h2>
            <h2>{article.author}</h2>
            <p>{article.body}</p>
            </article>
            
                <Comments article_id={article_id} />
        
        </main>


    )
}

//Add a default image for each topic:
//Football: Black and White Football
//Cooking: Utensils in a kitchen
//Coding: Laptop with code on it

export default SingleArticle;