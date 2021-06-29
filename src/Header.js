
import { Link } from "react-router-dom";
import React from "react";

function Header() {
    function openNav() {
        document.getElementById("list").style.width = "40vw";
        document.getElementById("listh").style.display = "none";
    }

    function closeNav() {
        document.getElementById("list").style.width = "0";
        document.getElementById("listh").style.display = "inline";
    }
    return (
        <div style={{
            backgroundImage: 'linear-gradient(to  left, rgba(107,101,235,1), rgba(177,128,246,1))',
            color: 'white', height: '120px'
        }}>
            <div style={{ backgroundColor: 'yellow', padding: '5px'}}>
                <p style={{ textAlign:'center', color:'black' }}>الموقع قيد الإنشاء ولا يمثل النسخة النهائية من المشروع، تم فتحه لغرض التجربة</p>
            </div>
            <div className='container'>

                <div style={{ padding: '10px 40px' }}>

                    {/* HEADER */}
                    <header>
                        <div><img src={"./logo.svg"} className='logo' /></div>
                        <div className='navs'>
                            <Link style={{ padding: "5% 0", color: "white" }} id='left_margin' class="margin" to="/">الصفحة الرئيسية</Link>
                            <Link style={{ padding: "5% 0", color: "white" }} id='left_margin' class="margin" to="/faq">الأسئلة الشائعة</Link>
                            <Link style={{ padding: "5% 0", color: "white" }} id='left_margin' class="margin" to="/policy">الشروط والأحكام</Link>
                            <Link style={{ padding: "5% 0", color: "white" }} id='left_margin' class="margin" to="/contact">تواصل معنا</Link>
                        </div>

                        {/* OPEN LIST */}
                        <div class="nav_btn">
                            <span id="listh">
                                <img onClick={openNav} src="./hamburger menu.svg" width='20px' />
                            </span>

                            <div id='list' style={{ transition: '0.5s', position: 'fixed', width: '0', height: '100%', top: '0', left: '0', backgroundColor: '#303132' }}>
                                <div
                                    style={{ marginTop: '30vh' }}
                                >
                                    <img onClick={closeNav} src='./close btn.svg' width='15px' />
                                    <span style={{ display: "flex", flexDirection: "column", textAlign: 'center', justifyContent: 'center' }}>
                                        <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/">الصفحة الرئيسية</Link>
                                        <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/faq">الأسئلة الشائعة</Link>
                                        <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/policy">الشروط والأحكام</Link>
                                        <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/contact">تواصل معنا</Link>
                                    </span>
                                    <div></div>
                                </div>
                            </div>

                        </div>

                        <div className='hidden'></div>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default Header;
