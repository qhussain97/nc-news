import { useState } from "react";
import { patchVotesByArtcleId } from "../utils/api"

const Votes = ({ votes, article_id }) => {
    const [votesChange, setVotesChange] = useState(0);

    function incVote() {
        setVotesChange((currVotesChange) => currVotesChange + 1);
        patchVotesByArtcleId(article_id, 1)
            .catch(() => {
                setVotesChange((currVotesChange) => 
                    currVotesChange - votesChange)
                    alert("VOTE NOT SUBMITTED")
                
            })
    }

    function decVote() {
        setVotesChange((currVotesChange) => currVotesChange - 1);
        patchVotesByArtcleId(article_id, (-1))
        .catch(() => {
            setVotesChange((currVotesChange) => 
                currVotesChange + votesChange)
                alert("VOTE NOT SUBMITTED")
            
        })
    }



    return (
        <section>
            <p>Votes: {votes + votesChange}</p>
            <button onClick={incVote}>Increase a vote for this article!</button>
            <button onClick={decVote}>Decrease a vote for this article!</button>
            
        </section>
    )
}
export default Votes;