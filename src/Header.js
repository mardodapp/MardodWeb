// import { ExternalLink } from 'react-external-link';
// import './App.css';
// import Probs from './Probs';
import React from "react";

function Header() {
    return (
        <div style={{
            backgroundImage: 'linear-gradient(to  left, rgba(107,101,235,1), rgba(177,128,246,1))',
            color: 'white', height: '350px', padding: '50px 100px',
            // borderRadius: '0% 0% 50% 50% / 0% 0% 10% 10% '
            // clipPath: 'ellipse(80% 60% at 50% 0%)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <img src={"./logo.svg"} style={{ width: '80px' }} />
                </div>
                <div>
                    <a style={{ margin: '0px 10px' }}>الصفحة الرئيسية</a>
                    <a style={{ margin: '0px 10px' }}>الأسئلة الشائعة</a>
                    <a style={{ margin: '0px 10px' }}>الشروط والأحكام</a>
                    <a style={{ margin: '0px 10px' }}>تواصل معنا</a>
                </div>
                <div></div>
            </div>
            <div style={{ display:'flex', justifyContent:'space-evenly', alignItems:'flex-start',
            textAlign: 'right', marginTop: '100px' }}>
                <div>
                    <p style={{ fontSize: '30px', fontWeight: 'bold' }}>استأجر اللي تحتاجه، وأجَّر اللي ماتحتاجه</p>
                    <p style={{ fontSize: '15px' }}>من خلال تطبيق مردود تقدر تأجر أي شي وتقدر تأجر أي شي محتاجه</p>
                    <div style={{ display:'flex', justifyContent:'space-evenly', marginTop:'40px'}}>
                        <img src={'./googleplay.png'} width='150px' />
                        <img src={'./appstore.png'} width='150px' />
                    </div>
                </div>
            
            <div>
                <img src={'./mockuper.png'} style={{width:'600px', height:'390px', objectFit:'cover'}}  />
            </div>
            </div>
        </div>
    );
}

export default Header;
