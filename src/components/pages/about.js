import React from 'react';

import aboutImg from "../../../static/assets/images/about/about.jpg"
import AboutInfo from "../about/about-info";

export default function() {
    return(
        <div className="content-page-wrapper">
            <div className="left-column"
                    style={{
                        background: "url(" + aboutImg + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
            />

            <div className="right-column">
                <div className="about-info">
                    <h2>About Me</h2>
                 <AboutInfo />
                </div>
            </div>
        </div>
    );
}  