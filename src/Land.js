import { BrowserRouter, Route, Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from './Footer';

function Land() {
    return (
        <div>
            <Main />
            <Footer />
        </div>
    );
}

export default Land;
