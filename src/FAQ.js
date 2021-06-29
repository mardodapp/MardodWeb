import React from "react";
import faq from "./data/faq.json";
import FAQProbs from "./FAQProbs";

//TODO read from file 
// and make it clickable
function FAQ(probs) {
    return (
        <div className='container' style={{ margin: '50px auto' }}>
            <h2>الأسئلة الشائعة</h2>
            {
                faq.faq.map((result) => (
                    <FAQProbs
                        question={result.question}
                        answer={result.answer}
                    />
                ))
            }
        </div>
    );
}

export default FAQ;
