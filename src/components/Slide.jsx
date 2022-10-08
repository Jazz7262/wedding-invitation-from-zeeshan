import React from "react";
import "../styles/Slide.css";

function Slide() {
    return (
        <section id="slide">
            <div
                className="slide-wrapper"
                data-aos="fade-up"
                data-aos-offset="300"
            >
                <div className="img-container">
                    <img src="./assets/images/heart-bg.png" alt="heart-bg" />
                </div>
                <div className="text-content">
                    <h3>We Are Arranging our Daughter's Wedding</h3>
                    <h1>Save Our Date</h1>
                    <p>
                        16<sup>th</sup> October, 2022
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Slide;
