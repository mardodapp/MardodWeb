import { ExternalLink } from 'react-external-link';
import React from "react";

function Probs(probs) {
    return (
        <ExternalLink href={probs.link} style={{margin: "5px"}}>
            <img src={probs.img} alt={""} width={"35px"}/>
        </ExternalLink>
    );
}

export default Probs;
