import React from "react";

function PolicyNormal(probs) {
    return (
        <div>
            <h2>{probs.heading}</h2>
            <p style={{ fontStyle: 'italic' }}>{probs.term}</p>
            <h3>{probs.subheading}</h3>
        </div>
    );
}

export default PolicyNormal;
