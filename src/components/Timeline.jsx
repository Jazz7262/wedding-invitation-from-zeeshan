import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="timeline-wrapper">
                <div className="row">
                    <div className="col-lg-6 left" data-aos="fade-down">
                        <h1>Shukrana</h1>
                        <p>
                            On Saturday, 15<sup>th</sup> October, 2022.
                            <br />
                            18<sup>th</sup> Rabi-ul-Awwal, 1443 Hijri,
                            <br />
                            Time: 09:00 PM.
                        </p>
                    </div>
                    <div className="col-lg-6 right" data-aos="fade-down"></div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    ></div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    >
                        <h1>Nikaah</h1>
                        <p>
                            On Sunday, 16<sup>th</sup> October, 2022,
                            <br />
                            19<sup>th</sup> Rabi-ul-Awwal, 1443 Hijri,
                            <br />
                            Time: 12:30 PM.
                        </p>
                        <h2>Nikaah At:</h2>
                        <p>
                            Masjid -e- Shekan Bee,
                            <br /> Yemmiganur By-Pass Road,
                            <br /> Adoni.
                        </p>
                        <h2>Lunch Follows:</h2>
                        <p>
                            Danish Function Hall,
                            <br /> Yemmiganur By-Pass Road,
                            <br /> Adoni.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <h1>Valima</h1>

                        <p>
                            On Monday, 17<sup>th</sup> October, 2022,
                            <br />
                            20<sup>th</sup> Rabi-ul-Awwal, 1443 Hijri,
                            <br />
                            Time: 02:00 PM.
                        </p>

                        <h2>Venue:</h2>
                        <p>
                            Danish Function Hall,
                            <br /> Yemmiganur By-Pass Road,
                            <br /> Adoni.
                        </p>
                    </div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
