import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import { getTopics } from "../utils/api"


const Nav = () => {
    const [topics, setTopics] = useState([]);
    
    useEffect(() => {
        getTopics().then(({ topics }) => {
            setTopics(topics);
        });
    }, [])

    return (
        <nav className="Nav">
            {topics.map((topic) => (
            <Link
                to={`/news/${topic.topic_slug}`}
                className="Nav_link"
                key={topic.topic_slug}
                >
                {topic.topic_slug}    
            </Link>
            ))}
            <Link to="/users" className="Nav_link">
                Users
            </Link>
        </nav>
    );
};

export default Nav;