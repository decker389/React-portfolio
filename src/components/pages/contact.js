import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contactImage from "../../../static/assets/images/contact/contact.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" 
            style={{
                background: "url(" + contactImage + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />

            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="icon-wrapper">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon="mobile" />
                        </div>

                        <div className="text">
                            <p> Placeholder Phone Number</p>
                        </div>
                    </div>

                    <div className="icon-wrapper">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon="file" />
                        </div>
                        <div className="text">
                            <p>Decker389@aol.com</p>
                        </div>
                    </div>

                    <div className="icon-wrapper">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon="paw" />
                        </div>
                        <div className="text">
                            <a href="https://github.com/decker389">Github</a>    
                        </div>
                        
                    </div>
            
                    <div className="icon-wrapper">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon="link" />
                        </div>
                        <div className="text">
                            <a href="https://www.linkedin.com/in/christopher-decker-74263b160/">LinkedIn profile</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}