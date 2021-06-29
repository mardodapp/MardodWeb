import { ExternalLink } from 'react-external-link';
import React from "react";

function Probs(probs) {
    return (
        <ExternalLink href={probs.link} style={{marginLeft: "15px"}}>
            <img src={probs.img} alt={""} className='iconimg'/>
        </ExternalLink>
    );
}

export default Probs;
