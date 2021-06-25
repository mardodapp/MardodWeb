import React from "react";
import Probs from './Probs';

function Footer(probs) {
    return (
        <footer style={{backgroundColor:'#4F4F4F', position: 'absolute', width:'100%'}}>
        <div style={{display: "flex", justifyContent:"center"}}>
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
            <p>جميع الحقوق محفوظه لتطبيق مردود ٢٠٢١</p>
        </footer>

    );
}

export default Footer;
