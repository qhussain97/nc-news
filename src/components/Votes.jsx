import { useState } from "react";
import { patchVotesByArtcleId } from "../utils/api"

const Votes = ({ votes, article_id }) => {
    const [votesChange, setVotesChange] = useState(0);


    const changeVote = (votesChange) => {
        setVotesChange((currVotesChange) => currVotesChange + votesChange);
        patchVotesByArtcleId(article_id, 1)
        .catch(() => {
            setVotesChange((currVotesChange) => 
                currVotesChange - votesChange)
                alert("VOTE NOT SUBMITTED")
            
        })

    }

    return (
        <section>
            <p>Votes: {votes + votesChange}</p>
            <button onClick={()=> changeVote(1)}>Increase a vote for this article!</button>
            <button onClick={()=> changeVote(-1)}>Decrease a vote for this article!</button>
            
        </section>
    )
}
export default Votes;