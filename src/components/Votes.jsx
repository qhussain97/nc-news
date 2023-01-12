import { useState } from "react";
import { articleVotesByArtcleId } from "../utils/api"

const Votes = ({ votes, article_id }) => {
    const [votesChange, setVotesChange] = useState(0);

    function incVote() {
        setVotesChange((currVotesChange) => currVotesChange + 1);
        articleVotesByArtcleId(article_id, 1);
    }

    return (
        <section>
            <p>Votes {votes + votesChange}</p>
            <button onClick={incVote}>Vote for this article!</button>
        </section>
    )
}
export default Votes;