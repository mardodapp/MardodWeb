import React from "react";

function MainProbs(probs) {
    return (
      
                <div>
                    <img src={probs.img} width='50px'/>
                    <p style={{fontWeight: 'bold'}}>{probs.title}</p>
                    <p style={{fontSize: '15px',  margin:'0 20px'}}>{probs.para}</p>
                </div>
        
    );
}

export default MainProbs;
