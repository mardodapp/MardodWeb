import React from "react";
import Probs from './Probs';
import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";

//TODO make it sticky to the bottom
function Footer(probs) {
    return (
        <footer style={{ backgroundColor: '#25212F', width: '100%', color: 'white', paddingTop: '15px'}}>
            <div className='container'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
                        <p style={{ fontWeight: 'bold' }}>عن مردود</p>
                        <Link className='footertxt' to="/faq">الأسئلة الشائعة</Link>
                        <Link className='footertxt' to="/policy">الشروط والأحكام</Link>
                        <Link className='footertxt' to="/contact">تواصل معنا</Link>
                    </div>

                    <div>
                        <p style={{ fontWeight: 'bold' }}>تابعنا على حسابتنا </p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Probs
                                link="https://www.youtube.com/channel/UCIv27uJJUsFPEuEMowjmfsw"
                                img="./youtube.svg"
                            />
                            <Probs
                                link="https://twitter.com/MardodApp"
                                img="./twitter.svg"
                            />
                            <Probs
                                link="https://www.tiktok.com/@mardodapp"
                                img="./tiktok.svg"
                            />
                            <Probs
                                link="https://www.instagram.com/mardodapp"
                                img="./instagram.svg"
                            />
                        </div>
                    </div>

                    <div>
                        <p style={{ fontWeight: 'bold' }}>شهادة معروف</p>
                        <ExternalLink href='https://maroof.sa/204356'>
                            <img src='./Marouf.png' alt={""} className='marouficon' />
                        </ExternalLink>
                    </div>
                </div>

                <p className='footertxt' style={{textAlign:'center'}}>جميع الحقوق محفوظة لتطبيق مردود © ٢٠٢١</p>
            </div>
        </footer>
    );
}

export default Footer;
