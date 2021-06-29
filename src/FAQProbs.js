import React from "react";

//TODO read from file 
// and make it clickable

function FAQProbs(probs) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#E4E8EB', borderRadius: '10px', margin:'10px 0'}} >
            <div style={{ backgroundImage: 'linear-gradient(to  left, rgba(107,101,235,1), rgba(177,128,246,1))', borderRadius: '10px 10px 0 0' }}>
                <p style={{ color: 'white', padding: '0 20px' }}>{probs.question}</p>
            </div>
            <p style={{ padding: '0 20px' }}>{probs.answer}</p>
        </div>
    );
}

export default FAQProbs;
