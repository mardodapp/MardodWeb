import React from "react";

function MainProbs(probs) {
    return (
        <div style={{ margin: '30px 0'}}>
            <img src={probs.img} width='50px' />
            <h2 style={{textAlign: 'center' }}>{probs.title}</h2>
            <p style={{textAlign: 'center', margin: '0 25px' }}>{probs.para}</p>
        </div>
    );
}

export default MainProbs;
