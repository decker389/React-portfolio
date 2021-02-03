import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        };
    }

    componentDidMount() {
        this.getPortfolioDetail();
    }
    
    getPortfolioDetail() {
        axios
        .get(`https://chrisdecker.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true })
        .then(response => {
            this.setState({ portfolioItem: response.data.portfolio_item})
        })
        .catch(error => {
            console.log("get item error",error)
        })
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        return (
            <div>
                <div className="portfolio-detail-wrapper">
                    <div className="portfolio-banner-img" style={bannerStyles}>
                        <img src={logo_url} />
                    </div>

                    <div className="portfolio-detail-items">
                    <h1>Name: </h1> {name}
                    </div>
                
                    <div className="portfolio-detail-items">
                    <h1>Category: </h1> {category}
                    </div>
               
                    <div className="portfolio-detail-items">
                    <h1>Url: </h1> <a href={url} className="site-link" target="_blank">visit {name}</a>
                    </div>
              
                    <div className="portfolio-detail-items">
                    <h1>Description: </h1> {description}
                    </div>

                    <div className="portfolio-detail-items">
                    <h1>Thumb Image: </h1> <img src={thumb_image_url} />
                    </div>
                
                    <div className="portfolio-detail-items">
                        <h1>Logo: </h1>                 
                        <div className="inverted_logo">
                            <img src={logo_url} />                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}