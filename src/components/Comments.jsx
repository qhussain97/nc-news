import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { useParams } from "react-router-dom";


const Comments = ({article_id}) => {

const [comments, setComments] = useState({});
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
        setIsLoading(true)
    getComments(article_id)
    .then((articleFromApi) => {
        setComments(articleFromApi);
        setIsLoading(false)
    })
}, []);

if (isLoading) {
    return (
            <p className="Loading">Loading...</p>
    )
    };

if(comments.length !==0) {
    return (
        <section>
            <h2>Comments</h2>
                <ul className="Comments_list">
                    {comments.map((comment) => {
                        return <li className="comment_list_individual" key={comment.comment_id}>
                            <p>Author: {comment.author}</p>
                            <p>{comment.body}</p>
                        </li>
                    })}
        
                </ul>
        </section>
    )
} else {
    return <h2>No comments here</h2>
}

}

export default Comments;