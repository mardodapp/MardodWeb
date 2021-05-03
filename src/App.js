import { ExternalLink } from 'react-external-link';
import './App.css';
import Probs from './Probs';
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>😊نورتوا الصفحة</h1>
      <p>تقدرون تتابعونا بوسائل التواصل الاجتماعية، اضغطوا على الروابط ورح تنقلكم إلى صفحاتنا</p>
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
    </div>
  );
}

export default App;
