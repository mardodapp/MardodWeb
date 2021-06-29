
import { Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import React from "react";

function Header2() {
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

            <div className='container'>
                <div style={{
                    padding: '50px 40px'
                }}>
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
                                            <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/#work">الصفحة الرئيسية</Link>
                                            <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/#about">الأسئلة الشائعة</Link>
                                            <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/#contact">الشروط والأحكام</Link>
                                            <Link style={{ margin: '10px 0', color: "white", textDecoration: 'none' }} to="/#contact">تواصل معنا</Link>
                                        </span>
                                    <div></div>
                                </div>
                            </div>

                        </div>

                        <div className='hidden'></div>
                    </header>

                    {/* Intro */}
                    {/* <main >

                        <div>
                            <h1 style={{ marginTop: '30px' }} className="bold">استأجر اللي تحتاجه، وأجَّر اللي ماتحتاجه</h1>
                            <p style={{ marginTop: '-10px' }}>من خلال تطبيق مردود تقدر تأجر أي شي وتقدر تستأجر أي شي محتاجه</p>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                marginTop: '40px'
                            }}>
                                <img src={'./googleplay.png'} width='150px' />
                                <img src={'./appstore.png'} width='150px' />
                            </div>
                        </div>

                        <div className='hidden'>
                            <img src={'./mockuper.png'}
                                width='400px'
                                style={{ maxWidth: '100%', height: 'auto', float: 'left' }}
                            />
                        </div>
                    </main> */}
                </div>
            </div>
        </div>
    );
}

export default Header2;
