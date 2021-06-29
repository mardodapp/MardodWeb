import React from "react";

function MainProbs2(probs) {
    return (
        <div className={probs.class}>
                    <div>
                        <img src= {probs.img} className='advimg' />
                    </div>
                    <div className='adb2rm'>
                        <h2>{probs.title}</h2>
                        <p>{probs.para}</p>
                    </div>
                </div>
       
    );
}

export default MainProbs2;
