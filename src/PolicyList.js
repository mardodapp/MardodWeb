import React from "react";

function PolicyList(probs) {
    return (
        <div>
            <h2>{probs.heading}</h2>
            <h3>{probs.subheading}</h3>
            <span>
            {probs.list}
            </span>
            {/* <p style={{fontStyle:'italic'}}>{probs.term}</p> */}
        </div>
    );
}

export default PolicyList;
