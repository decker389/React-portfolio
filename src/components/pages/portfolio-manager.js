import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        //ToDO
        //update the portfolioItems state
        // and add the portfolioItem to the list
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmission error", error);
    }

    getPortfolioItems() {
        axios
        .get("https://chrisdecker.devcamp.space/portfolio/portfolio_items", { withCredentials: true })
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        })
        .catch(error => {
            console.log("error in getPortfolioItmes",error);
        });
    }
    
      componentDidMount() {
        this.getPortfolioItems();
      }
      

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                    </h1>
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        );
    }
}