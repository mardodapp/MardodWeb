import React from "react";
import MainProbs from "./MainProbs";


function Main() {
    return (
        <div style={{
            marginTop:'200px',
            // backgroundImage: 'linear-gradient(to  left, rgba(107,101,235,1), rgba(177,128,246,1))',
            // color: 'white', 
            height: '400px', padding: '50px 100px',
            // borderRadius: '0% 0% 50% 50% / 0% 0% 10% 10% '
            // clipPath: 'ellipse(80% 60% at 50% 0%)',
        }}>
            
            <div style={{ display:'flex', justifyContent:'space-evenly', alignItems:'flex-start',
            }}>
                <MainProbs
                    img='./add 1.png'
                    title='استأجر اللي تحتاجه'
                    para='ود تيس,تيايلأ جنيكسي ابيادأ روتيتكيسنوك, تيمأ تيس رالود موسبيا ميرول وبميت دومسويأ ود '
                />
                <MainProbs
                    img='./shopping 1.png'
                    title='أجر اللي ماتحتاجه'
                    para='ود تيس,تيايلأ جنيكسي ابيادأ روتيتكيسنوك, تيمأ تيس رالود موسبيا ميرول وبميت دومسويأ ود '
                />
                <MainProbs
                    img='./rent 2.png'
                    title='اكسب ربح'
                    para='ود تيس,تيايلأ جنيكسي ابيادأ روتيتكيسنوك, تيمأ تيس رالود موسبيا ميرول وبميت دومسويأ ود '
                />
            
            </div>
        </div>
    );
}

export default Main;
