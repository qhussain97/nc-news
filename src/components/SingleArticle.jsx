import { useEffect, useState } from "react";
import { useparams } from "react-router-dom";
import { getArticleById } from "../utils/api";

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
}
