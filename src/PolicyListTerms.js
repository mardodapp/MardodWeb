import React from "react";

function PolicyListTerms(probs) {
    return (
        <div>
            <h2>{probs.heading}</h2>
            <p style={{fontStyle:'italic'}}>{probs.term}</p>
            <span>
            {probs.list}
            </span>
        </div>
    );
}

export default PolicyListTerms;
