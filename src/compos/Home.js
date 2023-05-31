import React from "react";
import "./CompoStyle.css";

const Home = () => {
    return (
        <>
        <div>
            <h3>Welcome</h3>
            <div className="title">
                <h2>Ready to help you <br/> in your projects!</h2>
            </div>
            <div className="desc">
                <h4>Our sales team will get in touch.</h4>
            </div>
            <div className="buttons">
                <button id="a" /*onClick={}*/ >Start Now</button>
                <button id="b" /*onClick={}*/ >Contact Sales</button>
            </div>
        </div>
        </>
    )
}

export default Home;